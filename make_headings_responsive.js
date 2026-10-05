const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Replace fontSize
      content = content.replace(/fontSize:\s*'(\d+)px'/g, (match, sizeStr) => {
        const size = parseInt(sizeStr, 10);
        if (size >= 28) {
          const minSize = Math.max(22, Math.round(size * 0.6));
          const vw = Number((size / 10).toFixed(1)); // roughly size/10 vw, e.g. 45 -> 4.5vw
          modified = true;
          return `fontSize: 'clamp(${minSize}px, ${vw}vw, ${size}px)'`;
        }
        return match;
      });

      // Replace lineHeight similarly, if it's large
      content = content.replace(/lineHeight:\s*'(\d+)px'/g, (match, sizeStr) => {
        const size = parseInt(sizeStr, 10);
        if (size >= 32) {
          const minSize = Math.max(24, Math.round(size * 0.65));
          const vw = Number((size / 10).toFixed(1));
          modified = true;
          return `lineHeight: 'clamp(${minSize}px, ${vw}vw, ${size}px)'`;
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));
