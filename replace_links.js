const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('app');
let replacedCount = 0;

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes("router.push('/order')")) {
    content = content.replaceAll("router.push('/order')", "window.open('https://grillados.bycalibre.ca/location', '_blank')");
    changed = true;
  }
  
  if (content.includes('href="/order"')) {
    content = content.replaceAll('href="/order"', 'href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated:', file);
    replacedCount++;
  }
}
console.log('Total files updated:', replacedCount);
