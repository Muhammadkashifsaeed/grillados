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

    // Helper to process classNames in buttons and button-like links
    function processClasses(match, p1) {
        // If it doesn't have a background class, it might not be a primary button, 
        // but the user said "all buttons". We should replace text colors.
        
        // Remove existing text color classes (except hover:)
        let newP1 = p1.replace(/(^|\s|["'])(?<!hover:|focus:|active:)text-(white|black|gray-\d{3}|\[#[0-9a-fA-F]+\])/g, '$1');
        
        // Remove existing hover text colors
        newP1 = newP1.replace(/(^|\s|["'])hover:text-(white|black|gray-\d{3}|\[#[0-9a-fA-F]+\])/g, '$1');
        
        // Clean up multiple spaces
        newP1 = newP1.replace(/\s+/g, ' ');
        
        // Add text-black hover:text-white right after className=" or className={`
        newP1 = newP1.replace(/className=(["'`])/, 'className=$1text-black hover:text-white ');

        return newP1;
    }

    // Process <button> tags
    content = content.replace(/<button([^>]*)>/g, (match, p1) => {
        if(p1.includes('className=')) {
            return '<button' + processClasses(match, p1) + '>';
        }
        return match;
    });

    // Process button-like <Link> tags. Let's assume a link is a button if it has a background color
    content = content.replace(/<Link([^>]*)>/g, (match, p1) => {
        if(p1.includes('className=') && (p1.includes('bg-[') || p1.includes('bg-') || match.toLowerCase().includes('button'))) {
            // We want to apply this specifically to the Links we previously changed to have yellow backgrounds
            if(p1.includes('bg-[#FAC716]')) {
                return '<Link' + processClasses(match, p1) + '>';
            }
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedFiles++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Total files updated for text color: ${updatedFiles}`);
