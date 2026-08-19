const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.appetizers = 'APPETIZERS';
en.Menu.appetizersMenu = [
    { name: 'Portuguese Bun', note: 'SERVED WITH BUTTER' },
    { name: 'Pita Bread' },
    { name: 'Garlic Bread' },
    { name: 'Hummus & Pita' },
    { name: '5 Mozzarella Cheese Sticks', note: 'WITH MARINARA SAUCE' },
    { name: '5 Whole Chicken Wings' },
    { name: '10 Mini Beef Kebabs' },
    { name: 'Veggie Nachos' },
    { name: 'Grilled Chicken Nachos', note: 'ADD EXTRA CHICKEN FOR 4.99' }
];

fr.Menu.appetizers = 'ENTRÉES';
fr.Menu.appetizersMenu = [
    { name: 'Pain Portugais', note: 'SERVI AVEC DU BEURRE' },
    { name: 'Pain Pita' },
    { name: 'Pain à l\'Ail' },
    { name: 'Houmous & Pita' },
    { name: '5 Bâtonnets de Fromage Mozzarella', note: 'AVEC SAUCE MARINARA' },
    { name: '5 Ailes de Poulet Entières' },
    { name: '10 Mini Brochettes de Bœuf' },
    { name: 'Nachos Végétariens' },
    { name: 'Nachos au Poulet Grillé', note: 'AJOUTEZ DU POULET SUPPLÉMENTAIRE POUR 4.99' }
];

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/AppetizersMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const AppetizersMenuSection = () => {", "export const AppetizersMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawItems = t.raw('appetizersMenu');\n  const menuItemsLocal = [\n    { name: rawItems[0].name, price: '3.99', note: rawItems[0].note },\n    { name: rawItems[1].name, price: '3.50' },\n    { name: rawItems[2].name, price: '4.99' },\n    { name: rawItems[3].name, price: '8.99' },\n    { name: rawItems[4].name, price: '11.99', note: rawItems[4].note },\n    { name: rawItems[5].name, price: '14.99' },\n    { name: rawItems[6].name, price: '19.99' },\n    { name: rawItems[7].name, price: '18.99' },\n    { name: rawItems[8].name, price: '19.99', note: rawItems[8].note },\n  ];");
    
    code = code.replace("APPETIZERS", "{t('appetizers')}");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/AppetizersMenuSection.tsx', code);
}
