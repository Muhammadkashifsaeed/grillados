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

    // We will use a regex to find button tags. 
    // Button tags might span multiple lines, so we match from <button to >
    // We also want to replace button-like Links. Typically Links with "bg-[#...]" and "hover:"
    // To be safe, we will just replace bg-[...] with bg-[#D8AC15] ONLY if it's NOT a hover/focus/active state,
    // AND it's inside a <button> tag.
    
    // Replace in <button ... >
    content = content.replace(/<button([^>]*)>/g, (match, p1) => {
        // p1 contains attributes. We replace the background color inside className
        let newP1 = p1.replace(/(^|\s|["'])bg-\[#[0-9a-fA-F]{3,6}\]/g, '$1bg-[#D8AC15]');
        // also replace tailwind named colors if they exist, like bg-red-500, bg-yellow-400
        newP1 = newP1.replace(/(^|\s|["'])bg-[a-z]+-\d{2,3}/g, '$1bg-[#D8AC15]');
        return '<button' + newP1 + '>';
    });

    // Replace in <Link ... > if it has hover styling (which usually implies a button-like Link)
    // Actually, user said "buttons", so Link buttons should probably be changed too.
    content = content.replace(/<Link([^>]*)>/g, (match, p1) => {
        // Check if it's a button-like Link (has bg color and some padding like px-)
        if (p1.includes('bg-[') || p1.match(/bg-[a-z]+-\d{2,3}/)) {
             let newP1 = p1.replace(/(^|\s|["'])(?<!hover:|focus:|active:)bg-\[#[0-9a-fA-F]{3,6}\]/g, '$1bg-[#D8AC15]');
             newP1 = newP1.replace(/(^|\s|["'])(?<!hover:|focus:|active:)bg-[a-z]+-\d{2,3}/g, '$1bg-[#D8AC15]');
             return '<Link' + newP1 + '>';
        }
        return match;
    });
    
    // There might be <button> tags that span across multiple lines and the > is far away.
    // Let's use a simpler approach for classNames: match className="..." and if it contains "button" or we're in a file where we know it's a button.
    // Actually, the above regex doesn't handle multi-line tags if [^>] doesn't match newlines? No, [^>] matches newlines in JS.
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedFiles++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Total files updated: ${updatedFiles}`);
