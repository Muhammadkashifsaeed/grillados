const fs = require('fs');
const path = require('path');

const targetDir1 = path.join(__dirname, '..', 'app', 'components');
const targetDir2 = path.join(__dirname, '..', 'app', '[locale]');

function processFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let original = content;

    // We want to ensure all primary buttons have text-black and hover:text-white
    // And we must remove `color: 'rgb(255, 255, 255)'` or similar if it's inside the style of a button.

    // 1. Remove forced inline white color on Links/buttons with bg-[#
    // This is tricky with regex. Let's just remove `color: 'rgb(255, 255, 255)'` if it exists near a button.
    // Let's replace `text-white` with `text-black` on buttons that have `hover:bg-[#EB5250]`
    
    // Most buttons in this app have `bg-[#D8AC15]` or `bg-[#F4C430]` or `bg-[#EB5250]` 
    // AND `transition-all duration-300` or `hover:bg-[#EB5250]`.
    
    // Instead of complex regex, let's just replace `text-white` with `text-black hover:text-white` on elements that are buttons.
    // I'll manually handle the inline style issue. Let's just print the files that contain inline white colors so I can fix them manually.
    
    // For now, let's replace `text-white` or `text-zinc-900` or `text-gray-900` in standard button classes:
    content = content.replace(/(bg-\[#(D8AC15|F4C430|EB5250)\][^>]*?hover:bg-\[#[A-F0-9]{6}\][^>]*?)(text-white|text-zinc-900|text-gray-900|text-black)/g, (match, prefix, col, textColor) => {
        // Ensure it has hover:text-white and text-black
        let newClass = match.replace(/text-white|text-zinc-900|text-gray-900|text-black/g, '').replace(/hover:text-white/g, '');
        // collapse spaces
        newClass = newClass.replace(/\s+/g, ' ').trim();
        return newClass + ' text-black hover:text-white';
    });

    if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated classes in:', fullPath);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.toLowerCase().includes('header')) continue; // Skip header
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

traverse(targetDir1);
traverse(targetDir2);
