---
layout: manual
title: "Dashboard de Faturamento PERDCOMP"
versao: "1.0"
github_url: "https://github.com/psa-elevate/dashboard-perdcomp-faturamento"
toc:
  - id: secao-1
    title: "1. Visão geral do dashboard"
  - id: secao-2
    title: "2. Página 1 - Visão interna (Faturamento)"
    items:
      - id: secao-2-1
        title: "2.1. Filtros da página 1"
      - id: secao-2-2
        title: "2.2. Indicadores principais"
      - id: secao-2-3
        title: "2.3. Tabela de detalhamento"
  - id: secao-3
    title: "3. Página 2 - Visão do cliente"
    items:
      - id: secao-3-1
        title: "3.1. Visão geral do cliente"
      - id: secao-3-2
        title: "3.2. Filtros da página 2"
      - id: secao-3-3
        title: "3.3. Indicadores do cliente"
      - id: secao-3-4
        title: "3.4. Gráfico de impostos"
      - id: secao-3-5
        title: "3.5. Gráfico DCOMP x PER"
      - id: secao-3-6
        title: "3.6. Gráfico de linha do tempo"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Visão geral do dashboard</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>O Dashboard PERDCOMP é utilizado para acompanhar os pedidos de PER e DCOMP (ressarcimentos e compensações). Ele é dividido em duas páginas:</p>
    <ul>
        <li><strong>Página 1 (Visão Interna):</strong> Focada no acompanhamento do faturamento da PSA Consultores e no detalhamento geral dos pedidos.</li>
        <li><strong>Página 2 (Visão do Cliente):</strong> Visão que o cliente terá acesso para acompanhar o andamento dos seus PERs e compensações.</li>
    </ul>
    
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 1 - Visao Geral do Faturamento.png" class="img-screenshot" alt="Visão geral da primeira página do dashboard"></div>
        <p class="img-caption">Figura 1 - Captura da tela inicial do relatório mostrando a visão geral da primeira página</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Página 1 - Visão interna (Faturamento)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-2-1">2.1 Filtros da página 1</h3>
    <p>Na parte superior da primeira página, você encontra os seguintes filtros:</p>
    <ul>
        <li><strong>Cliente:</strong> Utilizado para selecionar o grupo ou família de clientes.</li>
        <li><strong>Contribuinte:</strong> Utilizado para selecionar a empresa específica dentro daquele grupo de clientes.</li>
        <li><strong>Tipo de documento:</strong> Filtra por PER ou DCOMP.</li>
        <li><strong>Ano:</strong> Filtra pelo ano de referência do pedido.</li>
        <li><strong>Data de envio do documento:</strong> Seleciona o período em que o documento foi enviado.</li>
        <li><strong>Data de pagamento:</strong> Seleciona o período em que o pagamento foi realizado.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 2 - Filtros da Pagina 1.png" class="img-screenshot" alt="Filtros da barra superior"></div>
        <p class="img-caption">Figura 2 - Captura focada apenas na barra superior da Página 1, mostrando as caixas de filtro</p>
    </div>

    <h3 id="secao-2-2">2.2 Indicadores principais</h3>
    <p>Abaixo dos filtros, há cartões que mostram os valores gerais:</p>
    <ul>
        <li><strong>Saldo disponível:</strong> Mostra o saldo atual dos pedidos.</li>
        <li><strong>Saldo disponível + Selic:</strong> Mostra o saldo com a correção da taxa Selic.</li>
        <li><strong>Valor ressarcido:</strong> Valor do PER depositado pela Receita.</li>
        <li><strong>Valor compensado:</strong> Valor da DCOMP utilizado para abater impostos.</li>
        <li><strong>Faturamento total:</strong> Valor faturado pela PSA Consultores.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 3 - Indicadores Pagina 1.png" class="img-screenshot" alt="Cartões de indicadores"></div>
        <p class="img-caption">Figura 3 - Captura da linha de cartões com os números, logo abaixo dos filtros da Página 1</p>
    </div>

    <h3 id="secao-2-3">2.3 Tabela de detalhamento</h3>
    <p>Na parte inferior, há uma tabela com a lista dos documentos. Ela possui as colunas: Nº do documento, Contribuinte, Tipo de documento, Trimestre, Imposto, Nº do PER utilizado na Dcomp, Valor ressarcido, Valor compensado, Faturamento PSA Consultores e Percentual aplicado.</p>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 4 - Tabela de Detalhamento.png" class="img-screenshot" alt="Tabela analítica"></div>
        <p class="img-caption">Figura 4 - Captura da tabela na parte inferior da Página 1</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Página 2 - Visão do cliente</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-3-1">3.1 Visão geral do cliente</h3>
    <p>A segunda página, acessada pela aba "Visão do cliente", é o painel que o cliente visualizará para acompanhar o andamento dos seus próprios pedidos. Ela contém filtros específicos, totalizadores e gráficos de análise.</p>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 5 - Visao Geral do Cliente.png" class="img-screenshot" alt="Visão geral do cliente"></div>
        <p class="img-caption">Figura 5 - Captura da tela inteira da aba "Visão do cliente"</p>
    </div>

    <h3 id="secao-3-2">3.2 Filtros da página 2</h3>
    <p>O cliente pode utilizar os seguintes filtros na sua visão:</p>
    <ul>
        <li><strong>Contribuinte:</strong> Seleciona a empresa específica.</li>
        <li><strong>Ano:</strong> Filtra por ano.</li>
        <li><strong>Data de pagamento:</strong> Seleciona o período do pagamento.</li>
        <li><strong>Tipo de documento:</strong> Filtra por PER ou DCOMP.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 5 - Filtros da Pagina 2.png" class="img-screenshot" alt="Filtros do cliente"></div>
        <p class="img-caption">Figura 6 - Captura da barra de filtros no topo da Página 2</p>
    </div>

    <h3 id="secao-3-3">3.3 Indicadores do cliente</h3>
    <p>O cliente visualiza os seus valores consolidados nos cartões:</p>
    <ul>
        <li><strong>Saldo disponível</strong> e <strong>Saldo disponível + Selic</strong>.</li>
        <li><strong>Valor compensado</strong> e <strong>Valor ressarcido</strong>.</li>
        <li><strong>Valor total (compensado + ressarcido):</strong> A soma de tudo que foi compensado em DCOMP e recebido em PER.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 7 - Indicadores do Cliente.png" class="img-screenshot" alt="Indicadores do cliente"></div>
        <p class="img-caption">Figura 7 - Captura dos cartões com os valores no centro da Página 2</p>
    </div>

    <h3 id="secao-3-4">3.4 Gráfico de impostos</h3>
    <p>O gráfico de barras "Valor total compensado por tipo de imposto" mostra os valores divididos por impostos como INSS, PIS, IRPJ, COFINS, IRRF / CSRF e IRRF.</p>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 8 - Grafico de Impostos.png" class="img-screenshot" alt="Gráfico de impostos"></div>
        <p class="img-caption">Figura 8 - Captura do gráfico de barras de impostos na Página 2</p>
    </div>

    <h3 id="secao-3-5">3.5 Gráfico DCOMP x PER</h3>
    <p>O gráfico de pizza "Relação entre Total compensado e total ressarcido" mostra a proporção do valor total que vem de DCOMP (compensação) e a proporção que vem de PER (ressarcimento).</p>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 9 - Grafico DCOMP x PER.png" class="img-screenshot" alt="Gráfico de pizza"></div>
        <p class="img-caption">Figura 9 - Captura do gráfico de pizza na Página 2</p>
    </div>

    <h3 id="secao-3-6">3.6 Gráfico de linha do tempo</h3>
    <p>Na parte inferior, há um gráfico de linha do tempo que mostra a evolução do "Valor Total (Compensado + Ressarcido)" ao longo dos anos (de 2021 a 2026).</p>

    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 10 - Grafico de Linha do Tempo.png" class="img-screenshot" alt="Evolução ao longo do tempo"></div>
        <p class="img-caption">Figura 10 - Captura mostrando o gráfico de linha do tempo no rodapé da Página 2</p>
    </div>
  </div>
</div>