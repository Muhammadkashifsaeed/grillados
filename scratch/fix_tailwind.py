import os
import re
import glob

def px_to_rem(match):
    prefix = match.group(1)
    is_negative_class = match.group(2) == '-'  # e.g., 'ml-[-2px]' -> prefix='ml-', negative='-'
    num = float(match.group(3))
    
    # 1 spacing unit in tailwind = 4px
    # so X px = X / 4 units
    val = num / 4
    if val.is_integer():
        val_str = str(int(val))
    else:
        val_str = str(val)
    
    # If the class was e.g. `ml-[-2px]`, we convert it to `-ml-0.5`
    # Wait, the regex captures 'ml-' as group 1.
    if is_negative_class:
        if prefix.startswith('-'):
            # It already has a minus? unlikely but let's handle it
            res = prefix + val_str
        else:
            res = '-' + prefix + val_str
    else:
        res = prefix + val_str
        
    return res

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # 1. Spacing and Sizing (px to canonical units)
    # Match standard prefixes: m-, p-, w-, h-, gap-, min-h-, leading-, text-, etc. followed by [Xpx] or [-Xpx]
    # We include a colon or space or quote before it so we only match full classes
    
    prefixes = [
        r'm-', r'mt-', r'mb-', r'ml-', r'mr-', r'mx-', r'my-',
        r'p-', r'pt-', r'pb-', r'pl-', r'pr-', r'px-', r'py-',
        r'gap-', r'gap-x-', r'gap-y-',
        r'w-', r'h-', r'min-w-', r'min-h-', r'max-w-', r'max-h-',
        r'top-', r'bottom-', r'left-', r'right-', r'inset-', r'inset-x-', r'inset-y-',
        r'space-x-', r'space-y-',
        r'leading-', r'text-', r'rounded-',
        r'translate-x-', r'translate-y-'
    ]
    
    # regex pattern: (prefix)\[(-)?(\d+(?:\.\d+)?)px\]
    prefix_pattern = '(' + '|'.join(prefixes) + ')'
    
    # E.g. ml-[-2px] -> group(1)='ml-', group(2)='-', group(3)='2'
    pattern = prefix_pattern + r'\[(-)?(\d+(?:\.\d+)?)px\]'
    content = re.sub(pattern, px_to_rem, content)
    
    # 2. Aspect Ratio: aspect-[100/34] -> aspect-100/34
    content = re.sub(r'aspect-\[([^\]]+)\]', r'aspect-\1', content)
    
    # 3. Background Size: bg-[length:...] -> bg-size-[...] and bg-[250%_auto] -> bg-size-[250%_auto]
    # Note: bg-[length:100%_auto] -> bg-size-[100%_auto]
    content = re.sub(r'bg-\[length:([^\]]+)\]', r'bg-size-[\1]', content)
    
    # For bg-[250%_auto] -> bg-size-[250%_auto]
    # Match bg-[ followed by something with a % and _ and auto ]
    # Be careful not to replace bg-[#fff]
    content = re.sub(r'bg-\[([^\]]*%[^\]]*)\]', r'bg-size-[\1]', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    search_pattern = os.path.join('app', '**', '*.tsx')
    for filepath in glob.glob(search_pattern, recursive=True):
        process_file(filepath)
        
    search_pattern_ts = os.path.join('app', '**', '*.ts')
    for filepath in glob.glob(search_pattern_ts, recursive=True):
        process_file(filepath)

if __name__ == '__main__':
    main()
