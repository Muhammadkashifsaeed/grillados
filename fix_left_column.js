const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

// Fix MenuTwoColumn.tsx
const menuTwoColumnPath = path.join(componentsDir, 'Menu', 'MenuTwoColumn.tsx');
if (fs.existsSync(menuTwoColumnPath)) {
  let content = fs.readFileSync(menuTwoColumnPath, 'utf8');
  content = content.replace(
    /className={`w-full h-full flex flex-col justify-start/g,
    'className={`w-full h-full flex flex-col justify-start pr-12 md:pr-14 lg:pr-0'
  );
  fs.writeFileSync(menuTwoColumnPath, content, 'utf8');
  console.log('Fixed MenuTwoColumn.tsx');
}

// Fix the 8 MenuSection.tsx files
const files = fs.readdirSync(componentsDir);
files.forEach(file => {
  if (file.endsWith('MenuSection.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only target the left column wrapper which has w-full flex flex-col justify-start
    // some might have `order-3` etc.
    // Ensure we only replace the FIRST occurrence in the file (which should be the left column)
    // Wait, let's just replace all occurrences of `className="w-full flex flex-col justify-start` 
    // that are NOT in a ternary (like MenuTwoColumn).
    
    let original = content;
    content = content.replace(
      /className="w-full flex flex-col justify-start([^"]*)"/,
      'className="w-full flex flex-col justify-start$1 pr-12 md:pr-14 lg:pr-0"'
    );
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${file}`);
    }
  }
});
