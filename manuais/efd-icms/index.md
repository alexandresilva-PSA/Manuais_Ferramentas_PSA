---
layout: manual
title: "Consulta de EFD ICMS"
versao: "1.0"
github_url: "https://github.com/psa-elevate/efd-icms"
toc:
  - id: secao-1
    title: "1. Acesso inicial e autenticação"
    items:
      - id: secao-1-1
        title: "1.1. Objetivo da ferramenta"
      - id: secao-1-2
        title: "1.2. Acesso ao portal"
      - id: secao-1-3
        title: "1.3. Acesso à área da equipe"
      - id: secao-1-4
        title: "1.4. Login no sistema"
  - id: secao-2
    title: "2. Navegação no ambiente Digital Dev"
    items:
      - id: secao-2-1
        title: "2.1. Seleção do ambiente de trabalho"
      - id: secao-2-2
        title: "2.2. Visão geral do dashboard"
      - id: secao-2-3
        title: "2.3. Abertura da ferramenta"
  - id: secao-3
    title: "3. Aplicação de filtros de consulta"
    items:
      - id: secao-3-1
        title: "3.1. Filtro de cliente e contribuinte"
      - id: secao-3-2
        title: "3.2. Filtro de período (data)"
      - id: secao-3-3
        title: "3.3. Execução da busca"
  - id: secao-4
    title: "4. Visualização e download de arquivos originais"
    items:
      - id: secao-4-1
        title: "4.1. Estrutura da tabela de resultados"
      - id: secao-4-2
        title: "4.2. Download individual (TXT)"
      - id: secao-4-3
        title: "4.3. Download em lote (ZIP)"
  - id: secao-5
    title: "5. Exportação avançada para Excel"
    items:
      - id: secao-5-1
        title: "5.1. Abertura do painel de exportação"
      - id: secao-5-2
        title: "5.2. Seleção de blocos e registros"
      - id: secao-5-3
        title: "5.3. Salvar novo perfil de exportação"
      - id: secao-5-4
        title: "5.4. Utilização de perfis salvos"
      - id: secao-5-5
        title: "5.5. Conclusão da exportação"
  - id: secao-6
    title: "6. Dicas e boas práticas"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Acesso inicial e autenticação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-1-1">1.1. Objetivo da ferramenta</h3>
    <p>A ferramenta de consulta de EFD ICMS/IPI tem o objetivo de facilitar e automatizar o processo de busca, visualização e extração de arquivos do SPED Fiscal. Ela permite o download dos arquivos originais em TXT ou a exportação estruturada para planilhas em Excel.</p>

    <h3 id="secao-1-2">1.2. Acesso ao portal</h3>
    <p>Acesse o site da PSA Consultores e localize o menu de navegação principal.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01_Homepage.png" class="img-screenshot" alt="Página inicial da PSA Consultores">
        </div>
        <p class="img-caption">Página inicial da PSA Consultores</p>
    </div>

    <h3 id="secao-1-3">1.3. Acesso à área da equipe</h3>
    <p>No canto superior direito, clique no menu de perfil do usuário e selecione a opção <strong>Equipe</strong> para acessar a área restrita.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03_Opcao_Equipe.png" class="img-screenshot" alt="Acesso à área da equipe">
        </div>
        <p class="img-caption">Navegação para a área restrita da equipe</p>
    </div>

    <h3 id="secao-1-4">1.4. Login no sistema</h3>
    <p>Na tela seguinte, selecione a sua área de atuação. O sistema exigirá o login. Preencha com as suas credenciais de acesso (e-mail e senha) e clique em <strong>Entrar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06_Login_Preenchido.png" class="img-screenshot" alt="Tela de login preenchida">
        </div>
        <p class="img-caption">Preenchimento das credenciais de acesso</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Navegação no ambiente Digital Dev</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-2-1">2.1. Seleção do ambiente de trabalho</h3>
    <p>Após realizar o login, selecione o ambiente de trabalho correspondente. Clique no cartão <strong>Digital Dev</strong>, que é o ambiente destinado às ferramentas automatizadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/07_Select_Ambiente_Dev.png" class="img-screenshot" alt="Opções de ambiente disponíveis">
        </div>
        <p class="img-caption">Opções de ambientes disponíveis no sistema</p>
    </div>

    <h3 id="secao-2-2">2.2. Visão geral do dashboard</h3>
    <p>O sistema carregará inicialmente na página de dashboard, que mostra um resumo das ferramentas ativas e em desenvolvimento.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/08_Dashboard_Inicial.png" class="img-screenshot" alt="Dashboard inicial do ambiente Digital Dev">
        </div>
        <p class="img-caption">Dashboard inicial e menu de navegação lateral</p>
    </div>

    <h3 id="secao-2-3">2.3. Abertura da ferramenta</h3>
    <p>Para acessar a ferramenta de consulta de arquivos SPED, clique em <strong>EFD ICMS</strong> no menu lateral esquerdo. A página da ferramenta será aberta para a configuração da busca.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/09_Menu_EFD_ICMS.png" class="img-screenshot" alt="Navegação pelo menu lateral para a Consulta de EFD ICMS">
        </div>
        <p class="img-caption">Localização da ferramenta no menu lateral</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Aplicação de filtros de consulta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-3-1">3.1. Filtro de cliente e contribuinte</h3>
    <p>Para iniciar a busca, abra a lista suspensa e selecione o <strong>Cliente</strong> desejado. Em seguida, escolha o <strong>Contribuinte</strong> (empresa ou filial) correspondente à consulta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13_Contribuinte_Selecionado.png" class="img-screenshot" alt="Seleção de cliente e contribuinte">
        </div>
        <p class="img-caption">Definição do cliente e contribuinte para a busca</p>
    </div>

    <h3 id="secao-3-2">3.2. Filtro de período (data)</h3>
    <p>Defina o intervalo de tempo da sua análise utilizando os calendários para escolher a <strong>Data inicial</strong> e a <strong>Data final</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17_Filtros_Prontos.png" class="img-screenshot" alt="Todos os filtros configurados">
        </div>
        <p class="img-caption">Filtros de data configurados e prontos para busca</p>
    </div>

    <h3 id="secao-3-3">3.3. Execução da busca</h3>
    <p>Após confirmar que os filtros obrigatórios estão preenchidos, clique no botão <strong>Buscar</strong> para processar a consulta. O sistema irá localizar todos os arquivos EFD ICMS correspondentes aos critérios informados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/19_Botao_Buscar.png" class="img-screenshot" alt="Acionamento do botão buscar">
        </div>
        <p class="img-caption">Acionamento do botão buscar</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Visualização e download de arquivos originais</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-4-1">4.1. Estrutura da tabela de resultados</h3>
    <p>Após processar a busca, a ferramenta exibirá uma tabela com a lista de arquivos SPED encontrados. Cada linha mostrará as informações básicas de identificação e o período de apuração de cada documento.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/20_Lista_Resultados.png" class="img-screenshot" alt="Tabela com arquivos encontrados">
        </div>
        <p class="img-caption">Tabela populada com os resultados da busca</p>
    </div>

    <h3 id="secao-4-2">4.2. Download individual (TXT)</h3>
    <p>Para baixar o arquivo original no formato TXT, localize o documento desejado e clique no ícone de <strong>Download</strong> na coluna de ações (ao final da linha). O arquivo será transferido imediatamente para a sua máquina.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/23_Baixar_TXT_Unico.png" class="img-screenshot" alt="Botão de download individual">
        </div>
        <p class="img-caption">Opção para baixar um arquivo TXT específico</p>
    </div>

    <h3 id="secao-4-3">4.3. Download em lote (ZIP)</h3>
    <p>Se você precisar baixar vários arquivos TXT de uma só vez, utilize as caixas de seleção ao lado esquerdo da tabela para marcar os documentos desejados (ou marque a caixa no topo para selecionar todos). Um menu de ações em lote aparecerá na parte superior da tabela. Clique em <strong>Baixar selecionados</strong> para gerar um arquivo ZIP compactado.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/27_Menu_Acoes_Lote.png" class="img-screenshot" alt="Menu de ações em lote">
        </div>
        <p class="img-caption">Menu superior ativado após a seleção de múltiplos arquivos</p>
    </div>

    <div class="aviso">
        <span class="material-icons-round">info</span>
        <p><strong>Atenção:</strong> A funcionalidade de gerar uma planilha em Excel consolidada para múltiplos arquivos simultaneamente encontra-se em desenvolvimento. Por enquanto, utilize a seleção em lote exclusivamente para baixar os arquivos originais em formato TXT.</p>
    </div>

  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Exportação avançada para Excel</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-5-1">5.1. Abertura do painel de exportação</h3>
    <p>Para extrair e estruturar os dados do SPED em uma planilha do Excel, localize o arquivo desejado na tabela e clique no botão <strong>Exportar Excel</strong> na coluna de ações. Um painel de configuração será aberto.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/32_Modal_Exportacao_Aberto.png" class="img-screenshot" alt="Painel de configuração de exportação">
        </div>
        <p class="img-caption">Acesso à interface de exportação personalizada</p>
    </div>

    <h3 id="secao-5-2">5.2. Seleção de blocos e registros</h3>
    <p>No painel, você pode escolher exatamente quais informações farão parte da sua planilha. Navegue pelas opções e clique nas setas para expandir os blocos do SPED (ex: Bloco 0, Bloco C). Marque as caixas dos registros que deseja exportar. Um contador na parte inferior mostrará a quantidade de registros selecionados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/34_Expandir_Bloco_0.png" class="img-screenshot" alt="Visualização dos registros dentro de um bloco">
        </div>
        <p class="img-caption">Seleção manual dos registros que irão compor o relatório</p>
    </div>

    <h3 id="secao-5-3">5.3. Salvar novo perfil de exportação</h3>
    <p>Para evitar refazer a mesma seleção em consultas futuras, você pode salvar a sua configuração. Após escolher os registros desejados, clique no botão <strong>Salvar</strong> na barra superior. Digite um nome fácil de identificar para o seu novo perfil e confirme.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/40_Modal_Salvar_Perfil.png" class="img-screenshot" alt="Formulário para nomear o perfil">
        </div>
        <p class="img-caption">Criação de um novo perfil com a seleção de blocos atual</p>
    </div>

    <h3 id="secao-5-4">5.4. Utilização de perfis salvos</h3>
    <p>Ao abrir o painel de exportação de outro arquivo, clique na lista suspensa no topo para visualizar os seus perfis. Basta selecionar o perfil salvo anteriormente para que o sistema marque automaticamente todos os registros correspondentes.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/46_Perfil_Aplicado.png" class="img-screenshot" alt="Carregando um perfil salvo">
        </div>
        <p class="img-caption">Perfil de exportação aplicado automaticamente</p>
    </div>

    <h3 id="secao-5-5">5.5. Conclusão da exportação</h3>
    <p>Com os registros selecionados (manualmente ou via perfil), clique no botão <strong>Gerar Relatório</strong> no canto inferior direito. O sistema processará os blocos e fará o download da planilha consolidada em instantes.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/61_Toast_Export_Sucesso.png" class="img-screenshot" alt="Download concluído">
        </div>
        <p class="img-caption">Notificação de conclusão da geração da planilha</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Dicas e boas práticas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Algumas recomendações para otimizar o uso da ferramenta de Consulta EFD ICMS no seu dia a dia:</p>
    
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Crie perfis específicos:</strong> Configure e salve perfis diferentes para os tipos de auditoria que você mais realiza (ex: um perfil apenas para blocos de entrada, outro para inventário). Isso poupa um tempo valioso na extração dos dados.</p>
    </div>
    
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Uso dos filtros:</strong> Embora a ferramenta permita buscas amplas, utilize os filtros de período e contribuinte de forma restrita para garantir que a tabela carregue mais rápido e os resultados sejam mais precisos.</p>
    </div>
  </div>
</div>