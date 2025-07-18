const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const YAML = require('yaml');

// Read and parse markdown files with frontmatter
function readMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (frontmatterMatch) {
    const frontmatter = YAML.parse(frontmatterMatch[1]);
    const markdown = frontmatterMatch[2];
    return { frontmatter, content: marked(markdown) };
  }
  
  return { frontmatter: {}, content: marked(content) };
}

// Read all files in a directory
function readDirectory(dirPath) {
  const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.md'));
  return files.map(file => {
    const filePath = path.join(dirPath, file);
    const { frontmatter, content } = readMarkdownFile(filePath);
    return { filename: file, frontmatter, content };
  });
}

// Generate HTML for a person
function generatePersonHTML(person) {
  const { frontmatter, content } = person;
  const nameClass = frontmatter.urbit_id ? 'urbit-id' : 'name';
  const specialties = frontmatter.specialties ? `<span class="comments">// ${frontmatter.specialties}</span>` : '';
  
  return `                <div class="person">
                    <span class="${nameClass}">${frontmatter.name}</span>
                    ${specialties}
                    <p class="bio">
                        ${content.replace(/<p>|<\/p>/g, '')}
                    </p>
                </div>`;
}

// Build the site
function buildSite() {
  console.log('Building site...');
  
  // Read content
  const heroContent = readMarkdownFile('content/sections/hero.md');
  const introContent = readMarkdownFile('content/sections/intro.md');
  const whatWeDoContent = readMarkdownFile('content/sections/what-we-do.md');
  const hiringContent = readMarkdownFile('content/sections/hiring.md');
  
  const principals = readDirectory('content/principals');
  const team = readDirectory('content/team');
  
  // Define team member order
  const teamOrder = [
    'luke-champine.md',
    'jacob-lyles.md', 
    'rikard-hjort.md',
    'phil-galebach.md',
    'liam-fitzgerald.md',
    'mopfel-winrux.md',
    'brian-bulag.md'
  ];
  
  // Sort team members by defined order
  const sortedTeam = teamOrder.map(filename => 
    team.find(member => member.filename === filename)
  ).filter(Boolean);
  
  // Generate HTML template
  const html = `<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>martian engineering</title>
        <link href="assets/style.css" rel="stylesheet" type="text/css" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
        <link rel="manifest" href="assets/site.webmanifest">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap" rel="stylesheet" />
    </head>

    <body>
        <div class="navbar">
            <a class="navbar-logo" href="/">
                <img src="assets/martian-logo.jpg" alt="Martian Engineering" height="100px">
            </a>
            <ul class="navbar-nav">
                <li><a class="red" href="mailto:team@martian.engineering">Contact</a></li>
            </ul>
        </div>

        <div class="content">

            <div class="hero">
                ${heroContent.content.replace(/<p>.*?<\/p>/s, '').replace(/<a[^>]*>.*?<\/a>/s, '')}
                <div class="cta">
                    ${heroContent.content.match(/<a[^>]*>([^<]+)<\/a>/)?.[0]?.replace('<a ', '<a class="no-underline red" ') || ''}
                </div>
            </div>

            <div class="section">
                <p class="lead">
                    ${introContent.content.replace(/<p>|<\/p>/g, '')}
                </p>
            </div>

            <div class="section">
                ${whatWeDoContent.content.replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>')}
            </div>

            <div class="section">
                ${hiringContent.content.replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>').replace(/<p><a/g, '<p><a class="red"')}
            </div>

            <div class="section">
                <h2>Principals</h2>
${principals.map(generatePersonHTML).join('\n')}
            </div>

            <div class="section">
                <h2>Team</h2>
${sortedTeam.map(generatePersonHTML).join('\n')}
            </div>

        </div>

        <script src="script.js"></script>
    </body>

</html>`;

  // Write the generated HTML
  fs.writeFileSync('index.html', html);
  console.log('Site built successfully!');
}

// Run the build
buildSite();