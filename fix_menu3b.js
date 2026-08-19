const fs = require('fs');

let code = fs.readFileSync('app/components/ComboDePouletMenuSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Menu');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const ComboDePouletMenuSection = () => {", "export const ComboDePouletMenuSection = () => {\n  const t = useTranslations('Menu');\n  const rawItems = t.raw('comboDePouletMenu');\n  const menuItemsLocal = [\n    { name: rawItems[0].name, price: '15.99', note: rawItems[0].note },\n    { name: rawItems[1].name, price: '16.99', note: rawItems[1].note },\n    { name: rawItems[2].name, price: '18.99' },\n    { name: rawItems[3].name, price: '16.99' },\n    { name: rawItems[4].name, price: '19.99', note: rawItems[4].note },\n    { name: rawItems[5].name, price: '20.99' },\n    { name: rawItems[6].name, price: '21.99' },\n  ];");
    
    code = code.replace(/COMBO DE<br \/>POULET/g, "<span dangerouslySetInnerHTML={{ __html: t('comboDePoulet') }} />");
    code = code.replace(/Ajoutez un 2[^]+? accompagnement pour 4,99/g, "{t('addSide')}");
    code = code.replace(/menuItems\.map/g, "menuItemsLocal.map");
    
    fs.writeFileSync('app/components/ComboDePouletMenuSection.tsx', code);
}
