const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(' pr-14 lg:pr-0')) {
    content = content.replace(/ pr-14 lg:pr-0/g, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned ${file}`);
  }
});
