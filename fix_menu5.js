const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.plateaux = "GRILLADO'S<br />PLATTERS";
en.Menu.plateauxMenu = [
  { name: 'Grilled Chicken Wings Platter', note: '15 WHOLE CHICKEN WINGS, 2 REGULAR SIDES, 2 GARLIC BREADS OR 3 SMALL PORTUGUESE BUNS' },
  { name: 'Chicken Platter', note: '2 WHOLE ORGANIC GRILLED CHICKENS, 2 LARGE SIDES, 2 GARLIC BREADS OR 3 SMALL PORTUGUESE BUNS' },
  { name: 'Beef Platter', note: '1 FULL RACK OF PREMIUM BEEF BACK RIBS, 2 LARGE SIDES, 2 GARLIC BREADS OR 3 SMALL PORTUGUESE BUNS' },
  { name: 'Signature Platter', note: '5 MOZZARELLA CHEESE STICKS, 1 WHOLE ORGANIC GRILLED CHICKEN, 10 WHOLE CHICKEN WINGS, 10 MINI BEEF KEBABS, 2 GRILLED ESPETADA SKEWERS, 3 LARGE SIDES, 3 GARLIC BREADS OR 4 SMALL PORTUGUESE BUNS' },
  { name: 'Mixed Platter', note: '1 WHOLE ORGANIC GRILLED CHICKEN, 1 FULL RACK OF PREMIUM BEEF BACK RIBS, 3 LARGE SIDES, 3 GARLIC BREADS OR 4 SMALL PORTUGUESE BUNS' },
];

fr.Menu.plateaux = "PLATEAUX<br />GRILLADO'S";
fr.Menu.plateauxMenu = [
  { name: 'Plateau d\'Ailes de Poulet Grillées', note: '15 AILES DE POULET ENTIÈRES, 2 ACCOMPAGNEMENTS RÉGULIERS, 2 PAINS À L\'AIL OU 3 PETITS PAINS PORTUGAIS' },
  { name: 'Plateau de Poulet', note: '2 POULETS GRILLÉS ENTIERS BIO, 2 GRANDS ACCOMPAGNEMENTS, 2 PAINS À L\'AIL OU 3 PETITS PAINS PORTUGAIS' },
  { name: 'Plateau de Bœuf', note: '1 CARRÉ COMPLET DE CÔTES DE BŒUF DE QUALITÉ SUPÉRIEURE, 2 GRANDS ACCOMPAGNEMENTS, 2 PAINS À L\'AIL OU 3 PETITS PAINS PORTUGAIS' },
  { name: 'Plateau Signature', note: '5 BÂTONNETS DE FROMAGE MOZZARELLA, 1 POULET GRILLÉ ENTIER BIO, 10 AILES DE POULET ENTIÈRES, 10 MINI BROCHETTES DE BŒUF, 2 BROCHETTES ESPETADA GRILLÉES, 3 GRANDS ACCOMPAGNEMENTS, 3 PAINS À L\'AIL OU 4 PETITS PAINS PORTUGAIS' },
  { name: 'Plateau Mixte', note: '1 POULET GRILLÉ ENTIER BIO, 1 CARRÉ COMPLET DE CÔTES DE BŒUF DE QUALITÉ SUPÉRIEURE, 3 GRANDS ACCOMPAGNEMENTS, 3 PAINS À L\'AIL OU 4 PETITS PAINS PORTUGAIS' },
];

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/PlateauxMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const PlateauxMenuSection = () => {", "export const PlateauxMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawItems = t.raw('plateauxMenu');\n  const menuItemsLocal = [\n    { name: rawItems[0].name, price: '49.99', note: rawItems[0].note },\n    { name: rawItems[1].name, price: '94.99', note: rawItems[1].note },\n    { name: rawItems[2].name, price: '119.99', note: rawItems[2].note },\n    { name: rawItems[3].name, price: '149.99', note: rawItems[3].note },\n    { name: rawItems[4].name, price: '159.99', note: rawItems[4].note },\n  ];");
    
    code = code.replace(/GRILLADO&apos;S<br \/>PLATEAUX/g, "<span dangerouslySetInnerHTML={{ __html: t('plateaux') }} />");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/PlateauxMenuSection.tsx', code);
}
