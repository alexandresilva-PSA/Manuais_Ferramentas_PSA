---
layout: manual
title: "Controle de Uso e Envio de Documentos (Externo)"
versao: "2.0"
github_url: "https://github.com/psa-elevate/dashboard-controle-uso"
toc:
  - id: secao-intro
    title: "1. Introdução"
  - id: secao-visao-geral
    title: "2. Visão geral do dashboard"
  - id: secao-envio
    title: "3. Envio de Documentos"
    items:
      - id: secao-envio-filtros
        title: "3.1. Filtros disponíveis"
      - id: secao-envio-indicadores
        title: "3.2. Indicadores"
      - id: secao-envio-graficos
        title: "3.3. Gráficos"
      - id: secao-envio-tabela
        title: "3.4. Detalhamento de envios por usuário"
  - id: secao-erros
    title: "4. Envios errados"
    items:
      - id: secao-erros-filtros
        title: "4.1. Filtros disponíveis"
      - id: secao-erros-indicadores
        title: "4.2. Indicadores"
      - id: secao-erros-graficos
        title: "4.3. Gráficos"
      - id: secao-erros-tabela
        title: "4.4. Ranking de erros por usuário"
  - id: secao-consultas
    title: "5. Uso da API"
    items:
      - id: secao-consultas-filtros
        title: "5.1. Filtros disponíveis"
      - id: secao-consultas-indicadores
        title: "5.2. Indicadores"
      - id: secao-consultas-graficos
        title: "5.3. Gráficos"
      - id: secao-consultas-tabela
        title: "5.4. Ranking de usuários por consulta"
  - id: secao-clientes
    title: "6. Clientes & Contribuintes"
    items:
      - id: secao-clientes-filtros
        title: "6.1. Filtros disponíveis"
      - id: secao-clientes-indicadores
        title: "6.2. Indicadores"
      - id: secao-clientes-graficos
        title: "6.3. Gráficos"
      - id: secao-clientes-tabela
        title: "6.4. Ranking de contribuintes consultados"
---

<div class="secao" id="secao-intro">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades do <strong>Controle de Uso e Envio de Documentos (Externo)</strong>, dashboard desenvolvido no Data Studio para o ecossistema PSA Elevate. O painel consolida, em uma única ferramenta, o monitoramento do volume de documentos enviados ao Drive da PSA, o acompanhamento dos erros cometidos nesses envios, o uso das consultas realizadas pela equipe e a distribuição da atividade entre clientes e contribuintes.</p>
    <p>Esta é a versão <strong>externa</strong>, voltada ao acompanhamento gerencial. Ela corresponde à versão interna sem a aba técnica de Saúde da API.</p>
    <p>O objetivo deste documento é orientar os gestores na leitura dos indicadores e na interpretação dos gráficos e tabelas de cada página, apoiando a tomada de decisão sobre volumetria de dados, produtividade da equipe e atendimento aos clientes.</p>
    <div class="dica">
      <span class="material-icons-round">lightbulb</span>
      <p>As imagens deste manual são da página completa. Clique sobre qualquer captura para ampliar e navegar nos detalhes de cada gráfico ou tabela.</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-visao-geral">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Visão geral do dashboard</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>O dashboard é organizado em <strong>páginas (abas) navegáveis</strong>, exibidas na barra de abas no topo do relatório. A navegação entre os temas é feita clicando na aba desejada. As abas disponíveis na versão externa são:</p>
    <ul>
      <li><strong>Envio de Documentos:</strong> volume de documentos enviados ao Drive pela equipe, distribuído por tipo e por analista.</li>
      <li><strong>Envios errados:</strong> erros cometidos no envio de documentos, categorias predominantes e responsáveis.</li>
      <li><strong>Uso da API:</strong> volume de consultas e chamadas à API por ferramenta e por usuário.</li>
      <li><strong>Clientes &amp; Contribuintes:</strong> distribuição da atividade da equipe entre pastas de cliente e contribuintes atendidos.</li>
    </ul>
    <p>Cada página possui sua própria barra de filtros no topo e uma faixa de indicadores logo abaixo, seguidas pelos gráficos e pela tabela de detalhamento.</p>

    <div class="img-container">
      <div class="img-wrapper"><img src="imagens/dashboard-visao-geral.png" class="img-screenshot" alt="Visão geral do dashboard com a barra de abas"></div>
      <p class="img-caption">Figura 1 - Visão geral do dashboard, com a barra de abas no topo</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-envio">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Envio de Documentos</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta página acompanha o volume de documentos enviados ao Drive da PSA pela equipe, com a distribuição por tipo de arquivo e por analista responsável.</p>

    <div class="img-container">
      <div class="img-wrapper"><img src="imagens/envio-visao-geral.png" class="img-screenshot" alt="Visão geral da página de envio de documentos"></div>
      <p class="img-caption">Figura 2 - Visão geral da página de Envio de Documentos</p>
    </div>

    <h3 id="secao-envio-filtros">3.1. Filtros disponíveis</h3>
    <p>O cabeçalho permite refinar a análise dos envios:</p>
    <ul>
      <li><strong>Escolha o período:</strong> Define a data inicial e final da análise.</li>
      <li><strong>Escolha o cliente:</strong> Filtra por um grupo ou família de empresas.</li>
      <li><strong>Escolha o contribuinte:</strong> Direciona a análise para um contribuinte específico.</li>
      <li><strong>Tipo de arquivo:</strong> Segmenta os envios por categoria de documento.</li>
    </ul>

    <h3 id="secao-envio-indicadores">3.2. Indicadores</h3>
    <p>Os cartões resumem o volume de envios no período:</p>
    <ul>
      <li><strong>Documentos enviados:</strong> Quantidade total de documentos enviados ao Drive.</li>
      <li><strong>Usuários que enviaram:</strong> Número de colaboradores que realizaram envios.</li>
      <li><strong>Média de envios por usuário:</strong> Média de documentos enviados por usuário ativo.</li>
      <li><strong>Usuário com mais envios:</strong> Colaborador responsável pelo maior volume de envios.</li>
    </ul>

    <h3 id="secao-envio-graficos">3.3. Gráficos</h3>
    <p>A página apresenta três gráficos de análise:</p>
    <ul>
      <li><strong>Total de documentos enviados por mês:</strong> barras com a evolução mensal do volume de envios ao Drive.</li>
      <li><strong>Top usuários por documentos enviados:</strong> barras horizontais que ranqueiam os usuários pelo volume de documentos enviados.</li>
      <li><strong>Total de documentos enviados por tipo de arquivo:</strong> barras com o volume segregado por categoria (NFe, CTe, EFD Contribuições, Balancete, EFD ICMS IPI, ECD, ECF, entre outros).</li>
    </ul>

    <h3 id="secao-envio-tabela">3.4. Detalhamento de envios por usuário</h3>
    <p>Tabela que detalha os envios por usuário, com as colunas: usuário, tipo de documento predominante, total de documentos, percentual do total e data da última atualização.</p>
  </div>
</div>

<div class="secao" id="secao-erros">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Envios errados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta página consolida os erros cometidos no envio de documentos, evidenciando as categorias predominantes e os responsáveis, para apoiar ações de correção e orientação da equipe.</p>

    <div class="img-container">
      <div class="img-wrapper"><img src="imagens/erros-visao-geral.png" class="img-screenshot" alt="Visão geral da página de envios errados"></div>
      <p class="img-caption">Figura 3 - Visão geral da página de Envios errados</p>
    </div>

    <h3 id="secao-erros-filtros">4.1. Filtros disponíveis</h3>
    <p>O cabeçalho permite refinar a análise dos erros:</p>
    <ul>
      <li><strong>Escolha o período:</strong> Define a data inicial e final da análise.</li>
      <li><strong>Escolha o cliente:</strong> Filtra por um grupo ou família de empresas.</li>
      <li><strong>Escolha o contribuinte:</strong> Direciona a análise para um contribuinte específico.</li>
      <li><strong>Escolha o tipo de erro:</strong> Segmenta os erros pela categoria.</li>
    </ul>

    <h3 id="secao-erros-indicadores">4.2. Indicadores</h3>
    <p>Os cartões resumem os erros no período:</p>
    <ul>
      <li><strong>Erros cometidos no mês:</strong> Quantidade total de erros registrados.</li>
      <li><strong>Usuários que cometeram erros:</strong> Número de colaboradores com erros no período.</li>
      <li><strong>Pastas de clientes com erro:</strong> Quantidade de pastas de clientes afetadas por erros.</li>
      <li><strong>Usuário com mais erros:</strong> Colaborador com o maior volume de erros.</li>
    </ul>

    <h3 id="secao-erros-graficos">4.3. Gráficos</h3>
    <p>A página apresenta três gráficos de análise:</p>
    <ul>
      <li><strong>Erros cometidos por mês:</strong> barras com a evolução mensal da quantidade de erros.</li>
      <li><strong>Erros cometidos por tipo de arquivo:</strong> barras que distribuem os erros pela categoria de documento (NFe, CTe, EFD ICMS IPI, EFD Contribuições, ICMS Saída, ECD, entre outros).</li>
      <li><strong>Erros cometidos por categoria de erro:</strong> barras horizontais que agrupam os erros pela natureza da ocorrência (por exemplo, duplicidade por hash ou outras).</li>
    </ul>

    <h3 id="secao-erros-tabela">4.4. Ranking de erros cometidos por usuário</h3>
    <p>Tabela que ranqueia os usuários pela quantidade de erros, com as colunas: usuário, erros, percentual do total e data do último erro registrado.</p>
  </div>
</div>

<div class="secao" id="secao-consultas">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Uso da API</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta página acompanha o volume de consultas e chamadas realizadas às APIs da plataforma, com a distribuição por tipo de operação, por ferramenta e por usuário.</p>

    <div class="img-container">
      <div class="img-wrapper"><img src="imagens/consultas-visao-geral.png" class="img-screenshot" alt="Visão geral da página de uso da API"></div>
      <p class="img-caption">Figura 4 - Visão geral da página de Uso da API</p>
    </div>

    <h3 id="secao-consultas-filtros">5.1. Filtros disponíveis</h3>
    <p>O cabeçalho permite refinar a análise das consultas:</p>
    <ul>
      <li><strong>Escolha o período:</strong> Define a data inicial e final da análise.</li>
      <li><strong>Escolha o cliente:</strong> Filtra por um grupo ou família de empresas.</li>
      <li><strong>Escolha o contribuinte:</strong> Direciona a análise para um contribuinte específico.</li>
      <li><strong>Escolha a ferramenta:</strong> Restringe as consultas a uma ferramenta da plataforma.</li>
    </ul>

    <h3 id="secao-consultas-indicadores">5.2. Indicadores</h3>
    <p>Os cartões resumem o uso no período:</p>
    <ul>
      <li><strong>Consultas realizadas no mês:</strong> Quantidade total de consultas/chamadas realizadas.</li>
      <li><strong>Usuários que realizaram consultas:</strong> Número de colaboradores que consultaram a plataforma.</li>
      <li><strong>Total contribuintes consultados:</strong> Quantidade de contribuintes únicos acessados.</li>
      <li><strong>Usuário com mais consultas:</strong> Colaborador com o maior volume de consultas.</li>
    </ul>

    <h3 id="secao-consultas-graficos">5.3. Gráficos</h3>
    <p>A página apresenta três gráficos de análise:</p>
    <ul>
      <li><strong>Chamadas realizadas por mês:</strong> barras com a evolução mensal do volume de chamadas à API.</li>
      <li><strong>Tipos das chamadas à API:</strong> barras que distribuem as chamadas pela operação acionada (consulta de dados, atualização de dados no DW, exportação para Excel e download de arquivo original).</li>
      <li><strong>Top ferramentas mais consultadas:</strong> barras horizontais que ranqueiam as ferramentas pelo volume de consultas.</li>
    </ul>

    <h3 id="secao-consultas-tabela">5.4. Ranking de usuários por consulta</h3>
    <p>Tabela que ranqueia os usuários pelo volume de chamadas realizadas à plataforma.</p>
  </div>
</div>

<div class="secao" id="secao-clientes">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Clientes &amp; Contribuintes</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Esta página apresenta a distribuição da atividade da equipe entre as pastas de cliente e os contribuintes atendidos, ajudando a identificar onde o esforço de consulta e envio está concentrado.</p>

    <div class="img-container">
      <div class="img-wrapper"><img src="imagens/clientes-visao-geral.png" class="img-screenshot" alt="Visão geral da página de clientes e contribuintes"></div>
      <p class="img-caption">Figura 5 - Visão geral da página de Clientes &amp; Contribuintes</p>
    </div>

    <h3 id="secao-clientes-filtros">6.1. Filtros disponíveis</h3>
    <p>O cabeçalho permite refinar a análise da atividade:</p>
    <ul>
      <li><strong>Escolha o período:</strong> Define a data inicial e final da análise.</li>
      <li><strong>Escolha o cliente:</strong> Filtra por um grupo ou família de empresas.</li>
      <li><strong>Escolha o contribuinte:</strong> Direciona a análise para um contribuinte específico.</li>
      <li><strong>Escolha o usuário:</strong> Restringe a análise à atividade de um colaborador.</li>
    </ul>

    <h3 id="secao-clientes-indicadores">6.2. Indicadores</h3>
    <p>Os cartões resumem a atividade no período:</p>
    <ul>
      <li><strong>Pastas de clientes atendidas no período:</strong> Quantidade de pastas de clientes com atividade.</li>
      <li><strong>Contribuintes consultados pela equipe:</strong> Número de contribuintes únicos atendidos.</li>
      <li><strong>Usuário com mais clientes consultados:</strong> Colaborador que acessou o maior número de clientes.</li>
      <li><strong>Pasta com mais atividade:</strong> Pasta de cliente com o maior volume de atividade.</li>
    </ul>

    <h3 id="secao-clientes-graficos">6.3. Gráficos</h3>
    <p>A página apresenta três gráficos de análise:</p>
    <ul>
      <li><strong>Clientes que a equipe mais consultou:</strong> barras horizontais que ranqueiam os clientes pelo volume de consultas realizadas pela equipe.</li>
      <li><strong>Pastas de clientes que mais receberam envios:</strong> barras horizontais que ranqueiam as pastas pelo volume de documentos recebidos.</li>
      <li><strong>Contribuintes que a equipe mais consultou:</strong> barras horizontais que ranqueiam os contribuintes pelo volume de consultas.</li>
    </ul>

    <h3 id="secao-clientes-tabela">6.4. Ranking de contribuintes consultados pela equipe</h3>
    <p>Tabela que lista os contribuintes consultados, com as colunas: contribuinte, consultas, percentual do total e data do evento mais recente.</p>
  </div>
</div>
