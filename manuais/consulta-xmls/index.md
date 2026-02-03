---
layout: manual
title: "Consulta de XMLs"
versao: "1.0"
github_url: "https://github.com/psa-elevate/consulta-xmls"
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
    title: "3. Navegação"
    items:
        - id: secao-3-1
          title: "3.1. Dashboard e Menu Lateral"
  - id: secao-4
    title: "4. Visão Geral"
    items:
        - id: secao-4-1
          title: "4.1. Estrutura da Tela"
  - id: secao-5
    title: "5. Filtros"
    items:
      - id: secao-5-1
        title: "5.1. Cliente"
      - id: secao-5-2
        title: "5.2. Contribuinte"
      - id: secao-5-3
        title: "5.3. Tipo de Documento"
      - id: secao-5-4
        title: "5.4. Tipo de Movimento"
      - id: secao-5-5
        title: "5.5. Período"
  - id: secao-6
    title: "6. Resultados"
  - id: secao-7
    title: "7. Exportação Excel"
  - id: secao-8
    title: "8. Perfis de Exportação"
  - id: secao-9
    title: "9. Download de XMLs"
  - id: secao-10
    title: "10. Dicas"
---

<!-- SEÇÃO 1 -->
<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>Consulta de XMLs</strong>, parte integrante do sistema PSA Elevate. A ferramenta permite buscar, visualizar, exportar e baixar documentos fiscais eletrônicos (NFe e CTe) de forma centralizada.</p>
    <p>O objetivo deste documento é orientar analistas fiscais na utilização eficiente de todos os recursos disponíveis, desde a aplicação de filtros até a exportação de dados para análise.</p>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p>Certifique-se de que seu perfil de usuário possui as permissões necessárias para acessar o módulo de Consulta de XMLs antes de prosseguir.</p>
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
        <div class="img-wrapper">
            <img src="imagens/01_acesso_site.png" class="img-screenshot" alt="Página inicial do PSA Elevate">
        </div>
        <p class="img-caption">Página inicial do PSA Elevate</p>
    </div>
    <p>Posicione o cursor sobre o ícone para visualizar o menu suspenso e clique em <strong>Equipe</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02_acesso_menu_equipe.png" class="img-screenshot" alt="Menu Equipe">
        </div>
        <p class="img-caption">Menu Equipe no canto superior direito</p>
    </div>

    <h3 id="secao-2-2">2.2 Seleção de Área</h3>
    <p>Na tela de seleção de área, escolha o setor correspondente às suas atividades. Para acessar as ferramentas de consulta fiscal, selecione a opção <strong>Digital</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03_selecao_area.png" class="img-screenshot" alt="Seleção de Área">
        </div>
        <p class="img-caption">Seleção da área de atuação</p>
    </div>

    <h3 id="secao-2-3">2.3 Login</h3>
    <p>Insira suas credenciais de acesso nos campos correspondentes. No campo <strong>Email</strong>, digite seu endereço de e-mail corporativo. No campo <strong>Senha</strong>, insira sua senha. Em seguida, clique em <strong>Entrar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04_login.png" class="img-screenshot" alt="Tela de Login">
        </div>
        <p class="img-caption">Tela de login com credenciais</p>
    </div>

    <h3 id="secao-2-4">2.4 Seleção de Ambiente</h3>
    <p>Após o login, selecione o ambiente de trabalho apropriado. Para acessar as ferramentas de consulta e desenvolvimento, clique em <strong>Digital Dev</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/05_selecao_ambiente.png" class="img-screenshot" alt="Seleção de Ambiente">
        </div>
        <p class="img-caption">Escolha entre Digital Rotina e Digital Dev</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 3 -->
<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Navegação até Consulta de XMLs</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-3-1">3.1 Dashboard e Menu Lateral</h3>
    <p>No Dashboard Dev, localize o menu lateral à esquerda da tela. Clique na opção <strong>Consulta de XMLs</strong> para acessar a ferramenta de busca de documentos fiscais.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06_dashboard_dev.png" class="img-screenshot" alt="Dashboard Dev">
        </div>
        <p class="img-caption">Dashboard Dev — menu lateral com opção Consulta de XMLs</p>
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
    <p>A interface da Consulta de XMLs está organizada em duas áreas principais: a área de <strong>Filtros</strong> na parte superior, onde você define os critérios de busca, e a área de <strong>Documentos</strong> na parte inferior, onde os resultados são exibidos em formato de tabela.</p>
    <p>Na barra de ações, você encontra os botões <strong>Limpar Filtros</strong>, <strong>Baixar XMLs</strong>, <strong>Exportar Excel</strong> e <strong>Buscar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/07_tela_inicial.png" class="img-screenshot" alt="Visão Geral">
        </div>
        <p class="img-caption">Visão geral da interface — filtros e área de documentos</p>
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
    <p>O filtro <strong>Cliente</strong> permite selecionar a empresa ou grupo empresarial cujos documentos serão consultados. Clique no campo e selecione o cliente desejado na lista suspensa.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/08_filtro_cliente.png" class="img-screenshot" alt="Filtro Cliente">
        </div>
        <p class="img-caption">Dropdown do filtro Cliente</p>
    </div>

    <h3 id="secao-5-2">5.2 Contribuinte</h3>
    <p>Após selecionar o cliente, o filtro <strong>Contribuinte</strong> exibe os estabelecimentos vinculados. Selecione o contribuinte específico (identificado pelo CNPJ) para filtrar os documentos relacionados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/09_filtro_contribuinte.png" class="img-screenshot" alt="Filtro Contribuinte">
        </div>
        <p class="img-caption">Seleção do contribuinte vinculado ao cliente</p>
    </div>

    <h3 id="secao-5-3">5.3 Tipo de Documento</h3>
    <p>O filtro <strong>Tipo Doc.</strong> permite escolher entre NFe (Nota Fiscal Eletrônica) e CTe (Conhecimento de Transporte Eletrônico).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/10_filtro_tipo_doc.png" class="img-screenshot" alt="Filtro Tipo Doc">
        </div>
        <p class="img-caption">Opções NFe e CTe</p>
    </div>

    <h3 id="secao-5-4">5.4 Tipo de Movimento</h3>
    <p>O filtro <strong>Tipo Mov.</strong> define a direção do movimento fiscal. Selecione <strong>Entrada</strong> para documentos recebidos, <strong>Saída</strong> para documentos emitidos, ou <strong>Todos</strong> para visualizar ambos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/11_filtro_tipo_mov.png" class="img-screenshot" alt="Filtro Tipo Movimento">
        </div>
        <p class="img-caption">Opções Todos, Entrada e Saída</p>
    </div>

    <h3 id="secao-5-5">5.5 Período</h3>
    <p>Defina o intervalo de datas utilizando os campos <strong>Data Início</strong> e <strong>Data Fim</strong>. Clique no ícone de calendário para selecionar as datas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/12_filtro_data_inicio.png" class="img-screenshot" alt="Filtro Data Início">
        </div>
        <p class="img-caption">Seleção da data de início</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13_filtro_data_fim.png" class="img-screenshot" alt="Filtro Data Fim">
        </div>
        <p class="img-caption">Seleção da data de fim</p>
    </div>
    
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p>Utilize filtros de CPF/CNPJ (Emitente/Destinatário) para buscas específicas e combine com o filtro de datas para otimizar os resultados.</p>
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
    <h3 id="secao-6-1">6.1 Tabela de Documentos</h3>
    <p>A tabela de resultados apresenta os documentos fiscais encontrados com as seguintes informações: CNPJ Emitente, Razão Social, Chave de Acesso, UF, Número, Data Emissão, Valor e quantidade de Produtos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/16_resultados_busca.png" class="img-screenshot" alt="Tabela de Resultados">
        </div>
        <p class="img-caption">Tabela com documentos encontrados</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 7 -->
<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Exportação para Excel</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-7-1">7.1 Abrindo o Modal de Exportação</h3>
    <p>Para exportar os dados para Excel, clique no botão <strong>Exportar Excel</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17_btn_exportar_excel.png" class="img-screenshot" alt="Botão Exportar Excel">
        </div>
        <p class="img-caption">Botão Exportar Excel</p>
    </div>

    <h3 id="secao-7-2">7.2 Selecionando Colunas</h3>
    <p>Na aba <strong>Colunas</strong>, escolha quais informações serão incluídas na exportação. As colunas estão organizadas em grupos temáticos (Documento, Emitente, Destinatário, etc.).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/18_modal_colunas.png" class="img-screenshot" alt="Modal de Colunas">
        </div>
        <p class="img-caption">Modal de exportação com grupos de colunas</p>
    </div>

    <h3 id="secao-7-3">7.3 Visualização Prévia</h3>
    <p>Clique na aba <strong>Preview</strong> para visualizar como os dados aparecerão na planilha.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/25_preview_11col.png" class="img-screenshot" alt="Preview 11 colunas">
        </div>
        <p class="img-caption">Preview com 11 colunas</p>
    </div>

    <h3 id="secao-7-4">7.4 Executando a Exportação</h3>
    <p>Clique em <strong>Exportar Excel</strong> para gerar e baixar o arquivo .xlsx.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/27_download_excel.png" class="img-screenshot" alt="Download Excel">
        </div>
        <p class="img-caption">Arquivo Excel baixado</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 8 -->
<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Gerenciando Perfis de Exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-8-1">8.1 Salvando um Perfil</h3>
    <p>Para reutilizar uma configuração de colunas, clique no botão <strong>Salvar</strong> (ícone de disquete).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/23_btn_salvar_perfil.png" class="img-screenshot" alt="Botão Salvar Perfil">
        </div>
        <p class="img-caption">Botão Salvar perfil</p>
    </div>

    <h3 id="secao-8-2">8.2 Favoritando um Perfil</h3>
    <p>Clique no botão <strong>Favoritar</strong> (ícone de estrela) para marcar um perfil como favorito, fazendo com que ele seja carregado por padrão.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/22_btn_favoritar.png" class="img-screenshot" alt="Botão Favoritar">
        </div>
        <p class="img-caption">Botão Favoritar</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 9 -->
<div class="secao" id="secao-9">
  <div class="secao-header">
    <span class="secao-numero editable-text">9</span>
    <h2 class="editable-text">Download de XMLs</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-9-1">9.1 Selecionando Documentos</h3>
    <p>Na tabela de resultados, marque os documentos que deseja baixar clicando na caixa de seleção à esquerda de cada linha.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/28_selecao_docs.png" class="img-screenshot" alt="Seleção de Docs">
        </div>
        <p class="img-caption">Documentos selecionados na tabela</p>
    </div>

    <h3 id="secao-9-2">9.2 Executando o Download</h3>
    <p>Com os documentos selecionados, clique no botão <strong>Baixar XMLs</strong>. O sistema gerará um arquivo ZIP contendo todos os XMLs.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/29_btn_baixar_xmls.png" class="img-screenshot" alt="Botão Baixar XMLs">
        </div>
        <p class="img-caption">Botão Baixar XMLs</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/30_download_zip.png" class="img-screenshot" alt="Download ZIP">
        </div>
        <p class="img-caption">Download concluído — arquivo ZIP com XMLs</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 10 -->
<div class="secao" id="secao-10">
  <div class="secao-header">
    <span class="secao-numero editable-text">10</span>
    <h2 class="editable-text">Dicas e Boas Práticas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <ul class="lista-dicas">
        <li>Utilize filtros específicos para otimizar o tempo de busca e reduzir a quantidade de resultados.</li>
        <li>Crie perfis de exportação para configurações que você utiliza frequentemente.</li>
        <li>Ao exportar grandes volumes de dados, selecione apenas as colunas necessárias para reduzir o tamanho do arquivo.</li>
        <li>Verifique sempre o período selecionado antes de executar a busca.</li>
        <li>Favoritar um perfil de exportação garante que ele seja carregado automaticamente ao abrir o modal.</li>
    </ul>
  </div>
</div>
