const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Menu = en.Menu || {};
fr.Menu = fr.Menu || {};

en.Menu.chickenSpecials = "GRILLADO'S CHICKEN<br />SPECIALS";
en.Menu.chickenSpecialsMenu = [
  { name: 'Grilled Espetada', description: 'Tender marinated chicken with fresh peppers, served on a skewer with 2 regular side dishes.' },
  { name: 'Whole Organic Grilled Chicken', note: 'WITH 1 REGULAR ACCOMPANIST' },
  { name: 'Authentic Montreal Poutine', note: 'ADD GRILLED CHICKEN FOR 5.49' },
  { name: 'Fiesta', description: 'Chicken, rice and salad served with Italian dressing.' },
  { name: 'Veggie Burger', note: 'WITH 1 REGULAR SIDE DISH (ADD AN EXTRA PATTY FOR 4.99)' },
  { name: 'Grilled Chicken Burger', note: 'WITH 1 REGULAR SIDE (ADD EXTRA PATTY FOR 4.99)' },
  { name: 'Garlic Grilled Chicken Sandwich', note: 'WITH 1 REGULAR SIDE DISH (ADD AN EXTRA PATTY FOR 4.99)' },
  { name: 'Flaming Tandoori Grill', note: '8 PIECES OF TANDOORI SPICED CHICKEN ON A HOT GRILL' },
  { name: 'Saji Balochi Chicken', note: 'PRE-ORDER ONLY WITH 2 REGULAR SIDES AND 2 PITA BREADS OR 2 GARLIC BREADS' },
];

fr.Menu.chickenSpecials = "SPÉCIALITÉS DE POULET<br />GRILLADO'S";
fr.Menu.chickenSpecialsMenu = [
  { name: 'Espetada Grillée', description: 'Poulet mariné tendre avec des poivrons frais, servi en brochette avec 2 accompagnements réguliers.' },
  { name: 'Poulet Grillé Biologique Entier', note: 'AVEC 1 ACCOMPAGNEMENT RÉGULIER' },
  { name: 'Poutine Authentique de Montréal', note: 'AJOUTEZ DU POULET GRILLÉ POUR 5.49' },
  { name: 'Fiesta', description: 'Poulet, riz et salade servis avec une vinaigrette italienne.' },
  { name: 'Burger Végétarien', note: 'AVEC 1 ACCOMPAGNEMENT RÉGULIER (AJOUTEZ UNE GALETTE SUPPLÉMENTAIRE POUR 4.99)' },
  { name: 'Burger au Poulet Grillé', note: 'AVEC 1 ACCOMPAGNEMENT RÉGULIER (AJOUTEZ UNE GALETTE SUPPLÉMENTAIRE POUR 4.99)' },
  { name: 'Sandwich au Poulet Grillé à l\'Ail', note: 'AVEC 1 ACCOMPAGNEMENT RÉGULIER (AJOUTEZ UNE GALETTE SUPPLÉMENTAIRE POUR 4.99)' },
  { name: 'Grillade Tandoori Flamboyante', note: '8 MORCEAUX DE POULET ÉPICÉ TANDOORI SUR UN GRIL CHAUD' },
  { name: 'Poulet Saji Balochi', note: 'SUR COMMANDE SEULEMENT AVEC 2 ACCOMPAGNEMENTS RÉGULIERS ET 2 PAINS PITA OU 2 PAINS À L\'AIL' },
];

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/ChickenSpecialsMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const ChickenSpecialsMenuSection = () => {", "export const ChickenSpecialsMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawItems = t.raw('chickenSpecialsMenu');\n  const menuItemsLocal = [\n    { name: rawItems[0].name, price: '24.99', description: rawItems[0].description },\n    { name: rawItems[1].name, price: '31.99', note: rawItems[1].note },\n    { name: rawItems[2].name, price: '14.99', note: rawItems[2].note },\n    { name: rawItems[3].name, price: '19.99', description: rawItems[3].description },\n    { name: rawItems[4].name, price: '16.99', note: rawItems[4].note },\n    { name: rawItems[5].name, price: '16.99', note: rawItems[5].note },\n    { name: rawItems[6].name, price: '17.99', note: rawItems[6].note },\n    { name: rawItems[7].name, price: '21.99', note: rawItems[7].note },\n    { name: rawItems[8].name, price: '39.99', note: rawItems[8].note },\n  ];");
    
    code = code.replace(/GRILLADO&apos;S CHICKEN<br \/>\s*SPECIALS/g, "<span dangerouslySetInnerHTML={{ __html: t('chickenSpecials') }} />");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/ChickenSpecialsMenuSection.tsx', code);
}
