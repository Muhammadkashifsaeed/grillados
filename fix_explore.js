const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Blog = en.Blog || {};
fr.Blog = fr.Blog || {};

en.Blog.exploreArticles = "Explore Articles";
en.Blog.readMore = "Read More";
en.Blog.loadMore = "Load More";

fr.Blog.exploreArticles = "Explorer les Articles";
fr.Blog.readMore = "Lire la suite";
fr.Blog.loadMore = "Charger plus";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let code = fs.readFileSync('app/components/ExploreArticles.tsx', 'utf8');

if (!code.includes("const t = useTranslations('Blog');")) {
    if (!code.includes("import { useTranslations }")) {
        code = code.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useTranslations } from 'next-intl';");
    }
    
    code = code.replace("export const ExploreArticles = () => {", "export const ExploreArticles = () => {\n  const t = useTranslations('Blog');");
    
    code = code.replace("Explore Articles", "{t('exploreArticles')}");
    code = code.replace("Read More", "{t('readMore')}");
    code = code.replace("Load More", "{t('loadMore')}");
    
    fs.writeFileSync('app/components/ExploreArticles.tsx', code);
}
