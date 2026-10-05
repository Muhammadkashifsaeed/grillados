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
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace #D8AC15 (case-insensitive) with #FAC716
    content = content.replace(/#D8AC15/gi, '#FAC716');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedFiles++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Total files updated from #D8AC15 to #FAC716: ${updatedFiles}`);
