const fs = require('fs');

function fixSection(file, imgA, imgB) {
  let content = fs.readFileSync(file, 'utf-8');

  // Re-hide desktop layout on mobile
  content = content.replace(
    'className="w-full flex flex-row items-center justify-center pt-0 pb-0 lg:pb-12 pr-12 md:pr-20 lg:pr-[80px]"',
    'className="w-full hidden md:flex flex-row items-center justify-center pt-0 pb-8 lg:pb-12 pr-12 md:pr-20 lg:pr-[80px]"'
  );

  // Safely delete ALL existing Mobile Layout blocks
  while (content.includes('{/* Mobile Layout */}')) {
    const startIndex = content.indexOf('{/* Mobile Layout */}');
    // Find the NEXT zone after this mobile layout
    const nextZoneIndex = content.indexOf('{/* ZONE 2', startIndex);
    if (nextZoneIndex !== -1) {
      content = content.substring(0, startIndex) + content.substring(nextZoneIndex);
    } else {
      break;
    }
  }

  // Insert the perfectly correct new Mobile Layout
  const zone2Index = content.indexOf('{/* ZONE 2');
  if (zone2Index !== -1) {
    const mobileLayout = `
        {/* Mobile Layout */}
        <div className="w-[90%] sm:w-[85%] max-w-[350px] h-[250px] mx-auto flex md:hidden flex-row drop-shadow-2xl rounded-2xl overflow-hidden mb-6">
          <div className="relative w-1/2 h-full">
            <Image src="/images/${imgA}" alt="${imgA}" fill className="object-cover" />
          </div>
          <div className="relative w-1/2 h-full">
            <Image src="/images/${imgB}" alt="${imgB}" fill className="object-cover" />
          </div>
        </div>

`;
    content = content.substring(0, zone2Index) + mobileLayout + content.substring(zone2Index);
  }

  // Reduce gap
  content = content.replace(
    'className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-10 md:gap-14"',
    'className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-4 md:gap-14"'
  );
  content = content.replace(
    'className="mb-10"',
    'className="mb-4 md:mb-10"'
  );

  // Also apply animation speed fixes just in case they were lost by checkout
  content = content.replace(/duration: 1([,}])/g, 'duration: 0.6$1');
  content = content.replace(/opacity: 0, y: 80/g, 'opacity: -80, y: 80');
  content = content.replace(/opacity: 0, y: 40/g, 'opacity: -80, y: 40');
  content = content.replace(/opacity: 0, x: -80/g, 'opacity: -80, x: -80');
  content = content.replace(/opacity: 0, x: 80/g, 'opacity: -80, x: 80');

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}

fixSection('c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components\\BeefLambSpecialsMenuSection.tsx', 'mobile5.jpg', 'mobile6.jpg');
