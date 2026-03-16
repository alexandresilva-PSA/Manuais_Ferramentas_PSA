---
layout: manual
title: "Controle de PERDCOMP"
versao: "1.0"
github_url: "https://github.com/psa-elevate/controle-perdcomp"
toc:
  - id: secao-intro
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
  - id: secao-2
    title: "3. Acessando a Ferramenta"
    items:
      - id: secao-2-2
        title: "3.1. Acessar a ferramenta"
  - id: secao-3
    title: "3. Realizando Consulta"
    items:
      - id: secao-3-1
        title: "3.1. Minimizar painel lateral"
      - id: secao-3-2
        title: "3.2. Selecionar Cliente"
      - id: secao-3-3
        title: "3.3. Selecionar Contribuinte"
      - id: secao-3-4
        title: "3.4. Filtro de Situação"
      - id: secao-3-5
        title: "3.5. Filtro de Exercício"
      - id: secao-3-6
        title: "3.6. Filtro de Número do Processo"
      - id: secao-3-7
        title: "3.7. Realizar busca"
  - id: secao-4
    title: "4. Visualizando Detalhes do PER"
    items:
      - id: secao-4-1
        title: "4.1. Navegação na lista de resultados"
      - id: secao-4-2
        title: "4.2. Acessar detalhes do PER"
      - id: secao-4-3
        title: "4.3. Atualizar situação do PER"
  - id: secao-5
    title: "5. Gerenciamento de DCOMP"
    items:
      - id: secao-5-1
        title: "5.1. Cadastrar novo DCOMP"
      - id: secao-5-2
        title: "5.2. Editar DCOMP"
      - id: secao-5-3
        title: "5.3. Excluir DCOMP"
  - id: secao-6
    title: "6. Registrando Ressarcimento"
    items:
      - id: secao-6-1
        title: "6.1. Abrir modal de ressarcimento"
      - id: secao-6-2
        title: "6.2. Preencher dados"
      - id: secao-6-3
        title: "6.3. Confirmar ressarcimento"
      - id: secao-6-4
        title: "6.4. Verificar na lista"
  - id: secao-7
    title: "7. Cadastrando Novo PER"
    items:
      - id: secao-7-1
        title: "7.1. Acessar formulário"
      - id: secao-7-2
        title: "7.2. Preencher dados do PER"
      - id: secao-7-3
        title: "7.3. Confirmar cadastro"
  - id: secao-8
    title: "8. Referências"
    items:
      - id: secao-8-1
        title: "8.1. Tipos de Crédito"
      - id: secao-8-2
        title: "8.2. Impostos para DCOMP"
      - id: secao-8-3
        title: "8.3. Situações do PER"
---

<!-- SEÇÃO INTRO -->
<div class="secao" id="secao-intro">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>Controle de PERDCOMP</strong>, parte integrante do sistema PSA Elevate. A ferramenta permite consultar, detalhar e gerenciar os processos de ressarcimento (PER) e compensação (DCOMP) de forma centralizada, facilitando o acompanhamento tributário por cliente e contribuinte.</p>
    <p>O objetivo deste documento é orientar os analistas fiscais na utilização completa dos recursos disponíveis, desde a consulta e visualização dos PERs até o cadastro de DCOMPs e o registro de ressarcimentos.</p>
    <h3>Principais Funcionalidades</h3>
    <ul>
        <li><strong>Consulta de PERs:</strong> Busca por cliente, contribuinte, situação, exercício e número de processo.</li>
        <li><strong>Visualização e atualização de situação:</strong> Acesso aos detalhes de cada PER com possibilidade de atualizar o status.</li>
        <li><strong>Gerenciamento de DCOMPs:</strong> Cadastro, edição e exclusão de declarações de compensação.</li>
        <li><strong>Registro de ressarcimentos:</strong> Lançamento de valores efetivamente ressarcidos.</li>
        <li><strong>Cadastro de novos PERs:</strong> Criação de pedidos de restituição ou ressarcimento.</li>
    </ul>
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

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Acessando a Ferramenta</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-2-2">3.1. Acessar a ferramenta Controle PERDCOMP</h3>
    <p>No menu lateral esquerdo, clique na opção "Controle PERDCOMP". A página da ferramenta será carregada exibindo a seção de Filtros de Busca.</p>
    <p>Inicialmente, a área de resultados estará vazia, mostrando a mensagem para selecionar um cliente e contribuinte para visualizar os registros.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 7 - Tela inicial da ferramenta Controle PERDCOMP.png" class="img-screenshot" alt="Tela inicial da ferramenta Controle PERDCOMP"></div>
        <p class="img-caption">Figura 7 - Tela inicial da ferramenta Controle PERDCOMP</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Realizando Consulta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-3-1">3.1 Minimizar painel lateral</h3>
    <p>Para melhor visualização da página durante a consulta, recomenda-se minimizar o menu lateral clicando no ícone de seta localizado no canto superior esquerdo, ao lado do texto "Digital Dev".</p>
    <p>Isso expandirá a área útil da tela para visualização dos resultados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 8 - Painel lateral minimizado para melhor visualizacao.png" class="img-screenshot" alt="Painel lateral minimizado"></div>
        <p class="img-caption">Figura 8 - Painel lateral minimizado para melhor visualização</p>
    </div>

    <h3 id="secao-3-2">3.2 Selecionar Cliente</h3>
    <p>No campo "CLIENTE", clique para abrir a lista suspensa com os clientes disponíveis.</p>
    <p>A lista exibirá todos os clientes cadastrados, como Agro Amazônia, Agropecuária Bom Pastor, DK Transportes, entre outros.</p>
    <p>Selecione o cliente desejado para a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 9 - Lista suspensa de clientes disponiveis.png" class="img-screenshot" alt="Lista suspensa de clientes"></div>
        <p class="img-caption">Figura 9 - Lista suspensa de clientes disponíveis</p>
    </div>

    <h3 id="secao-3-3">3.3 Selecionar Contribuinte</h3>
    <p>Após selecionar o cliente, o campo "CONTRIBUINTE" será habilitado. Quando houver apenas um contribuinte vinculado ao cliente selecionado, ele será preenchido automaticamente.</p>
    <p>Caso contrário, clique no campo para selecionar o contribuinte desejado da lista.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 10 - Contribuinte selecionado automaticamente.png" class="img-screenshot" alt="Contribuinte selecionado automaticamente"></div>
        <p class="img-caption">Figura 10 - Contribuinte selecionado automaticamente</p>
    </div>

    <h3 id="secao-3-4">3.4 Filtro de Situação</h3>
    <p>O filtro de "SITUAÇÃO" permite filtrar os PERs pelo status atual.</p>
    <p>Clique no campo para visualizar as opções disponíveis: Aguardando Documentação, Analisado, Análise concluída, Análise preliminar disponibilizada, Cancelado, Contribuinte intimado, entre outras.</p>
    <p>É possível selecionar múltiplas situações simultaneamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 11 - Filtro de situacao com opcoes disponiveis.png" class="img-screenshot" alt="Filtro de situação"></div>
        <p class="img-caption">Figura 11 - Filtro de situação com opções disponíveis</p>
    </div>

    <h3 id="secao-3-5">3.5 Filtro de Exercício</h3>
    <p>O filtro "EXERCÍCIO" permite filtrar pelo ano do exercício. Clique no campo para abrir a lista com os anos disponíveis (2026, 2025, 2024, 2023, 2022, 2021, 2020).</p>
    <p>Selecione o ano desejado ou mantenha "Todos" para visualizar todos os exercícios.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 12 - Filtro de exercicio com anos disponiveis.png" class="img-screenshot" alt="Filtro de exercício"></div>
        <p class="img-caption">Figura 12 - Filtro de exercício com anos disponíveis</p>
    </div>

    <h3 id="secao-3-6">3.6 Filtro de Número do Processo</h3>
    <p>Caso precise buscar um processo específico, utilize o campo "Nº DO PROCESSO" para digitar o número do PER ou DCOMP desejado.</p>
    <p>Este filtro é opcional e pode ser usado em combinação com os demais filtros.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 13 - Campo para filtro por numero do processo.png" class="img-screenshot" alt="Campo de número do processo"></div>
        <p class="img-caption">Figura 13 - Campo para filtro por número do processo</p>
    </div>

    <h3 id="secao-3-7">3.7 Realizar busca</h3>
    <p>Após preencher os filtros desejados, clique no botão "Buscar" para executar a consulta.</p>
    <p>Os resultados serão exibidos em uma tabela contendo as colunas: SITUAÇÃO, ULT. ATUALIZAÇÃO, DT. SOLICITADA, EXERC., TRI., TIPO CRÉDITO, % PSA, VLR. CRÉDITO, VLR. COMPENSADO, RESSARCIDO, DT. PAGAMENTO, SALDO DISP., VLR. SELIC e ações (Editar). A paginação na parte inferior mostra os registros de 10 em 10.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 14 - Resultados da consulta exibidos em tabela.png" class="img-screenshot" alt="Resultados da consulta"></div>
        <p class="img-caption">Figura 14 - Resultados da consulta exibidos em tabela</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Visualizando Detalhes do PER</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-4-1">4.1 Navegação na lista de resultados</h3>
    <p>A tabela de resultados exibe os PERs com suas informações principais.</p>
    <p>Utilize os botões de paginação na parte inferior para navegar entre as páginas de resultados.</p>
    <p>Cada linha representa um processo PER com seus dados atualizados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 15 - Lista de PERs com paginacao.png" class="img-screenshot" alt="Lista de PERs"></div>
        <p class="img-caption">Figura 15 - Lista de PERs com paginação</p>
    </div>

    <h3 id="secao-4-2">4.2 Acessar detalhes do PER</h3>
    <p>Clique em qualquer linha da tabela de resultados para abrir a tela de detalhes do PER.</p>
    <p>A tela de detalhes exibe no cabeçalho o número do processo, o tipo de crédito (PIS ou COFINS), o contribuinte, o exercício/trimestre, o valor do crédito e o saldo restante do PER.</p>
    <p>Na parte inferior, são exibidas as seções: SITUAÇÃO ATUAL, LANÇAMENTOS PER (com os DCOMPs vinculados) e HISTÓRICO.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 16 - Tela de detalhes do PER.png" class="img-screenshot" alt="Detalhes do PER"></div>
        <p class="img-caption">Figura 16 - Tela de detalhes do PER</p>
    </div>

    <h3 id="secao-4-3">4.3 Atualizar situação do PER</h3>
    <p>Para atualizar a situação do PER, localize a seção "ATUALIZAR SITUAÇÃO".</p>
    <p>Clique no campo "Selecione a situação" para abrir a lista de opções disponíveis: Análise concluída, Análise preliminar disponibilizada, Cancelado, Contribuinte intimado, Despacho decisório emitido, Em discussão administrativa - CARF/CSRF/DRJ, Homologado, Não admitido, PER deferido, entre outras.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 17 - Lista de situacoes disponiveis para atualizacao.png" class="img-screenshot" alt="Lista de situações disponíveis"></div>
        <p class="img-caption">Figura 17 - Lista de situações disponíveis para atualização</p>
    </div>

    <p>Após selecionar a nova situação, clique no botão "Salvar Situação" para confirmar a alteração.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 18 - Botao Salvar Situacao.png" class="img-screenshot" alt="Botão Salvar Situação"></div>
        <p class="img-caption">Figura 18 - Botão Salvar Situação</p>
    </div>

    <p>O sistema exibirá a mensagem "Situação atualizada com sucesso!" e o histórico será atualizado automaticamente com a nova situação e a data/hora da alteração.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 19 - Confirmacao de atualizacao da situacao.png" class="img-screenshot" alt="Confirmação de atualização"></div>
        <p class="img-caption">Figura 19 - Confirmação de atualização da situação</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Gerenciamento de DCOMP</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-5-1">5.1 Cadastrar novo DCOMP</h3>
    <p>Para cadastrar um novo DCOMP vinculado ao PER, clique no botão "+ Novo DCOMP" localizado na seção de Lançamentos PER.</p>
    <p>O modal de cadastro será aberto com os campos: Número do Documento, PER de Origem, Mês/Ano Exercício, Data de Envio, Imposto, Valor Compensado e Percentual Aplicado.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 20 - Modal de cadastro de novo DCOMP.png" class="img-screenshot" alt="Modal de cadastro de novo DCOMP"></div>
        <p class="img-caption">Figura 20 - Modal de cadastro de novo DCOMP</p>
    </div>

    <p>Preencha o Número do Documento no formato XXXXX.XXXXX/XXXX-XX, selecione o PER de origem, informe o mês/ano de exercício, data de envio, selecione o imposto (PIS, COFINS, IPI, INSS, IRRF, IRPJ, CSLL ou CSRF), informe o valor compensado em reais e, opcionalmente, o percentual aplicado.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 21 - Preenchendo dados do DCOMP.png" class="img-screenshot" alt="Preenchendo dados do DCOMP"></div>
        <p class="img-caption">Figura 21 - Preenchendo dados do DCOMP</p>
    </div>

    <p>Clique no botão "Criar" para salvar o DCOMP. O sistema exibirá a mensagem "DCOMP criado com sucesso!" e o saldo restante do PER será atualizado automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 22 - DCOMP criado e exibido na lista.png" class="img-screenshot" alt="DCOMP criado"></div>
        <p class="img-caption">Figura 22 - DCOMP criado e exibido na lista</p>
    </div>

    <p>O DCOMP cadastrado será exibido na tabela de Lançamentos PER, mostrando o número do documento, mês/ano, data de envio, imposto e valor compensado.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 23 - Lista de DCOMPs vinculados ao PER.png" class="img-screenshot" alt="Lista de DCOMPs vinculados"></div>
        <p class="img-caption">Figura 23 - Lista de DCOMPs vinculados ao PER</p>
    </div>

    <h3 id="secao-5-2">5.2 Editar DCOMP</h3>
    <p>Para editar um DCOMP existente, clique no ícone de lápis (editar) na coluna de ações da tabela de Lançamentos PER.</p>
    <p>O modal de edição será aberto com os dados atuais do DCOMP.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 24 - Modal de edicao de DCOMP.png" class="img-screenshot" alt="Modal de edição de DCOMP"></div>
        <p class="img-caption">Figura 24 - Modal de edição de DCOMP</p>
    </div>

    <p>Faça as alterações necessárias nos campos. Por exemplo, altere o imposto de IPI para COFINS, ajuste o valor compensado ou modifique a data de envio.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 25 - Alterando dados do DCOMP.png" class="img-screenshot" alt="Alterando dados do DCOMP"></div>
        <p class="img-caption">Figura 25 - Alterando dados do DCOMP</p>
    </div>

    <p>Clique no botão "Salvar" para confirmar as alterações. O sistema exibirá a mensagem "DCOMP atualizado com sucesso!" e a lista será atualizada.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 26 - Confirmacao de atualizacao do DCOMP.png" class="img-screenshot" alt="Confirmação de atualização do DCOMP"></div>
        <p class="img-caption">Figura 26 - Confirmação de atualização do DCOMP</p>
    </div>

    <h3 id="secao-5-3">5.3 Excluir DCOMP</h3>
    <p>Para excluir um DCOMP, clique no ícone de lixeira (excluir) na coluna de ações da tabela de Lançamentos PER.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 27 - Opcao de exclusao do DCOMP.png" class="img-screenshot" alt="Opção de exclusão do DCOMP"></div>
        <p class="img-caption">Figura 27 - Opção de exclusão do DCOMP</p>
    </div>

    <p>Uma caixa de diálogo de confirmação será exibida com a mensagem "Confirmar exclusão".</p>
    <p>Clique no botão "Excluir" para confirmar a remoção ou "Cancelar" para abortar a operação.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 28 - Confirmacao de exclusao.png" class="img-screenshot" alt="Confirmação de exclusão"></div>
        <p class="img-caption">Figura 28 - Confirmação de exclusão</p>
    </div>

    <p>Após a exclusão, o sistema exibirá a mensagem "DCOMP excluído com sucesso!" e o saldo do PER será recalculado automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 29 - Confirmacao de exclusao do DCOMP.png" class="img-screenshot" alt="Confirmação de exclusão do DCOMP"></div>
        <p class="img-caption">Figura 29 - Confirmação de exclusão do DCOMP</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Registrando Ressarcimento</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-6-1">6.1 Abrir modal de ressarcimento</h3>
    <p>Quando o PER for deferido e houver pagamento efetivo pela Receita Federal, é necessário registrar o ressarcimento.</p>
    <p>Na tela de detalhes do PER, clique no botão "Novo Ressarcimento". O modal para registro será aberto.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 30 - Modal de novo ressarcimento.png" class="img-screenshot" alt="Modal de novo ressarcimento"></div>
        <p class="img-caption">Figura 30 - Modal de novo ressarcimento</p>
    </div>

    <h3 id="secao-6-2">6.2 Preencher dados do ressarcimento</h3>
    <p>Preencha os campos obrigatórios: Valor Ressarcido (valor efetivamente pago pela Receita Federal), Data do Pagamento (data em que o valor foi creditado) e, opcionalmente, o Percentual Aplicado (percentual de PSA aplicado no cálculo).</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 31 - Preenchendo dados do ressarcimento.png" class="img-screenshot" alt="Preenchendo dados do ressarcimento"></div>
        <p class="img-caption">Figura 31 - Preenchendo dados do ressarcimento</p>
    </div>

    <h3 id="secao-6-3">6.3 Confirmar ressarcimento</h3>
    <p>Clique no botão "Salvar" para registrar o ressarcimento. O sistema exibirá o banner "RESSARCIMENTO REGISTRADO" com o valor ressarcido e a data do pagamento.</p>
    <p>A situação do PER será automaticamente alterada para "PER deferido" e o saldo restante será zerado.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 32 - Ressarcimento registrado com sucesso.png" class="img-screenshot" alt="Ressarcimento registrado com sucesso"></div>
        <p class="img-caption">Figura 32 - Ressarcimento registrado com sucesso</p>
    </div>

    <p>A tela de detalhes continuará exibindo o banner de ressarcimento registrado, permitindo visualizar o histórico completo do PER.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 33 - Visualizacao do ressarcimento registrado.png" class="img-screenshot" alt="Visualização do ressarcimento registrado"></div>
        <p class="img-caption">Figura 33 - Visualização do ressarcimento registrado</p>
    </div>

    <h3 id="secao-6-4">6.4 Verificar na lista de PERs</h3>
    <p>Ao retornar para a lista de PERs, o registro atualizado exibirá a situação "PER deferido", a data do pagamento, o valor ressarcido e o saldo disponível zerado.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 34 - Lista de PERs atualizada com ressarcimento.png" class="img-screenshot" alt="Lista de PERs atualizada com ressarcimento"></div>
        <p class="img-caption">Figura 34 - Lista de PERs atualizada com ressarcimento</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Cadastrando Novo PER</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-7-1">7.1 Acessar formulário</h3>
    <p>Na tela principal da ferramenta Controle PERDCOMP, clique no botão "+ Novo PER" localizado no canto superior direito da área de resultados. O modal de cadastro será aberto.</p>

    <h3 id="secao-7-2">7.2 Preencher dados do PER</h3>
    <p>O modal de cadastro exibe os campos: Cliente, Contribuinte, Tipo de Declaração (Original ou Retificadora), Número do Processo, Exercício, Trimestre, Data Solicitada, Tipo de Crédito e Valor do Crédito.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 36 - Formulario de cadastro de novo PER.png" class="img-screenshot" alt="Formulário de cadastro de novo PER"></div>
        <p class="img-caption">Figura 36 - Formulário de cadastro de novo PER</p>
    </div>

    <p>Selecione o cliente e o contribuinte, escolha o tipo de declaração, informe o número do processo no formato XXXXX.XXXXX.XXXXXX.X.X.XX-XXXX, selecione o exercício e trimestre, informe a data solicitada, selecione o tipo de crédito (PIS ou COFINS) e informe o valor do crédito em reais. Preencha todos os campos obrigatórios corretamente antes de prosseguir.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 37 - Dados do PER preenchidos.png" class="img-screenshot" alt="Dados do PER preenchidos"></div>
        <p class="img-caption">Figura 37 - Dados do PER preenchidos</p>
    </div>

    <h3 id="secao-7-3">7.3 Confirmar cadastro</h3>
    <p>Clique no botão "Criar" para finalizar o cadastro. O sistema exibirá a mensagem "PER criado com sucesso!" e o novo PER será adicionado à lista de resultados.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 38 - PER criado com sucesso.png" class="img-screenshot" alt="PER criado com sucesso"></div>
        <p class="img-caption">Figura 38 - PER criado com sucesso</p>
    </div>

    <p>O novo PER aparecerá na tabela de resultados com a situação inicial "Analisado" e poderá ser editado ou visualizado normalmente.</p>
    <div class="img-container">
        <div class="img-wrapper"><img src="imagens/Figura 39 - Lista de PERs com o novo registro.png" class="img-screenshot" alt="Lista de PERs com o novo registro"></div>
        <p class="img-caption">Figura 39 - Lista de PERs com o novo registro</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Referências</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-8-1">8.1 Tipos de Crédito</h3>
    <p>A ferramenta suporta os seguintes tipos de crédito para PER:</p>
    <ul>
        <li>PIS - Programa de Integração Social</li>
        <li>COFINS - Contribuição para o Financiamento da Seguridade Social</li>
    </ul>

    <h3 id="secao-8-2">8.2 Impostos para DCOMP</h3>
    <p>Os DCOMPs podem ser vinculados aos seguintes impostos:</p>
    <ul>
        <li>PIS</li>
        <li>COFINS</li>
        <li>IPI - Imposto sobre Produtos Industrializados</li>
        <li>INSS - Instituto Nacional do Seguro Social</li>
        <li>IRRF - Imposto de Renda Retido na Fonte</li>
        <li>IRPJ - Imposto de Renda de Pessoa Jurídica</li>
        <li>CSLL - Contribuição Social sobre o Lucro Líquido</li>
        <li>CSRF - Contribuições Sociais sobre a Receita de Fato</li>
    </ul>

    <h3 id="secao-8-3">8.3 Situações do PER</h3>
    <p>As situações disponíveis para acompanhamento do PER são:</p>
    <ul>
        <li>Aguardando Documentação</li>
        <li>Analisado</li>
        <li>Análise concluída</li>
        <li>Análise preliminar disponibilizada</li>
        <li>Cancelado</li>
        <li>Contribuinte intimado</li>
        <li>Deferido</li>
        <li>Deferido Parcialmente</li>
        <li>Despacho decisório emitido</li>
        <li>Em Análise</li>
        <li>Em discussão administrativa - CARF/CSRF/DRJ</li>
        <li>Homologado</li>
        <li>Indeferido</li>
        <li>Não admitido</li>
        <li>Pago</li>
        <li>Pedido de cancelamento deferido</li>
        <li>PER deferido</li>
        <li>Pendente de Análise</li>
        <li>Retificado</li>
    </ul>
  </div>
</div>