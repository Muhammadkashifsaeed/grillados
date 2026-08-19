const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.AboutUs = {
  propertyHeading: 'Property',
  propertyDesc: 'You can gain from our comprehensive experience in property requirements & design, with access to both external and internal design teams. Innovative restaurant designs ensure our brand sets trends and maintains its position in the fast-pace casual dining market place.',
  smartHeading1: 'Being ',
  smartHeading2: 'Smart!',
  smartDesc: 'At <span className="text-[#FBC18A] font-bold">Grillado’s</span>, we believe healthy food is vital for good health. Our health-conscious menu is designed to cater to your health-conscious lifestyle. <span className="text-[#FBC18A] font-bold">Grillado’s</span> chicken is grilled to perfection, making it the smarter choice for a balanced life.',
  storyHeading1: 'it all started',
  storyHeading2: 'with a craving...',
  storyDesc1: 'Grillado’s™ is a casual dining restaurant that focuses on grilling the very best Portuguese chicken with a South African twist. That twist is our variety of world famous sauces.',
  storyDesc2: 'Located in the heart of Montreal, it has quickly become known for its fun and engaging atmosphere, as well as its multitude of flavours that keep customers happy and coming back for more…',
  votedText1: '<span className="text-[#FACC15]">Grillado’s™</span> was launched in Montreal back in 2015 and was voted the',
  votedText2: '"Hottest New Restaurant in Montreal"',
  votedText3: 'by Michael D’Alimonite of <span className="font-bold">Thrilist Media Group.</span>'
};

fr.AboutUs = {
  propertyHeading: 'Propriété',
  propertyDesc: 'Vous pouvez profiter de notre expérience complète en matière d\'exigences et de conception de propriétés, avec un accès à des équipes de conception externes et internes. Les conceptions de restaurants innovantes garantissent que notre marque établit les tendances et maintient sa position sur le marché de la restauration décontractée rapide.',
  smartHeading1: 'Soyez ',
  smartHeading2: 'Intelligent !',
  smartDesc: 'Chez <span className="text-[#FBC18A] font-bold">Grillado’s</span>, nous pensons qu\'une alimentation saine est vitale pour une bonne santé. Notre menu axé sur la santé est conçu pour répondre à votre style de vie soucieux de votre santé. Le poulet de <span className="text-[#FBC18A] font-bold">Grillado’s</span> est grillé à la perfection, ce qui en fait le choix le plus intelligent pour une vie équilibrée.',
  storyHeading1: 'tout a commencé',
  storyHeading2: 'avec une envie...',
  storyDesc1: 'Grillado’s™ est un restaurant décontracté qui se concentre sur les grillades du meilleur poulet portugais avec une touche sud-africaine. Cette touche est notre variété de sauces de renommée mondiale.',
  storyDesc2: 'Situé au cœur de Montréal, il est rapidement devenu connu pour son atmosphère amusante et engageante, ainsi que pour sa multitude de saveurs qui gardent les clients heureux et reviennent pour plus…',
  votedText1: '<span className="text-[#FACC15]">Grillado’s™</span> a été lancé à Montréal en 2015 et a été élu',
  votedText2: '"Nouveau restaurant le plus branché de Montréal"',
  votedText3: 'par Michael D’Alimonite du <span className="font-bold">Thrilist Media Group.</span>'
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

// Smart
let sCode = fs.readFileSync('app/components/AboutUsSmart.tsx', 'utf8');
if (!sCode.includes("t('smartHeading1')")) {
    if (!sCode.includes("import { useTranslations }")) {
       sCode = sCode.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { useTranslations } from 'next-intl';");
    }
    sCode = sCode.replace("const AboutUsSmart = () => {", "const AboutUsSmart = () => {\n  const t = useTranslations('AboutUs');");
    sCode = sCode.replace(/Being <br \/>/g, "{t('smartHeading1')} <br />");
    sCode = sCode.replace(/<span className="text-\[#FACC15\] drop-shadow-sm">Smart!<\/span>/g, '<span className="text-[#FACC15] drop-shadow-sm">{t(\'smartHeading2\')}</span>');
    sCode = sCode.replace(/At <span className="text-\[#FBC18A\] font-bold">Grillado\?Ts<\/span>, we believe healthy food is vital for good health\. Our health-conscious menu is designed to cater to your health-conscious lifestyle\. <span className="text-\[#FBC18A\] font-bold">Grillado\?Ts<\/span> chicken is grilled to perfection, making it the smarter choice for a balanced life\./g, 'At <span className="text-[#FBC18A] font-bold">Grillado&apos;s</span>, we believe healthy food is vital for good health. Our health-conscious menu is designed to cater to your health-conscious lifestyle. <span className="text-[#FBC18A] font-bold">Grillado&apos;s</span> chicken is grilled to perfection, making it the smarter choice for a balanced life.');
    sCode = sCode.replace(/At <span className="text-\[#FBC18A\] font-bold">Grillado&apos;s<\/span>, we believe healthy food is vital for good health\. Our health-conscious menu is designed to cater to your health-conscious lifestyle\. <span className="text-\[#FBC18A\] font-bold">Grillado&apos;s<\/span> chicken is grilled to perfection, making it the smarter choice for a balanced life\./g, '{t.rich(\'smartDesc\', { span: (chunks) => <span className="text-[#FBC18A] font-bold">{chunks}</span> })}');
    fs.writeFileSync('app/components/AboutUsSmart.tsx', sCode);
}
