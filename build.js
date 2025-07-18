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
  const footerContent = readMarkdownFile('content/sections/footer.md');
  
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
    'brian-bulag.md',
    'barter-simsum.md'
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

        <footer>
            <div class="footer-left">
                <a class="social-media" href="${footerContent.frontmatter.github_url}" target="_blank">
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </span>
                </a>
            </div>
            <div class="footer-right">
                <span class="copyright">${footerContent.frontmatter.copyright}</span>
            </div>
        </footer>

        <script src="script.js"></script>
    </body>

</html>`;

  // Write the generated HTML
  fs.writeFileSync('index.html', html);
  console.log('Site built successfully!');
}

// Run the build
buildSite();