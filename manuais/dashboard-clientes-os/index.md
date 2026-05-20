---

layout: manual

title: "Dashboard de Clientes e OS"

versao: "1.0"

github_url: "https://github.com/psa-elevate/dashboard-clientes-os"

toc:

&#x20; - id: secao-intro

&#x20;   title: "1. Introdução"

&#x20; - id: secao-2

&#x20;   title: "2. Visão geral do dashboard"

&#x20; - id: secao-3

&#x20;   title: "3. Painel Executivo - Faturamento e Clientes"

&#x20;   items:

&#x20;     - id: secao-3-1

&#x20;       title: "3.1. Visão geral da página"

&#x20;     - id: secao-3-2

&#x20;       title: "3.2. Filtros disponíveis"

&#x20;     - id: secao-3-3

&#x20;       title: "3.3. Indicadores (KPIs)"

&#x20;     - id: secao-3-4

&#x20;       title: "3.4. Gráficos de análise"

&#x20;     - id: secao-3-5

&#x20;       title: "3.5. Tabela de visão consolidada"

&#x20; - id: secao-4

&#x20;   title: "4. Painel Executivo - Ordens de Serviço (OS)"

&#x20;   items:

&#x20;     - id: secao-4-1

&#x20;       title: "4.1. Visão geral da página"

&#x20;     - id: secao-4-2

&#x20;       title: "4.2. Filtros de OS"

&#x20;     - id: secao-4-3

&#x20;       title: "4.3. Indicadores de OS"

&#x20;     - id: secao-4-4

&#x20;       title: "4.4. Gráficos de acompanhamento"

&#x20;     - id: secao-4-5

&#x20;       title: "4.5. Tabela analítica de OS"

&#x20; - id: secao-5

&#x20;   title: "5. Painel Operacional"

&#x20;   items:

&#x20;     - id: secao-5-1

&#x20;       title: "5.1. Visão geral da página"

&#x20;     - id: secao-5-2

&#x20;       title: "5.2. Filtros e Indicadores"

&#x20;     - id: secao-5-3

&#x20;       title: "5.3. Tabela de detalhamento operacional"

---



<div class="secao" id="secao-intro">

&#x20; <div class="secao-header">

&#x20;   <span class="secao-numero editable-text">1</span>

&#x20;   <h2 class="editable-text">Introdução</h2>

&#x20; </div>

&#x20; <div class="secao-conteudo editable-area">

&#x20;   <p>Este manual apresenta as funcionalidades do <strong>Dashboard de Clientes e OS</strong>, uma ferramenta estratégica desenvolvida no Looker Studio para o ecossistema PSA Elevate. O painel centraliza indicadores críticos de performance, permitindo o acompanhamento em tempo real do faturamento, do perfil da carteira de clientes e do status operacional das Ordens de Serviço (OS).</p>

&#x20;   <p>O objetivo deste documento é orientar gestores e analistas na exploração das três visões principais do relatório, facilitando a tomada de decisão baseada em dados consolidados e métricas de ticket médio e produtividade.</p>

&#x20; </div>

</div>



<div class="secao" id="secao-2">

&#x20; <div class="secao-header">

&#x20;   <span class="secao-numero editable-text">2</span>

&#x20;   <h2 class="editable-text">Visão geral do dashboard</h2>

&#x20; </div>

&#x20; <div class="secao-conteudo editable-area">

&#x20;   <p>O dashboard é dividido em páginas temáticas que separam a visão executiva financeira da visão operacional detalhada. A navegação entre as abas permite transitar entre dados macro (faturamento total) e micro (detalhes de uma OS específica).</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/visao_geral_dashboard.png" class="img-screenshot" alt="Visão geral do dashboard"></div>

&#x20;       <p class="img-caption">Figura 1 - Visão geral da estrutura de navegação do dashboard</p>

&#x20;   </div>

&#x20; </div>

</div>



<div class="secao" id="secao-3">

&#x20; <div class="secao-header">

&#x20;   <span class="secao-numero editable-text">3</span>

&#x20;   <h2 class="editable-text">Painel Executivo - Faturamento e Clientes</h2>

&#x20; </div>

&#x20; <div class="secao-conteudo editable-area">

&#x20;   <p>Esta aba foca na saúde financeira da operação e na segmentação da carteira de clientes ativos.</p>



&#x20;   <h3 id="secao-3-1">3.1. Visão geral da página</h3>

&#x20;   <p>Apresenta o faturamento consolidado e a distribuição de receita por categoria de cliente.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo.png" class="img-screenshot" alt="Painel executivo faturamento"></div>

&#x20;       <p class="img-caption">Figura 2 - Visão geral do Painel Executivo de Faturamento</p>

&#x20;   </div>



&#x20;   <h3 id="secao-3-2">3.2. Filtros disponíveis</h3>

&#x20;   <p>No topo da página, é possível refinar a análise através dos seguintes controles:</p>

&#x20;   <ul>

&#x20;       <li><strong>Escolha o período:</strong> Define o intervalo de tempo da análise.</li>

&#x20;       <li><strong>Escolha o cliente:</strong> Filtra os dados por grupos específicos.</li>

&#x20;       <li><strong>Escolha o tipo:</strong> Segmenta entre clientes fixos ou pontuais.</li>

&#x20;       <li><strong>Escolha a categoria:</strong> Filtra pelo nível de segmentação (ex: Prata, Ouro).</li>

&#x20;   </ul>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/filtros_painel_executivo.png" class="img-screenshot" alt="Filtros painel executivo"></div>

&#x20;       <p class="img-caption">Figura 3 - Barra de filtros do Painel Executivo</p>

&#x20;   </div>



&#x20;   <h3 id="secao-3-3">3.3. Indicadores (KPIs)</h3>

&#x20;   <p>Os cartões de performance destacam métricas vitais para a gestão:</p>

&#x20;   <ul>

&#x20;       <li><strong>Faturamento total:</strong> Soma absoluta da receita no período, com comparativo percentual.</li>

&#x20;       <li><strong>Clientes ativos:</strong> Quantidade total, detalhando o volume de <strong>Fixos</strong> e <strong>Pontuais</strong>.</li>

&#x20;       <li><strong>Ticket médio:</strong> Valor médio faturado por cliente.</li>

&#x20;   </ul>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/kpis_painel_executivo.png" class="img-screenshot" alt="KPIs painel executivo"></div>

&#x20;       <p class="img-caption">Figura 4 - Indicadores principais de faturamento e clientes</p>

&#x20;   </div>



&#x20;   <h3 id="secao-3-4">3.4. Gráficos de análise</h3>

&#x20;   <p>O painel utiliza visualizações gráficas para identificar tendências de mercado:</p>

&#x20;   <ul>

&#x20;       <li><strong>Faturamento mensal:</strong> Histórico de evolução da receita ao longo do tempo.</li>

&#x20;       <li><strong>Faturamento por categoria:</strong> Distribuição percentual da receita por nível de cliente.</li>

&#x20;       <li><strong>Faturamento por tipo:</strong> Comparativo entre o peso de clientes recorrentes (fixos) e esporádicos (pontuais).</li>

&#x20;   </ul>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/Gráfico de barras_painel_executivo.png" class="img-screenshot" alt="Gráfico faturamento mensal"></div>

&#x20;       <p class="img-caption">Figura 5 - Gráfico de barras de faturamento mensal</p>

&#x20;   </div>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/Gráfico de pizza_painel_executivo.png" class="img-screenshot" alt="Gráfico categoria"></div>

&#x20;       <p class="img-caption">Figura 6 - Distribuição de faturamento por categoria</p>

&#x20;   </div>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo_Gráfico de barras.png" class="img-screenshot" alt="Gráfico tipo cliente"></div>

&#x20;       <p class="img-caption">Figura 7 - Proporção de faturamento por tipo de cliente</p>

&#x20;   </div>



&#x20;   <h3 id="secao-3-5">3.5. Tabela de visão consolidada</h3>

&#x20;   <p>Exibe o ranking de faturamento por cliente, permitindo identificar os maiores contribuintes para a receita total.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo_Visão Consolidada_Tabela.png" class="img-screenshot" alt="Tabela visão consolidada"></div>

&#x20;       <p class="img-caption">Figura 8 - Tabela consolidada de faturamento por cliente</p>

&#x20;   </div>

&#x20; </div>

</div>



<div class="secao" id="secao-4">

&#x20; <div class="secao-header">

&#x20;   <span class="secao-numero editable-text">4</span>

&#x20;   <h2 class="editable-text">Painel Executivo - Ordens de Serviço (OS)</h2>

&#x20; </div>

&#x20; <div class="secao-conteudo editable-area">

&#x20;   <p>Esta seção é dedicada ao monitoramento do fluxo de trabalho e entrega das demandas contratuais.</p>



&#x20;   <h3 id="secao-4-1">4.1. Visão geral da página</h3>

&#x20;   <p>Apresenta o volume de OS abertas e a situação de cada projeto.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo_os.png" class="img-screenshot" alt="Painel executivo OS"></div>

&#x20;       <p class="img-caption">Figura 9 - Visão geral do Painel de Ordens de Serviço</p>

&#x20;   </div>



&#x20;   <h3 id="secao-4-2">4.2. Filtros de OS</h3>

&#x20;   <p>Além dos filtros padrão de cliente e período, permite segmentar pela situação atual das ordens.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/filtros_painel_executivo_os.png" class="img-screenshot" alt="Filtros OS"></div>

&#x20;       <p class="img-caption">Figura 10 - Filtros específicos para gestão de OS</p>

&#x20;   </div>



&#x20;   <h3 id="secao-4-3">4.3. Indicadores de OS</h3>

&#x20;   <p>Destaca o volume de <strong>OS ativas</strong> e a variação percentual de projetos em andamento.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/Kpis_painel_executivo_os.png" class="img-screenshot" alt="KPIs OS"></div>

&#x20;       <p class="img-caption">Figura 11 - Indicadores de volume de ordens ativas</p>

&#x20;   </div>



&#x20;   <h3 id="secao-4-4">4.4. Gráficos de acompanhamento</h3>

&#x20;   <p>Analisa a distribuição das OS por status operacional e categoria de serviço.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo_os_Gráfico de barras.png" class="img-screenshot" alt="Gráfico barras OS"></div>

&#x20;       <p class="img-caption">Figura 12 - Ordens de serviço por status</p>

&#x20;   </div>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo_os_Gráfico de pizza.png" class="img-screenshot" alt="Gráfico pizza OS"></div>

&#x20;       <p class="img-caption">Figura 13 - Distribuição de OS por categoria</p>

&#x20;   </div>



&#x20;   <h3 id="secao-4-5">4.5. Tabela analítica de OS</h3>

&#x20;   <p>Lista detalhadamente os contratos vigentes, datas de início e fim, situação e valores envolvidos.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_executivo_os_Tabela.png" class="img-screenshot" alt="Tabela analítica OS"></div>

&#x20;       <p class="img-caption">Figura 14 - Listagem analítica de Ordens de Serviço</p>

&#x20;   </div>

&#x20; </div>

</div>



<div class="secao" id="secao-5">

&#x20; <div class="secao-header">

&#x20;   <span class="secao-numero editable-text">5</span>

&#x20;   <h2 class="editable-text">Painel Operacional</h2>

&#x20; </div>

&#x20; <div class="secao-conteudo editable-area">

&#x20;   <p>A visão operacional é voltada para a conferência minuciosa dos dados e auditoria de faturamento individual por item.</p>



&#x20;   <h3 id="secao-5-1">5.1. Visão geral da página</h3>

&#x20;   <p>Exibe a grade completa de registros operacionais com filtros estendidos.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_operacional.png" class="img-screenshot" alt="Painel operacional"></div>

&#x20;       <p class="img-caption">Figura 15 - Visão geral do Painel Operacional</p>

&#x20;   </div>



&#x20;   <h3 id="secao-5-2">5.2. Filtros e Indicadores</h3>

&#x20;   <p>Permite buscas específicas por cliente, contribuinte e status, mantendo os KPIs de faturamento visíveis para conferência imediata.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/filtros_painel_operacional.png" class="img-screenshot" alt="Filtros operacionais"></div>

&#x20;       <p class="img-caption">Figura 16 - Filtros da visão operacional</p>

&#x20;   </div>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/Kpis_filtros_painel_operacional.png" class="img-screenshot" alt="KPIs operacionais"></div>

&#x20;       <p class="img-caption">Figura 17 - Indicadores aplicados à visão operacional</p>

&#x20;   </div>



&#x20;   <h3 id="secao-5-3">5.3. Tabela de detalhamento operacional</h3>

&#x20;   <p>Tabela rica em dados que serve como extrato detalhado para conciliação financeira e acompanhamento de datas críticas de vigência.</p>

&#x20;   <div class="img-container">

&#x20;       <div class="img-wrapper"><img src="imagens/painel_operacional_Tabela.png" class="img-screenshot" alt="Tabela detalhamento"></div>

&#x20;       <p class="img-caption">Figura 18 - Extrato operacional detalhado para auditoria</p>

&#x20;   </div>

&#x20; </div>

</div>

