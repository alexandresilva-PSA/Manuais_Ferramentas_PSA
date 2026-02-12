# Plano de Evolução Digital - Manuais PSA

Este plano organiza as melhorias solicitadas em fases lógicas, priorizando a estabilidade das funções de zoom e impressão que já estão validadas.

---

## 🏗️ Fase 1: Identidade Visual e Infraestrutura Admin
*Objetivo: Substituir placeholders e consolidar as ferramentas de gestão no topo.*

- [ ] **Tarefa 1.1: Atualização de Ativos**
    - Implementar `favicon.png` utilizando o arquivo `Ícone - PSA 1.png`.
    - Substituir a logo SVG do Header pelo arquivo `Identidade Visual PSA (Consultores) 1.png`.
- [ ] **Tarefa 1.2: Migração do Toolbar Admin**
    - Mover botões "Editar", "Exportar MD" e "Logout" para o `header.html`.
    - Garantir alinhamento perfeito com o número da versão e a logo.
    - Remover definitivamente o toolbar flutuante inferior para limpar a interface.
- [ ] **Tarefa 1.3: Workflow de Exportação Inteligente**
    - Ajustar `editor.js` para que o download de MD abra a aba de Upload do GitHub apenas para usuários autenticados como Admin.

---

## 🌗 Fase 2: Experiência do Usuário (UX) e Dark Mode
*Objetivo: Adicionar conforto visual e modernizar o sistema de navegação.*

- [ ] **Tarefa 2.1: Implementação de Dark Mode**
    - Criar toggle de tema (Sol/Lua) no Header.
    - Implementar variáveis de cores no CSS para alternância suave (background, cards e textos).
    - Persistência da escolha via `localStorage`.
- [ ] **Tarefa 2.2: Nova Sidebar "Accordion"**
    - Refatorar a estrutura para iniciar com grupos colapsados.
    - Adicionar micro-animação de rotação no ícone de expansão.
    - Implementar campo de busca fixa no topo da sidebar.
    - **CRÍTICO:** Garantir que o clique em subtítulos mantenha o scroll correto para a seção.

---

## 🖨️ Fase 3: Refinamento de Impressão e Conteúdo
*Objetivo: Resolver gargalos pendentes de visualização e exportação.*

- [ ] **Tarefa 3.1: Ajuste de Margens e Quebras (PDF)**
    - Implementar regra CSS para que títulos/subtítulos nunca fiquem sozinhos no fim da página (sempre acompanhados da imagem seguinte).
    - Ajustar tamanho dos containers de imagem para que fiquem 1:1 com a imagem original, evitando espaços vazios laterais.
- [ ] **Tarefa 3.2: Correção de Renderização Markdown**
    - Ajustar o processamento do Jekyll para identificar corretamente `##` e `###` sem quebrar a lógica de captura de conteúdo.

---

## ✅ Definição de Pronto (DoP)
1. O sistema de zoom deve funcionar sem "vazamentos" de cinza.
2. A impressão deve gerar PDFs com todos os subtítulos e imagens agrupados logicamente.
3. Todas as alterações devem ser enviadas para a branch `develop`.
