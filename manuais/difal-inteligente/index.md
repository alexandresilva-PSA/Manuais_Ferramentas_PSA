---
layout: manual
title: "DIFAL Inteligente"
versao: "Versão 1.1"
github_url: "https://github.com/psa-elevate/difal-inteligente"
toc:
  - id: secao-intro
    title: "1. Introdução"
  - id: secao-1
    title: "2. Acesso e Ambiente"
    items:
      - id: secao-1-1
        title: "1.1. Página Inicial e Acesso à Equipe"
      - id: secao-1-2
        title: "1.2. Identificação da Área Digital"
      - id: secao-1-3
        title: "1.3. Credenciais de Acesso"
      - id: secao-1-4
        title: "1.4. Seleção de Ambiente de Trabalho"
      - id: secao-1-5
        title: "1.5. Dashboard Principal"
  - id: secao-2
    title: "Configuração da Classificação"
    items:
      - id: secao-2-1
        title: "2.1. Acesso ao Módulo DIFAL"
      - id: secao-2-2
        title: "2.2. Filtro de Cliente"
      - id: secao-2-3
        title: "2.3. Listagem de Contribuintes"
      - id: secao-2-4
        title: "2.4. Seleção do Contribuinte (Razão Social)"
      - id: secao-2-5
        title: "2.5. Definição de Início do Período"
      - id: secao-2-6
        title: "2.6. Definição de Fim do Período"
      - id: secao-2-7
        title: "2.7. Execução da Busca"
  - id: secao-3
    title: "Análise e Classificação"
    items:
      - id: secao-3-1
        title: "3.1. Painel de Métricas"
      - id: secao-3-2
        title: "3.2. Grade de Itens"
      - id: secao-3-3
        title: "3.3. Identificação de Pendências"
      - id: secao-3-4
        title: "3.4. Modal de Detalhes do Produto"
      - id: secao-3-5
        title: "3.5. Seleção de Regra Tributária"
      - id: secao-3-6
        title: "3.6. Confirmação da Decisão"
  - id: secao-4
    title: "Conferência e Exemplos Práticos"
    items:
      - id: secao-4-1
        title: "4.1. Atualização de Status"
      - id: secao-4-2
        title: "4.2. Acompanhamento na Lista Geral"
      - id: secao-4-3
        title: "4.3. Exemplos de Status: Pendente e Validado"
      - id: secao-4-4
        title: "4.4. Consolidação da Lista"
  - id: secao-5
    title: "Sincronização de Dados"
    items:
      - id: secao-5-1
        title: "5.1. Alerta de Sincronização Pendente"
      - id: secao-5-2
        title: "5.2. Confirmação de Salvamento"
  - id: secao-6
    title: "Exportação e Finalização"
    items:
      - id: secao-6-1
        title: "6.1. Solicitação de Exportação"
      - id: secao-6-2
        title: "6.2. Processamento do Arquivo"
      - id: secao-6-3
        title: "6.3. Conclusão do Download"
      - id: secao-6-4
        title: "6.4. Conferência Final"
      - id: secao-6-5
        title: "6.5. Nova Busca e Encerramento"
---

<!-- SEÇÃO INTRO -->
<div class="secao" id="secao-intro">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>DIFAL Inteligente</strong>, parte integrante do sistema PSA Elevate. A ferramenta permite classificar tributariamente os itens de notas fiscais por NCM, definindo as regras de DIFAL (Diferencial de Alíquota) aplicáveis a cada operação interestadual de forma ágil e centralizada.</p>
    <p>O objetivo deste documento é orientar os analistas fiscais na utilização completa dos recursos disponíveis, desde a configuração dos filtros de busca e a classificação individual de NCMs até a sincronização dos dados e a exportação da planilha com as regras tributárias definidas.</p>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p>Certifique-se de salvar as classificações realizadas antes de fechar a página para não perder o trabalho realizado na sessão.</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 1 -->
<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acesso e Ambiente</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-1-1">1.1 Página Inicial e Acesso à Equipe</h3>
    <p>O acesso à ferramenta começa pelo portal corporativo da PSA Consultores. Clique em "Equipe" no canto superior direito para entrar na área restrita aos colaboradores.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01-02_Menu_Equipe.png" class="img-screenshot" alt="Página Inicial e Menu de Acesso à Equipe">
        </div>
        <p class="img-caption">Portal corporativo com destaque para o menu de acesso restrito</p>
    </div>

    <h3 id="secao-1-2">1.2 Identificação da Área Digital</h3>
    <p>Na lista de departamentos, selecione "Digital" para acessar as ferramentas internas da equipe fiscal e de automação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01-04_Selecao_Digital.png" class="img-screenshot" alt="Seleção Opção Digital">
        </div>
        <p class="img-caption">Seleção da área de competência</p>
    </div>

    <h3 id="secao-1-3">1.3 Credenciais de Acesso</h3>
    <p>Informe seu e-mail corporativo e senha para acessar o sistema. As credenciais são individuais e garantem que cada consultor visualize apenas os clientes do seu respectivo perfil.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01-06_Login_Preenchido.png" class="img-screenshot" alt="Login Preenchido">
        </div>
        <p class="img-caption">Preenchimento dos dados de acesso</p>
    </div>

    <h3 id="secao-1-4">1.4 Seleção de Ambiente de Trabalho</h3>
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong> para acessar as ferramentas fiscais disponíveis para a equipe.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01-07_Ambiente_Dev.png" class="img-screenshot" alt="Seleção Ambiente Digital">
        </div>
        <p class="img-caption">Escolha do ambiente da área Digital</p>
    </div>

    <h3 id="secao-1-5">1.5 Dashboard Principal</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o Hub de Ferramentas. Utilize a seção Sessões em Andamento para retomar trabalhos recentes ou localize a ferramenta desejada no painel central.</p>
    <p>Para iniciar a operação, utilize o menu lateral ou identifique o card correspondente e clique no botão Acessar Ferramenta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01-08_Dashboard_Inicial.png" class="img-screenshot" alt="Dashboard Inicial">
        </div>
        <p class="img-caption">Visão geral das ferramentas disponíveis</p>
    </div>

  </div>
</div>

<!-- SEÇÃO 2 -->
<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Configuração da Classificação</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-2-1">2.1 Acesso ao Módulo DIFAL</h3>
    <p>No menu lateral esquerdo, clique em "DIFAL Inteligente" para abrir a tela de classificação tributária por NCM. É aqui que você configura o cliente e o período antes de iniciar a análise.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-01_Menu_Lateral.png" class="img-screenshot" alt="Menu Lateral DIFAL">
        </div>
        <p class="img-caption">Navegação para o módulo de classificação tributária</p>
    </div>

    <h3 id="secao-2-2">2.2 Filtro de Cliente</h3>
    <p>O primeiro passo da configuração é definir o cliente a ser analisado. O sistema carrega a lista de clientes disponíveis.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-02_Filtro_Cliente.png" class="img-screenshot" alt="Filtro de Cliente">
        </div>
        <p class="img-caption">Definição do filtro do cliente</p>
    </div>

    <h3 id="secao-2-3">2.3 Listagem de Contribuintes</h3>
    <p>Ao selecionar um cliente, o sistema carrega automaticamente a lista de contribuintes. Basta selecionar o contribuinte correspondente à análise.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-03_Lista_Contribuintes.png" class="img-screenshot" alt="Lista de Contribuintes">
        </div>
        <p class="img-caption">Visualização dos contribuintes disponíveis</p>
    </div>

    <h3 id="secao-2-4">2.4 Seleção do Contribuinte (Razão Social)</h3>
    <p>Selecione o Contribuinte (Razão Social) correto do cliente. A escolha define quais notas fiscais e regras tributárias estaduais serão carregadas para a análise do DIFAL.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-04_Contribuinte_Select.png" class="img-screenshot" alt="Contribuinte Selecionado">
        </div>
        <p class="img-caption">Confirmação da Razão Social da operação</p>
    </div>

    <h3 id="secao-2-5">2.5 Definição de Início do Período</h3>
    <p>Informe a data inicial da competência a ser analisada. O sistema buscará todas as notas fiscais a partir dessa data.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-05_Data_Inicio.png" class="img-screenshot" alt="Calendário Data Início">
        </div>
        <p class="img-caption">Configuração da data inicial</p>
    </div>

    <h3 id="secao-2-6">2.6 Definição de Fim do Período</h3>
    <p>Informe a data final da competência. O sistema buscará todas as notas fiscais emitidas dentro do intervalo definido.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-06_Data_Fim.png" class="img-screenshot" alt="Calendário Data Fim">
        </div>
        <p class="img-caption">Configuração da data final</p>
    </div>

    <h3 id="secao-2-7">2.7 Execução da Busca</h3>
    <p>Com todos os parâmetros definidos, clique no botão "Buscar Itens".</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02-07_Botao_Buscar.png" class="img-screenshot" alt="Botão Buscar">
        </div>
        <p class="img-caption">Execução da busca</p>
    </div>

  </div>
</div>

<!-- SEÇÃO 3 -->
<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Análise e Classificação</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-3-1">3.1 Painel de Métricas</h3>
    <p>Logo após a busca, cards no topo da tela exibem o resumo da classificação: total de NCMs identificados no período, quantos ainda precisam de regra tributária definida e quantos já foram classificados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03-02_Cards_Metricas.png" class="img-screenshot" alt="Cards de Métricas">
        </div>
        <p class="img-caption">Carregamento da lista e resumo numérico</p>
    </div>

    <h3 id="secao-3-2">3.2 Grade de Itens</h3>
    <p>A lista principal exibe todos os produtos retornados pela busca. Cada linha representa um item de nota fiscal com as informações fiscais essenciais: <strong>NCM, CFOP</strong>, descrição do produto e status de classificação atual.</p>

    <h3 id="secao-3-3">3.3 Identificação de Pendências</h3>
    <p>Itens com NCM sem regra tributária definida aparecem marcados com a etiqueta "Pendente" em amarelo. Esses são os produtos que ainda precisam de classificação para o cálculo do DIFAL.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03-03_Item_Pendente.png" class="img-screenshot" alt="Item Pendente">
        </div>
        <p class="img-caption">Destaque para itens aguardando classificação</p>
    </div>

    <h3 id="secao-3-4">3.4 Modal de Detalhes do Produto</h3>
    <p>Ao clicar em um item, abre-se uma janela modal com informações detalhadas, incluindo NCM, CFOP, Valor Total e a descrição completa do produto conforme a nota fiscal.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03-04_Modal_Classificacao.png" class="img-screenshot" alt="Modal de Classificação">
        </div>
        <p class="img-caption">Interface de análise detalhada</p>
    </div>

    <h3 id="secao-3-5">3.5 Seleção de Regra Tributária</h3>
    <p>No painel direito do modal, o sistema exibe as regras fiscais disponíveis para o NCM consultado: alíquota cheia, isenção ou redução de base de cálculo. Selecione o card correspondente à tributação correta conforme a legislação do estado de destino.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03-05_Selecao_Regra.png" class="img-screenshot" alt="Seleção de Regra">
        </div>
        <p class="img-caption">Aplicação da regra fiscal ao item</p>
    </div>

    <h3 id="secao-3-6">3.6 Confirmação da Decisão</h3>
    <p>Após selecionar a regra, clique em "Salvar Decisão" para registrar a classificação daquele NCM. O modal fecha automaticamente e o item passa para o status "Validado" na lista.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03-06_Botao_Salvar.png" class="img-screenshot" alt="Botão Salvar Decisão">
        </div>
        <p class="img-caption">Efetivação da classificação individual</p>
    </div>

  </div>
</div>

<!-- SEÇÃO 4 -->
<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Conferência e Exemplos Práticos</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-4-1">4.1 Atualização de Status</h3>
    <p>Após salvar a classificação, o item é atualizado para "Validado" em verde na lista. Isso confirma que a regra tributária daquele NCM foi definida e registrada.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04-01_Status_Validado.png" class="img-screenshot" alt="Item Validado">
        </div>
        <p class="img-caption">Feedback visual de conclusão</p>
    </div>

    <h3 id="secao-4-2">4.2 Acompanhamento na Lista Geral</h3>
    <p>Use a lista para acompanhar o andamento da classificação: itens em amarelo ainda precisam de análise, itens em verde já foram classificados. Trabalhe de cima para baixo até zerar os pendentes.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04-02_Lista_Overview.png" class="img-screenshot" alt="Visão Geral da Lista">
        </div>
        <p class="img-caption">Monitoramento do progresso da classificação</p>
    </div>

    <h3 id="secao-4-3">4.3 Exemplos de Status: Pendente e Validado</h3>
    <ul>
        <li><strong>Item Pendente:</strong> O NCM aparece na linha com status "Pendente" em amarelo, indicando que a classificação ainda precisa ser feita.</li>
        <li><strong>Item Validado:</strong> O mesmo item após a classificação (ex: Cana de Açúcar), com status atualizado para "Validado" em verde. Use como referência para conferir se os dados foram aplicados corretamente.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04-04_Exemplo_Cana.png" class="img-screenshot" alt="Exemplo Item Cana Validado">
        </div>
        <p class="img-caption">Estado dos registros mostrando a aplicação da regra</p>
    </div>

    <h3 id="secao-4-4">4.4 Consolidação da Lista</h3>
    <p>Durante a sessão, você pode clicar no card "Pendentes" para atualizar a lista principal e focar naquilo que ainda aguarda análise. A presença de itens em amarelo indica que o trabalho de classificação tributária ainda está em andamento para a operação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04-03_Lista_Atualizada.png" class="img-screenshot" alt="Lista Atualizada">
        </div>
        <p class="img-caption">Visão consolidada do progresso</p>
    </div>

  </div>
</div>

<!-- SEÇÃO 5 -->
<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Sincronização de Dados</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-5-1">5.1 Alerta de Sincronização Pendente</h3>
    <p>Se aparecer um alerta vermelho na tela, significa que há classificações feitas que ainda não foram salvas no sistema. Clique em "Salvar Alterações" antes de fechar a página para não perder o trabalho realizado.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/05-01_Tooltip_Salvar.png" class="img-screenshot" alt="Alerta de Sincronização">
        </div>
        <p class="img-caption">Indicação de dados pendentes de envio</p>
    </div>

    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Aviso:</strong></p>
        <p>Caso feche o navegador ou a página durante a classificação, o sistema irá salvar e restaurar a sessão no próximo acesso.</p>
    </div>

    <h3 id="secao-5-2">5.2 Confirmação de Salvamento</h3>
    <p>Ao clicar em "Salvar Alterações", uma notificação de sucesso confirma que todas as classificações foram gravadas. Só após essa confirmação os dados estão seguros.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/05-02_Toast_Sucesso.png" class="img-screenshot" alt="Confirmação de Salvamento">
        </div>
        <p class="img-caption">Conclusão do processo de sincronização</p>
    </div>

  </div>
</div>

<!-- SEÇÃO 6 -->
<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Exportação e Finalização</h2>
  </div>
  <div class="secao-conteudo editable-area">

    <h3 id="secao-6-1">6.1 Solicitação de Exportação</h3>
    <p>Ao finalizar todas as classificações, clique em "Exportar Excel" para gerar a planilha com todos os NCMs classificados e suas regras tributárias definidas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06-01_Botao_Exportar.png" class="img-screenshot" alt="Botão Exportar">
        </div>
        <p class="img-caption">Início da exportação para excel</p>
    </div>

    <h3 id="secao-6-2">6.2 Processamento do Arquivo</h3>
    <p>Durante a geração da planilha, o botão exibe um indicador de carregamento, informando ao usuário que os dados estão sendo processados no servidor.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06-02_Processando.png" class="img-screenshot" alt="Processando Exportação">
        </div>
        <p class="img-caption">Aguardando compilação dos dados</p>
    </div>

    <h3 id="secao-6-3">6.3 Conclusão do Download</h3>
    <p>Quando o arquivo estiver pronto, o download inicia automaticamente e um aviso de download do navegador será exibido na parte superior da tela. O arquivo gerado contém todos os itens classificados no período.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06-03_Toast_Download.png" class="img-screenshot" alt="Download Concluído">
        </div>
        <p class="img-caption">Aviso de download iniciado pelo navegador</p>
    </div>

    <h3 id="secao-6-4">6.4 Conferência Final</h3>
    <p>Antes de encerrar ou exportar de forma parcial, você pode clicar no card de "Validados" para listar os itens já processados e conferir o andamento. Verifique se as regras preenchidas estão com status "Validado" em verde e certifique-se de que não há alertas de sincronização pendente na tela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06-04_Lista_Final.png" class="img-screenshot" alt="Lista Final">
        </div>
        <p class="img-caption">Revisão parcial ou final da classificação</p>
    </div>

    <h3 id="secao-6-5">6.5 Nova Busca e Encerramento</h3>
    <p>A sua análise — seja ela parcial ou completa — é considerada encerrada quando os dados analisados estiverem devidamente salvos e exportados para o Excel sem alertas pendentes. Para iniciar uma nova busca de período ou redefinir a tela para classificar o restante, clique em "Limpar filtros".</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06-05_Tela_Limpa.png" class="img-screenshot" alt="Tela Final">
        </div>
        <p class="img-caption">Limpeza dos filtros para nova análise</p>
    </div>

  </div>
</div>
