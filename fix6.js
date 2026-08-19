const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.AboutUsCertified = {
  heading1: 'Being ',
  heading2: 'Healthy!',
  cards: [
    {
      heading: 'Taste Meets Nutrition',
      text: 'Our chicken is sourced from grain-fed, certified Halal distributors. We prioritize nutrition without compromising on taste.'
    },
    {
      heading: 'Freshness Unleashed',
      text: 'Our chicken is prepared fresh, never frozen. We take pride in meticulously trimming off excess fat, and marinating in our signature sauce for a full 24 hours to create a healthier, flavour-packed dining experience.'
    },
    {
      heading: 'Grilling Magic',
      text: 'Our chicken is masterfully grilled to perfection over an open flame. We are committed to delivering a burst of flavour while keeping cholesterol and fat content low.'
    },
    {
      heading: 'Craft Your Perfect Meal',
      text: 'Our chicken is the perfect canvas for achieving culinary perfection. We offer an array of delectable sauces, including Lemon & Herb, Mild, BBQ, Hot, and Extra Hot, to personalize your healthy dining experience.'
    }
  ]
};

fr.AboutUsCertified = {
  heading1: 'Soyez ',
  heading2: 'En santé !',
  cards: [
    {
      heading: 'Le goût rencontre la nutrition',
      text: 'Notre poulet provient de distributeurs certifiés Halal nourris au grain. Nous priorisons la nutrition sans compromettre le goût.'
    },
    {
      heading: 'Fraîcheur libérée',
      text: 'Notre poulet est préparé frais, jamais congelé. Nous sommes fiers de couper méticuleusement l\'excès de gras et de mariner dans notre sauce signature pendant 24 heures pour créer une expérience culinaire plus saine et riche en saveurs.'
    },
    {
      heading: 'Magie de la grillade',
      text: 'Notre poulet est magistralement grillé à la perfection sur une flamme nue. Nous nous engageons à offrir une explosion de saveurs tout en maintenant un faible taux de cholestérol et de matières grasses.'
    },
    {
      heading: 'Créez votre repas parfait',
      text: 'Notre poulet est la toile parfaite pour atteindre la perfection culinaire. Nous proposons une gamme de sauces délectables, notamment Citron & Herbes, Doux, BBQ, Épicé et Extra Épicé, pour personnaliser votre expérience culinaire saine.'
    }
  ]
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/AboutUsCertified.tsx', 'utf8');

if (!code.includes("const t = useTranslations('AboutUsCertified');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { useTranslations } from 'next-intl';");
    }
    code = code.replace("const AboutUsCertified = () => {", "const AboutUsCertified = () => {\n  const t = useTranslations('AboutUsCertified');");
    
    code = code.replace(/const cards = \[[^]*?\];/, `// Cards are managed by translations now
  const rawCards = t.raw('cards') as { heading: string, text: string }[];
  const cards = [
    { id: 1, image: '/images/certified1.png', heading: rawCards[0].heading, text: rawCards[0].text },
    { id: 2, image: '/images/certified2.png', heading: rawCards[1].heading, text: rawCards[1].text },
    { id: 3, image: '/images/certified3.png', heading: rawCards[2].heading, text: rawCards[2].text },
    { id: 4, image: '/images/certified4.png', heading: rawCards[3].heading, text: rawCards[3].text },
  ];`);
    
    code = code.replace(/Being <br \/>/g, "{t('heading1')} <br />");
    code = code.replace(/<span className="text-\[#FACC15\] drop-shadow-sm">Healthy!<\/span>/g, "<span className=\"text-[#FACC15] drop-shadow-sm\">{t('heading2')}</span>");
    
    fs.writeFileSync('app/components/AboutUsCertified.tsx', code);
}
