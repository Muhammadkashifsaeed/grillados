const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components';
let files = fs.readdirSync(componentsDir).filter(f => f.endsWith('MenuSection.tsx'));
files.push('Menu\\MenuTwoColumn.tsx', 'Menu\\MenuDualImage.tsx');

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Increase animation speed (lower duration)
    content = content.replace(/duration:\s*1([,}])/g, 'duration: 0.6$1');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated speed in ${file}`);
});
