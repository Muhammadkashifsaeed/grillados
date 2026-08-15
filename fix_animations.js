const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components';
let files = fs.readdirSync(componentsDir).filter(f => f.endsWith('MenuSection.tsx'));
files.push('Menu\\MenuTwoColumn.tsx', 'Menu\\MenuDualImage.tsx');

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix the opacitx mistake and replace y: <num> correctly
    content = content.replace(/opacitx: -80,\s*y:\s*\d+/g, 'opacity: 0, x: -80');
    content = content.replace(/opacitx: 80,\s*y:\s*\d+/g, 'opacity: 0, x: 80');
    content = content.replace(/opacitx: -80/g, 'opacity: 0, y: -80'); // for dual images

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed ${file}`);
});
