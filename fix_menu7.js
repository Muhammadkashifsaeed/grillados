const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.accompagnements = "SIDES";
en.Menu.accompagnementsMenu = [
  { name: 'Peri Fries' },
  { name: 'Masala Fries' },
  { name: 'Potato Wedges' },
  { name: 'Onion Rings' },
  { name: 'Mixed Grilled Veggies' },
  { name: 'Creamy Coleslaw' },
  { name: 'Spicy Rice' },
  { name: 'Grilled Corn' }
];
en.Menu.seasonal = "SEASONAL";
en.Menu.sidesSizes = "Sides Large 8.99 & Sharable 12.99";

fr.Menu.accompagnements = "ACCOMPAGNEMENTS";
fr.Menu.accompagnementsMenu = [
  { name: 'Frites Peri' },
  { name: 'Frites Masala' },
  { name: 'Quartiers de Pommes de Terre' },
  { name: 'Rondelles d\'Oignon' },
  { name: 'Légumes Grillés Mélangés' },
  { name: 'Salade de Chou Crémeuse' },
  { name: 'Riz Épicé' },
  { name: 'Maïs Grillé' }
];
fr.Menu.seasonal = "SAISONNIER";
fr.Menu.sidesSizes = "Accompagnements Grand format 8,99 & À partager 12,99";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/AccompagnementsMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const AccompagnementsMenuSection = () => {", "export const AccompagnementsMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawSides = t.raw('accompagnementsMenu');\n  const menuItemsLocal = [\n    { name: rawSides[0].name, price: '5.99' },\n    { name: rawSides[1].name, price: '5.99' },\n    { name: rawSides[2].name, price: '5.99' },\n    { name: rawSides[3].name, price: '5.99' },\n    { name: rawSides[4].name, price: '5.99' },\n    { name: rawSides[5].name, price: '5.99' },\n    { name: rawSides[6].name, price: '5.99' },\n    { name: rawSides[7].name, price: '5.99' },\n  ];");
    
    code = code.replace(/ACCOMPAGNEMENTS/g, "{t('accompagnements')}");
    code = code.replace(/SEASONAL/g, "{t('seasonal')}");
    code = code.replace(/Sides Large 8.99 & Sharable 12.99/g, "{t('sidesSizes')}");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/AccompagnementsMenuSection.tsx', code);
}
