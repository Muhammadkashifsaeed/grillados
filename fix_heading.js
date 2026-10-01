const fs = require('fs');

let text = fs.readFileSync('app/components/NewDishesSection.tsx', 'utf8');
text = text.replace(
  /className="text-center uppercase tracking-wide mb-2"/,
  'className="transform -rotate-2 inline-block text-center uppercase tracking-wide mb-2"'
);
text = text.replace(
  /<motion\.h2[^>]*>(.|\n)*?<\/motion\.h2>/,
  (match) => `<div className="text-center">\n        ${match}\n        </div>`
);
fs.writeFileSync('app/components/NewDishesSection.tsx', text, 'utf8');

let en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
if (en.NewDishesSection) {
  en.NewDishesSection.heading = 'The New Grillados Dishes';
}
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');

try {
  let fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  if (fr.NewDishesSection) {
    fr.NewDishesSection.heading = 'The New Grillados Dishes';
  }
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2), 'utf8');
} catch (e) {}

console.log('done');
