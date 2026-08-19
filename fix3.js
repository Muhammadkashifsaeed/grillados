const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

// Service Reviews
en.ServiceReviews = {
  heading: 'Reviews',
  good: 'GOOD',
  basedOn: 'Based on 1,779 reviews',
  monthsAgo: 'months ago',
  ratingOnly: 'The user only left a rating.',
  review1: 'Harprith provided amazing services. Great food',
  review2: 'GOOd',
  review5: 'Great Customer Service and food was so delicious and cooked with perfection! Highly recommend'
};
fr.ServiceReviews = {
  heading: 'Avis',
  good: 'BON',
  basedOn: 'Basé sur 1 779 avis',
  monthsAgo: 'il y a des mois',
  ratingOnly: 'L\'utilisateur a seulement laissé une note.',
  review1: 'Harprith a fourni un service incroyable. Super nourriture',
  review2: 'BIEn',
  review5: 'Super service client et la nourriture était délicieuse et cuisinée à la perfection ! Fortement recommandé'
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/Services/ReviewsSection.tsx', 'utf8');

if (!code.includes("t('heading')")) {
    if (!code.includes("import { useTranslations }")) {
       code = code.replace("import ReviewCard from './ReviewCard';", "import ReviewCard from './ReviewCard';\nimport { useTranslations } from 'next-intl';");
    }

    code = code.replace(
`const reviewsData = [
  { avatarSrc: "/images/Ali Z.png",        name: "Ali Z",            date: "7 months ago", review: "Harprith provided amazing services. Great food" },
  { avatarSrc: "/images/Naz H.png",        name: "Naz H",            date: "7 months ago", review: "GOOd" },
  { avatarSrc: "/images/yttyts.png",       name: "Usama Ismail",     date: "7 months ago", review: "The user only left a rating." },
  { avatarSrc: "/images/Mohamed Nagy.png", name: "Mohamed Nagy",     date: "7 months ago", review: "This user only left a rating." },
  { avatarSrc: "/images/mansnsjd.png",     name: "Jeremias Almazan", date: "7 months ago", review: "Great Customer Service and food was so delicious and cooked with perfection! Highly recommend" },
  { avatarSrc: "/images/mnsnds.png",       name: "Ashmit Samyal",    date: "7 months ago", review: "The user only left a rating." },
  { avatarSrc: "/images/Aarif Amin.png",   name: "Aarif Amin",       date: "months ago",   review: "This user only left a rating." },
];`,
`// We generate reviews dynamically inside the component to use translations
const getReviewsData = (t: any) => [
  { avatarSrc: "/images/Ali Z.png",        name: "Ali Z",            date: \`7 \${t('monthsAgo')}\`, review: t('review1') },
  { avatarSrc: "/images/Naz H.png",        name: "Naz H",            date: \`7 \${t('monthsAgo')}\`, review: t('review2') },
  { avatarSrc: "/images/yttyts.png",       name: "Usama Ismail",     date: \`7 \${t('monthsAgo')}\`, review: t('ratingOnly') },
  { avatarSrc: "/images/Mohamed Nagy.png", name: "Mohamed Nagy",     date: \`7 \${t('monthsAgo')}\`, review: t('ratingOnly') },
  { avatarSrc: "/images/mansnsjd.png",     name: "Jeremias Almazan", date: \`7 \${t('monthsAgo')}\`, review: t('review5') },
  { avatarSrc: "/images/mnsnds.png",       name: "Ashmit Samyal",    date: \`7 \${t('monthsAgo')}\`, review: t('ratingOnly') },
  { avatarSrc: "/images/Aarif Amin.png",   name: "Aarif Amin",       date: t('monthsAgo'),   review: t('ratingOnly') },
];`);

    code = code.replace("const allCards = [...reviewsData, ...reviewsData];", "");

    code = code.replace("const ReviewsSection = () => {", "const ReviewsSection = () => {\n  const t = useTranslations('ServiceReviews');\n  const reviewsData = getReviewsData(t);\n  const allCards = [...reviewsData, ...reviewsData];");

    code = code.replace("Reviews", "{t('heading')}");
    code = code.replace("GOOD", "{t('good')}");
    code = code.replace('Based on <span className="font-bold text-gray-800">1,779 reviews</span>', '{t(\'basedOn\').split(\'1,779\')[0]}<span className="font-bold text-gray-800">1,779{t(\'basedOn\').split(\'1,779\')[1]}</span>');

    fs.writeFileSync('app/components/Services/ReviewsSection.tsx', code);
}
