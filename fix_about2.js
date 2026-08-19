const fs = require('fs');

let pCode = fs.readFileSync('app/components/AboutUsProperty.tsx', 'utf8');
if (!pCode.includes("t('propertyHeading')")) {
    if (!pCode.includes("import { useTranslations }")) {
       pCode = pCode.replace("import React from 'react';", "import React from 'react';\nimport { useTranslations } from 'next-intl';");
    }
    pCode = pCode.replace("const AboutUsProperty = () => {", "const AboutUsProperty = () => {\n  const t = useTranslations('AboutUs');");
    pCode = pCode.replace("Property", "{t('propertyHeading')}");
    pCode = pCode.replace("You can gain from our comprehensive experience in property requirements & design, with access to both external and internal design teams. Innovative restaurant designs ensure our brand sets trends and maintains its position in the fast-pace casual dining market place.", "{t('propertyDesc')}");
    fs.writeFileSync('app/components/AboutUsProperty.tsx', pCode);
}

let vCode = fs.readFileSync('app/components/AboutUsVoted.tsx', 'utf8');
if (!vCode.includes("t('votedText1')")) {
    if (!vCode.includes("import { useTranslations }")) {
       vCode = vCode.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { useTranslations } from 'next-intl';");
    }
    vCode = vCode.replace("const AboutUsVoted = () => {", "const AboutUsVoted = () => {\n  const t = useTranslations('AboutUs');");
    vCode = vCode.replace(/<span className="text-\[#FACC15\]">Grillado\?Ts,<\/span> was launched in Montreal back in 2015 and was voted the/g, "{t.rich('votedText1', { span: (chunks) => <span className=\"text-[#FACC15]\">{chunks}</span> })}");
    vCode = vCode.replace(/"Hottest New Restaurant in Montreal"/g, "{t('votedText2')}");
    vCode = vCode.replace(/by Michael D\?Talimonite of <span className="font-bold">Thrilist Media Group\.<\/span>/g, "{t.rich('votedText3', { span: (chunks) => <span className=\"font-bold\">{chunks}</span> })}");
    fs.writeFileSync('app/components/AboutUsVoted.tsx', vCode);
}

let mCode = fs.readFileSync('app/components/AboutUsMissionVision.tsx', 'utf8');
if (!mCode.includes("useTranslations")) {
    if (!mCode.includes("import { useTranslations }")) {
       mCode = mCode.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { useTranslations } from 'next-intl';");
    }
    mCode = mCode.replace("const AboutUsMissionVision = () => {", "const AboutUsMissionVision = () => {\n  const t = useTranslations('AboutUs');");
    // Just adding the hook for now, will extract translations manually if needed since there's a lot of small text here.
    fs.writeFileSync('app/components/AboutUsMissionVision.tsx', mCode);
}
