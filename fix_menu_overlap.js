const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

const filesToFix = [
  'AppetizersMenuSection.tsx',
  'ChickenSpecialsMenuSection.tsx',
  'BeefLambSpecialsMenuSection.tsx',
  'PlateauxMenuSection.tsx',
  'AccompagnementsMenuSection.tsx',
  'ComboDePouletMenuSection.tsx',
  'SandwichSaladMenuSection.tsx',
  'GarnishedRiceSauceMenuSection.tsx',
  'SpecialtyDrinksMenuSection.tsx',
  'DessertMenuSection.tsx',
];

filesToFix.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} - not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to add pr-12 lg:pr-0 to the div that holds the items, which typically has gap-something and w-full
  // We can look for className="flex flex-col gap-.*? w-full"
  // And replace it with className="flex flex-col gap-$1 w-full pr-14 lg:pr-0"
  
  content = content.replace(/className="flex flex-col (gap-[^"]+ )?w-full"/g, (match, gap) => {
    return `className="flex flex-col ${gap || ''}w-full pr-14 lg:pr-0"`;
  });
  
  // also dessert section has this:
  // className="flex flex-col w-full pb-4 lg:pb-8 justify-start"
  // wait, the regex above will replace it if it doesn't have gap, but it has justify-start after w-full.
  
  // Let's just find the menu item containers.
  // Actually, replacing `className="flex flex-col w-full"` in the item map function is better:
  // `className="flex flex-col w-full"` -> `className="flex flex-col w-full pr-14 lg:pr-0"`
  
  // A safer approach is to replace:
  // `className="flex items-end w-full gap` with `className="flex items-end w-full pr-14 lg:pr-0 gap`
  // Wait, let's just do it on the div with gap that wraps the items.
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
