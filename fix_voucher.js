const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Voucher = en.Voucher || {};
fr.Voucher = fr.Voucher || {};

en.Voucher.getUpTo = "GET UP TO 20% OFF";
en.Voucher.onEntireMenu = "On The Entire Menu.";
en.Voucher.clickToGet = "Click on 'Get your Voucher Now' and enjoy up to 20% off at all Grillados branches across Canada!";
en.Voucher.getVoucherNow = "Get your Voucher Now";
en.Voucher.fillOutForm = "Fill out the form to get your Discounted Voucher";
en.Voucher.firstName = "First Name*";
en.Voucher.enterFirstName = "Enter your first name";
en.Voucher.email = "Email*";
en.Voucher.enterEmail = "Enter your email address";
en.Voucher.phone = "Phone";
en.Voucher.iAgree = "I agree to receive SMS notifications and marketing from Grillado's. Msg & data rates may apply. Reply STOP to unsubscribe, HELP for help.";
en.Voucher.privacyPolicy = "Privacy Policy";
en.Voucher.termsOfService = "Terms of Service";
en.Voucher.getYourVoucher = "GET YOUR VOUCHER";
en.Voucher.alertAgree = "Please agree to the terms to continue.";
en.Voucher.alertSent = "Voucher sent! Check your email/SMS.";

fr.Voucher.getUpTo = "OBTENEZ JUSQU'À 20 % DE RABAIS";
fr.Voucher.onEntireMenu = "Sur tout le menu.";
fr.Voucher.clickToGet = "Cliquez sur 'Obtenez votre coupon maintenant' et profitez d'un rabais allant jusqu'à 20 % dans toutes les succursales Grillado's à travers le Canada !";
fr.Voucher.getVoucherNow = "Obtenez votre coupon maintenant";
fr.Voucher.fillOutForm = "Remplissez le formulaire pour obtenir votre coupon de réduction";
fr.Voucher.firstName = "Prénom*";
fr.Voucher.enterFirstName = "Entrez votre prénom";
fr.Voucher.email = "E-mail*";
fr.Voucher.enterEmail = "Entrez votre adresse e-mail";
fr.Voucher.phone = "Téléphone";
fr.Voucher.iAgree = "J'accepte de recevoir des notifications SMS et du marketing de Grillado's. Des frais de messagerie et de données peuvent s'appliquer. Répondez STOP pour vous désabonner, HELP pour obtenir de l'aide.";
fr.Voucher.privacyPolicy = "Politique de confidentialité";
fr.Voucher.termsOfService = "Conditions d'utilisation";
fr.Voucher.getYourVoucher = "OBTENEZ VOTRE COUPON";
fr.Voucher.alertAgree = "Veuillez accepter les conditions pour continuer.";
fr.Voucher.alertSent = "Coupon envoyé ! Vérifiez vos e-mails/SMS.";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

// Update MenuVoucherCTA.tsx
let codeCTA = fs.readFileSync('app/components/MenuVoucherCTA.tsx', 'utf8');

if (!codeCTA.includes("const t = useTranslations('Voucher');")) {
    if (!codeCTA.includes("import { useTranslations }")) {
        codeCTA = codeCTA.replace("import VoucherModal from './VoucherModal';", "import VoucherModal from './VoucherModal';\nimport { useTranslations } from 'next-intl';");
    }
    
    codeCTA = codeCTA.replace("const MenuVoucherCTA = () => {", "const MenuVoucherCTA = () => {\n  const t = useTranslations('Voucher');");
    
    codeCTA = codeCTA.replace("GET UP TO 20% OFF", "{t('getUpTo')}");
    codeCTA = codeCTA.replace("On The Entire Menu.", "{t('onEntireMenu')}");
    codeCTA = codeCTA.replace("Click on &apos;Get your Voucher Now&apos; and enjoy up to 20% off at all Grillados branches across Canada!", "{t('clickToGet')}");
    codeCTA = codeCTA.replace("Get your Voucher Now", "{t('getVoucherNow')}");
    
    fs.writeFileSync('app/components/MenuVoucherCTA.tsx', codeCTA);
}

// Update VoucherModal.tsx
let codeModal = fs.readFileSync('app/components/VoucherModal.tsx', 'utf8');

if (!codeModal.includes("const t = useTranslations('Voucher');")) {
    if (!codeModal.includes("import { useTranslations }")) {
        codeModal = codeModal.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    
    codeModal = codeModal.replace("export default function VoucherModal({ isOpen, onClose }: VoucherModalProps) {", "export default function VoucherModal({ isOpen, onClose }: VoucherModalProps) {\n  const t = useTranslations('Voucher');");
    
    codeModal = codeModal.replace("alert('Please agree to the terms to continue.');", "alert(t('alertAgree') || 'Please agree to the terms to continue.');");
    codeModal = codeModal.replace("alert(\"Voucher sent! Check your email/SMS.\");", "alert(t('alertSent') || \"Voucher sent! Check your email/SMS.\");");
    
    codeModal = codeModal.replace("GET UP TO <span className=\"text-\[#FEC602\]\">20% OFF<\/span><br \/>On The Entire Menu.", "{t('getUpTo')} <br className=\"hidden md:block\" />{t('onEntireMenu')}");
    codeModal = codeModal.replace("Fill out the form to get your Discounted Voucher", "{t('fillOutForm')}");
    codeModal = codeModal.replace("First Name*", "{t('firstName')}");
    codeModal = codeModal.replace("Enter your first name", "{t('enterFirstName')}");
    codeModal = codeModal.replace(">Email*<", ">{t('email')}<");
    codeModal = codeModal.replace("Enter your email address", "{t('enterEmail')}");
    codeModal = codeModal.replace(">Phone<", ">{t('phone')}<");
    codeModal = codeModal.replace("I agree to receive SMS notifications and marketing from Grillado&apos;s. Msg & data rates may apply. Reply STOP to unsubscribe, HELP for help.", "{t('iAgree')}");
    codeModal = codeModal.replace("Privacy Policy", "{t('privacyPolicy')}");
    codeModal = codeModal.replace("Terms of Service", "{t('termsOfService')}");
    codeModal = codeModal.replace("GET YOUR VOUCHER", "{t('getYourVoucher')}");
    
    fs.writeFileSync('app/components/VoucherModal.tsx', codeModal);
}
