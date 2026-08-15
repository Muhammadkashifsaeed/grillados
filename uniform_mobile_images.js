const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components';
const menuFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('MenuSection.tsx'));

menuFiles.forEach(file => {
    const filePath = path.join(componentsDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Update the double-image containers in Chicken and BeefLamb
    // In ChickenSpecialsMenuSection.tsx
    content = content.replace(
        /<div className="w-full flex md:hidden flex-row items-center justify-center gap-0 pb-6 pt-0 px-2">\s*<Image\s*src="\/images\/mobile2\.jpg"[\s\S]*?<Image\s*src="\/images\/mobile3\.jpg"[\s\S]*?<\/div>/,
        `<div className="w-[90%] sm:w-[85%] max-w-[350px] h-[250px] mx-auto flex md:hidden flex-row items-center justify-center drop-shadow-2xl rounded-2xl overflow-hidden mb-6">
          <Image
            src="/images/mobile2.jpg"
            alt="mobile2.jpg"
            width={1000}
            height={750}
            className="w-1/2 h-full object-cover block md:hidden"
          />
          <Image
            src="/images/mobile3.jpg"
            alt="mobile3.jpg"
            width={1000}
            height={750}
            className="w-1/2 h-full object-cover block md:hidden"
          />
        </div>`
    );

    // In BeefLambSpecialsMenuSection.tsx
    content = content.replace(
        /<div className="w-full flex md:hidden flex-row items-center justify-center gap-0 py-6 px-2">\s*<Image\s*src="\/images\/mobile5\.jpg"[\s\S]*?<Image\s*src="\/images\/mobile6\.jpg"[\s\S]*?<\/div>/,
        `<div className="w-[90%] sm:w-[85%] max-w-[350px] h-[250px] mx-auto flex md:hidden flex-row items-center justify-center drop-shadow-2xl rounded-2xl overflow-hidden mb-6">
          <Image
            src="/images/mobile5.jpg"
            alt="mobile5.jpg"
            width={1000}
            height={750}
            className="w-1/2 h-full object-cover block md:hidden"
          />
          <Image
            src="/images/mobile6.jpg"
            alt="mobile6.jpg"
            width={1000}
            height={750}
            className="w-1/2 h-full object-cover block md:hidden"
          />
        </div>`
    );

    // 2. Update ALL single mobile images
    // Note: since we already replaced the double images, they now have `w-1/2 h-full object-cover block md:hidden`.
    // The single images all match `w-[85%] max-w-[300px] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden`
    // Or similar variations. We'll find any Image tag that contains `block md:hidden` and `mx-auto` and `object-contain`.
    
    // It's safer to use a regex that matches the className string of single images.
    content = content.replace(
        /className="w-\[85%\] max-w-\[300px\] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden"/g,
        'className="w-[90%] sm:w-[85%] max-w-[350px] h-[250px] mx-auto object-cover rounded-2xl drop-shadow-2xl block md:hidden"'
    );
    
    // If some had scale-100 or other slight variations, let's also catch them:
    content = content.replace(
        /className="[^"]*block md:hidden[^"]*"/g,
        (match) => {
            // Only replace if it's a single image (it has mx-auto and object-contain, or similar old classes)
            if (match.includes('w-1/2 h-full')) {
                return match; // skip the ones we just added for double images
            }
            if (match.includes('mobile')) {
                 return 'className="w-[90%] sm:w-[85%] max-w-[350px] h-[250px] mx-auto object-cover rounded-2xl drop-shadow-2xl block md:hidden"';
            }
            // For DessertMenuSection it might be "w-[85%] max-w-[300px] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden"
            return 'className="w-[90%] sm:w-[85%] max-w-[350px] h-[250px] mx-auto object-cover rounded-2xl drop-shadow-2xl block md:hidden"';
        }
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Uniformized images in ${file}`);
});
