---
name: psa-manuals-standardizer
description: Use when creating, reviewing, rewriting, or standardizing PSA tool manuals for this GitHub Pages/Jekyll repo. Applies to Markdown/HTML manuals under `manuais/**`, especially when converting raw docs and screenshots into the repo's required `index.md` + `imagens/` structure with correct frontmatter, TOC, shared layout classes, image references, and `_data/manuais.yml` registration.
---

# PSA Manuals Standardizer

## Overview

This skill standardizes manuals for the PSA documentation site so they render correctly in the shared Jekyll layout, sidebar TOC, and image embed pipeline.

Before editing, read [references/manual-patterns.md](references/manual-patterns.md). Then inspect one or two existing manuals closest to the target manual's shape.

## Workflow

### 1. Pick the canonical slug and target path

- Use lowercase hyphen-case for the manual folder.
- Remove prefixes like `Ferramenta_` and avoid uppercase names for new folders.
- The canonical structure is `manuais/<slug>/index.md` plus `manuais/<slug>/imagens/`.
- If a manual already exists under the canonical slug, merge or replace its contents intentionally instead of creating a duplicate folder.

### 2. Normalize file structure

- The main content file must be named `index.md`.
- All screenshots used by the manual must live inside the manual's own `imagens/` folder.
- Use lowercase `imagens/` in both the folder name and every image `src`.
- If source material arrives as a loose `.md` plus screenshots in the same folder, move the screenshots into `imagens/` and rename the document to `index.md`.

### 3. Validate frontmatter and TOC

- Require `layout: manual`, `title`, `versao`, `github_url`, and `toc`.
- Keep the TOC aligned with the visible section IDs and subsection IDs.
- Do not invent `permalink` or layout fields unless the repo already requires them.
- Preserve the repo's naming and numbering style used by similar manuals.

### 4. Write content in the repo's manual format

- Use the shared section wrappers: `.secao`, `.secao-header`, `.secao-conteudo`, `.editable-text`, `.editable-area`.
- For images, use the shared blocks: `.img-container`, `.img-wrapper`, `.img-screenshot`, `.img-caption`.
- Reuse the standard access/authentication flow when the tool is accessed from the PSA portal and Digital Dev hub.
- Keep language consistent with the existing manual set. Match the closest exemplars already in `manuais/`.

### 5. Validate image usage both ways

- Every `<img src="imagens/...">` in `index.md` must point to a real file.
- Every file inside `imagens/` should either be referenced by the manual or be removed if it is leftover noise.
- Prefer clean, stable filenames over ad hoc names like `Captura de tela ...` when editing or curating a manual.

### 6. Register the manual in the hub when needed

- The home page is driven by `_data/manuais.yml`, not by folder discovery alone.
- Add a new `_data/manuais.yml` entry when the slug is new.
- If the slug already exists in `_data/manuais.yml`, update only what is necessary.

### 7. Final checks

- Confirm the manual path, frontmatter, TOC IDs, image references, and hub registration.
- If possible, report both:
  - referenced images that do not exist
  - image files present in `imagens/` that are not used

## References to load as needed

- [references/manual-patterns.md](references/manual-patterns.md): repo-specific rules, templates, and exemplar manuals.
