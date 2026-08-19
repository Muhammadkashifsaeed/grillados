const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.beefLambSpecials = "GRILLADO'S<br />BEEF & LAMB SPECIALS";
en.Menu.beefLambSpecialsMenu = [
  { name: 'Rear Ribs', note: 'WITH 2 REGULAR SIDE DISHES' },
  { name: 'Lamb Chops', note: 'WITH 2 REGULAR SIDES' },
  { name: '12 oz Sirloin Steak', note: 'WITH 2 REGULAR SIDES (PLEASE ALLOW 30 TO 40 MINUTES TO COOK)' },
  { name: '12 oz Sirloin Steak', note: 'WITH 2 REGULAR ACCOMPANISTS (SURF AND TURF) AND A SKEWER OF SHRIMP (PLEASE ALLOW 30 TO 40 MINUTES TO COOK)' },
  { name: "Grillado's Beef Burger", note: 'WITH 1 REGULAR SIDE (ADD AN EXTRA PATTY FOR 4.99)' },
  { name: 'Full Rack of Rear Ribs', note: '7 PREMIUM BACK RIBS' },
];

fr.Menu.beefLambSpecials = "SPÉCIALITÉS BŒUF & AGNEAU<br />GRILLADO'S";
fr.Menu.beefLambSpecialsMenu = [
  { name: 'Côtes Arrières', note: 'AVEC 2 ACCOMPAGNEMENTS RÉGULIERS' },
  { name: 'Côtelettes d\'Agneau', note: 'AVEC 2 ACCOMPAGNEMENTS RÉGULIERS' },
  { name: 'Bifteck de Surlonge 12 oz', note: 'AVEC 2 ACCOMPAGNEMENTS RÉGULIERS (VEUILLEZ PRÉVOIR 30 À 40 MINUTES DE CUISSON)' },
  { name: 'Bifteck de Surlonge 12 oz', note: 'AVEC 2 ACCOMPAGNEMENTS RÉGULIERS (TERRE ET MER) ET UNE BROCHETTE DE CREVETTES (VEUILLEZ PRÉVOIR 30 À 40 MINUTES DE CUISSON)' },
  { name: "Burger de Bœuf Grillado's", note: 'AVEC 1 ACCOMPAGNEMENT RÉGULIER (AJOUTEZ UNE GALETTE SUPPLÉMENTAIRE POUR 4.99)' },
  { name: 'Carré Complet de Côtes Arrières', note: '7 CÔTES DOS DE QUALITÉ SUPÉRIEURE' },
];

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/BeefLambSpecialsMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const BeefLambSpecialsMenuSection = () => {", "export const BeefLambSpecialsMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawItems = t.raw('beefLambSpecialsMenu');\n  const menuItemsLocal = [\n    { name: rawItems[0].name, price: '21.99', note: rawItems[0].note },\n    { name: rawItems[1].name, price: '29.99', note: rawItems[1].note },\n    { name: rawItems[2].name, price: '45.99', note: rawItems[2].note },\n    { name: rawItems[3].name, price: '52.99', note: rawItems[3].note },\n    { name: rawItems[4].name, price: '16.99', note: rawItems[4].note },\n    { name: rawItems[5].name, price: '34.99', note: rawItems[5].note },\n  ];");
    
    code = code.replace(/GRILLADO&apos;S<br \/>BEEF & LAMB SPECIALS/g, "<span dangerouslySetInnerHTML={{ __html: t('beefLambSpecials') }} />");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/BeefLambSpecialsMenuSection.tsx', code);
}
