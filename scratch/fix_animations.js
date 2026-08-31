const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Admin/Desktop/grillados/grillados/app/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('MenuSection.tsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let c = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (c.includes('initial={{ opacity: 0, y: 50 }}')) {
    // If it's the LEFT column, make it fade from left (x: -50)
    if (c.includes('LEFT: Image') || c.includes('Left: Image') || c.includes('fade LEFT')) {
        c = c.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*50\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0,\s*y:\s*0\s*\}\}/g, 
        'initial={{ opacity: 0, x: -50 }}\n            whileInView={{ opacity: 1, x: 0 }}');
    } else {
        // Assume RIGHT column, fade from right (x: 50)
        c = c.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*50\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0,\s*y:\s*0\s*\}\}/g, 
        'initial={{ opacity: 0, x: 50 }}\n            whileInView={{ opacity: 1, x: 0 }}');
    }
    modified = true;
  }

  // Replace the inner 2 images in Appetizers
  if (f === 'AppetizersMenuSection.tsx') {
    c = c.replace(
      /<div\s*className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(0 0, 62% 0, 38% 100%, 0 100%\)' \}\}\s*>/g,
      '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(0 0, 62% 0, 38% 100%, 0 100%)\' }}>'
    );
    c = c.replace(
      /<div\s*className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(64% 0, 100% 0, 100% 100%, 40% 100%\)' \}\}\s*>/g,
      '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)\' }}>'
    );
    // Replace closing tags
    c = c.replace(/<\/div>\s*\{\/\* Right Image \(Wings\) \*\/\}/g, '</motion.div>\n                {/* Right Image (Wings) */}');
    c = c.replace(/<\/div>\s*<\/div>\s*\{\/\* CTA Voucher/g, '</motion.div>\n              </div>\n              {/* CTA Voucher');
    modified = true;
  }

  if (f === 'BeefLambSpecialsMenuSection.tsx') {
    c = c.replace(
      /<div\s*className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(0 0, 62% 0, 38% 100%, 0 100%\)' \}\}\s*>/g,
      '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(0 0, 62% 0, 38% 100%, 0 100%)\' }}>'
    );
    c = c.replace(
      /<div\s*className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(64% 0, 100% 0, 100% 100%, 40% 100%\)' \}\}\s*>/g,
      '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)\' }}>'
    );
    c = c.replace(/<\/div>\s*\{\/\* Right Image \(Burgers\) \*\/\}/g, '</motion.div>\n                {/* Right Image (Burgers) */}');
    c = c.replace(/<\/div>\s*<\/div>\s*\{\/\* CTA Voucher/g, '</motion.div>\n              </div>\n              {/* CTA Voucher');
    modified = true;
  }

  if (f === 'DessertMenuSection.tsx') {
    c = c.replace(
      /<div\s*className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(0 0, 62% 0, 38% 100%, 0 100%\)' \}\}\s*>/g,
      '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(0 0, 62% 0, 38% 100%, 0 100%)\' }}>'
    );
    c = c.replace(
      /<div\s*className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(64% 0, 100% 0, 100% 100%, 40% 100%\)' \}\}\s*>/g,
      '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)\' }}>'
    );
    c = c.replace(/<\/div>\s*\{\/\* Right Image \(Cake\) \*\/\}/g, '</motion.div>\n                {/* Right Image (Cake) */}');
    c = c.replace(/<\/div>\s*<\/div>\s*\{\/\* CTA Voucher/g, '</motion.div>\n              </div>\n              {/* CTA Voucher');
    c = c.replace(/<\/div>\s*\{\/\* Bottom Images:/g, '</motion.div>\n              {/* Bottom Images:');
    c = c.replace(/<\/div>\s*<\/div>\s*<\/motion.div>/g, '</motion.div>\n              </div>\n            </motion.div>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, c);
    console.log('Updated ' + f);
  }
});
