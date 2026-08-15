const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modified = 0;
walkDir('./app/components', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Find <Image ... fill ... /> and add sizes="100vw" if missing
    // We use a regex to match <Image tag up to the closing />
    // This is a naive regex, but usually works for simple Next.js images
    content = content.replace(/<Image([^>]*?fill[^>]*?)>/g, (match, p1) => {
      // Don't add if sizes already exists
      if (match.includes('sizes=')) {
        return match;
      }
      return match.replace('fill', 'fill sizes="100vw"');
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed ' + filePath);
      modified++;
    }
  }
});
console.log('Modified ' + modified + ' files.');
