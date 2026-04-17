---

layout: manual

title: "Dashboard de Clientes e OS"

versao: "1.0"

github_url: "https://github.com/psa-elevate/dashboard-clientes-os"

toc:

  - id: secao-intro

    title: "1. IntroduÃ§Ã£o"

  - id: secao-2

    title: "2. VisÃ£o geral do dashboard"

  - id: secao-3

    title: "3. Painel Executivo - Faturamento e Clientes"

    items:

      - id: secao-3-1

        title: "3.1. VisÃ£o geral da pÃ¡gina"

      - id: secao-3-2

        title: "3.2. Filtros disponÃ­veis"

      - id: secao-3-3

        title: "3.3. Indicadores (KPIs)"

      - id: secao-3-4

        title: "3.4. GrÃ¡ficos de anÃ¡lise"

      - id: secao-3-5

        title: "3.5. Tabela de visÃ£o consolidada"

  - id: secao-4

    title: "4. Painel Executivo - Ordens de ServiÃ§o (OS)"

    items:

      - id: secao-4-1

        title: "4.1. VisÃ£o geral da pÃ¡gina"

      - id: secao-4-2

        title: "4.2. Filtros de OS"

      - id: secao-4-3

        title: "4.3. Indicadores de OS"

      - id: secao-4-4

        title: "4.4. GrÃ¡ficos de acompanhamento"

      - id: secao-4-5

        title: "4.5. Tabela analÃ­tica de OS"

  - id: secao-5

    title: "5. Painel Operacional"

    items:

      - id: secao-5-1

        title: "5.1. VisÃ£o geral da pÃ¡gina"

      - id: secao-5-2

        title: "5.2. Filtros e Indicadores"

      - id: secao-5-3

        title: "5.3. Tabela de detalhamento operacional"

---



<div class="secao" id="secao-intro">

  <div class="secao-header">

    <span class="secao-numero editable-text">1</span>

    <h2 class="editable-text">IntroduÃ§Ã£o</h2>

  </div>

  <div class="secao-conteudo editable-area">

    <p>Este manual apresenta as funcionalidades do <strong>Dashboard de Clientes e OS</strong>, uma ferramenta estratÃ©gica desenvolvida no Looker Studio para o ecossistema PSA Elevate. O painel centraliza indicadores crÃ­ticos de performance, permitindo o acompanhamento em tempo real do faturamento, do perfil da carteira de clientes e do status operacional das Ordens de ServiÃ§o (OS).</p>

    <p>O objetivo deste documento Ã© orientar gestores e analistas na exploraÃ§Ã£o das trÃªs visÃµes principais do relatÃ³rio, facilitando a tomada de decisÃ£o baseada em dados consolidados e mÃ©tricas de ticket mÃ©dio e produtividade.</p>

  </div>

</div>



<div class="secao" id="secao-2">

  <div class="secao-header">

    <span class="secao-numero editable-text">2</span>

    <h2 class="editable-text">VisÃ£o geral do dashboard</h2>

  </div>

  <div class="secao-conteudo editable-area">

    <p>O dashboard Ã© dividido em pÃ¡ginas temÃ¡ticas que separam a visÃ£o executiva financeira da visÃ£o operacional detalhada. A navegaÃ§Ã£o entre as abas permite transitar entre dados macro (faturamento total) e micro (detalhes de uma OS especÃ­fica).</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/visao_geral_dashboard.png" class="img-screenshot" alt="VisÃ£o geral do dashboard"></div>

        <p class="img-caption">Figura 1 - VisÃ£o geral da estrutura de navegaÃ§Ã£o do dashboard</p>

    </div>

  </div>

</div>



<div class="secao" id="secao-3">

  <div class="secao-header">

    <span class="secao-numero editable-text">3</span>

    <h2 class="editable-text">Painel Executivo - Faturamento e Clientes</h2>

  </div>

  <div class="secao-conteudo editable-area">

    <p>Esta aba foca na saÃºde financeira da operaÃ§Ã£o e na segmentaÃ§Ã£o da carteira de clientes ativos.</p>



    <h3 id="secao-3-1">3.1. VisÃ£o geral da pÃ¡gina</h3>

    <p>Apresenta o faturamento consolidado e a distribuiÃ§Ã£o de receita por categoria de cliente.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo.png" class="img-screenshot" alt="Painel executivo faturamento"></div>

        <p class="img-caption">Figura 2 - VisÃ£o geral do Painel Executivo de Faturamento</p>

    </div>



    <h3 id="secao-3-2">3.2. Filtros disponÃ­veis</h3>

    <p>No topo da pÃ¡gina, Ã© possÃ­vel refinar a anÃ¡lise atravÃ©s dos seguintes controles:</p>

    <ul>

        <li><strong>Escolha o perÃ­odo:</strong> Define o intervalo de tempo da anÃ¡lise.</li>

        <li><strong>Escolha o cliente:</strong> Filtra os dados por grupos especÃ­ficos.</li>

        <li><strong>Escolha o tipo:</strong> Segmenta entre clientes fixos ou pontuais.</li>

        <li><strong>Escolha a categoria:</strong> Filtra pelo nÃ­vel de segmentaÃ§Ã£o (ex: Prata, Ouro).</li>

    </ul>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/filtros_painel_executivo.png" class="img-screenshot" alt="Filtros painel executivo"></div>

        <p class="img-caption">Figura 3 - Barra de filtros do Painel Executivo</p>

    </div>



    <h3 id="secao-3-3">3.3. Indicadores (KPIs)</h3>

    <p>Os cartÃµes de performance destacam mÃ©tricas vitais para a gestÃ£o:</p>

    <ul>

        <li><strong>Faturamento total:</strong> Soma absoluta da receita no perÃ­odo, com comparativo percentual.</li>

        <li><strong>Clientes ativos:</strong> Quantidade total, detalhando o volume de <strong>Fixos</strong> e <strong>Pontuais</strong>.</li>

        <li><strong>Ticket mÃ©dio:</strong> Valor mÃ©dio faturado por cliente.</li>

    </ul>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/kpis_painel_executivo.png" class="img-screenshot" alt="KPIs painel executivo"></div>

        <p class="img-caption">Figura 4 - Indicadores principais de faturamento e clientes</p>

    </div>



    <h3 id="secao-3-4">3.4. GrÃ¡ficos de anÃ¡lise</h3>

    <p>O painel utiliza visualizaÃ§Ãµes grÃ¡ficas para identificar tendÃªncias de mercado:</p>

    <ul>

        <li><strong>Faturamento mensal:</strong> HistÃ³rico de evoluÃ§Ã£o da receita ao longo do tempo.</li>

        <li><strong>Faturamento por categoria:</strong> DistribuiÃ§Ã£o percentual da receita por nÃ­vel de cliente.</li>

        <li><strong>Faturamento por tipo:</strong> Comparativo entre o peso de clientes recorrentes (fixos) e esporÃ¡dicos (pontuais).</li>

    </ul>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/GrÃ¡fico de barras_painel_executivo.png" class="img-screenshot" alt="GrÃ¡fico faturamento mensal"></div>

        <p class="img-caption">Figura 5 - GrÃ¡fico de barras de faturamento mensal</p>

    </div>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/GrÃ¡fico de pizza_painel_executivo.png" class="img-screenshot" alt="GrÃ¡fico categoria"></div>

        <p class="img-caption">Figura 6 - DistribuiÃ§Ã£o de faturamento por categoria</p>

    </div>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo_GrÃ¡fico de barras.png" class="img-screenshot" alt="GrÃ¡fico tipo cliente"></div>

        <p class="img-caption">Figura 7 - ProporÃ§Ã£o de faturamento por tipo de cliente</p>

    </div>



    <h3 id="secao-3-5">3.5. Tabela de visÃ£o consolidada</h3>

    <p>Exibe o ranking de faturamento por cliente, permitindo identificar os maiores contribuintes para a receita total.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo_VisÃ£o Consolidada_Tabela.png" class="img-screenshot" alt="Tabela visÃ£o consolidada"></div>

        <p class="img-caption">Figura 8 - Tabela consolidada de faturamento por cliente</p>

    </div>

  </div>

</div>



<div class="secao" id="secao-4">

  <div class="secao-header">

    <span class="secao-numero editable-text">4</span>

    <h2 class="editable-text">Painel Executivo - Ordens de ServiÃ§o (OS)</h2>

  </div>

  <div class="secao-conteudo editable-area">

    <p>Esta seÃ§Ã£o Ã© dedicada ao monitoramento do fluxo de trabalho e entrega das demandas contratuais.</p>



    <h3 id="secao-4-1">4.1. VisÃ£o geral da pÃ¡gina</h3>

    <p>Apresenta o volume de OS abertas e a situaÃ§Ã£o de cada projeto.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo_os.png" class="img-screenshot" alt="Painel executivo OS"></div>

        <p class="img-caption">Figura 9 - VisÃ£o geral do Painel de Ordens de ServiÃ§o</p>

    </div>



    <h3 id="secao-4-2">4.2. Filtros de OS</h3>

    <p>AlÃ©m dos filtros padrÃ£o de cliente e perÃ­odo, permite segmentar pela situaÃ§Ã£o atual das ordens.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/filtros_painel_executivo_os.png" class="img-screenshot" alt="Filtros OS"></div>

        <p class="img-caption">Figura 10 - Filtros especÃ­ficos para gestÃ£o de OS</p>

    </div>



    <h3 id="secao-4-3">4.3. Indicadores de OS</h3>

    <p>Destaca o volume de <strong>OS ativas</strong> e a variaÃ§Ã£o percentual de projetos em andamento.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/Kpis_painel_executivo_os.png" class="img-screenshot" alt="KPIs OS"></div>

        <p class="img-caption">Figura 11 - Indicadores de volume de ordens ativas</p>

    </div>



    <h3 id="secao-4-4">4.4. GrÃ¡ficos de acompanhamento</h3>

    <p>Analisa a distribuiÃ§Ã£o das OS por status operacional e categoria de serviÃ§o.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo_os_GrÃ¡fico de barras.png" class="img-screenshot" alt="GrÃ¡fico barras OS"></div>

        <p class="img-caption">Figura 12 - Ordens de serviÃ§o por status</p>

    </div>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo_os_GrÃ¡fico de pizza.png" class="img-screenshot" alt="GrÃ¡fico pizza OS"></div>

        <p class="img-caption">Figura 13 - DistribuiÃ§Ã£o de OS por categoria</p>

    </div>



    <h3 id="secao-4-5">4.5. Tabela analÃ­tica de OS</h3>

    <p>Lista detalhadamente os contratos vigentes, datas de inÃ­cio e fim, situaÃ§Ã£o e valores envolvidos.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_executivo_os_Tabela.png" class="img-screenshot" alt="Tabela analÃ­tica OS"></div>

        <p class="img-caption">Figura 14 - Listagem analÃ­tica de Ordens de ServiÃ§o</p>

    </div>

  </div>

</div>



<div class="secao" id="secao-5">

  <div class="secao-header">

    <span class="secao-numero editable-text">5</span>

    <h2 class="editable-text">Painel Operacional</h2>

  </div>

  <div class="secao-conteudo editable-area">

    <p>A visÃ£o operacional Ã© voltada para a conferÃªncia minuciosa dos dados e auditoria de faturamento individual por item.</p>



    <h3 id="secao-5-1">5.1. VisÃ£o geral da pÃ¡gina</h3>

    <p>Exibe a grade completa de registros operacionais com filtros estendidos.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_operacional.png" class="img-screenshot" alt="Painel operacional"></div>

        <p class="img-caption">Figura 15 - VisÃ£o geral do Painel Operacional</p>

    </div>



    <h3 id="secao-5-2">5.2. Filtros e Indicadores</h3>

    <p>Permite buscas especÃ­ficas por cliente, contribuinte e status, mantendo os KPIs de faturamento visÃ­veis para conferÃªncia imediata.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/filtros_painel_operacional.png" class="img-screenshot" alt="Filtros operacionais"></div>

        <p class="img-caption">Figura 16 - Filtros da visÃ£o operacional</p>

    </div>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/Kpis_filtros_painel_operacional.png" class="img-screenshot" alt="KPIs operacionais"></div>

        <p class="img-caption">Figura 17 - Indicadores aplicados Ã  visÃ£o operacional</p>

    </div>



    <h3 id="secao-5-3">5.3. Tabela de detalhamento operacional</h3>

    <p>Tabela rica em dados que serve como extrato detalhado para conciliaÃ§Ã£o financeira e acompanhamento de datas crÃ­ticas de vigÃªncia.</p>

    <div class="img-container">

        <div class="img-wrapper"><img src="imagens/painel_operacional_Tabela.png" class="img-screenshot" alt="Tabela detalhamento"></div>

        <p class="img-caption">Figura 18 - Extrato operacional detalhado para auditoria</p>

    </div>

  </div>

</div>


