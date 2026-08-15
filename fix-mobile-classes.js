const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\Admin\\Desktop\\grillados\\grillados\\app\\components';
const menuFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

let modified = 0;
menuFiles.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    content = content.replace(
        /className="w-\[90%\] sm:w-\[85%\] max-w-\[350px\] h-\[250px\] mx-auto object-cover rounded-2xl drop-shadow-2xl block md:hidden"/g,
        'className="w-[90%] sm:w-[85%] max-w-[350px] h-auto mx-auto object-contain rounded-2xl drop-shadow-2xl block md:hidden"'
    );

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Fixed mobile image class in ' + file);
        modified++;
    }
});
console.log('Modified ' + modified + ' files.');
