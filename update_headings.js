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
    if (!fs.existsSync(file)) {
        console.log(`File not found: ${file}`);
        continue;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to replace the <h2> tag and its children up to </h2> with the new styled <h2> and divider.
    // The safest way is to find <h2 and </h2> and replace the whole block, BUT we need to preserve the content inside.
    
    // Let's use a regex to match the <h2> tag block.
    // Most of them have: <h2 ...> \n {t('heading')} \n </h2>
    // Some might have different content inside.
    
    const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/;
    const match = content.match(h2Regex);
    
    if (match) {
        const innerContent = match[1].trim(); // Usually `{t('heading')}` or `{t('title')}`
        
        const newH2Block = `<h2
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '28px', lineHeight: '36px', color: 'rgb(0,0,0)' }}
          className="text-center uppercase tracking-wide mb-2"
        >
          ${innerContent}
        </h2>
        
        <div 
          className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"
        ></div>`;
        
        content = content.replace(h2Regex, newH2Block);
        
        fs.writeFileSync(file, content);
        console.log(`Updated: ${file}`);
    } else {
        console.log(`No <h2> found in ${file}`);
    }
}
