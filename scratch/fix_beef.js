const fs = require('fs');

let c = fs.readFileSync('app/components/BeefLambSpecialsMenuSection.tsx', 'utf8');

// 1. Duration 1.2 -> 0.5
c = c.replace(/duration:\s*1\.2/g, 'duration: 0.5');

// 2. Main images
// Line 165: {/* RIGHT: component.png — fade RIGHT */}
c = c.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*50\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0,\s*y:\s*0\s*\}\}/g, 
  'initial={{ opacity: 0, x: 50 }}\n            whileInView={{ opacity: 1, x: 0 }}');

// 3. Inner mobile images - there are two blocks in BeefLamb
// First block:
c = c.replace(
  /<div\s*className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(0 0, 62% 0, 38% 100%, 0 100%\)' \}\}\s*>/g,
  '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(0 0, 62% 0, 38% 100%, 0 100%)\' }}>'
);
c = c.replace(
  /<div\s*className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-\[1\.02\]"\s*style=\{\{ clipPath: 'polygon\(64% 0, 100% 0, 100% 100%, 40% 100%\)' \}\}\s*>/g,
  '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]" style={{ clipPath: \'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)\' }}>'
);

// We need to change the closing tags for these specific ones.
// In BeefLamb, the closing tags are followed by specific comments.
c = c.replace(/<\/div>\s*\{\/\* Right Image \*\/\}/g, '</motion.div>\n          {/* Right Image */}');
c = c.replace(/<\/div>\s*<\/div>\s*\{\/\* ZONE 2/g, '</motion.div>\n        </div>\n\n\n\n        {/* ZONE 2');

c = c.replace(/<\/div>\s*\{\/\* Right Image \(Burgers\) \*\/\}/g, '</motion.div>\n                {/* Right Image (Burgers) */}');
c = c.replace(/<\/div>\s*<\/div>\s*\{\/\* ZONE 3/g, '</motion.div>\n              </div>\n            </div>\n          </motion.div>\n\n        </div>\n\n        {/* ZONE 3'); // Actually this is risky, let's do a more precise replace.

fs.writeFileSync('app/components/BeefLambSpecialsMenuSection.tsx', c);
