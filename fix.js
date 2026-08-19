const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

// Birthday
en.BirthdayCatering = {
  heading: 'birthday!',
  description: 'With Grillado\'s countless menu choices, no one will be left out in this ocean of culinary delights. Let Grillado make your birthday… delicious.',
  contactUs: 'Contact us'
};
fr.BirthdayCatering = {
  heading: 'anniversaire !',
  description: 'Avec les innombrables choix de menu de Grillado\'s, personne ne sera laissé pour compte dans cet océan de délices culinaires. Laissez Grillado rendre votre anniversaire… délicieux.',
  contactUs: 'Nous contacter'
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/Services/BirthdayCateringSection.tsx', 'utf8');
if (!code.includes("t('heading')")) {
    code = code.replace("export default function BirthdayCateringSection() {\n  const locale = useLocale();", "export default function BirthdayCateringSection() {\n  const locale = useLocale();\n  const t = useTranslations('BirthdayCatering');");
    code = code.replace("birthday!", "{t('heading')}");
    code = code.replace("With Grillado&apos;s countless menu choices, no one will be left out in this ocean of culinary delights. Let Grillado make your birthday… delicious.", "{t('description')}");
    code = code.replace(">Contact us<", ">{t('contactUs')}<");
    fs.writeFileSync('app/components/Services/BirthdayCateringSection.tsx', code);
}
