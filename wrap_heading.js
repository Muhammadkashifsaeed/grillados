const fs = require('fs');

let text = fs.readFileSync('app/components/NewDishesSection.tsx', 'utf8');
// Fix the wrapping
text = text.replace(
  /{[^}]*Heading[^}]*}\s*<motion\.h2([^>]*)>([^<]*)<\/motion\.h2>/g,
  (match, p1, p2) => {
    if (match.includes('<div className="w-full text-center">')) return match; // already wrapped
    return `{/* Heading */}\n        <div className="w-full flex justify-center text-center">\n          <motion.h2${p1}>${p2}</motion.h2>\n        </div>`;
  }
);
fs.writeFileSync('app/components/NewDishesSection.tsx', text, 'utf8');
console.log('Done wrapping heading in NewDishesSection.tsx');
