---
layout: manual
title: "Análise Cruzada"
versao: "1.0"
github_url: "https://github.com/psa-elevate/analise-cruzada"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-acesso
    title: "2. Acesso e Autenticação"
    items:
      - id: secao-acesso-1
        title: "2.1. Acesso ao portal e área da equipe"
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
        title: "4.1. Cliente e Contribuinte"
      - id: secao-4-2
        title: "4.2. Período de Auditoria"
  - id: secao-5
    title: "5. Navegação pelas Abas de Auditoria"
    items:
      - id: secao-5-1
        title: "5.1. Balancete (EFD Contribuições vs. Balancete)"
      - id: secao-5-2
        title: "5.2. EFD ICMS | XML NFe"
      - id: secao-5-3
        title: "5.3. XMLs de CTE por Lote"
  - id: secao-6
    title: "6. Dicas e Boas Práticas"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta de <strong>Análise Cruzada</strong> (também conhecida como Auditoria Cruzada), parte integrante do sistema PSA Elevate.</p>
    <p>A ferramenta realiza a reconciliação fiscal detalhada, cruzando dados entre diversas fontes e obrigações acessórias para identificar eventuais divergências. Os cruzamentos disponíveis incluem: <strong>Balancete x EFD Contribuições</strong>, <strong>EFD ICMS x EFD Contribuições x XML de NFe</strong> e a verificação de <strong>XMLs de CT-e por lote</strong>.</p>
    <h3>Principais Funcionalidades</h3>
    <ul>
        <li><strong>Conciliação multifonte:</strong> compara dados contábeis, arquivos EFD e documentos XML em uma única rotina.</li>
        <li><strong>Navegação por abas especializadas:</strong> separa os cruzamentos por cenário fiscal para acelerar a identificação de divergências.</li>
        <li><strong>Exploração hierárquica:</strong> permite expandir contas, períodos e detalhes de lote para investigar a origem de cada diferença.</li>
        <li><strong>Suporte operacional:</strong> exibe tooltips, filtros de coluna e controles de visualização para auditorias de maior volume.</li>
    </ul>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p><strong>Pré-requisito:</strong> antes de iniciar a auditoria, confirme que os arquivos EFD, XMLs e balancetes do período já foram processados nas ferramentas de carga correspondentes.</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-acesso">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acesso e Autenticação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-acesso-1">2.1. Acesso ao portal e área da equipe</h3>
    <p>O acesso às ferramentas começa pelo portal corporativo da PSA Consultores. Acesse o link <a href="https://psaconsultores.com.br" target="_blank">https://psaconsultores.com.br</a> e clique no ícone de <strong>"Equipe"</strong>, localizado no canto superior direito da tela, para entrar na área restrita.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-01-acesso-portal.png" class="img-screenshot" alt="Acesso à área da equipe no portal">
        </div>
        <p class="img-caption">Portal corporativo com destaque para o menu de acesso à Equipe</p>
    </div>

    <h3 id="secao-acesso-2">2.2. Seleção da área de atuação</h3>
    <p>Na tela de departamentos, abra a lista suspensa e selecione a opção <strong>"Digital"</strong> para acessar o sistema de gestão de demandas e às ferramentas internas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-02-selecao-area.png" class="img-screenshot" alt="Seleção da área Digital">
        </div>
        <p class="img-caption">Seleção da área de competência Digital</p>
    </div>

    <h3 id="secao-acesso-3">2.3. Login no sistema</h3>
    <p>A tela de autenticação será exibida. Insira suas credenciais corporativas (e-mail e senha) nos campos correspondentes e clique em <strong>"Entrar"</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-03-login.png" class="img-screenshot" alt="Tela de login preenchida">
        </div>
        <p class="img-caption">Preenchimento dos dados de acesso</p>
    </div>

    <h3 id="secao-acesso-4">2.4. Seleção do ambiente de trabalho</h3>
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>. Este é o ambiente de criação, desenvolvimento e utilização das ferramentas fiscais automatizadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-04-ambiente-dev.png" class="img-screenshot" alt="Seleção do ambiente Digital Dev">
        </div>
        <p class="img-caption">Seleção do ambiente de trabalho</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Identifique o card correspondente e clique no botão <strong>"Acessar Ferramenta"</strong> no módulo de Análise Cruzada.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-05-hub-ferramentas.png" class="img-screenshot" alt="Hub de Ferramentas">
        </div>
        <p class="img-caption">Acesso via Hub de Ferramentas</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Visão Geral da Ferramenta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A interface da ferramenta divide-se em duas partes fundamentais: o painel de <strong>Filtros de Busca</strong> na seção superior e a seção de resultados, organizada em três <strong>Abas</strong>. Cada aba é dedicada a um tipo específico de auditoria cruzada.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/1-tela-inicial.png" class="img-screenshot" alt="Visão geral da Análise Cruzada">
        </div>
        <p class="img-caption">Interface principal, destacando o painel inicial sem dados</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Filtros de Busca e Configuração</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para iniciar qualquer análise, é obrigatório preencher os parâmetros de pesquisa no painel de filtros.</p>

    <h3 id="secao-4-1">4.1. Cliente e Contribuinte</h3>
    <p>Comece selecionando o <strong>Cliente</strong> no menu suspenso.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/2-filtro-cliente.png" class="img-screenshot" alt="Seleção de Cliente">
        </div>
        <p class="img-caption">Menu suspenso para seleção de Cliente</p>
    </div>
    <p>De imediato, o campo <strong>Contribuinte</strong> será desbloqueado para que você possa selecionar o CNPJ específico que deseja auditar. Se o cliente possuir apenas um contribuinte associado, o sistema fará a seleção de forma automática.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3-filtro-contribuinte.png" class="img-screenshot" alt="Seleção de Contribuinte">
        </div>
        <p class="img-caption">Menu suspenso para seleção de Contribuinte (CNPJ)</p>
    </div>

    <h3 id="secao-4-2">4.2. Período de Auditoria</h3>
    <p>Utilize os calendários para definir a <strong>Data Início</strong> e a <strong>Data Fim</strong> do período de análise.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4-filtros-periodo.png" class="img-screenshot" alt="Filtro de período preenchido">
        </div>
        <p class="img-caption">Datas de início e fim configuradas</p>
    </div>
    <p>Após preencher os quatro campos obrigatórios, clique no botão <strong>Consultar</strong>. O sistema processará as validações para todas as fontes simultaneamente. Caso necessite recomeçar, utilize o botão <strong>Limpar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/18-limpar-filtros.png" class="img-screenshot" alt="Botão Limpar">
        </div>
        <p class="img-caption">Botão Limpar para redefinir os parâmetros de pesquisa</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Navegação pelas Abas de Auditoria</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Após o processamento da consulta, os resultados são distribuídos por três abas, permitindo identificar as divergências fonte a fonte.</p>

    <h3 id="secao-5-1">5.1. Balancete (EFD Contribuições vs. Balancete)</h3>
    <p>Na aba <strong>"Balancete"</strong>, o sistema compara as receitas e as retenções declaradas na EFD Contribuições com os saldos das contas correspondentes no Balancete Contábil (arquivos ECD/Excel previamente importados). Esse cruzamento é fundamental para detectar omissões de receitas ou lançamentos indevidos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5-resultado-da-busca.png" class="img-screenshot" alt="Resultados da Aba Balancete">
        </div>
        <p class="img-caption">Visão geral do cruzamento EFD vs Balancete</p>
    </div>

    <h4>Controle de Contas Contábeis</h4>
    <p>Você pode segmentar a análise focando em contas contábeis específicas utilizando o filtro localizado acima da tabela ou diretamente no cabeçalho da coluna.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6-filtro-conta-contabil.png" class="img-screenshot" alt="Filtro global de contas">
        </div>
        <p class="img-caption">Filtro global de Contas Contábeis</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13-filtro-coluna-conta.png" class="img-screenshot" alt="Filtro de coluna para conta">
        </div>
        <p class="img-caption">Filtro integrado na coluna de Conta</p>
    </div>

    <h4>Navegação na Árvore de Contas</h4>
    <p>A tabela do Balancete possui uma estrutura hierárquica (em árvore). Você pode expandir ou recolher as contas de forma individual clicando no ícone de seta ao lado do código da conta, ou utilizar os controles globais ("Expandir Tudo" / "Recolher Tudo").</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8-expandir-conta-manual.png" class="img-screenshot" alt="Expandir conta individual">
        </div>
        <p class="img-caption">Expansão manual de uma conta analítica</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/9-expandir-todas-contas.png" class="img-screenshot" alt="Botão Expandir Todas">
        </div>
        <p class="img-caption">Opção para expandir todas as contas da hierarquia simultaneamente</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/10-colapsar-todas-conta.png" class="img-screenshot" alt="Botão Recolher Todas">
        </div>
        <p class="img-caption">Opção para recolher a visão de árvore das contas</p>
    </div>

    <h4>Visualização de Meses e Períodos</h4>
    <p>Por padrão, o sistema exibe os totais por ano/período selecionado. Se desejar ver a desagregação mensal do cruzamento, você pode expandir os períodos utilizando as ferramentas de visualização da tabela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7-seletor-periodo-balancete.png" class="img-screenshot" alt="Seletor de período">
        </div>
        <p class="img-caption">Seletor rápido de períodos na aba Balancete</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/11-colapsar-periodo-meses.png" class="img-screenshot" alt="Colapsar colunas de meses">
        </div>
        <p class="img-caption">Meses expandidos, mostrando a comparação período a período</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/12-recolher-periodo-meses.png" class="img-screenshot" alt="Recolher colunas de meses">
        </div>
        <p class="img-caption">Ação para recolher os meses e voltar à visão consolidada</p>
    </div>

    <h3 id="secao-5-2">5.2. EFD ICMS | XML NFe</h3>
    <p>A aba <strong>"EFD ICMS | XML NFe"</strong> efetua um cruzamento a três vias: confronta as notas fiscais (NFe) escrituradas no SPED Fiscal (EFD ICMS/IPI), as escrituradas na EFD Contribuições e as que constam fisicamente nos arquivos XML originais do período. Aponta falhas de escrituração ou discrepâncias de valores entre as obrigações.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/14-efd-icms-xml-nfe.png" class="img-screenshot" alt="Aba EFD ICMS vs XML NFe">
        </div>
        <p class="img-caption">Matriz de cruzamento das obrigações EFD contra as Notas Fiscais (NFe)</p>
    </div>

    <h3 id="secao-5-3">5.3. XMLs de CTE por Lote</h3>
    <p>A aba <strong>"XMLs de CTE por Lote"</strong> é dedicada à auditoria em lote dos Conhecimentos de Transporte Eletrônico (CT-e). O sistema verifica a integridade dos arquivos, a coerência das chaves de acesso e a correta apropriação dos valores de frete perante os registros do SPED.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/15-aba-xml-cte-lote.png" class="img-screenshot" alt="Aba XMLs CTE Lote">
        </div>
        <p class="img-caption">Listagem de lotes de CT-e processados</p>
    </div>
    <p>Para analisar as anomalias de um lote específico, clique no mesmo para visualizar os detalhes pormenorizados das chaves que apresentam divergências.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/16-detalhes-lote.png" class="img-screenshot" alt="Detalhes do lote CTE">
        </div>
        <p class="img-caption">Janela de detalhes apresentando os CT-e faltantes ou com inconsistências num lote</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Dicas e Boas Práticas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Dicas Flutuantes (Tooltips):</strong> Utilize os ícones de informação <code>(i)</code> dispersos pelos cabeçalhos e rótulos da ferramenta para compreender detalhadamente a lógica de cálculo de cada coluna ou as regras por trás de uma comparação.</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17-exemplo-como-visualizar-tooltips.png" class="img-screenshot" alt="Exemplo de Tooltip">
        </div>
        <p class="img-caption">Passe o mouse sobre os ícones para obter descrições e contextualizações</p>
    </div>
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Volume de Dados:</strong> O cruzamento de arquivos XML (NFe e CT-e) contra as obrigações EFD pode exigir um elevado processamento computacional. Recomenda-se realizar a auditoria por blocos mensais ou trimestrais para evitar lentidão excessiva no carregamento dos resultados.</p>
    </div>
  </div>
</div>
