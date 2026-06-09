---
layout: manual
title: "Consulta de EFD Contribuições"
versao: "1.0"
github_url: "https://github.com/psa-elevate/efd-contribuicoes"
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
    title: "3. Navegação até EFD Contribuições"
    items:
      - id: secao-3-1
        title: "3.1. Página inicial e menu lateral"
  - id: secao-4
    title: "4. Visão geral da interface"
    items:
      - id: secao-4-1
        title: "4.1. Estrutura da tela"
  - id: secao-5
    title: "5. Utilizando os Filtros"
    items:
      - id: secao-5-1
        title: "5.1. Cliente"
      - id: secao-5-2
        title: "5.2. Contribuinte"
      - id: secao-5-3
        title: "5.3. Período (data início)"
      - id: secao-5-4
        title: "5.4. Período (data fim)"
      - id: secao-5-5
        title: "5.5. Executando a busca"
  - id: secao-6
    title: "6. Visualizando Resultados"
    items:
      - id: secao-6-1
        title: "6.1. Lista de arquivos SPED"
  - id: secao-7
    title: "7. Download de Arquivos TXT"
    items:
      - id: secao-7-1
        title: "7.1. Download individual"
      - id: secao-7-2
        title: "7.2. Download em lote (ZIP)"
  - id: secao-8
    title: "8. Exportação para Excel"
    items:
      - id: secao-8-1
        title: "8.1. Abrindo a janela de exportação"
      - id: secao-8-2
        title: "8.2. Selecionando blocos SPED"
      - id: secao-8-3
        title: "8.3. Escolha de campos"
      - id: secao-8-4
        title: "8.4. Executando a exportação"
  - id: secao-9
    title: "9. Gerenciando perfis de exportação"
    items:
      - id: secao-9-1
        title: "9.1. Salvando um perfil"
      - id: secao-9-2
        title: "9.2. Carregando perfis salvos"
      - id: secao-9-3
        title: "9.3. Criando múltiplos perfis"
      - id: secao-9-4
        title: "9.4. Excluindo perfis"
  - id: secao-10
    title: "10. Análise em tela dos dados SPED"
    items:
      - id: secao-10-1
        title: "10.1. Acessando a janela de análise"
      - id: secao-10-2
        title: "10.2. Navegando pelos registros"
      - id: secao-10-3
        title: "10.3. Interagindo com a tabela"
      - id: secao-10-4
        title: "10.4. Finalizando a análise"
  - id: secao-11
    title: "11. Dicas e boas práticas"
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

<!-- SEÇÃO ACESSO -->
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
    <p>Na tela de departamentos, abra a lista suspensa e selecione a opção <strong>"Digital"</strong> para acessar o sistema de gestão de demandas e as ferramentas internas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-02-selecao-area.png" class="img-screenshot" alt="Seleção da área Digital">
        </div>
        <p class="img-caption">Seleção da área de competência Digital</p>
    </div>

    <h3 id="secao-acesso-3">2.3. Login no sistema</h3>
    <p>A tela de autenticação será exibida. Insira suas credenciais corporativas (e-mail e senha) nos campos correspondentes e clique em <strong>"Entrar"</strong>. As credenciais garantem que você visualize apenas as permissões do seu respectivo perfil.</p>
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
        <p class="img-caption">Escolha do ambiente da área Digital</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Utilize a seção "Sessões em Andamento" para retomar trabalhos recentes ou localize a ferramenta desejada no painel central.</p>
    <p>Para iniciar a operação, utilize o menu lateral ou identifique o card correspondente e clique no botão <strong>"Acessar Ferramenta"</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-05-hub-ferramentas.png" class="img-screenshot" alt="Hub de Ferramentas">
        </div>
        <p class="img-caption">Visão geral do Hub de Ferramentas e sessões ativas</p>
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
    <h3 id="secao-3-1">3.1. Página inicial e menu lateral</h3>
    <p>Na página inicial Dev, localize o menu lateral à esquerda da tela. Clique na opção <strong>EFD Contribuições</strong> para acessar a ferramenta de busca de arquivos SPED.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/01-08-dashboard-dev.png" class="img-screenshot" alt="Dashboard Digital Dev"> </div>
        <p class="img-caption">Página inicial Dev — menu lateral com opção EFD Contribuições</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 4 -->
<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Visão geral da interface</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1. Estrutura da tela</h3>
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
    <h3 id="secao-5-1">5.1. Cliente</h3>
    <p>O filtro <strong>Cliente</strong> permite selecionar a empresa ou grupo empresarial cujos arquivos serão consultados. Clique no campo e selecione o cliente desejado na lista suspensa.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-02-dropdown-cliente.png" class="img-screenshot" alt="Dropdown de Seleção de Cliente"> </div>
        <p class="img-caption">Lista suspensa do filtro Cliente</p>
    </div>

    <h3 id="secao-5-2">5.2. Contribuinte</h3>
    <p>Após selecionar o cliente, o filtro <strong>Contribuinte</strong> exibe os estabelecimentos vinculados. Selecione o contribuinte específico (identificado pelo CNPJ) para filtrar os arquivos relacionados.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-03-dropdown-contribuinte.png" class="img-screenshot" alt="Dropdown de Seleção de Contribuinte"> </div>
        <p class="img-caption">Seleção do contribuinte vinculado ao cliente</p>
    </div>

    <h3 id="secao-5-3">5.3. Período (data início)</h3>
    <p>Defina o intervalo de datas utilizando os campos de período. Utilize o seletor de ano para navegação rápida.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-04-calendario-2021.png" class="img-screenshot" alt="Navegação rápida por ano"> </div>
        <p class="img-caption">Navegação facilitada pelo calendário</p>
    </div>

    <h3 id="secao-5-4">5.4. Período (data fim)</h3>
    <p>Selecione o mês inicial e final da busca clicando no ícone de calendário.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/02-05-calendario-2026.png" class="img-screenshot" alt="Seleção de mês no calendário"> </div>
        <p class="img-caption">Definição do intervalo de datas</p>
    </div>

    <h3 id="secao-5-5">5.5. Executando a busca</h3>
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
    <h3 id="secao-6-1">6.1. Lista de arquivos SPED</h3>
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
    <h3 id="secao-7-1">7.1. Download individual</h3>
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

    <h3 id="secao-7-2">7.2. Download em lote (ZIP)</h3>
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
    <h3 id="secao-8-1">8.1. Abrindo a janela de exportação</h3>
    <p>Na tela de resultados, clique no botão <strong>Exportar para Excel</strong> para abrir a janela de configuração de exportação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-01-tooltip-exportar-excel.png" class="img-screenshot" alt="Botão Exportar Excel"> </div>
        <p class="img-caption">Iniciando exportação para Excel</p>
    </div>
    <p>A janela exibirá a árvore de registros SPED disponíveis para seleção.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-02-modal-exportar-inicial.png" class="img-screenshot" alt="Modal Exportação Blocos Fechados"> </div>
        <p class="img-caption">Janela de seleção de blocos SPED</p>
    </div>

    <h3 id="secao-8-2">8.2. Selecionando blocos SPED</h3>
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

    <h3 id="secao-8-3">8.3. Escolha de campos</h3>
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

    <h3 id="secao-8-4">8.4. Executando a exportação</h3>
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
    <h2 class="editable-text">Gerenciando perfis de exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-9-1">9.1. Salvando um perfil</h3>
    <p>Após configurar a seleção de registros e campos, você pode salvar essas preferências em um perfil para reutilização futura. Clique no botão <strong>+</strong> (Salvar Novo Perfil).</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/04-09-tooltip-salvar-perfil.png" class="img-screenshot" alt="Tooltip Salvar Novo Perfil"> </div>
        <p class="img-caption">Botão para salvar novo perfil</p>
    </div>
    <p>Na janela que aparece, digite um nome descritivo para o perfil e defina se será o perfil padrão.</p>
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

    <h3 id="secao-9-2">9.2. Carregando perfis salvos</h3>
    <p>Os perfis salvos ficam disponíveis no seletor de perfis. Clique na lista suspensa para visualizar a lista.</p>
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

    <h3 id="secao-9-3">9.3. Criando múltiplos perfis</h3>
    <p>Você pode criar vários perfis para diferentes cenários de exportação. Basta repetir o processo de salvamento com configurações distintas.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-13-modal-salvar-perfil2.png" class="img-screenshot" alt="Modal Segundo Perfil"> </div>
        <p class="img-caption">Criando segundo perfil na janela</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-17-toast-perfil2-criado.png" class="img-screenshot" alt="Toast Segundo Perfil Criado"> </div>
        <p class="img-caption">Novo perfil criado</p>
    </div>

    <h3 id="secao-9-4">9.4. Excluindo perfis</h3>
    <p>Para remover um perfil que não é mais necessário, clique no ícone de lixeira ao lado do perfil na lista.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-18-dropdown-multiplos-perfis.png" class="img-screenshot" alt="Dropdown com Múltiplos Perfis"> </div>
        <p class="img-caption">Lista com múltiplos perfis</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-19-dropdown-icone-excluir.png" class="img-screenshot" alt="Clicando na Lixeira"> </div>
        <p class="img-caption">Ícone para excluir perfil</p>
    </div>
    <p>Confirme a exclusão na janela de confirmação.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/05-20-modal-confirmar-exclusao.png" class="img-screenshot" alt="Modal Confirmar Exclusão"> </div>
        <p class="img-caption">Janela de confirmação de exclusão</p>
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
    <h2 class="editable-text">Análise em tela dos dados SPED</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-10-1">10.1. Acessando a janela de análise</h3>
    <p>Na listagem de arquivos, clique no botão <strong>Analisar</strong> para abrir a janela de análise detalhada do arquivo SPED.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-01-lista-pre-analise.png" class="img-screenshot" alt="Botão Analisar na Lista"> </div>
        <p class="img-caption">Botão para iniciar análise</p>
    </div>
    <p>A janela exibirá a estrutura do arquivo SPED com todos os blocos e registros disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-03-modal-analise-inicial.png" class="img-screenshot" alt="Modal de Análise Inicial"> </div>
        <p class="img-caption">Janela de análise — visão inicial</p>
    </div>

    <h3 id="secao-10-2">10.2. Navegando pelos registros</h3>
    <p>Utilize a barra lateral à esquerda para navegar entre os blocos e registros do arquivo SPED.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-04-sidebar-bloco0-expandido.png" class="img-screenshot" alt="Sidebar Bloco 0 Expandido"> </div>
        <p class="img-caption">Bloco 0 expandido na barra lateral</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-05-sidebar-blocoC-expandido.png" class="img-screenshot" alt="Sidebar Bloco C Expandido"> </div>
        <p class="img-caption">Bloco C expandido na barra lateral</p>
    </div>
    <p>Ao selecionar registros volumosos (como C170), aguarde o carregamento dos dados.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-06-registro-c170-loading.png" class="img-screenshot" alt="Loading Registro C170"> </div>
        <p class="img-caption">Carregando dados do registro</p>
    </div>

    <h3 id="secao-10-3">10.3. Interagindo com a tabela de dados</h3>
    <p>Visualize os dados na tabela. Use a barra de rolagem horizontal para ver todas as colunas disponíveis.</p>
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

    <h3 id="secao-10-4">10.4. Finalizando a análise</h3>
    <p>Visualize a estrutura completa de blocos na barra lateral e, ao finalizar, clique no botão <strong>X</strong> para fechar a janela.</p>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-12-sidebar-todos-blocos.png" class="img-screenshot" alt="Sidebar Todos os Blocos"> </div>
        <p class="img-caption">Árvore completa de registros</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper"> <img src="imagens/07-13-botao-fechar-modal.png" class="img-screenshot" alt="Botão Fechar Modal"> </div>
        <p class="img-caption">Botão para fechar a janela</p>
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
    <h2 class="editable-text">Dicas e boas práticas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para otimizar sua experiência com a ferramenta de Consulta de EFD Contribuições, considere as seguintes recomendações:</p>
    <ul>
        <li><strong>Filtros específicos:</strong> Utilize combinações de filtros para reduzir o tempo de busca e obter resultados mais precisos.</li>
        <li><strong>Perfis de exportação:</strong> Crie perfis diferentes para cenários recorrentes de análise, economizando tempo na configuração.</li>
        <li><strong>Download em lote:</strong> Para múltiplos arquivos, prefira o botão "Baixar Todos" que gera um ZIP organizado.</li>
        <li><strong>Análise prévia:</strong> Antes de exportar, utilize a janela de análise para verificar se os dados estão conforme esperado.</li>
        <li><strong>Período adequado:</strong> Defina intervalos de data precisos para evitar sobrecarga de resultados.</li>
    </ul>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p>Mantenha seus perfis de exportação organizados e atualizados. Exclua perfis obsoletos para facilitar a seleção.</p>
    </div>
  </div>
</div>
