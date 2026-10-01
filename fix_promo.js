const fs = require('fs');

let content = fs.readFileSync('app/components/HomePromoSections.tsx', 'utf8');

// 1. Add import for motion if not present
if (!content.includes('import { motion } from "framer-motion"')) {
    content = content.replace(/import Image from 'next\/image';/, "import Image from 'next/image';\nimport { motion } from 'framer-motion';");
}

// 2. Wrap image with motion.div
content = content.replace(
    /<div className="w-full relative min-h-\[300px\] md:min-h-full">/g,
    `<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full relative min-h-[300px] md:min-h-full">`
);
content = content.replace(
    /alt="Fresh Grilled Chicken"([\s\S]*?)<\/div>/,
    `alt="Fresh Grilled Chicken"$1</motion.div>`
);
content = content.replace(
    /alt="Family Platter"([\s\S]*?)<\/div>/,
    `alt="Family Platter"$1</motion.div>`
);

// 3. Wrap heading
content = content.replace(
    /<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-black mb-4"/g,
    `<motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-black mb-4"`
);
content = content.replace(/<\/h2>/g, `</motion.h2>`);

// 4. Wrap text
content = content.replace(
    /<p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"/g,
    `<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"`
);
content = content.replace(/<\/p>/g, `</motion.p>`);

// 5. Wrap buttons wrapper
content = content.replace(
    /<div className="flex flex-col sm:flex-row gap-4"/g,
    `<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-4"`
);

// Manually fix closing tags for div wrapping the image and buttons
content = content.replace(
    /<Link href="https:\/\/grillados.bycalibre.ca\/location"([\s\S]*?)<\/Link>\s*<\/div>/g,
    `<Link href="https://grillados.bycalibre.ca/location"$1</Link>\n            </motion.div>`
);

fs.writeFileSync('app/components/HomePromoSections.tsx', content, 'utf8');
console.log('Updated HomePromoSections.tsx');
