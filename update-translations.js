const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'messages', 'en.json');
const frPath = path.join(__dirname, 'messages', 'fr.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

en.DealsNewsletter = {
  headingStart: "Stay on top of all our ",
  headingHighlight: "Grillado’s",
  headingEnd: " News,",
  headingEnd2: "Subscribe to our newsletter",
  descriptionLine1: "Be the first to know about Grillado’s news and events,",
  descriptionLine2: "subscribe to our newsletter and stay connected!",
  firstNamePlaceholder: "First Name*",
  emailPlaceholder: "Email*",
  subscribeBtn: "Subscribe",
  successTitle: "Thank you for subscribing!",
  successDesc: "You will receive our updates soon."
};

fr.DealsNewsletter = {
  headingStart: "Restez au courant de tous nos ",
  headingHighlight: "Grillado’s",
  headingEnd: " Actualités,",
  headingEnd2: "abonnez-vous à notre newsletter",
  descriptionLine1: "Soyez les premiers informés des nouvelles et événements de Grillado,",
  descriptionLine2: "abonnez-vous à notre newsletter et restez connectés!",
  firstNamePlaceholder: "Prénom*",
  emailPlaceholder: "Courriel*",
  subscribeBtn: "S'abonner",
  successTitle: "Merci de vous être abonné!",
  successDesc: "Vous recevrez bientôt nos mises à jour."
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2));

console.log('Successfully updated DealsNewsletter translations!');
