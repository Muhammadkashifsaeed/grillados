const fs = require('fs');
const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

if (!en.FranchiseForm.turnstileAlert) {
  en.FranchiseForm.turnstileAlert = 'Please complete the Turnstile verification.';
  fr.FranchiseForm.turnstileAlert = 'Veuillez compléter la vérification Turnstile.';
  fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
  fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));
}
