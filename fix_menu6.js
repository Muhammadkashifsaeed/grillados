const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.sandwichWrapsPita = "SANDWICH, WRAPS & PITA";
en.Menu.chicken = "Chicken";
en.Menu.vegetarian = "Vegetarian";
en.Menu.combo = "COMBO";
en.Menu.sideAndPop = "(1 SIDE + POP)";
en.Menu.salads = "SALADS";
en.Menu.saladsMenu = [
  { name: 'Greek Salad' },
  { name: 'Spring Salad' },
  { name: 'Cesar Salad' }
];
en.Menu.saladsLargeAdd = "Salads LARGE 9.99 - ADD";
en.Menu.grilledChickenPrice = "GRILLED CHICKEN 5.99";

fr.Menu.sandwichWrapsPita = "SANDWICHS, WRAPS ET PITA";
fr.Menu.chicken = "Poulet";
fr.Menu.vegetarian = "Végétarien";
fr.Menu.combo = "COMBO";
fr.Menu.sideAndPop = "(1 ACCOMPAGNEMENT + BOISSON GAZEUSE)";
fr.Menu.salads = "SALADES";
fr.Menu.saladsMenu = [
  { name: 'Salade Grecque' },
  { name: 'Salade Printanière' },
  { name: 'Salade César' }
];
fr.Menu.saladsLargeAdd = "Salades GRAND FORMAT 9.99 - AJOUTEZ";
fr.Menu.grilledChickenPrice = "POULET GRILLÉ 5.99";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/SandwichSaladMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const SandwichSaladMenuSection = () => {", "export const SandwichSaladMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawSalads = t.raw('saladsMenu');\n  const saladsMenuLocal = [\n    { name: rawSalads[0].name, price: '7.99' },\n    { name: rawSalads[1].name, price: '7.99' },\n    { name: rawSalads[2].name, price: '7.99' }\n  ];");
    
    code = code.replace(/SANDWICH, WRAPS & PITA/g, "{t('sandwichWrapsPita')}");
    code = code.replace(/Chicken<\/span>/g, "{t('chicken')}</span>");
    code = code.replace(/Vegetarian<\/span>/g, "{t('vegetarian')}</span>");
    code = code.replace(/COMBO<\/span>/g, "{t('combo')}</span>");
    code = code.replace(/\(1 SIDE \+ POP\)/g, "{t('sideAndPop')}");
    
    code = code.replace(/<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-\[#FAAE40\] font-\['Outfit',sans-serif\] uppercase tracking-wide leading-tight drop-shadow-sm mb-4">\s*SALADS\s*<\/h2>/, "<h2 className=\"text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4\">\n                {t('salads')}\n              </h2>");
    
    code = code.replace(/\[\s*\{\s*name:\s*'Greek Salad',\s*price:\s*'7.99'\s*\},[^]*?\]\.map/g, "saladsMenuLocal.map");
    
    code = code.replace(/Salads LARGE 9.99 - ADD/g, "{t('saladsLargeAdd')}");
    code = code.replace(/GRILLED CHICKEN 5.99/g, "{t('grilledChickenPrice')}");
    
    fs.writeFileSync('app/components/SandwichSaladMenuSection.tsx', code);
}
