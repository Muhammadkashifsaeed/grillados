const fs = require('fs');

const files = [
  'app/components/ChickenSpecialsSection.tsx',
  'app/components/BeefLambSpecialsSection.tsx',
  'app/components/SandwichesSection.tsx',
  'app/components/PlattersSection.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace <p ...> with <motion.p ... initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
    content = content.replace(
      /<p className="mb-8"/g,
      '<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mb-8"'
    );
    
    // Replace </p> with </motion.p>
    // But only the one after the description
    content = content.replace(
      /({t\('(?:description|desc|desc2|desc3)'\)}\s*)<\/p>/g,
      '$1</motion.p>'
    );
    
    // In some files, there are multiple paragraphs or it's wrapped differently, so let's do a safer replace:
    content = content.replace(
      /<\/p>/g,
      (match, offset, string) => {
        // If the preceding string has a <motion.p that hasn't been closed, close it
        return match; // Actually, replacing all </p> with </motion.p> is dangerous if we didn't replace all <p>
      }
    );
    
    // Let's just do a manual replace for the exact paragraph block
    content = content.replace(
      /<p className="mb-8"([\s\S]*?)<\/p>/g,
      '<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mb-8"$1</motion.p>'
    );
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}
