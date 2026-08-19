const fs = require('fs');

const enFile = 'messages/en.json';
const frFile = 'messages/fr.json';
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.Voucher.getUpToText = "GET UP TO";
en.Voucher.discountText = "20% OFF";

fr.Voucher.getUpToText = "OBTENEZ JUSQU'À";
fr.Voucher.discountText = "20 % DE RABAIS";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

let codeModal = fs.readFileSync('app/components/VoucherModal.tsx', 'utf8');

codeModal = codeModal.replace("{t('getUpTo')} <br className=\"hidden md:block\" />{t('onEntireMenu')}", "{t('getUpToText')} <span className=\"text-[#FEC602]\">{t('discountText')}</span><br />{t('onEntireMenu')}");
    
fs.writeFileSync('app/components/VoucherModal.tsx', codeModal);

let codeCTA = fs.readFileSync('app/components/MenuVoucherCTA.tsx', 'utf8');
codeCTA = codeCTA.replace("{t('getUpTo')}", "{t('getUpToText')} <span className=\"text-[#FEC602] drop-shadow-lg\">{t('discountText')}</span>");
fs.writeFileSync('app/components/MenuVoucherCTA.tsx', codeCTA);

