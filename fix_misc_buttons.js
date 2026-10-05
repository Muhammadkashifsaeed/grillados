const fs = require('fs');

function replaceFile(path, replacer) {
    let content = fs.readFileSync(path, 'utf8');
    let newContent = replacer(content);
    if (content !== newContent) {
        fs.writeFileSync(path, newContent, 'utf8');
        console.log('Updated ' + path);
    }
}

// Gallery Content load more
replaceFile('./app/components/Gallery/GalleryContent.tsx', c => c.replace(/bg-black text-white hover:bg-gray-800/g, 'bg-[#D8AC15] text-white hover:bg-gray-800'));
replaceFile('./app/components/Gallery/GalleryContent.tsx', c => c.replace(/bg-red-600/g, 'bg-[#D8AC15]').replace(/red-600/g, '[#D8AC15]'));

// Explore Articles link
replaceFile('./app/components/ExploreArticles.tsx', c => c.replace(/text-\[#FAAE40\]/g, 'bg-[#D8AC15] text-white'));

// Deals page
replaceFile('./app/[locale]/deals/page.tsx', c => c.replace(/hover:bg-\[#f7b41c\]/g, 'hover:bg-[#D8AC15]'));
