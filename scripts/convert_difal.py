import re
import os

input_file = r"c:\Users\Alexandre Silva\Desktop\Area de Criação\SOP\Novaversao.md"
output_file = r"c:\Users\Alexandre Silva\Desktop\Area de Criação\SOP\Manuais_Ferramentas_PSA\manuais\difal-inteligente\index.md"

with open(input_file, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

out_lines = []
in_frontmatter = False
frontmatter_count = 0
skip_sumario = False
in_secao = False
pending_image = None
in_blockquote = False
blockquote_lines = []

def process_blockquote():
    if not blockquote_lines: return []
    html_lines = []
    html_lines.append('    <div class="aviso">')
    html_lines.append('        <span class="material-icons-round">warning</span>')
    for bq_line in blockquote_lines:
        bq_line = bq_line.replace('> ', '').replace('>', '')
        bq_line = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', bq_line)
        html_lines.append(f'        <p>{bq_line.strip()}</p>')
    html_lines.append('    </div>')
    blockquote_lines.clear()
    return html_lines

i = 0
while i < len(lines):
    line = lines[i]
    stripped = line.strip()

    # Handle multiple frontmatters
    if stripped == '---':
        if frontmatter_count == 0:
            in_frontmatter = True
            out_lines.append(line)
        elif frontmatter_count == 1 and in_frontmatter:
            in_frontmatter = False
            out_lines.append(line)
        elif frontmatter_count == 2:
            in_frontmatter = True
        elif frontmatter_count == 3 and in_frontmatter:
            in_frontmatter = False
        frontmatter_count += 1
        i += 1
        continue

    if in_frontmatter:
        if frontmatter_count == 1: # Only output the first frontmatter block
            out_lines.append(line)
        i += 1
        continue
        
    # skip empty lines between sections
    if not stripped:
        if in_blockquote:
            out_lines.extend(process_blockquote())
            in_blockquote = False
            
        if pending_image:
            # Handle image without caption
            pass
        out_lines.append("")
        i += 1
        continue

    # Skip sumario
    if stripped.startswith('## Sumário'):
        skip_sumario = True
        i += 1
        continue
        
    if skip_sumario:
        if stripped.startswith('## '):
            skip_sumario = False
        else:
            i += 1
            continue
            
    # Process blockquote
    if stripped.startswith('>'):
        in_blockquote = True
        blockquote_lines.append(stripped)
        i += 1
        continue
    elif in_blockquote:
        out_lines.extend(process_blockquote())
        in_blockquote = False

    # Process pending image waiting for caption
    if pending_image:
        if stripped.startswith('*') and stripped.endswith('*'):
            caption = stripped[1:-1]
        else:
            caption = ""
            i -= 1 # Rewind to re-process this line as text
            
        out_lines.append('    <div class="img-container">')
        out_lines.append('        <div class="img-wrapper">')
        out_lines.append(f'            <img src="{pending_image["url"]}" class="img-screenshot" alt="{pending_image["alt"]}">')
        out_lines.append('        </div>')
        if caption:
            out_lines.append(f'        <p class="img-caption">{caption}</p>')
        out_lines.append('    </div>')
        pending_image = None
        i += 1
        continue

    # Process Sections
    h2_match = re.match(r'^##\s+(\d+)\.?\s+(.*?)(?:\s+\{#.*?\})?$', stripped)
    if h2_match:
        if in_secao:
            out_lines.append('  </div>')
            out_lines.append('</div>')
            out_lines.append('')
        
        num = h2_match.group(1)
        title = h2_match.group(2)
        
        out_lines.append(f'<!-- SEÇÃO {num} -->')
        out_lines.append(f'<div class="secao" id="secao-{num}">')
        out_lines.append('  <div class="secao-header">')
        out_lines.append(f'    <span class="secao-numero editable-text">{num}</span>')
        out_lines.append(f'    <h2 class="editable-text">{title}</h2>')
        out_lines.append('  </div>')
        out_lines.append('  <div class="secao-conteudo editable-area">')
        in_secao = True
        i += 1
        continue

    # Process Subsections
    h3_match = re.match(r'^###\s+(\d+\.\d+)\.?\s+(.*?)(?:\s+\{#.*?\})?$', stripped)
    if h3_match:
        num = h3_match.group(1)
        title = h3_match.group(2)
        idx = num.replace('.', '-')
        out_lines.append(f'    <h3 id="secao-{idx}">{num} {title}</h3>')
        i += 1
        continue

    # Process Image List Example like "4.3. Exemplos de Status: Pendente e Validado"
    # Actually checking for bullet point asterisks correctly
    
    # Process Images
    img_match = re.match(r'^!\[(.*?)\]\((.*?)\)$', stripped)
    if img_match:
        alt = img_match.group(1)
        url = img_match.group(2)
        filename = url.split('/')[-1]
        local_url = f"imagens/{filename}"
        pending_image = {"alt": alt, "url": local_url}
        i += 1
        continue
        
    # Process unordered list standard
    list_match = re.match(r'^\*\s+(.*)$', stripped)
    if list_match:
        para = list_match.group(1)
        para = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', para)
        out_lines.append(f'    <ul>\n        <li>{para}</li>\n    </ul>')
        i += 1
        continue

    # Process regular paragraphs
    para = stripped
    para = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', para)
    if para == '---':
        i += 1
        continue
    out_lines.append(f'    <p>{para}</p>')
    i += 1

if in_blockquote:
    out_lines.extend(process_blockquote())

if pending_image:
    out_lines.append('    <div class="img-container">')
    out_lines.append('        <div class="img-wrapper">')
    out_lines.append(f'            <img src="{pending_image["url"]}" class="img-screenshot" alt="{pending_image["alt"]}">')
    out_lines.append('        </div>')
    out_lines.append('    </div>')

if in_secao:
    out_lines.append('  </div>')
    out_lines.append('</div>')
    
out_lines.append('')
# clean up multiple blank lines
cleaned_lines = []
prev_blank = False
in_ul = False
out_cleaned = []
for line in out_lines:
    if line == '':
        if not prev_blank:
            cleaned_lines.append(line)
        prev_blank = True
    else:
        cleaned_lines.append(line)
        prev_blank = False

# simple ul merge
for line in cleaned_lines:
    if line.strip() == '<ul>':
        if not in_ul:
            out_cleaned.append(line)
            in_ul = True
    elif line.strip() == '</ul>':
        pass # Handle at the end of ul block or new elements
    elif line.strip().startswith('<li>'):
        out_cleaned.append(line)
    else:
        if in_ul:
            out_cleaned.append('    </ul>')
            in_ul = False
        out_cleaned.append(line)
if in_ul:
    out_cleaned.append('    </ul>')

with open(output_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_cleaned) + '\n')

print("Conversion complete!")
