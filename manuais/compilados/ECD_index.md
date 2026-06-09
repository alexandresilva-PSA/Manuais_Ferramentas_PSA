---
layout: manual
title: "Consulta ECD"
versao: "1.0"
github_url: "https://github.com/psa-elevate/ecd"
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
    title: "3. Utilizando os Filtros"
    items:
      - id: secao-3-1
        title: "3.1 Seleção de Cliente"
      - id: secao-3-2
        title: "3.2 Seleção de Contribuinte"
      - id: secao-3-3
        title: "3.3. Período de consulta"
      - id: secao-3-4
        title: "3.4 Executando a Busca"
  - id: secao-4
    title: "4. Visualizando Resultados"
    items:
      - id: secao-4-1
        title: "4.1 Lista de Arquivos"
      - id: secao-4-2
        title: "4.2 Análise detalhada de registros"
      - id: secao-4-3
        title: "4.3 Navegação pela análise detalhada"
  - id: secao-5
    title: "5. Download de Arquivos TXT"
    items:
      - id: secao-5-1
        title: "5.1 Download Individual"
      - id: secao-5-2
        title: "5.2 Download em Lote"
  - id: secao-6
    title: "6. Exportação para Excel"
    items:
      - id: secao-6-1
        title: "6.1. Abrindo a janela de exportação"
      - id: secao-6-2
        title: "6.2 Selecionando Registros"
  - id: secao-7
    title: "7. Gerenciando Perfis de Exportação"
    items:
      - id: secao-7-1
        title: "7.1 Criando um Perfil"
      - id: secao-7-2
        title: "7.2 Usando Perfis"
      - id: secao-7-3
        title: "7.3 Múltiplos Perfis"
  - id: secao-8
    title: "8. Finalizando a Exportação"
    items:
      - id: secao-8-1
        title: "8.1 Processamento"
      - id: secao-8-2
        title: "8.2 Download do Relatório"
      - id: secao-8-3
        title: "8.3 Retorno à Tela Inicial"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta de <strong>Consulta ECD</strong>, parte do sistema de ferramentas digitais da PSA Consultores.</p>
    <p>A ferramenta permite consultar, baixar e exportar arquivos da Escrituração Contábil Digital (ECD) de forma ágil e organizada, facilitando processos de consulta e análise contábil.</p>
    <h3>Principais Funcionalidades</h3>
    <ul>
        <li><strong>Consulta por filtros:</strong> Cliente, contribuinte e período</li>
        <li><strong>Download de arquivos:</strong> Individual ou em lote (ZIP)</li>
        <li><strong>Exportação para Excel:</strong> Com seleção personalizada de blocos e registros</li>
        <li><strong>Perfis de exportação:</strong> Salve configurações para reutilização</li>
        <li><strong>Análise em tela:</strong> Visualização detalhada de blocos e registros diretamente no navegador</li>
    </ul>
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
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>. Este é o ambiente de criação, desenvolvimento e utilização das ferramentas contábeis e fiscais automatizadas.</p>
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

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Utilizando os Filtros</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-3-1">3.1 Seleção de Cliente</h3>
    <p>Clique na lista suspensa para selecionar o cliente desejado.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.1 Seleção de Cliente.png" class="img-screenshot" alt="Seleção de Cliente">
        </div>
        <p class="img-caption">3.1 Seleção de Cliente</p>
    </div>

    <h3 id="secao-3-2">3.2 Seleção de Contribuinte</h3>
    <p>Selecione o contribuinte específico para a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.2 Seleção de Contribuinte.png" class="img-screenshot" alt="Seleção de Contribuinte">
        </div>
        <p class="img-caption">3.2 Seleção de Contribuinte</p>
    </div>

    <h3 id="secao-3-3">3.3. Período de consulta</h3>
    <p>Defina o intervalo de datas para a busca dos arquivos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.3. Período de consulta.png" class="img-screenshot" alt="Período de consulta">
        </div>
        <p class="img-caption">3.3. Período de consulta</p>
    </div>

    <h3 id="secao-3-4">3.4 Executando a Busca</h3>
    <p>Com os filtros definidos, execute a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.4 Executando a Busca.png" class="img-screenshot" alt="Executando a Busca">
        </div>
        <p class="img-caption">3.4 Executando a Busca</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Visualizando Resultados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1 Lista de Arquivos</h3>
    <p>Após a busca, visualize a lista de arquivos encontrados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.1 Lista de Arquivos.png" class="img-screenshot" alt="Lista de Arquivos">
        </div>
        <p class="img-caption">4.1 Lista de Arquivos</p>
    </div>

    <h3 id="secao-4-2">4.2 Análise detalhada de registros</h3>
    <p>Para visualizar os dados de um arquivo diretamente no navegador, clique no botão Analisar, localizado na coluna de ações à direita do arquivo na lista de resultados.</p>
    <p>Uma nova tela será aberta apresentando um menu lateral esquerdo contendo os Blocos da escrituração e um cabeçalho com os dados e totais da empresa.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.2 Análise detalhada de registros.png" class="img-screenshot" alt="Análise detalhada de registros">
        </div>
        <p class="img-caption">4.2 Análise detalhada de registros</p>
    </div>

    <h3 id="secao-4-3">4.3 Navegação pela análise detalhada</h3>
    <p>No menu lateral, clique em um dos Blocos para expandi-lo e selecione o registro específico que deseja consultar (por exemplo, o registro 0000). Os dados do registro selecionado serão exibidos em formato de tabela na área central. Utilize a barra de rolagem horizontal na parte inferior da tabela para visualizar todas as colunas de informações.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.3 Navegação pela análise detalhada.png" class="img-screenshot" alt="Navegação pela análise detalhada">
        </div>
        <p class="img-caption">4.3 Navegação pela análise detalhada</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Download de Arquivos TXT</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1 Download Individual</h3>
    <p>De volta a lista de resultados, clique no ícone para baixar um arquivo original (.txt) único de forma rápida.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.1 Download Individual.png" class="img-screenshot" alt="Download Individual">
        </div>
        <p class="img-caption">5.1 Download Individual</p>
    </div>

    <h3 id="secao-5-2">5.2 Download em Lote</h3>
    <p>Para baixar vários ECDs originais de uma vez, selecione múltiplos arquivos e baixe todos em um arquivo ZIP.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.2 Download em Lote.png" class="img-screenshot" alt="Download em Lote">
        </div>
        <p class="img-caption">5.2 Download em Lote</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Exportação para Excel</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-6-1">6.1. Abrindo a janela de exportação</h3>
    <p>Selecione um arquivo único e clique em Exportar Excel.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6.1. Abrindo a janela de exportação.png" class="img-screenshot" alt="Abrindo a janela de exportação">
        </div>
        <p class="img-caption">6.1. Abrindo a janela de exportação</p>
    </div>

    <h3 id="secao-6-2">6.2 Selecionando Registros</h3>
    <p>Escolha quais blocos e registros serão exportados para a planilha.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6.2 Selecionando Registros.png" class="img-screenshot" alt="Selecionando Registros">
        </div>
        <p class="img-caption">6.2 Selecionando Registros</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Gerenciando Perfis de Exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-7-1">7.1 Criando um Perfil</h3>
    <p>Salve suas configurações de seleção para uso futuro.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7.1 Criando um Perfil.png" class="img-screenshot" alt="Criando um Perfil">
        </div>
        <p class="img-caption">7.1 Criando um Perfil</p>
    </div>

    <h3 id="secao-7-2">7.2 Usando Perfis</h3>
    <p>Utilize perfis salvos para agilizar a exportação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7.2 Usando Perfis.png" class="img-screenshot" alt="Usando Perfis">
        </div>
        <p class="img-caption">7.2 Usando Perfis</p>
    </div>

    <h3 id="secao-7-3">7.3 Múltiplos Perfis</h3>
    <p>Crie variações de perfis para diferentes tipos de análise.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7.3 Múltiplos Perfis.png" class="img-screenshot" alt="Múltiplos Perfis">
        </div>
        <p class="img-caption">7.3 Múltiplos Perfis</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Finalizando a Exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-8-1">8.1 Processamento</h3>
    <p>Acompanhe o status do processamento e aguarde a conclusão.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8.1 Processamento.png" class="img-screenshot" alt="Processamento">
        </div>
        <p class="img-caption">8.1 Processamento</p>
    </div>

    <h3 id="secao-8-2">8.2 Download do Relatório</h3>
    <p>Após o processamento, o download será iniciado automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8.2 Download do Relatório.png" class="img-screenshot" alt="Download do Relatório">
        </div>
        <p class="img-caption">8.2 Download do Relatório</p>
    </div>

    <h3 id="secao-8-3">8.3 Retorno à Tela Inicial</h3>
    <p>Após finalizar, retorne à tela inicial e clique em "Limpar filtros" para novas consultas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8.3 Retorno à Tela Inicial.png" class="img-screenshot" alt="Retorno à Tela Inicial">
        </div>
        <p class="img-caption">8.3 Retorno à Tela Inicial</p>
    </div>
  </div>
</div>
