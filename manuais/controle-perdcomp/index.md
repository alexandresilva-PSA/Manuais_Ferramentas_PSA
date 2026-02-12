---
layout: manual
title: "Controle de PERDCOMP"
versao: "1.0"
github_url: "https://github.com/psa-elevate/controle-perdcomp"
toc:
  - id: secao-1
    title: "1. Acesso e Ambiente"
    items:
      - id: secao-1-1
        title: "1.1. Login e Navegação"
      - id: secao-1-2
        title: "1.2. Seleção de Ambiente"
  - id: secao-2
    title: "2. Filtros e Pesquisa"
    items:
      - id: secao-2-1
        title: "2.1. Configuração dos Filtros"
      - id: secao-2-2
        title: "2.2. Executando a Busca"
  - id: secao-3
    title: "3. Gestão de PER (Pedidos)"
    items:
      - id: secao-3-1
        title: "3.1. Visualização e Edição"
      - id: secao-3-2
        title: "3.2. Novo Cadastro de PER"
  - id: secao-4
    title: "4. Detalhes e Situação"
    items:
      - id: secao-4-1
        title: "4.1. Atualizando Status"
  - id: secao-5
    title: "5. Gestão de DCOMP"
    items:
      - id: secao-5-1
        title: "5.1. Novo DCOMP"
      - id: secao-5-2
        title: "5.2. Ressarcimentos"
  - id: secao-6
    title: "6. Retificações e Ajustes"
    items:
      - id: secao-6-1
        title: "6.1. Retificar DCOMP"
  - id: secao-7
    title: "7. Busca Avançada"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Acesso e Ambiente</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-1-1">1.1 Login e Navegação</h3>
    <p>Acesse a página inicial do portal PSA Elevate.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_01_Homepage.png" class="img-screenshot" alt="Homepage"></div>
    </div>

    <p>No canto superior direito, clique no menu <strong>Equipe</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_02_Menu_Equipe.png" class="img-screenshot" alt="Menu Equipe"></div>
    </div>

    <p>Selecione a área <strong>Digital</strong> para acessar as ferramentas fiscais.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_03_Selecao_Area.png" class="img-screenshot" alt="Seleção de Área"></div>
    </div>

    <p>Realize o login com suas credenciais de acesso.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_04_Tela_Login.png" class="img-screenshot" alt="Login"></div>
    </div>

    <h3 id="secao-1-2">1.2 Seleção de Ambiente</h3>
    <p>No painel de áreas, escolha o ambiente <strong>Digital Dev</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/01_05_Ambiente_Dev.png" class="img-screenshot" alt="Ambiente Digital Dev"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Filtros e Pesquisa</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-2-1">2.1 Configuração dos Filtros</h3>
    <p>Ao acessar o <strong>Controle PERDCOMP</strong> no menu lateral, a tela inicial estará vazia aguardando filtros.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_01_Tela_Inicial_Vazia.png" class="img-screenshot" alt="Tela Inicial"></div>
    </div>

    <p>Selecione o <strong>Cliente</strong> desejado na lista.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_02_Filtro_Cliente.png" class="img-screenshot" alt="Filtro Cliente"></div>
    </div>

    <p>Em seguida, selecione o <strong>Contribuinte</strong> (Filial/CNPJ).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_03_Filtro_Contribuinte.png" class="img-screenshot" alt="Filtro Contribuinte"></div>
    </div>

    <p>Opcionalmente, filtre pela <strong>Situação</strong> do processo (ex: Em análise, Deferido, etc).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_04_Filtro_Situacao.png" class="img-screenshot" alt="Filtro Situação"></div>
    </div>

    <p>Ou pelo <strong>Exercício</strong> (Ano de referência).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_05_Filtro_Exercicio.png" class="img-screenshot" alt="Filtro Exercício"></div>
    </div>

    <p>Também é possível buscar diretamente digitando o <strong>Nº do Processo</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_06_Input_Processo.png" class="img-screenshot" alt="Input Processo"></div>
    </div>

    <h3 id="secao-2-2">2.2 Executando a Busca</h3>
    <p>Com os filtros configurados, a tela exibirá os parâmetros selecionados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_07_Filtros_Preenchidos.png" class="img-screenshot" alt="Filtros Preenchidos"></div>
    </div>

    <p>Clique no botão <strong>Buscar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/02_08_Acao_Buscar.png" class="img-screenshot" alt="Ação Buscar"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Gestão de PER (Pedidos)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-3-1">3.1 Visualização e Edição</h3>
    <p>O sistema carregará a grade de resultados com os processos encontrados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_01_Grid_Resultados.png" class="img-screenshot" alt="Grid Resultados"></div>
    </div>

    <p>Utilize a barra de rolagem para ver mais colunas, como Saldo Disponível e Valor Selic.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_02_Scroll_Grid.png" class="img-screenshot" alt="Scroll Grid"></div>
    </div>

    <p>Para editar dados básicos de um PER, clique no ícone de <strong>Lápis</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_03_Btn_Editar_PER.png" class="img-screenshot" alt="Botão Editar"></div>
    </div>

    <p>No modal de edição, altere os dados necessários e clique em Salvar.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/03_04_Modal_Editar.png" class="img-screenshot" alt="Modal Editar"></div>
    </div>

    <h3 id="secao-3-2">3.2 Novo Cadastro de PER</h3>
    <p>Para criar um novo pedido, clique no botão <strong>+ Novo</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/04_01_Modal_Novo_PER.png" class="img-screenshot" alt="Botão Novo"></div>
    </div>

    <p>Preencha os dados do formulário (Tipo Declaração, Processo, Exercício, Trimestre, Tipo Crédito e Valor).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/04_02_Formulario_Novo_PER.png" class="img-screenshot" alt="Formulário Novo PER"></div>
    </div>

    <p>Após salvar, um aviso de confirmação será exibido.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/04_03_Toast_Sucesso_PER.png" class="img-screenshot" alt="Sucesso PER"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Detalhes e Situação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-4-1">4.1 Atualizando Status</h3>
    <p>Clique em uma linha da tabela para ver os detalhes do PER.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_01_Lista_PERs.png" class="img-screenshot" alt="Seleção na Lista"></div>
    </div>

    <p>A tela de detalhes exibe o saldo atualizado e o histórico de lançamentos.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_02_Detalhes_Expandido.png" class="img-screenshot" alt="Detalhes Expandido"></div>
    </div>

    <p>No menu lateral esquerdo, selecione a nova <strong>Situação</strong> do processo.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_03_Select_Situacao.png" class="img-screenshot" alt="Select Situação"></div>
    </div>

    <p>Clique em <strong>Salvar Situação</strong> para atualizar o histórico.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/05_04_Btn_Salvar_Situacao.png" class="img-screenshot" alt="Salvar Situação"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Gestão de DCOMP</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-5-1">5.1 Novo DCOMP</h3>
    <p>Para registrar uma compensação, clique em <strong>+ Novo DCOMP</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/06_01_Modal_Novo_DCOMP.png" class="img-screenshot" alt="Novo DCOMP"></div>
    </div>

    <p>Preencha os dados da compensação (Nº Documento, Mês/Ano, Envio, Imposto e Valor Compensado).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/06_02_Formulario_DCOMP.png" class="img-screenshot" alt="Formulário DCOMP"></div>
    </div>

    <p>Confirme a criação e aguarde o aviso de sucesso.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/06_03_Sucesso_DCOMP.png" class="img-screenshot" alt="Sucesso DCOMP"></div>
    </div>

    <h3 id="secao-5-2">5.2 Ressarcimentos</h3>
    <p>Para pagamentos em espécie, clique em <strong>$ Novo Ressarcimento</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/07_01_Btn_Ressarcimento.png" class="img-screenshot" alt="Botão Ressarcimento"></div>
    </div>

    <p>Informe o valor recebido e a data do pagamento.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/07_02_Formulario_Ressarcimento.png" class="img-screenshot" alt="Formulário Ressarcimento"></div>
    </div>

    <p>O sistema atualizará o saldo e o status do PER automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/07_03_Sucesso_Ressarcimento.png" class="img-screenshot" alt="Sucesso Ressarcimento"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Retificações e Ajustes</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-6-1">6.1 Retificar DCOMP</h3>
    <p>Na lista de lançamentos, você pode editar um registro existente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_01_Editar_DCOMP.png" class="img-screenshot" alt="Editar DCOMP"></div>
    </div>

    <p>Visualize os lançamentos já efetuados no PER.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_02_Lista_Com_DCOMP.png" class="img-screenshot" alt="Lista DCOMP"></div>
    </div>

    <p>O saldo na grade principal será recalculado.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_03_Grid_Atualizado.png" class="img-screenshot" alt="Grid Atualizado"></div>
    </div>

    <p>Selecione outro PER para ver seus detalhes.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_04_Expandido_Outro_PER.png" class="img-screenshot" alt="Outro PER"></div>
    </div>

    <p>Para retificar, ao criar um Novo DCOMP, utilize o campo <strong>DCOMP a Retificar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_05_DCOMP_Retificador.png" class="img-screenshot" alt="DCOMP Retificador"></div>
    </div>

    <p>Preencha os novos dados da retificação.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_06_Formulario_Retificacao.png" class="img-screenshot" alt="Formulário Retificação"></div>
    </div>

    <p>O sistema vinculará o novo registro ao antigo (em destaque laranja).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/08_07_Lista_Retificada.png" class="img-screenshot" alt="Lista Retificada"></div>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Busca Avançada</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para localizar um item específico, limpe os filtros anteriores.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_01_Busca_Geral.png" class="img-screenshot" alt="Busca Geral"></div>
    </div>

    <p>Digite o número exato no campo <strong>Nº do Processo</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_02_Filtro_Numero_Proc.png" class="img-screenshot" alt="Filtro Número"></div>
    </div>

    <p>O PER correspondente será exibido.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_03_Resultado_Filtrado_PER.png" class="img-screenshot" alt="Resultado PER"></div>
    </div>

    <p>Você pode acessar os detalhes diretamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_04_Detalhe_Filtrado.png" class="img-screenshot" alt="Detalhe Filtrado"></div>
    </div>

    <p>A busca também funciona para números de DCOMP.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_05_Busca_DCOMP_ID.png" class="img-screenshot" alt="Busca DCOMP ID"></div>
    </div>

    <p>O sistema trará o PER de origem desse DCOMP.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_06_Resultado_Filtrado_DCOMP.png" class="img-screenshot" alt="Resultado DCOMP"></div>
    </div>

    <p>Visualizando o vínculo exato.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/09_07_Detalhe_Final.png" class="img-screenshot" alt="Detalhe Final"></div>
    </div>
  </div>
</div>