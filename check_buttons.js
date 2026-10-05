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

files.forEach(file => {
    if (file.replace(/\\/g, '/').includes('/Header/')) {
        return;
    }

    let content = fs.readFileSync(file, 'utf8');
    
    let buttons = content.match(/<button[^>]*>/g);
    if (buttons) {
        buttons.forEach(b => {
            if (b.includes('className=') && !b.includes('bg-[#D8AC15]') && b.includes('bg-')) {
                console.log('Found button in ' + file + ' without #D8AC15: ' + b);
            }
        });
    }

    let links = content.match(/<Link[^>]*>/g);
    if (links) {
        links.forEach(l => {
            if (l.includes('className=') && l.includes('bg-[') && !l.includes('bg-[#D8AC15]')) {
                console.log('Found Link in ' + file + ' without #D8AC15: ' + l);
            }
        });
    }
});
