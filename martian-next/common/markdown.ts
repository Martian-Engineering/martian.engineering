export interface ClientMetadata {
  sort_index: number;
  short_name: string;
  full_name: string;
  project: string;
  brief: string;
  logo: string;
  website: string;
  duration: string;
  technologies: string[];
}

export interface ClientData extends ClientMetadata {
  id: string;
  content: string;
  htmlContent: string;
}

// Simple TOML parser for our specific frontmatter format
function parseToml(tomlString: string): ClientMetadata {
  const lines = tomlString.trim().split('\n');
  const result: any = {};
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;
    
    const equalIndex = trimmedLine.indexOf('=');
    if (equalIndex === -1) continue;
    
    const key = trimmedLine.substring(0, equalIndex).trim();
    let value = trimmedLine.substring(equalIndex + 1).trim();
    
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      result[key] = arrayContent
        .split(',')
        .map(item => item.trim())
        .map(item => item.startsWith('"') && item.endsWith('"') ? item.slice(1, -1) : item)
        .filter(item => item.length > 0);
    } else if (!isNaN(Number(value))) {
      // Handle numbers
      result[key] = Number(value);
    } else {
      // Handle strings
      result[key] = value;
    }
  }
  
  return result as ClientMetadata;
}

export function parseMarkdownWithToml(content: string): { metadata: ClientMetadata; content: string } {
  const frontmatterRegex = /^\+\+\+([\s\S]*?)\+\+\+([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('No TOML frontmatter found');
  }
  
  const [, tomlContent, markdownContent] = match;
  const metadata = parseToml(tomlContent);
  
  return {
    metadata,
    content: markdownContent.trim()
  };
}

import fs from 'fs';
import path from 'path';

export async function loadClientData(): Promise<ClientData[]> {
  const { marked } = await import('marked');
  
  const contentDir = path.join(process.cwd(), 'content', 'clients');
  const clientFiles = [
    'near-por.md',
    'sweetspot.md', 
    'tlon.md',
    'extend.md',
    'supplyco.md'
  ];
  
  const clients: ClientData[] = [];
  
  for (const fileName of clientFiles) {
    try {
      const filePath = path.join(contentDir, fileName);
      const content = fs.readFileSync(filePath, 'utf8');
      const { metadata, content: markdownContent } = parseMarkdownWithToml(content);
      
      // Convert markdown to HTML
      const htmlContent = await marked(markdownContent);
      
      clients.push({
        ...metadata,
        id: fileName.replace('.md', ''),
        content: markdownContent,
        htmlContent
      });
    } catch (error) {
      console.warn(`Failed to load client file ${fileName}:`, error);
    }
  }
  
  // Sort by sort_index
  return clients.sort((a, b) => a.sort_index - b.sort_index);
}