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
  resources?: string[];
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
  let i = 0;
  
  while (i < lines.length) {
    const trimmedLine = lines[i].trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      i++;
      continue;
    }
    
    // Handle array of tables [[resources]]
    if (trimmedLine.startsWith('[[') && trimmedLine.endsWith(']]')) {
      const arrayName = trimmedLine.slice(2, -2).trim();
      if (!result[arrayName]) {
        result[arrayName] = [];
      }
      
      const tableEntry: any = {};
      i++;
      
      // Parse entries until we hit another section or end
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        if (!nextLine || nextLine.startsWith('#')) {
          i++;
          continue;
        }
        if (nextLine.startsWith('[')) {
          break; // Start of new section
        }
        
        const equalIndex = nextLine.indexOf('=');
        if (equalIndex !== -1) {
          const key = nextLine.substring(0, equalIndex).trim();
          let value = nextLine.substring(equalIndex + 1).trim();
          
          // Remove quotes
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          
          tableEntry[key] = value;
        }
        i++;
      }
      
      if (Object.keys(tableEntry).length > 0) {
        result[arrayName].push(tableEntry);
      }
      continue;
    }
    
    const equalIndex = trimmedLine.indexOf('=');
    if (equalIndex === -1) {
      i++;
      continue;
    }
    
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
    
    i++;
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
  
  // Read all .md files from the clients directory
  let clientFiles: string[] = [];
  try {
    const files = fs.readdirSync(contentDir);
    clientFiles = files.filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Failed to read clients directory:', error);
    return [];
  }
  
  const clients: ClientData[] = [];
  
  for (const fileName of clientFiles) {
    try {
      const filePath = path.join(contentDir, fileName);
      const content = fs.readFileSync(filePath, 'utf8');
      const { metadata, content: markdownContent } = parseMarkdownWithToml(content);
      
      // Convert markdown to HTML
      let htmlContent = await marked(markdownContent);
      
      // Replace all instances of "Martian Engineering" with styled version
      htmlContent = htmlContent.replace(
        /Martian Engineering/g,
        '<span class="martian-brand-accent">Martian Engineering</span>',
      );
      
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
