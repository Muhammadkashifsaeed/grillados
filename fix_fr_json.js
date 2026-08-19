const fs = require('fs');
const frFile = 'messages/fr.json';
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

fr.CateringPartners = fr.CateringPartners || {};
fr.CateringPartners.smallHeading = "Laissez-nous le Gril — Concentrez-vous sur les Souvenirs";

// Optional: update description to match the English exactly if it's currently completely different, 
// but just adding smallHeading is enough to fix the crash.
fr.CateringPartners.description = "Des dîners intimes en famille aux festins des fêtes, Grillados apporte la saveur\ndirectement à votre porte. Dites-nous ce dont vous avez besoin — nous faisons des commandes\nsur mesure car chaque célébration mérite quelque chose de spécial.\n\nDesservant Cambridge · Laval · Milton · Mississauga    Groupes de 10 et plus\nFrais grillé, jamais congelé    Appelez votre succursale la plus proche pour réserver";

fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));
console.log("Fixed fr.json");
