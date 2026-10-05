const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else {
            if(file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./app');
let updatedFiles = 0;

files.forEach(file => {
    // Skip Header components
    if (file.replace(/\\/g, '/').includes('/Header/')) {
        return;
    }

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We only want to remove color from style attribute of buttons/links that have text-black
    content = content.replace(/(<button[^>]*>|<Link[^>]*>)/g, (match) => {
        if (match.includes('text-black')) {
            // Remove color: '...' or color: "..." from style={{...}}
            return match.replace(/,\s*color:\s*['"]rgb\(255,\s*255,\s*255\)['"]/g, '')
                        .replace(/color:\s*['"]rgb\(255,\s*255,\s*255\)['"],?\s*/g, '')
                        .replace(/,\s*color:\s*['"]#fff['"]/g, '')
                        .replace(/color:\s*['"]#fff['"],?\s*/g, '')
                        .replace(/,\s*color:\s*['"]white['"]/g, '')
                        .replace(/color:\s*['"]white['"],?\s*/g, '');
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedFiles++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Total files updated to remove inline color: ${updatedFiles}`);
