const fs = require('fs');

const files = [
  'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components\\ChickenSpecialsMenuSection.tsx',
  'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components\\BeefLambSpecialsMenuSection.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf-8');
  
  // 1. Unhide desktop dual image layout and remove extra bottom padding on mobile
  content = content.replace(
    /className=\"w-full hidden md:flex flex-row items-center justify-center pt-0 pb-8 lg:pb-12 pr-12 md:pr-20 lg:pr-\[80px\]\"/g,
    'className=\"w-full flex flex-row items-center justify-center pt-0 pb-0 lg:pb-12 pr-12 md:pr-20 lg:pr-[80px]\"'
  );
  
  // 2. Delete the custom Mobile Layout container (the one we just made uniform!)
  content = content.replace(
    /\{\/\* Mobile Layout \*\/\}\s*<div className=\"w-\[90%\].*?<\/div>\s*<\/div>/s,
    ''
  );

  // 3. Reduce gap on mobile between ZONE 1 and ZONE 2
  content = content.replace(
    /className=\"relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-10 md:gap-14\"/g,
    'className=\"relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-4 md:gap-14\"'
  );
  
  // 4. Reduce mb-10 on headings to mb-4 md:mb-10
  content = content.replace(
    /className=\"mb-10\"/g,
    'className=\"mb-4 md:mb-10\"'
  );

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
