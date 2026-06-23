# Claude.md

Guia de contexto para humanos e IAs trabalharem neste repositório sem precisar redescobrir a estrutura do projeto.

## 0. Política de branch (IMPORTANTE)

A branch de trabalho e de produção deste repositório é a **`main`**.

- Faça commits e abra trabalho diretamente na **`main`** (ou em branches de feature que sejam mergeadas na `main`).
- O deploy do GitHub Pages é disparado **somente por push na `main`** (ver `.github/workflows/deploy.yml`). Parar o trabalho em qualquer outra branch significa que nada vai ao ar.
- A branch `develop` existe apenas como espelho/staging e atualmente está com conteúdo idêntico à `main`. Ela não é obrigatória e não dispara deploy.
- Observação: instruções antigas que mandavam trabalhar "exclusivamente na `develop`" estão desatualizadas e não refletem o estado real do repositório nem o gatilho de deploy.

## 1. Resumo do projeto

Este repositório é a central de manuais das ferramentas PSA Elevate / PSA Digital. Ele gera um site estático em Jekyll, publicado no GitHub Pages, com um hub inicial pesquisável e páginas de manuais operacionais ricas em capturas de tela.

O projeto não é a implementação das ferramentas fiscais em si. Ele é a documentação navegável dessas ferramentas. A maior parte do valor do repositório está em:

- Conteúdo dos manuais em `manuais/*/index.md`.
- Imagens explicativas em `manuais/*/imagens/`.
- Layout, sidebar, header, tema e exportações em `_layouts`, `_includes`, `assets/css` e `assets/js`.
- Metadados do hub em `_data/manuais.yml`.
- Automação de build/deploy e geração de PDFs em `.github/workflows/deploy.yml` e `scripts/generate_pdf.js`.

O site usa o `baseurl` `/Manuais_Ferramentas_PSA`, definido em `_config.yml`. Todos os links internos e assets devem respeitar esse baseurl via filtros Liquid como `relative_url` ou pela lógica já existente no layout.

## 2. Stack e responsabilidades

Stack principal:

- Jekyll/GitHub Pages para renderização estática.
- Markdown com frontmatter YAML.
- HTML embutido dentro dos Markdown dos manuais para manter o layout visual padronizado.
- Liquid nos layouts/includes.
- CSS puro em `assets/css/style.css` e `assets/css/hub.css`.
- JavaScript puro em `assets/js/navigation.js`, `assets/js/features.js` e `assets/js/editor.js`.
- Node.js com Puppeteer e `http-server` para geração automatizada de PDFs no build.

Responsabilidades por tecnologia:

- Jekyll compila `index.md`, `manuais/*/index.md`, layouts, includes e dados YAML.
- Liquid injeta header, sidebar, URLs relativas, hash administrativo e metadados de SEO.
- CSS define identidade visual, tema claro/escuro, cards de seção, sidebar, alertas, imagens e regras de impressão.
- JS controla tema, busca, destaque no sumário, zoom/pan de imagens, modo admin, exportação Markdown, exportação HTML e geração client-side de PDF.
- GitHub Actions compila o site, gera PDFs via Puppeteer e publica no GitHub Pages.

## 3. Estrutura do repositório

```text
.
├── _config.yml
├── _data/
│   ├── deploy.yml
│   ├── env.yml
│   └── manuais.yml
├── _includes/
│   ├── header.html
│   └── sidebar.html
├── _layouts/
│   └── manual.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   ├── css/
│   │   ├── hub.css
│   │   └── style.css
│   ├── img/
│   │   ├── favicon.png
│   │   └── logo.png
│   └── js/
│       ├── editor.js
│       ├── features.js
│       └── navigation.js
├── manuais/
│   └── {slug-do-manual}/
│       ├── index.md
│       └── imagens/
├── scripts/
│   ├── convert_difal.py
│   └── generate_pdf.js
├── index.md
├── package.json
└── README.md
```

Pastas de manuais existentes:

- `manuais/consulta-xmls`
- `manuais/controle-perdcomp`
- `manuais/dashboard-controle-de-uso-gestao`
- `manuais/dashboard-controle-de-uso-interno`
- `manuais/dashboard-perdcomp-cliente`
- `manuais/dashboard-perdcomp-faturamento`
- `manuais/difal-inteligente`
- `manuais/efd-contribuicoes`
- `manuais/efd-icms`
- `manuais/Site-area-de-chamados`

## 4. Arquivos centrais

### `_config.yml`

Configuração Jekyll do site.

Pontos importantes:

- `title`: `Manuais PSA Elevate`
- `description`: documentação das ferramentas PSA Elevate.
- `baseurl`: `/Manuais_Ferramentas_PSA`
- `markdown`: `kramdown`
- `highlighter`: `rouge`
- coleção `manuais` com saída habilitada e permalink `/manuais/:path/`
- default para páginas sob `manuais` usando layout `manual`
- plugin `jekyll-seo-tag`

Arquivos excluídos do build:

- `README.md`
- `Gemfile`
- `Gemfile.lock`
- `node_modules`
- `*.html.bak`

Observação: o repositório atualmente não contém `Gemfile`, `Gemfile.lock` nem `package-lock.json`. O README fala em `bundle install`, e o workflow usa `npm ci`. Se o build falhar, estes são os primeiros pontos a conferir.

### `index.md`

Página inicial / hub dos manuais.

Usa `layout: manual`, mas carrega `assets/css/hub.css` para esconder a sidebar e adaptar o layout. Renderiza os cards a partir de `_data/manuais.yml`.

Funcionalidades do hub:

- Hero "Central de Manuais PSA".
- Busca instantânea no campo `#hubSearch`.
- Cards com ícone Material Icons, título, versão, descrição, data de atualização e CTA.
- Links gerados com `relative_url`.

### `_data/manuais.yml`

Fonte de verdade para o hub. Cada item possui:

- `title`
- `url`
- `icon`
- `version`
- `updated`
- `description`

Sempre que adicionar, remover ou renomear manual, atualize esse arquivo. O hub não descobre manuais automaticamente.

### `_data/env.yml`

Contém `admin_hash`, um SHA-256 usado pelo modo administrativo client-side.

Importante: isso não é autenticação server-side. O hash é enviado para o navegador em `window.PSA_ADMIN_HASH`. Serve apenas para revelar ferramentas de edição/exportação assistida na página estática.

### `_data/deploy.yml`

Contém uma cópia do workflow de deploy. O workflow real usado pelo GitHub Actions está em `.github/workflows/deploy.yml`.

### `_layouts/manual.html`

Layout principal de todas as páginas. Responsável por:

- `<head>` com Work Sans, Material Icons Round, favicon e CSS principal.
- inicialização antecipada de tema escuro para evitar flicker.
- inclusão de `header.html` e `sidebar.html`.
- renderização de `{{ content }}` dentro de `.content-wrapper`.
- conversão automática de imagens relativas `src="imagens/...` para URL absoluta baseada em `page.url`.
- carregamento de `navigation.js`, `editor.js` e `features.js`.
- injeção de `window.PSA_GITHUB_URL` e `window.PSA_ADMIN_HASH`.

Regra de imagem do layout:

```liquid
{% assign base_img_path = page.url | append: 'imagens/' | absolute_url %}
{{ manual_content | replace: 'src="imagens/', src_with_base }}
```

Por isso, dentro dos manuais, use preferencialmente:

```html
<img src="imagens/Nome da imagem.png" class="img-screenshot" alt="Descricao">
```

### `_includes/header.html`

Header fixo do site. Exibe:

- logo PSA com link para a home.
- título da página.
- botão de tema claro/escuro.
- ferramentas admin, escondidas por padrão.
- botões públicos:
  - baixar Markdown (`handleMDExport`)
  - baixar HTML (`shareManual`)
  - baixar PDF (`downloadGeneratedPDF`)
- badge de versão.

### `_includes/sidebar.html`

Sidebar de sumário.

Se o frontmatter da página tiver `toc`, a sidebar renderiza grupos e itens a partir dele. Se não tiver, ela cria fallback automático procurando elementos `.secao` com `h2`.

Funções relevantes:

- `toggleNavGroup(el)` abre/fecha grupos.
- `filterSidebarItems()` filtra itens pelo input.
- fallback DOMContentLoaded popula `#auto-toc-content`.

## 5. CSS e design system

### `assets/css/style.css`

CSS principal de todos os manuais.

Define:

- variáveis de cor em `:root`;
- tema escuro via `[data-theme="dark"]`;
- reset global;
- header;
- layout flex com sidebar fixa e conteúdo rolável;
- cards de seção `.secao`;
- áreas editáveis `.editable-text` e `.editable-area`;
- containers de imagem `.img-container`, `.img-wrapper`, `.img-screenshot`, `.img-caption`;
- caixas de informação `.dica` e alerta `.aviso`;
- tabela `.tabela-info`;
- toolbar admin;
- modo edição;
- zoom/pan de imagem;
- marcadores/anotações;
- regras de quebra de página e impressão/PDF.

Padrão visual:

- Fonte: Work Sans.
- Acentos principais: teal e lime.
- Layout de manual: header escuro, sidebar branca/escura, conteúdo central com cards.
- Imagens sempre dentro de `.img-container > .img-wrapper`.

### `assets/css/hub.css`

CSS específico da home.

Ele esconde elementos do layout de manual que não fazem sentido no hub:

- `.sidebar`
- `.btn-toggle-sidebar`
- `#admin-toolbar`
- `.header-title`
- `.header-divider`

Também define hero, busca, grid e cards do hub.

## 6. JavaScript

### `assets/js/navigation.js`

Controla navegação e tema.

Funções principais:

- `toggleDarkMode()`: alterna `data-theme` e persiste em `localStorage` com chave `psa_theme`.
- `toggleSidebar()`: alterna classe `collapsed` da sidebar.
- `toggleNavGroup(header)`: abre/fecha grupo do sumário.
- `initScrollHighlight()`: usa `IntersectionObserver` para destacar item ativo da sidebar conforme a seção visível.
- `filterSidebarItems()`: filtra itens da sidebar e chama destaque textual no conteúdo.
- `highlightSearchText(query)`: envolve ocorrências com `<mark class="search-highlight">` e rola até a primeira.

### `assets/js/features.js`

Controla recursos visuais de imagens.

Funcionalidades:

- transforma `.img-wrapper` em área com viewport de zoom;
- adiciona toolbar flutuante com zoom + e -;
- limita escala de 1x a 3x;
- permite pan/drag quando a imagem está ampliada;
- suporta marcadores/anotações (`addMarker`, `initMarkerDrag`), embora a interface visível para adicionar marcador dependa de botões/admin.

### `assets/js/editor.js`

Contém o modo administrativo e exportações.

Fluxo admin:

- `checkAdminAccess()` lê `?key=` da URL.
- calcula SHA-256 da chave via Web Crypto.
- compara com `window.PSA_ADMIN_HASH`.
- se válido, chama `revealAdminInterface()` e remove a query da URL.
- `toggleEditMode()` torna `.editable-text` e `.editable-area` editáveis via `contentEditable`.
- `adminLogout()` recarrega a página sem chave.

Exportações:

- `handleMDExport()` converte o DOM renderizado de volta para Markdown e baixa um `.md`. Se admin, abre uma URL de upload no GitHub.
- `convertToMarkdown()` percorre `.secao`, títulos, listas, alertas, imagens e tabelas.
- `shareManual()` exporta um HTML independente com CSS inline, URLs de imagem absolutas do GitHub Pages e sidebar funcional.
- `downloadGeneratedPDF()` carrega `html2pdf.js` via CDN e gera PDF no cliente.
- `generateClientPDF()` ajusta temporariamente overflow/altura para capturar todo o conteúdo e esconde sidebar/ferramentas.

Ponto de atenção: o botão do header tem título "Baixar PDF Oficial", mas hoje chama a geração client-side por `html2pdf.js`. Os PDFs gerados no workflow por `scripts/generate_pdf.js` são salvos em `_site/assets/pdfs/manual_{slug}.pdf`, mas não há referência direta a esses arquivos no header.

## 7. Scripts

### `scripts/generate_pdf.js`

Gera PDFs oficiais após o build Jekyll.

Fluxo:

1. Usa `_site` como diretório de site compilado.
2. Cria `_site/assets/pdfs`.
3. Cria um symlink/junction local `./Manuais_Ferramentas_PSA -> ./_site` para simular o baseurl.
4. Sobe `http-server` na porta `8080`.
5. Abre Puppeteer headless.
6. Varre `_site/manuais/*`.
7. Para cada slug, acessa `http://localhost:8080/Manuais_Ferramentas_PSA/manuais/{slug}/`.
8. Salva PDF como `_site/assets/pdfs/manual_{slug}.pdf`.

Dependências declaradas em `package.json`:

- `puppeteer`
- `http-server`

Script npm:

```bash
npm run pdf
```

Ponto de atenção: o script pressupõe que `_site` já existe. Rode o build Jekyll antes.

### `scripts/convert_difal.py`

Script auxiliar para converter um Markdown fonte do manual DIFAL em HTML padronizado de manual.

Características:

- usa caminhos absolutos locais do ambiente original;
- remove/mescla frontmatters duplicados;
- ignora sumário;
- converte headings `##` e `###` para blocos `.secao`;
- converte imagens Markdown para `.img-container`;
- converte blockquotes em `.aviso`;
- faz substituição simples de `**negrito**` por `<strong>`.

Este script não é genérico no estado atual. Antes de reutilizar, ajustar `input_file` e `output_file`.

## 8. Build, execução local e deploy

### Execução local Jekyll

O README sugere:

```bash
bundle install
bundle exec jekyll serve
```

Mas o repositório atual não tem `Gemfile`. Para uma máquina limpa, pode ser necessário instalar Jekyll/GitHub Pages manualmente ou adicionar um `Gemfile` adequado.

Como o `_config.yml` define `baseurl: "/Manuais_Ferramentas_PSA"`, o acesso local esperado é algo como:

```text
http://localhost:4000/Manuais_Ferramentas_PSA/
```

O README ainda cita `/psa-manuais/`, que está desatualizado em relação ao `_config.yml`.

### Geração de PDFs local

Pré-requisitos:

1. site já compilado em `_site`;
2. dependências Node instaladas.

Comandos esperados:

```bash
npm install
npm run pdf
```

Use `npm install` enquanto não houver `package-lock.json`. O workflow usa `npm ci`, que normalmente exige lockfile.

### Deploy GitHub Pages

Workflow real: `.github/workflows/deploy.yml`.

Gatilhos:

- push na branch `main`;
- execução manual via `workflow_dispatch`.

Passos:

1. checkout;
2. setup Ruby 3.1;
3. configure-pages;
4. build Jekyll para `_site`;
5. setup Node.js 20;
6. `npm ci`;
7. `node scripts/generate_pdf.js`;
8. upload do artefato Pages;
9. deploy com `actions/deploy-pages@v4`.

Pontos de atenção do workflow:

- `npm ci` pode falhar se `package-lock.json` não existir.
- `bundler-cache: true` costuma esperar `Gemfile`. Se o ambiente do action não aceitar o projeto sem Gemfile, adicionar um `Gemfile` com gems compatíveis com GitHub Pages.

## 9. Contrato de um manual

Cada manual deve ficar em:

```text
manuais/{slug}/index.md
manuais/{slug}/imagens/
```

Frontmatter padrão:

```yaml
---
layout: manual
title: "Nome do Manual"
versao: "1.0"
github_url: "https://github.com/psa-elevate/repositorio-relacionado"
toc:
  - id: secao-1
    title: "1. Titulo da secao"
    items:
      - id: secao-1-1
        title: "1.1. Subsecao"
---
```

Estrutura HTML recomendada:

```html
<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Titulo da secao</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-1-1">1.1. Subsecao</h3>
    <p>Texto do procedimento.</p>

    <div class="img-container">
      <div class="img-wrapper">
        <img src="imagens/nome-da-imagem.png" class="img-screenshot" alt="Descricao da imagem">
      </div>
      <p class="img-caption">Legenda da imagem</p>
    </div>
  </div>
</div>
```

Alertas e dicas:

```html
<div class="dica">
  <span class="material-icons-round">lightbulb</span>
  <p>Texto da dica.</p>
</div>

<div class="aviso">
  <span class="material-icons-round">warning</span>
  <p><strong>Atenção:</strong> Texto do aviso.</p>
</div>
```

Regras práticas:

- IDs do `toc` devem bater com os IDs reais das `.secao` e dos `h3`.
- Imagens devem usar caminho relativo `imagens/...`.
- Evite `&nbsp;` no frontmatter e no HTML. Use espaços normais.
- Use `github_url`, não `github\_url`.
- Mantenha `title` e `versao` coerentes com `_data/manuais.yml`.
- Depois de adicionar um manual, registrar no `_data/manuais.yml`; caso contrário ele não aparece no hub.
- Nomes de arquivos de imagem com espaços e acentos funcionam, mas são mais frágeis. Se possível, prefira nomes estáveis e simples em novos manuais.

## 10. Inventário dos manuais

### 10.1 Consulta de XMLs

Pasta: `manuais/consulta-xmls`

Metadados:

- Título: `Consulta de XMLs`
- Versão: `3.0`
- Repo relacionado: `https://github.com/psa-elevate/consulta-xmls`
- Imagens: 30

Objetivo documentado:

Ferramenta para consultar e extrair XMLs fiscais, tanto NF-e quanto CT-e. Permite filtros estruturados, análise em tabela, exportação avançada para Excel e download de XML original.

Fluxo coberto:

- acesso ao portal PSA;
- entrada pela área da equipe;
- seleção da área Digital;
- login;
- entrada no ambiente Digital Dev;
- abertura da ferramenta "Consulta de XMLs";
- ajuste de visualização minimizando painel lateral;
- filtros obrigatórios: cliente, contribuinte, tipo DOC, data início e data fim;
- filtros opcionais: tipo MOV, emitente, destinatário e chave de acesso;
- execução da busca;
- carregamento de tabela;
- colunas como CNPJ emitente, razão social, chave de acesso, UF, número, data de emissão, valor, produtos e ações;
- paginação de 10 arquivos por página;
- exportação avançada para Excel com seleção de colunas por categorias;
- salvar, selecionar, excluir e favoritar perfis de exportação;
- preview dos 10 primeiros registros antes do Excel;
- download individual do XML original;
- limpeza dos filtros para nova consulta.

### 10.2 Consulta de EFD ICMS

Pasta: `manuais/efd-icms`

Metadados:

- Título: `Consulta de EFD ICMS`
- Versão: `1.0`
- Repo relacionado: `https://github.com/psa-elevate/efd-icms`
- Imagens: 62

Objetivo documentado:

Ferramenta para consultar, baixar e exportar arquivos SPED Fiscal/EFD ICMS-IPI. Ajuda analistas tributários a localizar arquivos, baixar TXT e gerar relatórios Excel com blocos/registros selecionados.

Fluxo coberto:

- acesso pela homepage PSA, menu do usuário, opção Equipe, área Digital e login;
- escolha do ambiente Digital Dev;
- navegação pelo menu lateral até EFD ICMS;
- filtros de cliente, contribuinte e período;
- limpeza de filtros e execução da busca;
- lista de arquivos retornados;
- seleção individual e seleção total;
- download individual TXT;
- download em lote ZIP;
- limitação explícita: exportação Excel em lote não disponível;
- exportação Excel de arquivo único;
- modal de seleção de blocos e registros;
- perfis de exportação;
- criação de múltiplos perfis;
- processamento e download do relatório;
- retorno à tela inicial;
- boas práticas de filtros, perfis e download em lote.

### 10.3 Consulta de EFD Contribuições

Pasta: `manuais/efd-contribuicoes`

Metadados:

- Título: `Consulta de EFD Contribuições`
- Versão: `1.0`
- Repo relacionado: `https://github.com/psa-elevate/efd-contribuicoes`
- Imagens: 69

Objetivo documentado:

Ferramenta para buscar, visualizar, exportar, analisar e baixar arquivos SPED EFD Contribuições, com foco em PIS/COFINS.

Fluxo coberto:

- acesso ao PSA Elevate;
- seleção da área Digital;
- login;
- seleção do ambiente Digital Dev;
- navegação pelo menu lateral até EFD Contribuições;
- interface com área de filtros e área de arquivos;
- botões Buscar Arquivos, Exportar Excel e Baixar Todos;
- filtros de cliente, contribuinte e período;
- busca e listagem de arquivos SPED com período, tipo, valores e status;
- download individual TXT;
- download em lote ZIP;
- exportação Excel com árvore de blocos SPED;
- seleção por bloco, registro e campo;
- geração do relatório;
- gerenciamento de perfis de exportação, incluindo salvar, carregar, criar múltiplos e excluir;
- análise em tela dos dados SPED;
- modal de análise com sidebar de blocos/registros;
- tabelas com scroll horizontal, seleção de célula e seleção de linha;
- aviso de que a análise em tela não altera os arquivos originais;
- boas práticas para filtros, perfis, download em lote, análise prévia e período adequado.

### 10.4 DIFAL Inteligente

Pasta: `manuais/difal-inteligente`

Metadados:

- Título: `DIFAL Inteligente`
- Versão no frontmatter: `Versão 1.1`
- Versão no hub: `v1.0`
- Repo relacionado: `https://github.com/psa-elevate/difal-inteligente`
- Imagens: 34

Objetivo documentado:

Ferramenta de análise e classificação tributária para DIFAL por NCM, com validação de regras como alíquota cheia, isenção ou redução de base de cálculo.

Fluxo coberto:

- acesso pelo portal PSA e área Equipe;
- seleção da área Digital;
- login;
- ambiente Digital Dev;
- dashboard principal;
- acesso ao módulo DIFAL Inteligente;
- filtro de cliente;
- carregamento e seleção de contribuinte;
- definição de período inicial e final;
- busca de itens;
- painel de métricas com total de NCMs, pendentes e classificados;
- grade de itens com NCM, CFOP, descrição e status;
- identificação de pendências em amarelo;
- modal de detalhes do produto;
- seleção de regra tributária;
- salvamento da decisão;
- atualização de status para Validado;
- acompanhamento da lista geral;
- foco nos pendentes;
- alerta de sincronização pendente;
- salvamento de alterações;
- exportação Excel;
- conferência final e limpeza dos filtros.

Ponto de atenção: alinhar versão do frontmatter (`Versão 1.1`) com o hub (`v1.0`) se isso não for intencional.

### 10.5 Controle de PERDCOMP

Pasta: `manuais/controle-perdcomp`

Metadados:

- Título: `Controle de PERDCOMP`
- Versão: `1.0`
- Repo relacionado: `https://github.com/psa-elevate/controle-perdcomp`
- Imagens: 41

Objetivo documentado:

Ferramenta de gestão de PERs e DCOMPs, incluindo consulta, atualização de situação, vínculos de compensação, registro de ressarcimento e cadastro de novos PERs.

Fluxo coberto:

- acesso ao site institucional;
- seleção da área Equipe e Digital;
- login;
- ambiente Digital Dev;
- dashboard com ferramentas;
- entrada em Controle PERDCOMP;
- filtros de cliente, contribuinte, situação, exercício e número do processo;
- busca e tabela com situação, última atualização, data solicitada, exercício, trimestre, tipo de crédito, percentual PSA, valor de crédito, valor compensado, ressarcido, data de pagamento, saldo disponível, Selic e ações;
- paginação;
- tela de detalhes do PER;
- atualização de situação e histórico;
- cadastro de novo DCOMP;
- edição de DCOMP;
- exclusão de DCOMP;
- registro de ressarcimento quando PER é deferido e pago;
- atualização automática para PER deferido e saldo zerado;
- cadastro de novo PER;
- referências de tipos de crédito, impostos aceitos em DCOMP e situações possíveis do PER.

Pontos de atenção:

- Existem arquivos `.obsidian` dentro de `manuais/controle-perdcomp/.obsidian`. Parecem metadados locais de edição e não documentação publicada.
- Verificar se esses arquivos devem permanecer versionados.

### 10.6 Página do Cliente e Área de Chamados

Pasta: `manuais/Site-area-de-chamados`

Metadados:

- Título: `Página do cliente e Área de chamados`
- Versão: `1.0`
- Imagens: 13

Objetivo documentado:

Manual do portal de atendimento ao cliente, cobrindo primeiro acesso, abertura e acompanhamento de chamados, projetos e documentos.

Fluxo coberto:

- e-mail automático de boas-vindas com credenciais e senha temporária;
- login;
- redefinição de senha no primeiro acesso;
- visão geral da Área do Cliente;
- aba Chamados como tela inicial;
- filtros por status e período;
- abertura de novo chamado;
- campos de título, departamento, prioridade, descrição e anexos;
- confirmação de criação;
- fluxo de atendimento com atribuição pelo gestor do departamento;
- comunicação por e-mail quando especialista responde ou solicita informações;
- comentários e anexos;
- conclusão do chamado;
- aba Projetos com filtros;
- aba Documentos com visualização/download.

Ponto de atenção importante:

- O arquivo contém muitos `&nbsp;` literais e usa `github\_url` em vez de `github_url`.
- Isso pode comprometer frontmatter YAML, sumário e exportação. Recomenda-se normalizar esse arquivo antes de mudanças maiores.

### 10.7 Dashboard de Faturamento PERDCOMP

Pasta: `manuais/dashboard-perdcomp-faturamento`

Metadados:

- Título: `Dashboard de Faturamento PERDCOMP`
- Versão: `1.0`
- Repo relacionado: `https://github.com/psa-elevate/dashboard-perdcomp-faturamento`
- Imagens: 10

Objetivo documentado:

Dashboard para acompanhar PER e DCOMP em duas visões: interna de faturamento PSA e visão do cliente.

Fluxo/conteúdo coberto:

- visão geral do dashboard;
- Página 1: visão interna/faturamento;
- filtros de cliente, contribuinte, tipo de documento, ano, data de envio e data de pagamento;
- indicadores: saldo disponível, saldo + Selic, valor ressarcido, valor compensado, faturamento total;
- tabela com número do documento, contribuinte, tipo, trimestre, imposto, PER utilizado na DCOMP, valor ressarcido, valor compensado, faturamento PSA e percentual aplicado;
- Página 2: visão do cliente;
- filtros de contribuinte, ano, data de pagamento e tipo de documento;
- indicadores do cliente;
- gráfico por impostos;
- gráfico DCOMP x PER;
- evolução temporal de 2021 a 2026.

### 10.8 Dashboard PERDCOMP Cliente

Pasta: `manuais/dashboard-perdcomp-cliente`

Metadados:

- Título: `Dashboard PERDCOMP (Cliente)`
- Versão: `1.0`
- Repo relacionado pretendido: `https://github.com/psa-elevate/dashboard-perdcomp-cliente`
- Imagens: 6

Objetivo documentado:

Versão exclusiva para o cliente acompanhar em tempo real seus pedidos de PER e DCOMP geridos pela PSA.

Conteúdo coberto:

- visão geral do painel do cliente;
- filtros por contribuinte, ano, data de pagamento e tipo de documento;
- indicadores de saldo disponível, saldo + Selic, valor compensado, valor ressarcido e total recuperado;
- gráfico de compensação por imposto;
- gráfico de relação DCOMP x PER;
- evolução ao longo do tempo desde 2021.

Ponto de atenção:

- O arquivo contém `&nbsp;` e `github\_url`; deve ser normalizado para `github_url`.

### 10.9 Dashboard de Controle de Uso Externo

Pasta: `manuais/dashboard-controle-de-uso-gestao`

Metadados:

- Título: `Dashboard de controle de uso (Externo)`
- Versão: `1.0`
- Repo relacionado: `https://github.com/psa-elevate/dashboard-controle-uso`
- Imagens: 23

Objetivo documentado:

Dashboard para gestores acompanharem volume de consultas na plataforma e fluxo de upload de arquivos para o Drive da PSA.

Abas/conteúdo:

- visão geral de arquivos;
- filtros por período, clientes, empresas e usuários;
- indicadores de total de consultas, clientes consultados, empresas consultadas, usuários ativos, consultas por usuário e duração média;
- percentual de entradas e saídas adicionadas;
- total adicionado ao Drive por tipo de arquivo;
- tabela geral de controle de uso;
- controle de uso com usuários com mais acessos;
- consultas por tipo de documento;
- clientes mais acessados por tipo de acesso;
- detalhamento de operações;
- tabela de operações por usuário com consulta de dados, exportação Excel, atualização de dados no DW e download de arquivo original.

### 10.10 Dashboard de Controle de Uso Interno

Pasta: `manuais/dashboard-controle-de-uso-interno`

Metadados:

- Título: `Dashboard de controle de uso (Interno)`
- Versão: `1.0`
- Repo relacionado: `https://github.com/psa-elevate/dashboard-controle-uso`
- Imagens: 23

Objetivo documentado:

Dashboard técnico interno para monitorar volume de uso, uploads, operações por usuário e estabilidade das requisições via sistema/API.

Conteúdo compartilhado com a visão externa:

- visão geral de arquivos;
- controle de uso;
- detalhamento de operações.

Conteúdo adicional interno:

- aba Controle de uso interno;
- filtros por período, tipo de documento, tipo de operação e usuário;
- indicadores de consultas com falha e consultas com sucesso;
- gráfico de método HTTP usado, comparando GET e POST;
- taxa de sucesso e falhas;
- tipos de consulta por funcionalidade;
- consultas por usuário/credencial.

## 11. Como adicionar um novo manual

Passo a passo recomendado:

1. Criar pasta `manuais/{slug}/`.
2. Criar `manuais/{slug}/index.md`.
3. Criar `manuais/{slug}/imagens/`.
4. Inserir frontmatter com `layout`, `title`, `versao`, `github_url` e `toc`.
5. Escrever o conteúdo usando blocos `.secao`.
6. Adicionar imagens com `src="imagens/arquivo.png"`.
7. Registrar o manual em `_data/manuais.yml`.
8. Verificar se o hub renderiza o card.
9. Verificar se o sumário lateral abre, filtra e destaca as seções.
10. Verificar exportações Markdown, HTML e PDF se a mudança tocar layout/scripts.
11. Fazer commit e push para `main` para acionar GitHub Pages.

Checklist mínimo para um manual novo:

- O slug da pasta bate com a URL em `_data/manuais.yml`.
- O `title` no frontmatter bate com o card do hub.
- A `versao` bate com `version` do hub, respeitando o formato desejado.
- Todos os IDs do `toc` existem no HTML.
- Todas as imagens referenciadas existem.
- As legendas explicam a ação, não apenas repetem o nome do arquivo.
- Não há `&nbsp;` no frontmatter.
- Não há barras escapadas em chaves YAML, como `github\_url`.

## 12. Padrões de manutenção

Ao editar conteúdo:

- Preserve a estrutura `.secao`.
- Não remova classes `editable-text` e `editable-area` sem revisar exportação/admin.
- Prefira alterações pequenas e localizadas.
- Ao renomear imagem, atualize todas as referências no `index.md`.
- Ao mudar slug de manual, atualize `_data/manuais.yml`, links internos e qualquer PDF/link externo.
- Mantenha o texto procedural: objetivo, ação do usuário, resultado esperado.

Ao editar layout:

- Teste uma página de manual e o hub.
- Verifique tema claro/escuro.
- Verifique sidebar com `toc` e fallback sem `toc`.
- Verifique imagens relativas.
- Verifique impressão/PDF.
- Evite quebrar classes consumidas por JS: `.secao`, `.secao-header`, `.secao-conteudo`, `.editable-text`, `.editable-area`, `.img-wrapper`, `.img-screenshot`, `.nav-item`, `.nav-group`.

Ao editar JavaScript:

- Lembre que os scripts são globais e carregam em todas as páginas.
- O hub também usa `layout: manual`, então scripts de manual podem rodar na home.
- Proteja seletores ausentes com checks nulos, como já ocorre em vários pontos.
- Não dependa de bundler; o JS é carregado direto pelo navegador.

Ao editar CSS:

- `style.css` afeta todos os manuais e o hub parcialmente.
- `hub.css` sobrescreve o layout para a home.
- Evite renomear variáveis CSS sem atualizar tema claro/escuro.
- Regras de print são importantes para PDF.

## 13. Pontos de atenção conhecidos

1. README local está parcialmente desatualizado.
   - Cita acesso em `/psa-manuais/`, mas `_config.yml` usa `/Manuais_Ferramentas_PSA`.

2. Ausência de `Gemfile`.
   - O workflow configura Ruby com bundler cache e o README instrui `bundle install`, mas não há Gemfile no repositório.

3. Ausência de `package-lock.json`.
   - O workflow usa `npm ci`, que normalmente exige lockfile.

4. PDFs oficiais gerados no workflow não são linkados diretamente.
   - `generate_pdf.js` salva `_site/assets/pdfs/manual_{slug}.pdf`.
   - O botão do header chama `downloadGeneratedPDF()` client-side.

5. Alguns manuais têm frontmatter/HTML com entidades `&nbsp;`.
   - Identificados em `manuais/Site-area-de-chamados/index.md` e `manuais/dashboard-perdcomp-cliente/index.md`.

6. Alguns manuais usam `github\_url` em vez de `github_url`.
   - Isso impede que `page.github_url` seja lido corretamente.

7. Versão DIFAL divergente.
   - Frontmatter: `Versão 1.1`.
   - Hub: `v1.0`.

8. Arquivos `.obsidian` versionados dentro de `manuais/controle-perdcomp`.
   - Avaliar se devem ficar ou ser removidos em mudança separada.

9. `_data/deploy.yml` duplica `.github/workflows/deploy.yml`.
   - Se um mudar, o outro pode ficar desatualizado.

10. `scripts/convert_difal.py` usa caminhos absolutos locais.
    - Não deve ser tratado como ferramenta pronta para CI.

## 14. Orientações para agentes de IA

Antes de alterar:

- Leia o manual específico e `_data/manuais.yml`.
- Se mexer em layout/script/CSS, leia também `_layouts/manual.html`, `_includes/header.html`, `_includes/sidebar.html`, `assets/css/style.css` e o JS relacionado.
- Não reformate todos os manuais sem necessidade; há muitos nomes de imagem com espaços/acentos e HTML manual.
- Não remova imagens, mesmo que pareçam duplicadas, sem confirmar referências.
- Não normalize `&nbsp;` ou `.obsidian` no mesmo commit de uma mudança funcional, a menos que o pedido seja limpeza geral.

Ao criar ou atualizar manual:

- Mantenha o padrão visual existente.
- Use texto direto de procedimento.
- Garanta que cada screenshot tenha legenda.
- Atualize o `toc`.
- Atualize o hub.
- Se possível, faça uma verificação de links/imagens depois.

Ao investigar bug:

- Se for problema de URL/asset, primeiro cheque `baseurl`, `relative_url` e a substituição de imagens no layout.
- Se for problema de sidebar, cheque `toc` e IDs.
- Se for problema de exportação, cheque `editor.js`.
- Se for problema de PDF, diferencie PDF client-side (`html2pdf.js`) de PDF workflow (`generate_pdf.js`).
- Se for problema de deploy, cheque lockfiles/Gemfile e o workflow real em `.github/workflows/deploy.yml`.

## 15. Comandos úteis

Listar arquivos:

```bash
rg --files
```

Buscar texto nos manuais:

```bash
rg -n "termo" manuais
```

Buscar títulos/frontmatter:

```bash
rg -n "^(layout:|title:|versao:|github_url:|toc:)" manuais -g index.md
```

Instalar dependências Node:

```bash
npm install
```

Gerar PDFs depois do build Jekyll:

```bash
npm run pdf
```

Servir Jekyll localmente, assumindo ambiente Ruby/Jekyll configurado:

```bash
bundle exec jekyll serve
```

URL local esperada com o baseurl atual:

```text
http://localhost:4000/Manuais_Ferramentas_PSA/
```

## 16. Glossário funcional

- PSA Elevate: ecossistema/plataforma onde as ferramentas documentadas são acessadas.
- Digital Dev: ambiente de trabalho usado nos manuais para ferramentas digitais em desenvolvimento/operação.
- Manual: página estática em `manuais/{slug}/index.md`.
- Hub: página inicial que lista manuais a partir de `_data/manuais.yml`.
- TOC: sumário lateral, definido por `toc` no frontmatter.
- PER: Pedido Eletrônico de Restituição/Ressarcimento.
- DCOMP: Declaração de Compensação.
- SPED: sistema/arquivo fiscal digital.
- EFD ICMS/IPI: Escrituração Fiscal Digital de ICMS/IPI.
- EFD Contribuições: escrituração fiscal de PIS/COFINS.
- DIFAL: diferencial de alíquotas.
- NF-e: Nota Fiscal eletrônica.
- CT-e: Conhecimento de Transporte eletrônico.
- Selic: taxa usada para correção de valores nos dashboards PERDCOMP.

