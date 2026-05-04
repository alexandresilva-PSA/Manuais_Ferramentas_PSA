---
layout: manual
title: "Apuração PIS/COFINS"
versao: "1.0"
github_url: "https://github.com/psa-elevate/apuracao-pis-cofins"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-acesso
    title: "2. Acesso e Autenticação"
    items:
      - id: secao-acesso-1
        title: "2.1. Acesso ao portal e área da equipa"
      - id: secao-acesso-2
        title: "2.2. Seleção da área de atuação"
      - id: secao-acesso-3
        title: "2.3. Login no sistema"
      - id: secao-acesso-4
        title: "2.4. Seleção do ambiente de trabalho"
      - id: secao-acesso-5
        title: "2.5. Hub de Ferramentas"
  - id: secao-3
    title: "3. Visão Geral da Ferramenta"
  - id: secao-4
    title: "4. Filtros de Busca e Configuração"
    items:
      - id: secao-4-1
        title: "4.1. Seleção de Cliente e Contribuinte"
      - id: secao-4-2
        title: "4.2. Tipo de Análise (EFD vs. Balancete)"
      - id: secao-4-3
        title: "4.3. Período de Apuração"
  - id: secao-5
    title: "5. Navegação pelas Abas de Resultados"
    items:
      - id: secao-5-1
        title: "5.1. Resumo"
      - id: secao-5-2
        title: "5.2. Débitos"
      - id: secao-5-3
        title: "5.3. Créditos"
      - id: secao-5-4
        title: "5.4. Apuração"
      - id: secao-5-5
        title: "5.5. Rateio"
  - id: secao-6
    title: "6. Interação com as Tabelas de Dados"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta de <strong>Apuração PIS/COFINS</strong>, parte integrante do sistema PSA Elevate. Esta ferramenta consolida débitos, créditos, isenções e rateios do contribuinte para calcular o resultado do período e o saldo apurado mês a mês.</p>
    <p>O objetivo é permitir a conferência detalhada da base de cálculo, seja através da importação de dados do <strong>EFD Contribuições</strong> ou do <strong>Balancete</strong> contábil (Modo Prado).</p>
  </div>
</div>

<div class="secao" id="secao-acesso">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acesso e Autenticação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-acesso-1">2.1. Acesso ao portal e área da equipa</h3>
    <p>O acesso às ferramentas começa pelo portal corporativo da PSA Consultores. Aceda ao link <a href="https://psaconsultores.com.br" target="_blank">https://psaconsultores.com.br</a> e clique no ícone de <strong>"Equipe"</strong>, localizado no canto superior direito do ecrã, para entrar na área restrita.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="Imagens/padrao-01-acesso-portal.png" class="img-screenshot" alt="Acesso à área da equipa no portal">
        </div>
        <p class="img-caption">Portal corporativo com destaque para o menu de acesso à Equipa</p>
    </div>

    <h3 id="secao-acesso-2">2.2. Seleção da área de atuação</h3>
    <p>No ecrã de departamentos, abra a lista suspensa e selecione a opção <strong>"Digital"</strong> para aceder ao sistema de gestão de demandas e às ferramentas internas.</p>

    <h3 id="secao-acesso-3">2.3. Login no sistema</h3>
    <p>O ecrã de autenticação será exibido. Insira as suas credenciais corporativas (e-mail e palavra-passe) nos campos correspondentes e clique em <strong>"Entrar"</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="Imagens/padrao-03-login.png" class="img-screenshot" alt="Ecrã de login preenchido">
        </div>
        <p class="img-caption">Preenchimento dos dados de acesso</p>
    </div>

    <h3 id="secao-acesso-4">2.4. Seleção do ambiente de trabalho</h3>
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>. Este é o ambiente de criação e utilização das ferramentas fiscais automatizadas.</p>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Identifique o cartão correspondente e clique no botão <strong>"Acessar Ferramenta"</strong> no módulo de Apuração PIS/COFINS.</p>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Visão Geral da Ferramenta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A interface principal é composta por um painel superior de filtros de busca e uma secção de resultados organizada em abas (separadores). Um alerta inicial (em tom verde) resume o propósito da ferramenta: calcular e demonstrar a base de cálculo e saldos apurados mês a mês.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="Imagens/apuracao-01-visao-geral.png" class="img-screenshot" alt="Visão geral da Apuração PIS/COFINS">
        </div>
        <p class="img-caption">Interface principal destacando o painel de filtros e o alerta informativo</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Filtros de Busca e Configuração</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1. Seleção de Cliente e Contribuinte</h3>
    <p>Obrigatório para iniciar. Selecione primeiro o <strong>Cliente</strong> (ou grupo) e, em seguida, o <strong>Contribuinte</strong> (CNPJ) alvo da apuração.</p>

    <h3 id="secao-4-2">4.2. Tipo de Análise (EFD vs. Balancete)</h3>
    <p>Pode escolher entre duas metodologias de análise através do menu "Tipo de análise":</p>
    <ul>
        <li><strong>Cliente (EFD):</strong> Utiliza os registos do EFD Contribuições como base para extrair os valores.</li>
        <li><strong>Prado (Balancete):</strong> Utiliza o balancete importado como base da análise. Neste modo, ficará disponível a opção <strong>"Período Fechado"</strong>, que, quando ativada, considera apenas competências já encerradas no balancete.</li>
    </ul>

    <h3 id="secao-4-3">4.3. Período de Apuração</h3>
    <p>Defina a <strong>Data Início</strong> e a <strong>Data Fim</strong> (Mês/Ano). A data final deve ser igual ou superior à data inicial. Após configurar, clique no botão <strong>Consultar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="Imagens/apuracao-02-filtros.png" class="img-screenshot" alt="Filtros preenchidos">
        </div>
        <p class="img-caption">Painel de filtros configurado com Tipo de Análise e Datas</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Navegação pelas Abas de Resultados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Ao consultar os dados, o sistema apresenta os resultados divididos em diferentes separadores lógicos:</p>

    <h3 id="secao-5-1">5.1. Resumo</h3>
    <p>Apresenta a "Base da Apuração". Consoante o Tipo de Análise escolhido, exibirá os dados do EFD ou uma visualização em árvore do Balancete. Pode utilizar a opção de múltipla escolha para filtrar contas específicas.</p>

    <h3 id="secao-5-2">5.2. Débitos</h3>
    <p>Consolida os valores a pagar. Os itens com Código de Situação Tributária (CST) de 01 a 10 são considerados débitos, enquanto os CSTs de 04 a 09 representam as Isenções e Exclusões. Apresenta quadros de "Base Normal" e "Débitos do Mês" separados por PIS, COFINS e as respetivas Alíquotas Reduzidas.</p>

    <h3 id="secao-5-3">5.3. Créditos</h3>
    <p>Demonstra os valores a abater. Para créditos, são considerados itens com CST de 50 a 66. As operações não geradoras de crédito abrangem os CSTs de 70 a 99.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="Imagens/apuracao-03-aba-creditos.png" class="img-screenshot" alt="Separador Créditos aberto">
        </div>
        <p class="img-caption">Visualização da tabela de cálculo de créditos com valores mensais</p>
    </div>

    <h3 id="secao-5-4">5.4. Apuração</h3>
    <p>Demonstra o resultado final do PIS e da COFINS no período. Inclui a Contribuição Bruta, o Crédito do Mês, o Crédito Anterior (Carryforward), o Valor Devido e o Saldo Acumulado para o mês seguinte.</p>

    <h3 id="secao-5-5">5.5. Rateio</h3>
    <p><em>(Disponível apenas no modo Cliente/EFD)</em>. Demonstra a distribuição percentual das receitas (tributadas no mercado interno, não tributadas e de exportação) e a respetiva aplicação sobre o crédito apurado, segmentados pelos códigos 101, 201 e 301 para PIS e COFINS.</p>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Interação com as Tabelas de Dados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>As tabelas foram desenhadas para facilitar a análise de grandes volumes de dados ao longo de múltiplos meses:</p>
    <ul>
        <li><strong>Expansão de Anos:</strong> Os cabeçalhos das tabelas apresentam totais anuais. Clique no sinal de <code>+</code> junto a um ano para expandir e visualizar as colunas de cada mês separadamente.</li>
        <li><strong>Dicas flutuantes (Tooltips):</strong> Passe o rato por cima dos títulos de colunas (como CST, Bloco, Conta, etc.) ou sobre os ícones de informação <code>(i)</code> para obter definições rápidas sobre o significado de cada secção.</li>
        <li><strong>Colunas Congeladas:</strong> Durante o scroll horizontal, as colunas de Descrição e Contas mantêm-se visíveis no lado esquerdo do ecrã para facilitar a leitura.</li>
        <li><strong>Destaca de Valores:</strong> Os valores a recuperar (Créditos) são apresentados num tom de verde, enquanto os valores a pagar (Débitos/Obrigações) surgem a vermelho.</li>
    </ul>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="Imagens/apuracao-04-tabela-dinamica.png" class="img-screenshot" alt="Tabela com meses expandidos e destaques">
        </div>
        <p class="img-caption">Tabela interativa demonstrando meses expandidos e colunas congeladas</p>
    </div>
  </div>
</div>