# PSA manual patterns

## Files that define the real contract

- `_layouts/manual.html`
  - Rewrites only `src="imagens/..."`
  - New manuals should therefore use lowercase `imagens/` in HTML
- `_includes/sidebar.html`
  - Builds the sidebar from `page.toc`
  - Section IDs in HTML must match the `toc` entries
- `index.md`
  - Hub page reads `site.data.manuais`
- `_data/manuais.yml`
  - Every new manual needs a card entry here to appear on the hub

## Canonical manual structure

```text
manuais/
  <slug>/
    index.md
    imagens/
      <image-files>
```

Rules:

- `<slug>`: lowercase hyphen-case
- main file: always `index.md`
- image folder: always lowercase `imagens`
- image HTML: always `src="imagens/<arquivo>"`

## Canonical frontmatter

```yaml
---
layout: manual
title: "Nome do Manual"
versao: "1.0"
github_url: "https://github.com/psa-elevate/<repo>"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-2
    title: "2. Acesso e Autenticação"
    items:
      - id: secao-2-1
        title: "2.1. ..."
---
```

Required keys for new or standardized manuals:

- `layout`
- `title`
- `versao`
- `github_url`
- `toc`

## Canonical section HTML

```html
<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>...</p>
  </div>
</div>
```

Common reusable blocks:

- Access/authentication sections with the five standard images:
  - `padrao-01-acesso-portal.png`
  - `padrao-02-selecao-area.png`
  - `padrao-03-login.png`
  - `padrao-04-ambiente-dev.png`
  - `padrao-05-hub-ferramentas.png`
- Image blocks:

```html
<div class="img-container">
  <div class="img-wrapper">
    <img src="imagens/arquivo.png" class="img-screenshot" alt="Descrição">
  </div>
  <p class="img-caption">Legenda</p>
</div>
```

- Informational callouts commonly used in the repo:
  - `.dica`
  - `.aviso`

## Exemplar manuals in this repo

Use the closest exemplar before editing:

- `manuais/consulta-xmls/index.md`
  - Good reference for rich TOC, many filters, exports, and consistent prose
- `manuais/efd-icms/index.md`
  - Good reference for consultation/download/export flow
- `manuais/ECD/index.md`
  - Good reference for SPED/contábil consultation manuals
- `manuais/ECF/index.md`
  - Good reference for another structured consultation manual, but inspect carefully because legacy formatting may exist
- `manuais/difal-inteligente/index.md`
  - Good reference for operational workflow and classification decisions
- `manuais/controle-perdcomp/index.md`
  - Good reference for process-oriented manual with actions and modals
- `manuais/analise-cruzada/index.md`
  - Good reference for modern structure using lowercase `imagens/`
- `manuais/apuracao-piscofins/index.md`
  - Good reference for multi-tab analytical workflow
- `manuais/correcoes-sped/index.md`
  - Good reference for rule editing and detailed guided operations
- `manuais/icms-saidas/index.md`
  - Good reference for multi-module fiscal analysis
- `manuais/mapa-ncm/index.md`
  - Good reference for rules, cadastro, and grid/detail flows

## Hub registration pattern

Every new slug should get an entry in `_data/manuais.yml` shaped like:

```yaml
- title: "Nome do Manual"
  url: "/manuais/<slug>/"
  icon: "schema"
  version: "v1.0"
  updated: "05/2026"
  description: "Resumo curto do objetivo do manual."
```

Keep the `url` aligned with the folder slug.

## Validation checklist

Before considering a manual done, verify:

1. Folder is canonical:
   - `manuais/<slug>/index.md`
   - `manuais/<slug>/imagens/`
2. Frontmatter has `layout`, `title`, `versao`, `github_url`, `toc`
3. Every TOC item ID exists in the HTML
4. Every `src="imagens/..."` points to a real file
5. No unused junk screenshots remain in `imagens/` unless intentionally preserved
6. The manual is listed in `_data/manuais.yml` when the slug is new
7. The content uses the shared manual classes rather than arbitrary Markdown-only structure

## Anti-patterns

Avoid these when standardizing manuals:

- folder names with `Ferramenta_`
- uppercase-only or mixed-case slug folders for new content
- main file names other than `index.md`
- image folders named inconsistently when creating new manuals
- image references outside `imagens/`
- leaving screenshots at the manual root
- adding a manual folder without a matching `_data/manuais.yml` entry
