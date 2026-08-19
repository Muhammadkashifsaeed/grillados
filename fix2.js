const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

// Wedding
en.WeddingCatering = {
  heading: 'Wedding catering service',
  description: 'Your wedding is a once-in-a-lifetime event. Elevate your catering service to the next level with Grillado\'s certified halal dishes, prepared with fresh ingredients and the best Portuguese chicken in Canada.',
  contactUs: 'Contact us'
};
fr.WeddingCatering = {
  heading: 'Service traiteur de mariage',
  description: 'Votre mariage est un événement unique dans une vie. Amenez votre service traiteur au niveau supérieur avec les plats certifiés halal de Grillado\'s, préparés avec des ingrédients frais et le meilleur poulet portugais au Canada.',
  contactUs: 'Nous contacter'
};

// Events
en.EventsCatering = {
  heading: 'Corporate events and private parties',
  description: 'Throwing an event for your company or a private party for your friends and family? You can count on Grillado\'s. Just contact us and we will find the best menu combinations for your event.',
  contactUs: 'Contact us'
};
fr.EventsCatering = {
  heading: 'Événements d\'entreprise et fêtes privées',
  description: 'Vous organisez un événement pour votre entreprise ou une fête privée pour vos amis et votre famille ? Vous pouvez compter sur Grillado\'s. Contactez-nous et nous trouverons les meilleures combinaisons de menu pour votre événement.',
  contactUs: 'Nous contacter'
};

// Delivery
en.DeliveryPickup = {
  heading: 'Delivery & Pick-up service',
  description: 'Your location is our limit. Contact us to learn more about our delivery and pick-up options.',
  contactUs: 'Contact us'
};
fr.DeliveryPickup = {
  heading: 'Service de livraison et de cueillette',
  description: 'Votre emplacement est notre limite. Contactez-nous pour en savoir plus sur nos options de livraison et de cueillette.',
  contactUs: 'Nous contacter'
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

// File 1: Wedding
let wCode = fs.readFileSync('app/components/Services/WeddingCateringSection.tsx', 'utf8');
if (!wCode.includes("t('heading')")) {
    wCode = wCode.replace("export default function WeddingCateringSection() {\n  const locale = useLocale();", "export default function WeddingCateringSection() {\n  const locale = useLocale();\n  const t = useTranslations('WeddingCatering');");
    wCode = wCode.replace("Wedding catering service", "{t('heading')}");
    wCode = wCode.replace("Your wedding is a once-in-a-lifetime event. Elevate your catering service to the next level with Grillado&apos;s certified halal dishes, prepared with fresh ingredients and the best Portuguese chicken in Canada.", "{t('description')}");
    wCode = wCode.replace(">Contact us<", ">{t('contactUs')}<");
    fs.writeFileSync('app/components/Services/WeddingCateringSection.tsx', wCode);
}

// File 2: Events
let eCode = fs.readFileSync('app/components/Services/EventsCateringSection.tsx', 'utf8');
if (!eCode.includes("t('heading')")) {
    if (!eCode.includes("import { useTranslations }")) {
       eCode = eCode.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    eCode = eCode.replace("export default function EventsCateringSection() {", "export default function EventsCateringSection() {\n  const t = useTranslations('EventsCatering');");
    eCode = eCode.replace("Corporate events and private parties", "{t('heading')}");
    eCode = eCode.replace("Throwing an event for your company or a private party for your friends and family? You can count on Grillado&apos;s. Just contact us and we will find the best menu combinations for your event.", "{t('description')}");
    eCode = eCode.replace(">Contact us<", ">{t('contactUs')}<");
    fs.writeFileSync('app/components/Services/EventsCateringSection.tsx', eCode);
}

// File 3: Delivery
let dCode = fs.readFileSync('app/components/Services/DeliveryPickupSection.tsx', 'utf8');
if (!dCode.includes("t('heading')")) {
    if (!dCode.includes("import { useTranslations }")) {
       dCode = dCode.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslations } from 'next-intl';");
    }
    dCode = dCode.replace("export default function DeliveryPickupSection() {", "export default function DeliveryPickupSection() {\n  const t = useTranslations('DeliveryPickup');");
    dCode = dCode.replace("Delivery & Pick-up service", "{t('heading')}");
    dCode = dCode.replace("Your location is our limit. Contact us to learn more about our delivery and pick-up options.", "{t('description')}");
    dCode = dCode.replace(">Contact us<", ">{t('contactUs')}<");
    fs.writeFileSync('app/components/Services/DeliveryPickupSection.tsx', dCode);
}
