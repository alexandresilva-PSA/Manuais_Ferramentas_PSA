---
layout: manual
title: "Consulta de EFD Contribuições"
versao: "1.0"
github_url: "https://github.com/psa-elevate/efd-contribuicoes"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-2
    title: "2. Acessando o Sistema"
    items:
      - id: secao-2-1
        title: "2.1. Acesso ao PSA Elevate"
      - id: secao-2-2
        title: "2.2. Seleção de Área"
      - id: secao-2-3
        title: "2.3. Login"
      - id: secao-2-4
        title: "2.4. Seleção de Ambiente"
  - id: secao-3
    title: "3. Navegação até EFD Contribuições"
    items:
      - id: secao-3-1
        title: "3.1. Dashboard e Menu Lateral"
  - id: secao-4
    title: "4. Visão Geral da Interface"
    items:
      - id: secao-4-1
        title: "4.1. Estrutura da Tela"
  - id: secao-5
    title: "5. Utilizando os Filtros"
    items:
      - id: secao-5-1
        title: "5.1. Cliente"
      - id: secao-5-2
        title: "5.2. Contribuinte"
      - id: secao-5-3
        title: "5.3. Período (Data Início)"
      - id: secao-5-4
        title: "5.4. Período (Data Fim)"
      - id: secao-5-5
        title: "5.5. Executando a Busca"
  - id: secao-6
    title: "6. Visualizando Resultados"
    items:
      - id: secao-6-1
        title: "6.1. Lista de Arquivos SPED"
  - id: secao-7
    title: "7. Download de Arquivos TXT"
    items:
      - id: secao-7-1
        title: "7.1. Download Individual"
      - id: secao-7-2
        title: "7.2. Download em Lote (ZIP)"
  - id: secao-8
    title: "8. Exportação para Excel"
    items:
      - id: secao-8-1
        title: "8.1. Abrindo o Modal"
      - id: secao-8-2
        title: "8.2. Selecionando Blocos"
      - id: secao-8-3
        title: "8.3. Escolha de Campos"
      - id: secao-8-4
        title: "8.4. Executando Exportação"
  - id: secao-9
    title: "9. Gerenciando Perfis de Exportação"
    items:
      - id: secao-9-1
        title: "9.1. Salvando um Perfil"
      - id: secao-9-2
        title: "9.2. Carregando Perfis"
      - id: secao-9-3
        title: "9.3. Criando Múltiplos Perfis"
      - id: secao-9-4
        title: "9.4. Excluindo Perfis"
  - id: secao-10
    title: "10. Análise em Tela dos Dados SPED"
    items:
      - id: secao-10-1
        title: "10.1. Acessando o Modal"
      - id: secao-10-2
        title: "10.2. Navegando Pelos Registros"
      - id: secao-10-3
        title: "10.3. Interagindo com a Tabela"
      - id: secao-10-4
        title: "10.4. Finalizando Análise"
  - id: secao-11
    title: "11. Dicas e Boas Práticas"
---

<!-- SEÇÃO 1 -->
<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>Consulta de EFD Contribuições</strong>, parte integrante do sistema PSA Elevate. A ferramenta permite buscar, visualizar, exportar e baixar arquivos SPED EFD Contribuições de forma centralizada.</p>
    <p>O objetivo deste documento é orientar analistas fiscais na utilização eficiente de todos os recursos disponíveis, desde a aplicação de filtros até a exportação de dados para análise.</p>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p>Certifique-se de que seu perfil de usuário possui as permissões necessárias para acessar o módulo de EFD Contribuições antes de prosseguir.</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 2 -->
<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acessando o Sistema</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-2-1">2.1 Acesso ao PSA Elevate</h3>
    <p>Acesse o site do PSA Elevate através do navegador. Na página inicial, localize o ícone de equipe no canto superior direito da tela.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-01-homepage-psa.png" class="img-screenshot" alt="Homepage PSA Consultores"> </div>
        <p class="img-caption">Página inicial do PSA Elevate</p>
    </div>
    <p>Caso visualize a versão alternativa da home, localize o menu no canto superior.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-02-homepage-psa-alt.png" class="img-screenshot" alt="Homepage alternativa PSA Consultores"> </div>
        <p class="img-caption">Visualização alternativa da página inicial</p>
    </div>

    <h3 id="secao-2-2">2.2 Seleção de Área</h3>
    <p>Na tela de seleção de área, prossiga para a tela de autenticação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-03-area-equipe-fechado.png" class="img-screenshot" alt="Tela de Seleção de Área"> </div>
        <p class="img-caption">Tela inicial de seleção antes do login</p>
    </div>
    <p>No menu suspenso, selecione a opção <strong>Digital</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-04-area-equipe-dropdown.png" class="img-screenshot" alt="Dropdown Área da Equipe"> </div>
        <p class="img-caption">Seleção da área Digital no menu</p>
    </div>

    <h3 id="secao-2-3">2.3 Login</h3>
    <p>A tela de login será exibida. Insira suas credenciais de acesso nos campos correspondentes.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-05-tela-login.png" class="img-screenshot" alt="Tela de login vazia"> </div>
        <p class="img-caption">Formulário de acesso restrito</p>
    </div>
    <p>No campo <strong>Email</strong>, digite seu endereço de e-mail corporativo. No campo <strong>Senha</strong>, insira sua senha. Em seguida, clique em <strong>Entrar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-06-login-preenchido.png" class="img-screenshot" alt="Login preenchido"> </div>
        <p class="img-caption">Exemplo de preenchimento de credenciais</p>
    </div>

    <h3 id="secao-2-4">2.4 Seleção de Ambiente</h3>
    <p>Após o login, selecione o ambiente de trabalho apropriado. Para acessar as ferramentas de consulta e desenvolvimento, clique em <strong>Digital Dev</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-07-area-digital-escolha.png" class="img-screenshot" alt="Seleção de Ambiente Digital Dev"> </div>
        <p class="img-caption">Escolha entre Digital Rotina e Digital Dev</p>
    </div>
    <p>O Dashboard inicial será carregado, exibindo o resumo das ferramentas disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-08-dashboard-dev.png" class="img-screenshot" alt="Dashboard Digital Dev"> </div>
        <p class="img-caption">Visão geral do sistema</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 3 -->
<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Navegação até EFD Contribuições</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-3-1">3.1 Dashboard e Menu Lateral</h3>
    <p>No Dashboard Dev, localize o menu lateral à esquerda da tela. Clique na opção <strong>EFD Contribuições</strong> para acessar a ferramenta de busca de arquivos SPED.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-08-dashboard-dev.png" class="img-screenshot" alt="Dashboard Digital Dev"> </div>
        <p class="img-caption">Dashboard Dev — menu lateral com opção EFD Contribuições</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 4 -->
<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Visão Geral da Interface</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1 Estrutura da Tela</h3>
    <p>A interface da Consulta de EFD Contribuições está organizada em duas áreas principais: a área de <strong>Filtros</strong> na parte superior, onde você define os critérios de busca, e a área de <strong>Arquivos</strong> na parte inferior, onde os resultados são exibidos em formato de tabela.</p>
    <p>Na barra de ações, você encontra os botões <strong>Buscar Arquivos</strong>, <strong>Exportar Excel</strong> e <strong>Baixar Todos</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-01-filtros-vazio.png" class="img-screenshot" alt="Filtros de busca vazios"> </div>
        <p class="img-caption">Visão geral da interface — filtros e área de arquivos</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 5 -->
<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Utilizando os Filtros</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1 Cliente</h3>
    <p>O filtro <strong>Cliente</strong> permite selecionar a empresa ou grupo empresarial cujos arquivos serão consultados. Clique no campo e selecione o cliente desejado na lista suspensa.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-02-dropdown-cliente.png" class="img-screenshot" alt="Dropdown de Seleção de Cliente"> </div>
        <p class="img-caption">Dropdown do filtro Cliente</p>
    </div>

    <h3 id="secao-5-2">5.2 Contribuinte</h3>
    <p>Após selecionar o cliente, o filtro <strong>Contribuinte</strong> exibe os estabelecimentos vinculados. Selecione o contribuinte específico (identificado pelo CNPJ) para filtrar os arquivos relacionados.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-03-dropdown-contribuinte.png" class="img-screenshot" alt="Dropdown de Seleção de Contribuinte"> </div>
        <p class="img-caption">Seleção do contribuinte vinculado ao cliente</p>
    </div>

    <h3 id="secao-5-3">5.3 Período (Data Início)</h3>
    <p>Defina o intervalo de datas utilizando os campos de período. Utilize o seletor de ano para navegação rápida.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-04-calendario-2021.png" class="img-screenshot" alt="Navegação rápida por ano"> </div>
        <p class="img-caption">Navegação facilitada pelo calendário</p>
    </div>

    <h3 id="secao-5-4">5.4 Período (Data Fim)</h3>
    <p>Selecione o mês inicial e final da busca clicando no ícone de calendário.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-05-calendario-2026.png" class="img-screenshot" alt="Seleção de mês no calendário"> </div>
        <p class="img-caption">Definição do intervalo de datas</p>
    </div>

    <h3 id="secao-5-5">5.5 Executando a Busca</h3>
    <p>Após configurar os filtros desejados, clique no botão <strong>Buscar Arquivos</strong> para executar a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-06-filtros-preenchidos.png" class="img-screenshot" alt="Filtros preenchidos"> </div>
        <p class="img-caption">Filtros configurados prontos para busca</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-07-filtros-preenchidos-alt.png" class="img-screenshot" alt="Variação de filtros"> </div>
        <p class="img-caption">Configuração alternativa de busca</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p>Utilize combinações de filtros para otimizar o tempo de busca e obter resultados mais precisos.</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 6 -->
<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Visualizando Resultados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-6-1">6.1 Lista de Arquivos SPED</h3>
    <p>A tabela de resultados apresenta os arquivos SPED encontrados com as seguintes informações: Período, Tipo de Arquivo, Valores e Status.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/03-01-lista-arquivos.png" class="img-screenshot" alt="Lista de arquivos encontrados"> </div>
        <p class="img-caption">Tabela com arquivos encontrados</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 7 -->
<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Download de Arquivos TXT</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-7-1">7.1 Download Individual</h3>
    <p>Para baixar um arquivo individual, clique no ícone de download na linha correspondente.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/03-02-tooltip-baixar-txt.png" class="img-screenshot" alt="Tooltip Baixar Original TXT"> </div>
        <p class="img-caption">Download de arquivo único</p>
    </div>
    <p>Aguarde a mensagem de confirmação do download.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/03-03-toast-download-iniciado.png" class="img-screenshot" alt="Toast de download iniciado"> </div>
        <p class="img-caption">Confirmação de download iniciado</p>
    </div>

    <h3 id="secao-7-2">7.2 Download em Lote (ZIP)</h3>
    <p>Para baixar múltiplos arquivos de uma só vez, utilize o botão <strong>Baixar Todos</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/03-04-tooltip-baixar-todos.png" class="img-screenshot" alt="Tooltip Baixar Todos"> </div>
        <p class="img-caption">Opção de download em lote</p>
    </div>
    <p>O sistema processará o arquivo ZIP (aguarde o estado de carregamento).</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/03-05-baixar-todos-loading.png" class="img-screenshot" alt="Botão Baixar Todos em Loading"> </div>
        <p class="img-caption">Processando pacote de arquivos</p>
    </div>
    <p>O download do ZIP será concluído automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/03-06-toast-download-zip.png" class="img-screenshot" alt="Toast Download ZIP Concluído"> </div>
        <p class="img-caption">Download concluído — arquivo ZIP com arquivos SPED</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 8 -->
<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Exportação para Excel</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-8-1">8.1 Abrindo o Modal de Exportação</h3>
    <p>Na tela de resultados, clique no botão <strong>Exportar para Excel</strong> para abrir o modal de configuração de exportação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-01-tooltip-exportar-excel.png" class="img-screenshot" alt="Botão Exportar Excel"> </div>
        <p class="img-caption">Iniciando exportação para Excel</p>
    </div>
    <p>O modal exibirá a árvore de registros SPED disponíveis para seleção.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-02-modal-exportar-inicial.png" class="img-screenshot" alt="Modal Exportação Blocos Fechados"> </div>
        <p class="img-caption">Modal de seleção de blocos SPED</p>
    </div>

    <h3 id="secao-8-2">8.2 Selecionando Blocos SPED</h3>
    <p>Expanda os blocos clicando no ícone de seta para visualizar os registros disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-03-dropdown-perfil-aberto.png" class="img-screenshot" alt="Bloco A Expandido"> </div>
        <p class="img-caption">Bloco A expandido com registros</p>
    </div>
    <p>Marque as caixas de seleção dos registros que deseja incluir na exportação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-04-todos-registros-selecionados.png" class="img-screenshot" alt="Checkboxes Marcados Bloco A"> </div>
        <p class="img-caption">Seleção de registros específicos</p>
    </div>

    <h3 id="secao-8-3">8.3 Escolha de Campos</h3>
    <p>Para uma exportação mais granular, expanda um registro para visualizar seus campos individuais.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-05-bloco0-expandido.png" class="img-screenshot" alt="Registro A010 Expandido"> </div>
        <p class="img-caption">Campos detalhados do registro A010</p>
    </div>
    <p>Selecione campos específicos (CNPJ, IE, etc.) ou utilize <strong>Selecionar Tudo</strong> para incluir todos.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-06-bloco0-selecao-parcial.png" class="img-screenshot" alt="Campos Individuais Selecionados"> </div>
        <p class="img-caption">Seleção granular de campos</p>
    </div>

    <h3 id="secao-8-4">8.4 Executando a Exportação</h3>
    <p>Com a seleção configurada, clique em <strong>Gerar Relatório</strong> para iniciar a exportação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/06-01-modal-pronto-exportar.png" class="img-screenshot" alt="Botão Gerar Relatório Ativo"> </div>
        <p class="img-caption">Confirmando exportação</p>
    </div>
    <p>Aguarde o processamento do arquivo Excel.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/06-02-exportacao-processando.png" class="img-screenshot" alt="Botão Exportar Processando"> </div>
        <p class="img-caption">Processando exportação</p>
    </div>
    <p>O download será iniciado automaticamente após a conclusão.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/06-03-toast-exportacao-concluida.png" class="img-screenshot" alt="Toast Exportação Concluída"> </div>
        <p class="img-caption">Exportação concluída com sucesso</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p>Utilize a opção "Selecionar Tudo" para exportar rapidamente todos os campos de um registro.</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 9 -->
<div class="secao" id="secao-9">
  <div class="secao-header">
    <span class="secao-numero editable-text">9</span>
    <h2 class="editable-text">Gerenciando Perfis de Exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-9-1">9.1 Salvando um Perfil</h3>
    <p>Após configurar a seleção de registros e campos, você pode salvar essas preferências em um perfil para reutilização futura. Clique no botão <strong>+</strong> (Salvar Novo Perfil).</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-09-tooltip-salvar-perfil.png" class="img-screenshot" alt="Tooltip Salvar Novo Perfil"> </div>
        <p class="img-caption">Botão para salvar novo perfil</p>
    </div>
    <p>No modal que aparece, digite um nome descritivo para o perfil e defina se será o perfil padrão.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-03-nome-perfil-digitado.png" class="img-screenshot" alt="Nome Perfil Preenchido"> </div>
        <p class="img-caption">Nomeando o perfil de exportação</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-04-checkbox-perfil-padrao.png" class="img-screenshot" alt="Checkbox Perfil Padrão Marcado"> </div>
        <p class="img-caption">Definindo como perfil padrão</p>
    </div>
    <p>Clique em <strong>Salvar Perfil</strong> para confirmar.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-06-toast-perfil-criado.png" class="img-screenshot" alt="Toast Perfil Salvo com Sucesso"> </div>
        <p class="img-caption">Perfil salvo com sucesso</p>
    </div>

    <h3 id="secao-9-2">9.2 Carregando Perfis Salvos</h3>
    <p>Os perfis salvos ficam disponíveis no seletor de perfis. Clique no dropdown para visualizar a lista.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-07-perfil-salvo-dropdown.png" class="img-screenshot" alt="Dropdown com Perfil Salvo"> </div>
        <p class="img-caption">Lista de perfis disponíveis</p>
    </div>
    <p>Selecione o perfil desejado para carregar automaticamente a configuração salva.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-09-modal-perfil-selecionado.png" class="img-screenshot" alt="Selecionando Perfil na Lista"> </div>
        <p class="img-caption">Selecionando perfil para carregar</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-10-blocoA-expandido.png" class="img-screenshot" alt="Bloco A Expandido no Perfil"> </div>
        <p class="img-caption">Perfil aplicado com seleções pré-definidas</p>
    </div>

    <h3 id="secao-9-3">9.3 Criando Múltiplos Perfis</h3>
    <p>Você pode criar vários perfis para diferentes cenários de exportação. Basta repetir o processo de salvamento com configurações distintas.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-13-modal-salvar-perfil2.png" class="img-screenshot" alt="Modal Segundo Perfil"> </div>
        <p class="img-caption">Criando segundo perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-17-toast-perfil2-criado.png" class="img-screenshot" alt="Toast Segundo Perfil Criado"> </div>
        <p class="img-caption">Novo perfil criado</p>
    </div>

    <h3 id="secao-9-4">9.4 Excluindo Perfis</h3>
    <p>Para remover um perfil que não é mais necessário, clique no ícone de lixeira ao lado do perfil na lista.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-18-dropdown-multiplos-perfis.png" class="img-screenshot" alt="Dropdown com Múltiplos Perfis"> </div>
        <p class="img-caption">Lista com múltiplos perfis</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-19-dropdown-icone-excluir.png" class="img-screenshot" alt="Clicando na Lixeira"> </div>
        <p class="img-caption">Ícone para excluir perfil</p>
    </div>
    <p>Confirme a exclusão no modal de confirmação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-20-modal-confirmar-exclusao.png" class="img-screenshot" alt="Modal Confirmar Exclusão"> </div>
        <p class="img-caption">Confirmação de exclusão</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-21-toast-perfil-excluido.png" class="img-screenshot" alt="Toast Perfil Excluído"> </div>
        <p class="img-caption">Perfil excluído com sucesso</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 10 -->
<div class="secao" id="secao-10">
  <div class="secao-header">
    <span class="secao-numero editable-text">10</span>
    <h2 class="editable-text">Análise em Tela dos Dados SPED</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-10-1">10.1 Acessando o Modal de Análise</h3>
    <p>Na listagem de arquivos, clique no botão <strong>Analisar</strong> para abrir o modal de análise detalhada do arquivo SPED.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-01-lista-pre-analise.png" class="img-screenshot" alt="Botão Analisar na Lista"> </div>
        <p class="img-caption">Botão para iniciar análise</p>
    </div>
    <p>O modal exibirá a estrutura do arquivo SPED com todos os blocos e registros disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-03-modal-analise-inicial.png" class="img-screenshot" alt="Modal de Análise Inicial"> </div>
        <p class="img-caption">Modal de análise — visão inicial</p>
    </div>

    <h3 id="secao-10-2">10.2 Navegando pelos Registros</h3>
    <p>Utilize a sidebar à esquerda para navegar entre os blocos e registros do arquivo SPED.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-04-sidebar-bloco0-expandido.png" class="img-screenshot" alt="Sidebar Bloco 0 Expandido"> </div>
        <p class="img-caption">Bloco 0 expandido na sidebar</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-05-sidebar-blocoC-expandido.png" class="img-screenshot" alt="Sidebar Bloco C Expandido"> </div>
        <p class="img-caption">Bloco C expandido na sidebar</p>
    </div>
    <p>Ao selecionar registros volumosos (como C170), aguarde o carregamento dos dados.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-06-registro-c170-loading.png" class="img-screenshot" alt="Loading Registro C170"> </div>
        <p class="img-caption">Carregando dados do registro</p>
    </div>

    <h3 id="secao-10-3">10.3 Interagindo com a Tabela de Dados</h3>
    <p>Visualize os dados na tabela. Use o scroll horizontal para ver todas as colunas disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-07-tabela-c170-dados.png" class="img-screenshot" alt="Tabela de Dados C170"> </div>
        <p class="img-caption">Tabela com dados do registro</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-08-tabela-scroll-horizontal.png" class="img-screenshot" alt="Scroll Horizontal Tabela"> </div>
        <p class="img-caption">Navegação horizontal para ver mais colunas</p>
    </div>
    <p>Clique em células ou linhas para destacá-las durante a análise.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-10-tabela-celula-selecionada.png" class="img-screenshot" alt="Célula Selecionada"> </div>
        <p class="img-caption">Célula selecionada para análise</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-11-tabela-linha-selecionada.png" class="img-screenshot" alt="Linha Selecionada"> </div>
        <p class="img-caption">Linha completa selecionada</p>
    </div>

    <h3 id="secao-10-4">10.4 Finalizando a Análise</h3>
    <p>Visualize a estrutura completa de blocos na sidebar e, ao finalizar, clique no botão <strong>X</strong> para fechar o modal.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-12-sidebar-todos-blocos.png" class="img-screenshot" alt="Sidebar Todos os Blocos"> </div>
        <p class="img-caption">Árvore completa de registros</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-13-botao-fechar-modal.png" class="img-screenshot" alt="Botão Fechar Modal"> </div>
        <p class="img-caption">Botão para fechar o modal</p>
    </div>
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Importante:</strong> A análise é apenas para visualização. Nenhuma alteração é feita nos arquivos originais.</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 11 -->
<div class="secao" id="secao-11">
  <div class="secao-header">
    <span class="secao-numero editable-text">11</span>
    <h2 class="editable-text">Dicas e Boas Práticas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para otimizar sua experiência com a ferramenta de Consulta de EFD Contribuições, considere as seguintes recomendações:</p>
    <ul>
        <li><strong>Filtros específicos:</strong> Utilize combinações de filtros para reduzir o tempo de busca e obter resultados mais precisos.</li>
        <li><strong>Perfis de exportação:</strong> Crie perfis diferentes para cenários recorrentes de análise, economizando tempo na configuração.</li>
        <li><strong>Download em lote:</strong> Para múltiplos arquivos, prefira o botão "Baixar Todos" que gera um ZIP organizado.</li>
        <li><strong>Análise prévia:</strong> Antes de exportar, utilize o modal de análise para verificar se os dados estão conforme esperado.</li>
        <li><strong>Período adequado:</strong> Defina intervalos de data precisos para evitar sobrecarga de resultados.</li>
    </ul>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p>Mantenha seus perfis de exportação organizados e atualizados. Exclua perfis obsoletos para facilitar a seleção.</p>
    </div>
  </div>
</div>
