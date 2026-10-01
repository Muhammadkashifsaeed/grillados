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
            let original = content;
            
            // Replace both specific yellow hex colors with the new one
            content = content.replace(/#fbbc04/g, '#D8AC15');
            content = content.replace(/#DAAF18/g, '#D8AC15');
            content = content.replace(/#e5aa03/g, '#D8AC15');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated:', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'app/components'));
console.log('All yellow button colors updated to #D8AC15!');
