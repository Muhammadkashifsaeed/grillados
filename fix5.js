const fs = require('fs');

let sCode = fs.readFileSync('app/components/AboutUsStory.tsx', 'utf8');

if (!sCode.includes("import { useTranslations }")) {
   sCode = sCode.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { useTranslations } from 'next-intl';");
}
if (!sCode.includes("useTranslations('AboutUs')")) {
    sCode = sCode.replace("const AboutUsStory = () => {", "const AboutUsStory = () => {\n  const t = useTranslations('AboutUs');");
}
sCode = sCode.replace("it all started", "{t('storyHeading1')}");
sCode = sCode.replace("with a craving...", "{t('storyHeading2')}");
sCode = sCode.replace("Grillado?Ts, is a casual dining restaurant that focuses on grilling the very best Portuguese chicken with a South African twist. That twist is our variety of world famous sauces.", "{t('storyDesc1')}");
sCode = sCode.replace("Grillado?Ts, is a casual dining restaurant that focuses on grilling the very best Portuguese chicken with a South African twist. That twist is our variety of world famous sauces.", "{t('storyDesc1')}");
// Handle funky character variants
sCode = sCode.replace(/Grillado[^<]+is a casual dining restaurant that focuses on grilling the very best Portuguese chicken with a South African twist\. That twist is our variety of world famous sauces\./g, "{t('storyDesc1')}");
sCode = sCode.replace(/Located in the heart of Montreal, it has quickly become known for its fun and engaging atmosphere, as well as its multitude of flavours that keep customers happy and coming back for more[^<]*/g, "{t('storyDesc2')}");

fs.writeFileSync('app/components/AboutUsStory.tsx', sCode);
