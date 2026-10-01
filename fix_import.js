const fs = require('fs');
let file = 'app/components/HomePromoSections.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/import { motion } from 'framer-motion';\r?\nimport { motion } from 'framer-motion';/g, "import { motion } from 'framer-motion';");

fs.writeFileSync(file, content, 'utf8');
