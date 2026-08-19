const fs = require('fs');

let vCode = fs.readFileSync('app/components/AboutUsVoted.tsx', 'utf8');
if (!vCode.includes("import { useTranslations }")) {
    vCode = vCode.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { useTranslations } from 'next-intl';");
}
if (!vCode.includes("useTranslations('AboutUs')")) {
    vCode = vCode.replace("const AboutUsVoted = () => {", "const AboutUsVoted = () => {\n  const t = useTranslations('AboutUs');");
}
vCode = vCode.replace(/<span className="text-\[#FACC15\]">Grillado[^<]+<\/span> was launched in Montreal back in 2015 and was voted the/g, "{t.rich('votedText1', { span: (chunks) => <span className=\"text-[#FACC15]\">{chunks}</span> })}");
vCode = vCode.replace(/"Hottest New Restaurant in Montreal"/g, "{t('votedText2')}");
vCode = vCode.replace(/by Michael D[^<]+ of <span className="font-bold">Thrilist Media Group\.<\/span>/g, "{t.rich('votedText3', { span: (chunks) => <span className=\"font-bold\">{chunks}</span> })}");
fs.writeFileSync('app/components/AboutUsVoted.tsx', vCode);
