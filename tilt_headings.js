const fs = require('fs');

const filesToUpdate = [
    'app/components/AppetizersSection.tsx',
    'app/components/BeefLambSpecialsSection.tsx',
    'app/components/ChickenSpecialsSection.tsx',
    'app/components/PlattersSection.tsx',
    'app/components/SandwichesSection.tsx',
    'app/components/Services/WeddingCateringSection.tsx',
    'app/components/Services/BirthdayCateringSection.tsx',
    'app/components/Services/EventsCateringSection.tsx',
    'app/components/Services/GiftCardsSection.tsx',
    'app/components/CateringPartnersSection.tsx'
];

for (const file of filesToUpdate) {
    if (!fs.existsSync(file)) continue;
    
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to add `transform -rotate-2 inline-block text-center` to the h2 className.
    const h2Regex = /(<h2[^>]*className=")([^"]*)(")/;
    const match = content.match(h2Regex);
    
    if (match) {
        let existingClasses = match[2];
        if (!existingClasses.includes('-rotate-2')) {
            existingClasses += ' transform -rotate-2 inline-block text-center';
            content = content.replace(h2Regex, `$1${existingClasses}$3`);
            
            // Also, let's wrap the h2 in a text-center div just to guarantee centering 
            // if the parent isn't a flex center container.
            // Wait, wrapping is harder with regex because we need to find the closing </h2>.
            // Let's just use a more robust regex for the block.
            
            const blockRegex = /(<h2[^>]*>[\s\S]*?<\/h2>)/;
            const blockMatch = content.match(blockRegex);
            
            if (blockMatch) {
                // If the file doesn't have flex flex-col items-center on parent, we'll wrap it.
                // It's safer to just wrap it.
                const newBlock = `<div className="text-center">\n${blockMatch[1]}\n</div>`;
                content = content.replace(blockRegex, newBlock);
            }
            
            fs.writeFileSync(file, content);
            console.log(`Updated: ${file}`);
        }
    } else {
        console.log(`Could not find className in h2 for ${file}`);
    }
}
