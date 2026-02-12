---
layout: manual
title: "Controle de PERDCOMP"
versao: "1.0"
github_url: "https://github.com/psa-elevate/controle-perdcomp"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-2
    title: "2. Acesso e Ambiente"
    items:
      - id: secao-2-1
        title: "2.1. Login e Navegação"
      - id: secao-2-2
        title: "2.2. Seleção de Ambiente"
  - id: secao-3
    title: "3. Filtros e Pesquisa"
    items:
      - id: secao-3-1
        title: "3.1. Configuração dos Filtros"
      - id: secao-3-2
        title: "3.2. Executando a Busca"
  - id: secao-4
    title: "4. Gestão de PER (Pedidos)"
    items:
      - id: secao-4-1
        title: "4.1. Visualização e Edição"
      - id: secao-4-2
        title: "4.2. Novo Cadastro de PER"
  - id: secao-5
    title: "5. Detalhes e Situação"
    items:
      - id: secao-5-1
        title: "5.1. Atualizando Status"
  - id: secao-6
    title: "6. Gestão de DCOMP"
    items:
      - id: secao-6-1
        title: "6.1. Novo DCOMP"
      - id: secao-6-2
        title: "6.2. Ressarcimentos"
  - id: secao-7
    title: "7. Retificações e Ajustes"
    items:
      - id: secao-7-1
        title: "7.1. Retificar DCOMP"
  - id: secao-8
    title: "8. Busca Avançada"
  - id: secao-9
    title: "9. Dicas e Boas Práticas"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>O módulo de <strong>Controle de PERDCOMP</strong> centraliza a gestão dos Pedidos Eletrônicos de Restituição, Ressarcimento ou Reembolso e das Declarações de Compensação.</p>
    <p>A ferramenta oferece controle total sobre o ciclo de vida dos créditos, permitindo:</p>
    <ul>
        <li><strong>Rastreabilidade:</strong> Histórico completo de alterações de status.</li>
        <li><strong>Cálculos Automáticos:</strong> Atualização de saldos e correção pela taxa SELIC (respeitando a carência de 360 dias).</li>
        <li><strong>Organização:</strong> Vínculo automático entre PERs originais, retificadores e suas respectivas DCOMPs.</li>
    </ul>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acesso e Ambiente</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-2-1">2.1 Login e Navegação</h3>
    <p>Acesse a página inicial do portal PSA Elevate.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_01_Homepage.png" class="img-screenshot" alt="Homepage"></div>
        <p class="img-caption">Página inicial do portal</p>
    </div>

    <p>No canto superior direito, localize e clique no menu <strong>Equipe</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_02_Menu_Equipe.png" class="img-screenshot" alt="Menu Equipe"></div>
    </div>

    <p>No menu de seleção de área, escolha a opção <strong>Digital</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_03_Selecao_Area.png" class="img-screenshot" alt="Seleção de Área"></div>
    </div>

    <p>Insira suas credenciais de acesso para prosseguir.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_04_Tela_Login.png" class="img-screenshot" alt="Login"></div>
    </div>

    <h3 id="secao-2-2">2.2 Seleção de Ambiente</h3>
    <p>No painel de ambientes, selecione o card <strong>Digital Dev</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_05_Ambiente_Dev.png" class="img-screenshot" alt="Ambiente Digital Dev"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Filtros e Pesquisa</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-3-1">3.1 Configuração dos Filtros</h3>
    <p>Ao acessar o <strong>Controle PERDCOMP</strong>, a tela inicial estará vazia. É necessário configurar os filtros para visualizar os dados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_01_Tela_Inicial_Vazia.png" class="img-screenshot" alt="Tela Inicial"></div>
        <p class="img-caption">Dashboard inicial vazio</p>
    </div>

    <p>Primeiro, selecione o <strong>Cliente</strong> na lista suspensa.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_02_Filtro_Cliente.png" class="img-screenshot" alt="Filtro Cliente"></div>
    </div>

    <p>Em seguida, defina o <strong>Contribuinte</strong> (CNPJ/Filial).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_03_Filtro_Contribuinte.png" class="img-screenshot" alt="Filtro Contribuinte"></div>
    </div>

    <p>Utilize o filtro de <strong>Situação</strong> para refinar por status (ex: Em análise, Deferido). É possível selecionar múltiplos status.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_04_Filtro_Situacao.png" class="img-screenshot" alt="Filtro Situação"></div>
    </div>

    <p>Filtre também pelo <strong>Exercício</strong> (ano) de origem do crédito.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_05_Filtro_Exercicio.png" class="img-screenshot" alt="Filtro Exercício"></div>
    </div>

    <p>Se souber o número, utilize o campo de busca textual <strong>Nº do Processo</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_06_Input_Processo.png" class="img-screenshot" alt="Input Processo"></div>
    </div>

    <h3 id="secao-3-2">3.2 Executando a Busca</h3>
    <p>Confira se os filtros estão preenchidos corretamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_07_Filtros_Preenchidos.png" class="img-screenshot" alt="Filtros Preenchidos"></div>
    </div>

    <p>Clique no botão <strong>Buscar</strong> para carregar a grade de processos.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_08_Acao_Buscar.png" class="img-screenshot" alt="Ação Buscar"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Gestão de PER (Pedidos)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-4-1">4.1 Visualização e Edição</h3>
    <p>A grade exibe os processos encontrados com colunas detalhadas como Saldo Disponível e Valor Selic.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_01_Grid_Resultados.png" class="img-screenshot" alt="Grid Resultados"></div>
        <p class="img-caption">Lista de processos carregada</p>
    </div>

    <div class="dica">
        <span class="material-icons-round">info</span>
        <p><strong>Atenção:</strong> A coluna "Vlr. Selic" só exibe valores se o crédito tiver superado o período de carência de 360 dias.</p>
    </div>

    <p>Utilize a barra de rolagem horizontal para visualizar todas as informações financeiras.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_02_Scroll_Grid.png" class="img-screenshot" alt="Scroll Grid"></div>
    </div>

    <p>Para corrigir dados de um processo existente, clique no ícone de <strong>Lápis (Editar)</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_03_Btn_Editar_PER.png" class="img-screenshot" alt="Botão Editar"></div>
    </div>

    <p>No modal, ajuste os valores ou datas e confirme em Salvar.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_04_Modal_Editar.png" class="img-screenshot" alt="Modal Editar"></div>
    </div>

    <h3 id="secao-4-2">4.2 Novo Cadastro de PER</h3>
    <p>Para inserir um novo crédito no sistema, clique no botão <strong>+ Novo</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/04_01_Modal_Novo_PER.png" class="img-screenshot" alt="Botão Novo"></div>
    </div>

    <p>Preencha o formulário com os dados do PER. O campo "Número do Processo" possui máscara automática.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/04_02_Formulario_Novo_PER.png" class="img-screenshot" alt="Formulário Novo PER"></div>
    </div>

    <p>Após salvar, aguarde o aviso de sucesso no canto da tela.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/04_03_Toast_Sucesso_PER.png" class="img-screenshot" alt="Sucesso PER"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Detalhes e Situação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-5-1">5.1 Atualizando Status</h3>
    <p>Clique sobre qualquer linha da tabela para abrir a visão detalhada do processo.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_01_Lista_PERs.png" class="img-screenshot" alt="Seleção na Lista"></div>
    </div>

    <p>A tela de detalhes mostra o resumo financeiro no topo e a área de lançamentos abaixo.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_02_Detalhes_Expandido.png" class="img-screenshot" alt="Detalhes Expandido"></div>
    </div>

    <p>Para mudar o status do processo, utilize o menu lateral esquerdo em <strong>Atualizar Situação</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_03_Select_Situacao.png" class="img-screenshot" alt="Select Situação"></div>
    </div>

    <p>Confirme clicando em <strong>Salvar Situação</strong>. O histórico será atualizado instantaneamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_04_Btn_Salvar_Situacao.png" class="img-screenshot" alt="Salvar Situação"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Gestão de DCOMP</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-6-1">6.1 Novo DCOMP</h3>
    <p>Para abater o saldo do PER com uma compensação, clique em <strong>+ Novo DCOMP</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/06_01_Modal_Novo_DCOMP.png" class="img-screenshot" alt="Novo DCOMP"></div>
    </div>

    <p>Preencha os dados (Nº Documento, Mês/Ano, Envio, Imposto e Valor Compensado).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/06_02_Formulario_DCOMP.png" class="img-screenshot" alt="Formulário DCOMP"></div>
    </div>

    <p>O sistema confirmará a criação do vínculo.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/06_03_Sucesso_DCOMP.png" class="img-screenshot" alt="Sucesso DCOMP"></div>
    </div>

    <h3 id="secao-6-2">6.2 Ressarcimentos</h3>
    <p>Caso haja pagamento em espécie pela Receita, utilize o botão <strong>$ Novo Ressarcimento</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/07_01_Btn_Ressarcimento.png" class="img-screenshot" alt="Botão Ressarcimento"></div>
    </div>

    <p>Informe o valor total recebido e a data do depósito.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/07_02_Formulario_Ressarcimento.png" class="img-screenshot" alt="Formulário Ressarcimento"></div>
    </div>

    <p>Ao salvar, o saldo será abatido e o status mudará automaticamente para <strong>PER deferido</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/07_03_Sucesso_Ressarcimento.png" class="img-screenshot" alt="Sucesso Ressarcimento"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Retificações e Ajustes</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-7-1">7.1 Retificar DCOMP</h3>
    <p>Na lista de lançamentos, localize a DCOMP e clique no botão de edição.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_01_Editar_DCOMP.png" class="img-screenshot" alt="Editar DCOMP"></div>
    </div>

    <p>Verifique os dados atuais do lançamento.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_02_Lista_Com_DCOMP.png" class="img-screenshot" alt="Lista DCOMP"></div>
    </div>

    <p>Ao editar ou excluir, o saldo na grade principal é recalculado em tempo real.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_03_Grid_Atualizado.png" class="img-screenshot" alt="Grid Atualizado"></div>
    </div>

    <p>Selecione outro PER para ver seus detalhes.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_04_Expandido_Outro_PER.png" class="img-screenshot" alt="Outro PER"></div>
    </div>

    <p>Para criar uma <strong>DCOMP Retificadora</strong>, abra o formulário de "Novo DCOMP" e utilize o campo <strong>DCOMP a Retificar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_05_DCOMP_Retificador.png" class="img-screenshot" alt="DCOMP Retificador"></div>
    </div>

    <p>Selecione a DCOMP original na lista (o sistema filtra apenas as vigentes).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_06_Formulario_Retificacao.png" class="img-screenshot" alt="Formulário Retificação"></div>
    </div>

    <p>Na lista, a retificação será exibida com o destaque em laranja indicando o vínculo.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_07_Lista_Retificada.png" class="img-screenshot" alt="Lista Retificada"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Busca Avançada</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para localizar um processo específico sem navegar pelos filtros de cliente, utilize a busca global.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_01_Busca_Geral.png" class="img-screenshot" alt="Busca Geral"></div>
    </div>

    <p>Digite o número (parcial ou completo) no campo <strong>Nº do Processo</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_02_Filtro_Numero_Proc.png" class="img-screenshot" alt="Filtro Número"></div>
    </div>

    <p>O sistema filtrará a grade exibindo apenas o registro correspondente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_03_Resultado_Filtrado_PER.png" class="img-screenshot" alt="Resultado PER"></div>
    </div>

    <p>Você pode acessar os detalhes diretamente pelo resultado da busca.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_04_Detalhe_Filtrado.png" class="img-screenshot" alt="Detalhe Filtrado"></div>
    </div>

    <p>A busca também aceita números de DCOMP. Ao encontrar uma DCOMP, o sistema exibe o PER de origem.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_05_Busca_DCOMP_ID.png" class="img-screenshot" alt="Busca DCOMP ID"></div>
    </div>

    <p>Isso facilita rastrear a qual processo uma compensação pertence.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_06_Resultado_Filtrado_DCOMP.png" class="img-screenshot" alt="Resultado DCOMP"></div>
    </div>

    <p>O sistema permite visualizar o vínculo exato entre a DCOMP encontrada e seu PER.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_07_Detalhe_Final.png" class="img-screenshot" alt="Detalhe Final"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-9">
  <div class="secao-header">
    <span class="secao-numero editable-text">9</span>
    <h2 class="editable-text">Dicas e Boas Práticas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para garantir a integridade dos dados e agilizar o trabalho:</p>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Cadastro de Retificadoras:</strong> Sempre utilize o campo de vínculo "PER a ser Retificado". Isso garante que o sistema oculte automaticamente o processo antigo da listagem principal, mantendo a visão limpa.</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Conferência de Saldo:</strong> O saldo disponível é recalculado em tempo real. Sempre confira este valor antes de lançar uma nova DCOMP para evitar compensações indevidas.</p>
    </div>
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Ressarcimento vs. DCOMP:</strong> Utilize a opção "Novo Ressarcimento" apenas para recebimentos em dinheiro. Para compensação de impostos, utilize sempre "Novo DCOMP".</p>
    </div>
  </div>
</div>