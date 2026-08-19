const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.comboDePoulet = "CHICKEN<br />COMBO";
en.Menu.comboDePouletMenu = [
  { name: '¼ Grilled Chicken Leg', note: '(LEG + THIGH)' },
  { name: '¼ Grilled Chicken Breast', note: '(BREAST + WING)' },
  { name: '6 Whole Chicken Wings' },
  { name: 'Double Kebabs' },
  { name: 'Boneless Grilled Chicken Breast', note: '(NEW ITEM)' },
  { name: 'Double Legs' },
  { name: 'Half Chicken' }
];
en.Menu.addSide = "Add a 2nd side for 4.99";

fr.Menu.comboDePoulet = "COMBO DE<br />POULET";
fr.Menu.comboDePouletMenu = [
  { name: '¼ Cuisse de Poulet Grillée', note: '(CUISSE + HAUT DE CUISSE)' },
  { name: '¼ Poitrine de Poulet Grillée', note: '(POITRINE + AILES)' },
  { name: '6 Ailes de Poulet Entières' },
  { name: 'Doubles Kebabs' },
  { name: 'Poitrine de Poulet Grillée Désossée', note: '(NOUVEL ARTICLE)' },
  { name: 'Doubles Cuisses' },
  { name: 'Demi-poulet' }
];
fr.Menu.addSide = "Ajoutez un 2ème accompagnement pour 4,99";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/ComboDePouletMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const ComboDePouletMenuSection = () => {", "export const ComboDePouletMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawItems = t.raw('comboDePouletMenu');\n  const menuItemsLocal = [\n    { name: rawItems[0].name, price: '15.99', note: rawItems[0].note },\n    { name: rawItems[1].name, price: '16.99', note: rawItems[1].note },\n    { name: rawItems[2].name, price: '18.99' },\n    { name: rawItems[3].name, price: '16.99' },\n    { name: rawItems[4].name, price: '19.99', note: rawItems[4].note },\n    { name: rawItems[5].name, price: '20.99' },\n    { name: rawItems[6].name, price: '21.99' },\n  ];");
    
    code = code.replace(/COMBO DE<br \/>POULET/g, "<span dangerouslySetInnerHTML={{ __html: t('comboDePoulet') }} />");
    code = code.replace(/Ajoutez un 2% accompagnement pour 4,99/g, "{t('addSide')}");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/ComboDePouletMenuSection.tsx', code);
}
