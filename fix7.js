const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.ContactForm = {
  heading: 'Get in touch',
  desc: 'Hey, we’d love to have a conversation with you about our food and services. Feel free to contact us by filling in our form below!',
  fullName: 'Full Name*',
  address: 'Address',
  email: 'Email*',
  phone: 'Phone Number*',
  message: 'Message',
  success: 'Success!',
  privacy: 'Privacy',
  help: 'Help',
  submit: 'SUBMIT'
};

fr.ContactForm = {
  heading: 'Entrer en contact',
  desc: 'Hé, nous aimerions avoir une conversation avec vous au sujet de notre nourriture et de nos services. N\'hésitez pas à nous contacter en remplissant notre formulaire ci-dessous !',
  fullName: 'Nom complet*',
  address: 'Adresse',
  email: 'E-mail*',
  phone: 'Numéro de téléphone*',
  message: 'Message',
  success: 'Succès !',
  privacy: 'Confidentialité',
  help: 'Aide',
  submit: 'SOUMETTRE'
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/ContactFormSection.tsx', 'utf8');

if (!code.includes("const t = useTranslations('ContactForm');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    code = code.replace("export default function ContactFormSection() {", "export default function ContactFormSection() {\n  const t = useTranslations('ContactForm');");
    
    code = code.replace(/Get in touch/g, "{t('heading')}");
    code = code.replace(/Hey, we’d love to have a conversation with you about our food and services\. Feel free to contact us by filling in our form below!/g, "{t('desc')}");
    code = code.replace(/placeholder="Full Name\*"/g, "placeholder={t('fullName')}");
    code = code.replace(/placeholder="Address"/g, "placeholder={t('address')}");
    code = code.replace(/placeholder="Email\*"/g, "placeholder={t('email')}");
    code = code.replace(/placeholder="Phone Number\*"/g, "placeholder={t('phone')}");
    code = code.replace(/placeholder="Message"/g, "placeholder={t('message')}");
    code = code.replace(/>Success!</g, ">{t('success')}<");
    code = code.replace(/Privacy • Help/g, "{t('privacy')} • {t('help')}");
    code = code.replace(/SUBMIT/g, "{t('submit')}");

    fs.writeFileSync('app/components/ContactFormSection.tsx', code);
}
