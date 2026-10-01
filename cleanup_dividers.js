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
    
    // Remove the old dividers
    content = content.replace(/\{\/\* Divider \*\/\}\s*<div className="w-16 h-1 bg-black rounded-full mb-6 mx-auto"><\/div>/g, '');
    content = content.replace(/<div className="w-16 h-1 bg-black rounded-full mb-6 mx-auto"><\/div>/g, '');
    
    fs.writeFileSync(file, content);
}
console.log('Cleaned up old dividers.');
