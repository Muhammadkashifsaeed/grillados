const fs = require('fs');

function findAndReplace(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = dir + '/' + file;
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            findAndReplace(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            if (fullPath.includes('HeroSection.tsx')) {
                content = content.replace(/hover:bg-\[#c73f45\]/g, 'hover:bg-[#E04B51]');
            } else {
                content = content.replace(/(bg-\[#E04B51\][^'"]*?)hover:bg-\[#[a-zA-Z0-9]+\]/g, '$1hover:bg-[#EC584D]');
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

findAndReplace('app/components');
