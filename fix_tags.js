const fs = require('fs');
let file = 'app/components/HomePromoSections.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<p\s*className="mb-8"/g,
  '<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mb-8"'
);

fs.writeFileSync(file, content, 'utf8');
