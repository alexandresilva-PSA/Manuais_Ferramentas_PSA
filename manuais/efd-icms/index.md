---
layout: manual
title: "Consulta de EFD ICMS"
versao: "1.0"
github_url: "https://github.com/psa-elevate/efd-icms"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-2
    title: "2. Acessando o Sistema"
    items:
      - id: secao-2-1
        title: "2.1. Tela Inicial"
      - id: secao-2-2
        title: "2.2. Menu do Usuário"
      - id: secao-2-3
        title: "2.3. Acesso à Equipe"
      - id: secao-2-4
        title: "2.4. Seleção de Área"
      - id: secao-2-5
        title: "2.5. Credenciais"
  - id: secao-3
    title: "3. Seleção de Ambiente"
    items:
        - id: secao-3-1
          title: "3.1. Ambiente de Trabalho"
        - id: secao-3-2
          title: "3.2. Dashboard Inicial"
  - id: secao-4
    title: "4. Navegação até EFD ICMS"
    items:
        - id: secao-4-1
          title: "4.1. Menu Lateral"
  - id: secao-5
    title: "5. Utilizando os Filtros"
    items:
      - id: secao-5-1
        title: "5.1. Seleção de Cliente"
      - id: secao-5-2
        title: "5.2. Seleção de Contribuinte"
      - id: secao-5-3
        title: "5.3. Período de Análise"
      - id: secao-5-4
        title: "5.4. Executando a Busca"
  - id: secao-6
    title: "6. Visualizando Resultados"
    items:
      - id: secao-6-1
        title: "6.1. Lista de Arquivos"
      - id: secao-6-2
        title: "6.2. Seleção Individual"
  - id: secao-7
    title: "7. Download de Arquivos TXT"
    items:
      - id: secao-7-1
        title: "7.1. Download Individual"
      - id: secao-7-2
        title: "7.2. Download em Lote"
  - id: secao-8
    title: "8. Exportação para Excel"
    items:
      - id: secao-8-1
        title: "8.1. Abrindo o Modal"
      - id: secao-8-2
        title: "8.2. Selecionando Registros"
  - id: secao-9
    title: "9. Gerenciando Perfis de Exportação"
    items:
      - id: secao-9-1
        title: "9.1. Criando um Perfil"
      - id: secao-9-2
        title: "9.2. Usando Perfis"
      - id: secao-9-3
        title: "9.3. Múltiplos Perfis"
  - id: secao-10
    title: "10. Finalizando a Exportação"
    items:
      - id: secao-10-1
        title: "10.1. Processamento"
      - id: secao-10-2
        title: "10.2. Download do Relatório"
      - id: secao-10-3
        title: "10.3. Retorno à Tela Inicial"
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
    <p>Este manual apresenta as funcionalidades da ferramenta de <strong>Consulta de EFD ICMS/IPI</strong>, parte do Sistema de Auditoria Digital da PSA Consultores.</p>
    <p>A ferramenta permite consultar, baixar e exportar arquivos SPED Fiscal (EFD ICMS/IPI) de forma ágil e organizada, facilitando processos de auditoria e análise tributária.</p>
    <h3>Principais Funcionalidades</h3>
    <ul>
        <li><strong>Consulta por filtros:</strong> Cliente, contribuinte e período</li>
        <li><strong>Download de arquivos:</strong> Individual ou em lote (ZIP)</li>
        <li><strong>Exportação para Excel:</strong> Com seleção personalizada de blocos e registros</li>
        <li><strong>Perfis de exportação:</strong> Salve configurações para reutilização</li>
    </ul>
  </div>
</div>

<!-- SEÇÃO 2 -->
<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acessando o Sistema</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-2-1">2.1 Tela Inicial</h3>
    <p>Acesse a plataforma PSA Consultores e localize o menu de navegação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01_Homepage.png" class="img-screenshot" alt="Homepage PSA Consultores">
        </div>
        <p class="img-caption">Homepage PSA Consultores</p>
    </div>

    <h3 id="secao-2-2">2.2 Menu do Usuário</h3>
    <p>No canto superior direito, localize o menu de perfil do usuário.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02_Menu_Usuario.png" class="img-screenshot" alt="Menu do Usuário">
        </div>
        <p class="img-caption">Localização do menu de perfil</p>
    </div>

    <h3 id="secao-2-3">2.3 Acesso à Equipe</h3>
    <p>No menu suspenso, clique na opção <strong>Equipe</strong> para acessar a área restrita.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03_Opcao_Equipe.png" class="img-screenshot" alt="Opção Equipe">
        </div>
        <p class="img-caption">Acesso à área da equipe</p>
    </div>

    <h3 id="secao-2-4">2.4 Seleção de Área</h3>
    <p>Na tela de pré-login, abra o menu de seleção de área de atuação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04_Selecao_Area.png" class="img-screenshot" alt="Seleção de Área">
        </div>
        <p class="img-caption">Seleção da área de atuação</p>
    </div>

    <h3 id="secao-2-5">2.5 Credenciais</h3>
    <p>A tela de login será exibida. Insira suas credenciais (E-mail e Senha) e clique em <strong>Entrar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/05_Login_Vazio.png" class="img-screenshot" alt="Tela de Login">
        </div>
        <p class="img-caption">Formulário de acesso</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06_Login_Preenchido.png" class="img-screenshot" alt="Login Preenchido">
        </div>
        <p class="img-caption">Preenchimento das credenciais</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 3 -->
<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Seleção de Ambiente</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-3-1">3.1 Ambiente de Trabalho</h3>
    <p>Após o login, selecione o card <strong>Digital Dev</strong> (ambiente de criação e desenvolvimento).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/07_Select_Ambiente_Dev.png" class="img-screenshot" alt="Seleção de Ambiente">
        </div>
        <p class="img-caption">Seleção do ambiente de trabalho</p>
    </div>

    <h3 id="secao-3-2">3.2 Dashboard Inicial</h3>
    <p>O Dashboard inicial será carregado, exibindo o resumo das ferramentas disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/08_Dashboard_Inicial.png" class="img-screenshot" alt="Dashboard">
        </div>
        <p class="img-caption">Visão geral do sistema</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 4 -->
<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Navegação até EFD ICMS</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1 Menu Lateral</h3>
    <p>Localize o módulo específico para tratamento de arquivos SPED ICMS.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/09_Menu_EFD_ICMS.png" class="img-screenshot" alt="Menu EFD ICMS">
        </div>
        <p class="img-caption">Acesso via menu lateral</p>
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
    <h3 id="secao-5-1">5.1 Seleção de Cliente</h3>
    <p>Utilize o dropdown para selecionar o cliente desejado.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/10_Dropdown_Cliente.png" class="img-screenshot" alt="Dropdown Cliente">
        </div>
        <p class="img-caption">Lista de clientes disponíveis</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/11_Cliente_Selecionado.png" class="img-screenshot" alt="Cliente Selecionado">
        </div>
        <p class="img-caption">Cliente selecionado</p>
    </div>

    <h3 id="secao-5-2">5.2 Seleção de Contribuinte</h3>
    <p>Selecione o contribuinte específico para a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/12_Dropdown_Contribuinte.png" class="img-screenshot" alt="Dropdown Contribuinte">
        </div>
        <p class="img-caption">Lista de contribuintes</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13_Contribuinte_Selecionado.png" class="img-screenshot" alt="Contribuinte Selecionado">
        </div>
        <p class="img-caption">Contribuinte selecionado</p>
    </div>

    <h3 id="secao-5-3">5.3 Período de Análise</h3>
    <p>Defina o intervalo de datas para a busca dos arquivos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/14_Calendario_Inicio.png" class="img-screenshot" alt="Calendário Início">
        </div>
        <p class="img-caption">Seleção da data inicial</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/15_Data_Inicio_Ok.png" class="img-screenshot" alt="Data Início OK">
        </div>
        <p class="img-caption">Data inicial confirmada</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/16_Data_Fim_Ok.png" class="img-screenshot" alt="Data Fim OK">
        </div>
        <p class="img-caption">Data final confirmada</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17_Filtros_Prontos.png" class="img-screenshot" alt="Filtros Prontos">
        </div>
        <p class="img-caption">Todos os filtros configurados</p>
    </div>

    <h3 id="secao-5-4">5.4 Executando a Busca</h3>
    <p>Com os filtros definidos, execute a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/18_Limpar_Filtros_Reset.png" class="img-screenshot" alt="Limpar Filtros">
        </div>
        <p class="img-caption">Opção para limpar filtros</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/19_Botao_Buscar.png" class="img-screenshot" alt="Botão Buscar">
        </div>
        <p class="img-caption">Executando a busca</p>
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
    <h3 id="secao-6-1">6.1 Lista de Arquivos</h3>
    <p>Após a busca, visualize a lista de arquivos EFD ICMS encontrados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/20_Lista_Resultados.png" class="img-screenshot" alt="Lista de Resultados">
        </div>
        <p class="img-caption">Grid de resultados</p>
    </div>

    <h3 id="secao-6-2">6.2 Seleção Individual</h3>
    <p>Selecione arquivos específicos usando as caixas de seleção.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/21_Checkbox_Unico.png" class="img-screenshot" alt="Checkbox Único">
        </div>
        <p class="img-caption">Seleção de arquivo individual</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/22_Hover_Cabecalho.png" class="img-screenshot" alt="Hover Cabeçalho">
        </div>
        <p class="img-caption">Interação com o cabeçalho</p>
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
    <p>Baixe um arquivo TXT específico de forma rápida.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/23_Baixar_TXT_Unico.png" class="img-screenshot" alt="Baixar TXT Único">
        </div>
        <p class="img-caption">Botão de download individual</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/24_Toast_Download_Inicio.png" class="img-screenshot" alt="Toast Download Início">
        </div>
        <p class="img-caption">Notificação de início do download</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/25_Pos_Download_Lista.png" class="img-screenshot" alt="Pós Download Lista">
        </div>
        <p class="img-caption">Lista após download</p>
    </div>

    <h3 id="secao-7-2">7.2 Download em Lote</h3>
    <p>Selecione múltiplos arquivos e baixe todos em um arquivo ZIP.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/26_Selecionar_Todos.png" class="img-screenshot" alt="Selecionar Todos">
        </div>
        <p class="img-caption">Seleção de todos os arquivos</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/27_Menu_Acoes_Lote.png" class="img-screenshot" alt="Menu Ações Lote">
        </div>
        <p class="img-caption">Menu de ações em lote</p>
    </div>
    
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Atenção:</strong> A exportação para Excel em lote não está disponível. Utilize download individual para esta funcionalidade.</p>
    </div>

    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/28_Erro_Excel_Lote.png" class="img-screenshot" alt="Erro Excel Lote">
        </div>
        <p class="img-caption">Limitação de exportação em lote</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/29_Botao_Baixar_Lote_TXT.png" class="img-screenshot" alt="Botão Baixar Lote TXT">
        </div>
        <p class="img-caption">Download em lote de TXT</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/30_Download_ZIP_Ok.png" class="img-screenshot" alt="Download ZIP OK">
        </div>
        <p class="img-caption">Download ZIP concluído</p>
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
    <h3 id="secao-8-1">8.1 Abrindo o Modal</h3>
    <p>Selecione um arquivo único e clique em "Exportar Excel".</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/31_Btn_Exportar_Excel.png" class="img-screenshot" alt="Botão Exportar Excel">
        </div>
        <p class="img-caption">Iniciando exportação para Excel</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/32_Modal_Exportacao_Aberto.png" class="img-screenshot" alt="Modal Exportação Aberto">
        </div>
        <p class="img-caption">Modal de configuração aberto</p>
    </div>

    <h3 id="secao-8-2">8.2 Selecionando Registros</h3>
    <p>Escolha quais blocos e registros serão exportados para a planilha.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/33_Selecionar_Todos_Regs.png" class="img-screenshot" alt="Selecionar Todos Registros">
        </div>
        <p class="img-caption">Seleção de todos os registros</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/34_Expandir_Bloco_0.png" class="img-screenshot" alt="Expandir Bloco 0">
        </div>
        <p class="img-caption">Visualização expandida do Bloco 0</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/35_Dropdown_Perfil_Vazio.png" class="img-screenshot" alt="Dropdown Perfil Vazio">
        </div>
        <p class="img-caption">Seletor de perfis (vazio)</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/36_Selecao_Manual_Regs.png" class="img-screenshot" alt="Seleção Manual Registros">
        </div>
        <p class="img-caption">Seleção manual de registros</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/37_Contador_Registros.png" class="img-screenshot" alt="Contador Registros">
        </div>
        <p class="img-caption">Contador de registros selecionados</p>
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
    <h3 id="secao-9-1">9.1 Criando um Perfil</h3>
    <p>Salve suas configurações de seleção para uso futuro.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/38_Btn_Add_Perfil.png" class="img-screenshot" alt="Botão Adicionar Perfil">
        </div>
        <p class="img-caption">Botão para adicionar perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/39_Tooltip_Salvar_Perfil.png" class="img-screenshot" alt="Tooltip Salvar Perfil">
        </div>
        <p class="img-caption">Opção de salvar seleção</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/40_Modal_Salvar_Perfil.png" class="img-screenshot" alt="Modal Salvar Perfil">
        </div>
        <p class="img-caption">Formulário de novo perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/41_Digitando_Nome_Perfil.png" class="img-screenshot" alt="Digitando Nome Perfil">
        </div>
        <p class="img-caption">Nomeando o perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/42_Check_Perfil_Padrao.png" class="img-screenshot" alt="Check Perfil Padrão">
        </div>
        <p class="img-caption">Definindo como perfil padrão</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/43_Btn_Salvar_Confirm.png" class="img-screenshot" alt="Botão Salvar Confirmar">
        </div>
        <p class="img-caption">Confirmando salvamento</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/44_Toast_Perfil_Criado.png" class="img-screenshot" alt="Toast Perfil Criado">
        </div>
        <p class="img-caption">Perfil criado com sucesso</p>
    </div>

    <h3 id="secao-9-2">9.2 Usando Perfis</h3>
    <p>Utilize perfis salvos para agilizar a exportação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/45_Perfil_No_Dropdown.png" class="img-screenshot" alt="Perfil no Dropdown">
        </div>
        <p class="img-caption">Perfil disponível no dropdown</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/46_Perfil_Aplicado.png" class="img-screenshot" alt="Perfil Aplicado">
        </div>
        <p class="img-caption">Perfil aplicado automaticamente</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/47_Contagem_Final_Perfil.png" class="img-screenshot" alt="Contagem Final Perfil">
        </div>
        <p class="img-caption">Contagem de registros do perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/48_Btn_Gerar_Relatorio.png" class="img-screenshot" alt="Botão Gerar Relatório">
        </div>
        <p class="img-caption">Gerando relatório</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/49_Status_Processando.png" class="img-screenshot" alt="Status Processando">
        </div>
        <p class="img-caption">Processamento em andamento</p>
    </div>

    <h3 id="secao-9-3">9.3 Múltiplos Perfis</h3>
    <p>Crie variações de perfis para diferentes tipos de análise.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/50_Inicio_Perfil_2.png" class="img-screenshot" alt="Início Perfil 2">
        </div>
        <p class="img-caption">Iniciando segundo perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/51_Nomear_Perfil_2.png" class="img-screenshot" alt="Nomear Perfil 2">
        </div>
        <p class="img-caption">Nomeando segundo perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/52_Selecionar_Perfil_2.png" class="img-screenshot" alt="Selecionar Perfil 2">
        </div>
        <p class="img-caption">Selecionando segundo perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/53_Load_Perfil_2.png" class="img-screenshot" alt="Carregar Perfil 2">
        </div>
        <p class="img-caption">Carregando perfil alternativos</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/54_Contagem_Perfil_2.png" class="img-screenshot" alt="Contagem Perfil 2">
        </div>
        <p class="img-caption">Contagem do segundo perfil</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/55_Gerar_Relatorio_2.png" class="img-screenshot" alt="Gerar Relatório 2">
        </div>
        <p class="img-caption">Gerando relatório do segundo perfil</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 10 -->
<div class="secao" id="secao-10">
  <div class="secao-header">
    <span class="secao-numero editable-text">10</span>
    <h2 class="editable-text">Finalizando a Exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-10-1">10.1 Processamento</h3>
    <p>Acompanhe o status do processamento e aguarde a conclusão.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/56_Hover_Outro_Arquivo.png" class="img-screenshot" alt="Hover Outro Arquivo">
        </div>
        <p class="img-caption">Seleção de outro arquivo</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/57_Reabrir_Modal.png" class="img-screenshot" alt="Reabrir Modal">
        </div>
        <p class="img-caption">Reabrindo modal de exportação</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/58_Verificar_Perfil_Ativo.png" class="img-screenshot" alt="Verificar Perfil Ativo">
        </div>
        <p class="img-caption">Verificando perfil ativo</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/59_Processando_Novamente.png" class="img-screenshot" alt="Processando Novamente">
        </div>
        <p class="img-caption">Processamento em andamento</p>
    </div>

    <h3 id="secao-10-2">10.2 Download do Relatório</h3>
    <p>Após o processamento, o download será iniciado automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/60_Toast_Download_Start.png" class="img-screenshot" alt="Toast Download Start">
        </div>
        <p class="img-caption">Início do download</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/61_Toast_Export_Sucesso.png" class="img-screenshot" alt="Toast Exportação Sucesso">
        </div>
        <p class="img-caption">Exportação concluída com sucesso</p>
    </div>

    <h3 id="secao-10-3">10.3 Retorno à Tela Inicial</h3>
    <p>Após finalizar, retorne à tela inicial para novas consultas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/62_Tela_Final_Limpa.png" class="img-screenshot" alt="Tela Final Limpa">
        </div>
        <p class="img-caption">Processo finalizado</p>
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
    <p>Recomendações para otimizar seu uso da ferramenta de Consulta EFD ICMS:</p>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Perfis de Exportação:</strong> Crie perfis para diferentes tipos de auditoria. Isso agiliza consultas recorrentes e padroniza as análises.</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Filtros Específicos:</strong> Utilize filtros precisos (cliente, contribuinte, período) para obter resultados mais relevantes e reduzir o tempo de busca.</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Download em Lote:</strong> Para múltiplos arquivos TXT, prefira o download em lote (ZIP) para economizar tempo.</p>
    </div>
    <div class="aviso">
        <span class="material-icons-round">info</span>
        <p><strong>Limitação:</strong> A exportação para Excel em lote não está disponível. Para exportar múltiplos arquivos, realize a exportação individualmente.</p>
    </div>
  </div>
</div>
