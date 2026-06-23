---
layout: manual
title: "Dashboard de Controle de Uso (Externo)"
versao: "1.0"
github_url: "https://github.com/psa-elevate/dashboard-controle-uso"
toc:
  - id: secao-intro
    title: "1. Introdução"
  - id: secao-2
    title: "2. Visão geral do dashboard"
    items:
      - id: secao-2-1
        title: "2.1. Visão geral da página"
      - id: secao-2-2
        title: "2.2. Filtros disponíveis"
      - id: secao-2-3
        title: "2.3. Indicadores"
      - id: secao-2-4
        title: "2.4. Percentual de entradas e saídas adicionadas (NFe e CTe)"
      - id: secao-2-5
        title: "2.5. Total adicionado ao Drive por tipo de arquivo"
      - id: secao-2-6
        title: "2.6. Tabela geral controle de uso"
  - id: secao-3
    title: "3. Controle de uso"
    items:
      - id: secao-3-1
        title: "3.1. Visão geral da página"
      - id: secao-3-2
        title: "3.2. Filtros disponíveis"
      - id: secao-3-3
        title: "3.3. Indicadores"
      - id: secao-3-4
        title: "3.4. Usuários com mais acessos"
      - id: secao-3-5
        title: "3.5. Consultas por tipo de documento"
      - id: secao-3-6
        title: "3.6. Clientes mais acessados por tipo de acesso"
  - id: secao-4
    title: "4. Detalhamento de operações"
    items:
      - id: secao-4-1
        title: "4.1. Visão geral da página"
      - id: secao-4-2
        title: "4.2. Filtros disponíveis"
      - id: secao-4-3
        title: "4.3. Indicadores"
      - id: secao-4-4
        title: "4.4. Tabela de operações por usuário"
---

<div class="secao" id="secao-intro">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades do <strong>Dashboard de Controle de Uso (Externo)</strong>, parte integrante do sistema PSA Elevate. O painel centraliza as informações sobre o volume de consultas realizadas na plataforma e o fluxo de upload de arquivos para o Drive da PSA, sendo voltado ao acompanhamento gerencial da equipe.</p>
    <p>O objetivo deste documento é orientar os gestores na interpretação dos indicadores e no uso dos recursos disponíveis nas abas do dashboard, desde a análise do volume de arquivos até o detalhamento das operações realizadas por usuário.</p>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Visão geral do dashboard</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta aba permite o acompanhamento primário do volume de consultas realizadas e a quantidade de arquivos adicionados ao Drive.</p>

    <h3 id="secao-2-1">2.1. Visão geral da página</h3>
    <p>Apresenta a disposição completa dos filtros, indicadores de volume e a movimentação de arquivos.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 1 - Visao geral de arquivos.png" class="img-screenshot" alt="Visão geral da página de arquivos"></div>
        <p class="img-caption">Figura 1 - Visão geral da página de arquivos</p>
    </div>

    <h3 id="secao-2-2">2.2. Filtros disponíveis</h3>
    <p>O cabeçalho permite refinar os dados apresentados na tela:</p>
    <ul>
        <li><strong>Selecionar período:</strong> Permite definir a data inicial e final para a análise.</li>
        <li><strong>Clientes:</strong> Permite filtrar as consultas por um grupo ou família de empresas.</li>
        <li><strong>Empresas:</strong> Permite direcionar a análise para um contribuinte específico (CNPJ ou filial).</li>
        <li><strong>Usuários:</strong> Filtra as ações realizadas por um membro específico da equipe.</li>
    </ul>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 2 - Filtros da visao geral de arquivos.png" class="img-screenshot" alt="Filtros da visão geral de arquivos"></div>
        <p class="img-caption">Figura 2 - Filtros da visão geral de arquivos</p>
    </div>

    <h3 id="secao-2-3">2.3. Indicadores</h3>
    <p>Os cartões apresentam o resumo numérico do cenário selecionado:</p>
    <ul>
        <li><strong>Total de consultas:</strong> A quantidade absoluta de buscas feitas na plataforma.</li>
        <li><strong>Clientes consultados:</strong> O número de grupos ou famílias pesquisados.</li>
        <li><strong>Empresas consultadas:</strong> A quantidade de contribuintes únicos acessados.</li>
        <li><strong>Usuários ativos:</strong> O número de colaboradores que realizaram alguma operação.</li>
        <li><strong>Consultas por usuário:</strong> A média de buscas dividida pelo número de usuários ativos.</li>
        <li><strong>Duração média (s):</strong> O tempo médio de resposta das consultas.</li>
    </ul>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 3 - Indicadores da visao geral de arquivos.png" class="img-screenshot" alt="Indicadores da visão geral de arquivos"></div>
        <p class="img-caption">Figura 3 - Indicadores da visão geral de arquivos</p>
    </div>

    <h3 id="secao-2-4">2.4. Percentual de entradas e saídas adicionadas (NFe e CTe)</h3>
    <p>Este gráfico de rosca ilustra a divisão proporcional dos arquivos adicionados ao Drive, comparando o volume de documentos de entrada com os de saída.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 4 - Grafico percentual de entradas e saidas.png" class="img-screenshot" alt="Gráfico percentual de entradas e saídas"></div>
        <p class="img-caption">Figura 4 - Gráfico percentual de entradas e saídas</p>
    </div>

    <h3 id="secao-2-5">2.5. Total adicionado ao Drive por tipo de arquivo</h3>
    <p>Este gráfico de barras apresenta a volumetria exata de arquivos armazenados, segregando o total entre os fluxos de entrada e saída.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 5 - Grafico total adicionado ao drive.png" class="img-screenshot" alt="Gráfico total adicionado ao drive"></div>
        <p class="img-caption">Figura 5 - Gráfico total adicionado ao drive</p>
    </div>

    <h3 id="secao-2-6">2.6. Tabela geral controle de uso</h3>
    <p>A tabela funciona como o extrato detalhado das movimentações, identificando o usuário, o tipo de arquivo manipulado, a natureza da movimentação e a quantidade de arquivos adicionados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 6 - Tabela geral controle de uso.png" class="img-screenshot" alt="Tabela geral de controle de uso"></div>
        <p class="img-caption">Figura 6 - Tabela geral de controle de uso</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Controle de uso</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta tela foca no perfil de acesso da equipe, destacando quem realiza mais buscas e quais tipos de documentos e clientes são mais demandados.</p>

    <h3 id="secao-3-1">3.1. Visão geral da página</h3>
    <p>Apresenta a visão macro do comportamento de uso da plataforma.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 7 - Visao geral do controle de uso.png" class="img-screenshot" alt="Visão geral da página de controle de uso"></div>
        <p class="img-caption">Figura 7 - Visão geral da página de controle de uso</p>
    </div>

    <h3 id="secao-3-2">3.2. Filtros disponíveis</h3>
    <p>Compartilha os mesmos filtros (Período, Clientes, Empresas e Usuários) descritos na visão geral do dashboard.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 8 - Filtros do controle de uso.png" class="img-screenshot" alt="Filtros do controle de uso"></div>
        <p class="img-caption">Figura 8 - Filtros do controle de uso</p>
    </div>

    <h3 id="secao-3-3">3.3. Indicadores</h3>
    <p>Exibe os mesmos indicadores de volume de acesso da página anterior.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 9 - Indicadores do controle de uso.png" class="img-screenshot" alt="Indicadores do controle de uso"></div>
        <p class="img-caption">Figura 9 - Indicadores do controle de uso</p>
    </div>

    <h3 id="secao-3-4">3.4. Usuários com mais acessos</h3>
    <p>Este gráfico classifica os membros da equipe com base no volume de atividade, identificando quem concentra as requisições.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 10 - Grafico usuarios com mais acessos.png" class="img-screenshot" alt="Gráfico de usuários com mais acessos"></div>
        <p class="img-caption">Figura 10 - Gráfico de usuários com mais acessos</p>
    </div>

    <h3 id="secao-3-5">3.5. Consultas por tipo de documento</h3>
    <p>Apresenta a distribuição das buscas de acordo com a categoria do documento fiscal (NF-e, DIFAL, EFD Contribuições, etc.).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 11 - Grafico consultas por tipo de documento.png" class="img-screenshot" alt="Gráfico de consultas por tipo de documento"></div>
        <p class="img-caption">Figura 11 - Gráfico de consultas por tipo de documento</p>
    </div>

    <h3 id="secao-3-6">3.6. Clientes mais acessados por tipo de acesso</h3>
    <p>Elenca os grupos de empresas mais consultados. As barras utilizam cores para distinguir a intenção da busca entre "Consulta de dados" e "Exportação para Excel".</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 12 - Grafico clientes mais acessados.png" class="img-screenshot" alt="Gráfico de clientes mais acessados"></div>
        <p class="img-caption">Figura 12 - Gráfico de clientes mais acessados</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Detalhamento de operações</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta página fornece uma visão tabular focada em auditar quais funções cada colaborador executa dentro do sistema.</p>

    <h3 id="secao-4-1">4.1. Visão geral da página</h3>
    <p>Apresenta a disposição da tabela de auditoria de ações cruzadas com os totais de uso.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 13 - Visao geral do detalhamento de operacoes.png" class="img-screenshot" alt="Visão geral do detalhamento de operações"></div>
        <p class="img-caption">Figura 13 - Visão geral do detalhamento de operações</p>
    </div>

    <h3 id="secao-4-2">4.2. Filtros disponíveis</h3>
    <p>Mantém o padrão de filtros (Período, Clientes, Empresas e Usuários).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 14 - Filtros do detalhamento de operacoes.png" class="img-screenshot" alt="Filtros do detalhamento de operações"></div>
        <p class="img-caption">Figura 14 - Filtros do detalhamento de operações</p>
    </div>

    <h3 id="secao-4-3">4.3. Indicadores</h3>
    <p>Exibe os indicadores padrão de volume das telas anteriores.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 15 - Indicadores do detalhamento de operacoes.png" class="img-screenshot" alt="Indicadores do detalhamento de operações"></div>
        <p class="img-caption">Figura 15 - Indicadores do detalhamento de operações</p>
    </div>

    <h3 id="secao-4-4">4.4. Tabela de operações por usuário</h3>
    <p>A tabela detalha o volume de ações por usuário, dividindo a quantidade entre: Consulta de dados, Exportação para Excel, Atualização de dados no DW e Download de arquivo original.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 16 - Tabela de operacoes por usuario.png" class="img-screenshot" alt="Tabela de operações por usuário"></div>
        <p class="img-caption">Figura 16 - Tabela de operações por usuário</p>
    </div>
  </div>
</div>
