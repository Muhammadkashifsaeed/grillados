import os
import re

components_dir = r"c:\Users\Admin\Desktop\grillados\grillados\app\components"
menu_files = [f for f in os.listdir(components_dir) if f.endswith('MenuSection.tsx')]
# Also include MenuTwoColumn and MenuDualImage
menu_files.extend(['Menu/MenuTwoColumn.tsx', 'Menu/MenuDualImage.tsx'])

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by lines to track context
    lines = content.split('\n')
    new_lines = []
    
    context = None
    
    for line in lines:
        if re.search(r'/\*.*Left Column.*: Image\s*\*/|/\*.*Left:.*Image\s*\*/|/\*.*Left Column.*: Menu Items\s*\*/|/\*.*LEFT: Heading\s*\*/|/\*.*Left: Heading\s*\*/|/\*.*Left Column\s*\*/', line, re.IGNORECASE):
            context = 'left'
            new_lines.append(line)
        elif re.search(r'/\*.*Right Column.*: Image\s*\*/|/\*.*Right:.*Image\s*\*/|/\*.*Right Column.*: Menu Items\s*\*/|/\*.*RIGHT:.*fade RIGHT\s*\*/|/\*.*Right:.*fade RIGHT\s*\*/|/\*.*Right Column\s*\*/', line, re.IGNORECASE):
            context = 'right'
            new_lines.append(line)
        elif re.search(r'/\*.*ZONE 1: Both images.*fade UP\s*\*/|/\*.*ZONE 1: Order.png.*fade UP\s*\*/|/\*.*ZONE 3:.*images\s*\*/', line, re.IGNORECASE):
            context = 'dual'
            # change the comment itself if it says fade UP
            new_lines.append(line.replace('fade UP', 'fade DOWN'))
        else:
            if 'initial={{' in line and context:
                if context == 'left':
                    line = re.sub(r'y: \d+', 'x: -80', line)
                elif context == 'right':
                    line = re.sub(r'y: \d+', 'x: 80', line)
                elif context == 'dual':
                    line = re.sub(r'y: \d+', 'y: -80', line)
            elif 'whileInView={{' in line and context:
                if context in ['left', 'right']:
                    line = re.sub(r'y: 0', 'x: 0, y: 0', line)
                elif context == 'dual':
                    # keep y: 0
                    pass
                # Reset context after whileInView so we don't accidentally affect other elements
                context = None
            new_lines.append(line)
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))

for f in menu_files:
    path = os.path.join(components_dir, f)
    if os.path.exists(path):
        update_file(path)
        print(f"Updated {f}")
