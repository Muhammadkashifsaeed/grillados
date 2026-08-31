const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;
    
    const prefixes = [
        'm-', 'mt-', 'mb-', 'ml-', 'mr-', 'mx-', 'my-',
        'p-', 'pt-', 'pb-', 'pl-', 'pr-', 'px-', 'py-',
        'gap-', 'gap-x-', 'gap-y-',
        'w-', 'h-', 'min-w-', 'min-h-', 'max-w-', 'max-h-',
        'top-', 'bottom-', 'left-', 'right-', 'inset-', 'inset-x-', 'inset-y-',
        'space-x-', 'space-y-',
        'leading-', 'text-', 'rounded-',
        'translate-x-', 'translate-y-'
    ];
    
    const prefixPattern = '(' + prefixes.join('|') + ')';
    
    // Pattern: prefix[(-)?(number)px]
    // Group 1: prefix
    // Group 2: - (optional)
    // Group 3: number
    const regex = new RegExp(prefixPattern + '\\[(-)?(\\d+(?:\\.\\d+)?)px\\]', 'g');
    
    content = content.replace(regex, (match, prefix, isNegative, numStr) => {
        const num = parseFloat(numStr);
        let val = num / 4;
        
        const valStr = val.toString();
        
        if (isNegative === '-') {
            if (prefix.startsWith('-')) {
                return prefix + valStr;
            }
            return '-' + prefix + valStr;
        } else {
            return prefix + valStr;
        }
    });
    
    // aspect-[100/34] -> aspect-100/34
    content = content.replace(/aspect-\[([^\]]+)\]/g, 'aspect-$1');
    
    // bg-[length:100%_auto] -> bg-size-[100%_auto]
    content = content.replace(/bg-\[length:([^\]]+)\]/g, 'bg-size-[$1]');
    
    // bg-[250%_auto] -> bg-size-[250%_auto]
    // only if contains % and doesn't already have size
    content = content.replace(/bg-\[([^\]]*%[^\]]*)\]/g, (match, inner) => {
        if (inner.includes('length:')) return match; // already handled
        return 'bg-size-[' + inner + ']';
    });

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log("Updated " + filepath);
    }
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./app');
files.forEach(f => processFile(f));
