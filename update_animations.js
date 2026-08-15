const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components';
let files = fs.readdirSync(componentsDir).filter(f => f.endsWith('MenuSection.tsx'));
files.push('Menu\\MenuTwoColumn.tsx', 'Menu\\MenuDualImage.tsx');

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    let lines = content.split('\n');
    let newLines = [];
    let context = null;

    for (let line of lines) {
        if (/(Left Column.*: Image|Left:.*Image|Left Column.*: Menu Items|LEFT: Heading|Left: Heading|Left Column)/i.test(line)) {
            context = 'left';
            newLines.push(line);
        } else if (/(Right Column.*: Image|Right:.*Image|Right Column.*: Menu Items|RIGHT:.*fade RIGHT|Right:.*fade RIGHT|Right Column)/i.test(line)) {
            context = 'right';
            newLines.push(line);
        } else if (/(ZONE 1: Both images.*fade UP|ZONE 1: Order\.png.*fade UP|ZONE 3:.*images)/i.test(line)) {
            context = 'dual';
            newLines.push(line.replace(/fade UP/i, 'fade DOWN'));
        } else {
            if (line.includes('initial={{') && context) {
                if (context === 'left') {
                    line = line.replace(/y: \d+/, 'x: -80');
                } else if (context === 'right') {
                    line = line.replace(/y: \d+/, 'x: 80');
                } else if (context === 'dual') {
                    line = line.replace(/y: \d+/, 'y: -80');
                }
            } else if (line.includes('whileInView={{') && context) {
                if (context === 'left' || context === 'right') {
                    line = line.replace(/y: 0/, 'x: 0, y: 0');
                } else if (context === 'dual') {
                    // keep y: 0
                }
                context = null; // reset context after consuming it
            }
            newLines.push(line);
        }
    }

    fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
    console.log(`Updated ${file}`);
});
