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
        title: "1.2. Seleção da Ferramenta"
  - id: secao-2
    title: "2. Visão Geral e Filtros"
    items:
      - id: secao-2-1
        title: "2.1. Painel de Controle"
      - id: secao-2-2
        title: "2.2. Utilizando os Filtros"
  - id: secao-3
    title: "3. Gestão de PER (Créditos)"
    items:
      - id: secao-3-1
        title: "3.1. Cadastrando um Novo PER"
      - id: secao-3-2
        title: "3.2. Detalhes e Status"
  - id: secao-4
    title: "4. Gestão de DCOMP (Compensações)"
    items:
      - id: secao-4-1
        title: "4.1. Lançamento de DCOMP"
      - id: secao-4-2
        title: "4.2. Retificação de DCOMP"
  - id: secao-5
    title: "5. Ressarcimentos"
    items:
      - id: secao-5-1
        title: "5.1. Registro de Pagamento em Espécie"
  - id: secao-6
    title: "6. Busca Avançada"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Acesso e Ambiente</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-1-1">1.1 Login e Navegação</h3>
    <p>Acesse o portal PSA Elevate e localize o menu <strong>Equipe</strong> no canto superior direito.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01_01_Homepage.png" class="img-screenshot" alt="Homepage PSA Elevate">
        </div>
    </div>
    
    <p>No menu suspenso, selecione a área <strong>Digital</strong> e realize o login com suas credenciais de acesso.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01_03_Selecao_Area.png" class="img-screenshot" alt="Seleção de Área Digital">
        </div>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01_04_Tela_Login.png" class="img-screenshot" alt="Tela de Login">
        </div>
    </div>

    <h3 id="secao-1-2">1.2 Seleção da Ferramenta</h3>
    <p>No painel de seleção de ambientes, escolha <strong>Digital Dev</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/01_05_Ambiente_Dev.png" class="img-screenshot" alt="Seleção de Ambiente Dev">
        </div>
    </div>
    <p>No menu lateral esquerdo, clique em <strong>Controle PERDCOMP</strong> para acessar a ferramenta.</p>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Visão Geral e Filtros</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-2-1">2.1 Painel de Controle</h3>
    <p>Ao acessar a ferramenta, a grade de resultados estará vazia. Utilize os filtros no topo da tela para carregar os processos desejados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02_01_Tela_Inicial_Vazia.png" class="img-screenshot" alt="Tela Inicial Vazia">
        </div>
    </div>

    <h3 id="secao-2-2">2.2 Utilizando os Filtros</h3>
    <p>Para visualizar os processos (PERs), configure os filtros obrigatórios:</p>
    <ol>
        <li><strong>Cliente:</strong> Selecione a empresa principal (Ex: DK Transportes).</li>
        <li><strong>Contribuinte:</strong> Selecione a filial ou CNPJ específico.</li>
    </ol>

    <p>Você pode refinar a busca utilizando os filtros opcionais:</p>
    <ul>
        <li><strong>Situação:</strong> Permite selecionar múltiplos status (ex: "Em análise", "Deferido").</li>
        <li><strong>Exercício:</strong> Filtra pelo ano de origem do crédito.</li>
    </ul>

    <div class="dica">
        <span class="material-icons-round">info</span>
        <p><strong>Nota:</strong> Por padrão, o sistema oculta processos que já foram retificados, exibindo apenas a versão mais atual (ativa) do PER.</p>
    </div>

    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/02_07_Filtros_Preenchidos.png" class="img-screenshot" alt="Filtros Preenchidos">
        </div>
        <p class="img-caption">Exemplo de configuração de filtros</p>
    </div>

    <p>Clique em <strong>Buscar</strong> para carregar a grade.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/03_01_Grid_Resultados.png" class="img-screenshot" alt="Grade de Resultados">
        </div>
    </div>

    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p>A coluna <strong>Vlr. Selic</strong> exibe o valor corrigido apenas se o crédito já tiver superado o período de carência (360 dias da Data Solicitada). Caso contrário, exibirá "Em carência".</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Gestão de PER (Pedidos de Restituição)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    
    <h3 id="secao-3-1">3.1 Cadastrando um Novo PER</h3>
    <p>Para registrar um novo crédito, clique no botão <strong>+ Novo</strong> localizado acima da tabela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04_01_Modal_Novo_PER.png" class="img-screenshot" alt="Botão Novo PER">
        </div>
    </div>
    
    <p>Preencha os dados do Pedido Eletrônico de Restituição:</p>
    <ul>
        <li><strong>Tipo de Declaração:</strong> "Original" ou "Retificadora".</li>
        <li><strong>Número do Processo:</strong> O sistema aplicará a máscara automática (00000.00000.000000.0.0.00-0000).</li>
        <li><strong>Exercício/Trimestre:</strong> Período de apuração.</li>
        <li><strong>Valor do Crédito:</strong> Valor original do pedido.</li>
    </ul>

    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p>Se selecionar <strong>Retificadora</strong>, será obrigatório vincular o processo original no campo "PER a ser Retificado".</p>
    </div>
    
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/04_02_Formulario_Novo_PER.png" class="img-screenshot" alt="Formulário de Cadastro">
        </div>
    </div>

    <h3 id="secao-3-2">3.2 Detalhes e Status</h3>
    <p>Clique sobre qualquer linha da tabela para abrir a visão detalhada do PER. Nesta tela, você pode visualizar o <strong>Saldo Disponível</strong> atualizado, que deduz automaticamente as compensações e ressarcimentos.</p>
    
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/05_02_Detalhes_Expandido.png" class="img-screenshot" alt="Detalhes do PER">
        </div>
    </div>

    <p>Para alterar o status, utilize o painel lateral esquerdo. Selecione a nova situação (ex: "Em análise") e clique em <strong>Salvar Situação</strong>. O histórico de alterações ficará registrado logo abaixo.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/05_04_Btn_Salvar_Situacao.png" class="img-screenshot" alt="Atualização de Status">
        </div>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Gestão de DCOMP (Compensações)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>As DCOMPs representam o uso do crédito do PER para abater débitos fiscais.</p>

    <h3 id="secao-4-1">4.1 Lançamento de DCOMP</h3>
    <p>Dentro da tela de detalhes do PER, clique em <strong>+ Novo DCOMP</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06_01_Modal_Novo_DCOMP.png" class="img-screenshot" alt="Botão Nova DCOMP">
        </div>
    </div>
    
    <p>Informe os dados da compensação:</p>
    <ul>
        <li><strong>Número do Documento:</strong> Identificador da DCOMP.</li>
        <li><strong>Mês/Ano Exercício:</strong> Competência do débito.</li>
        <li><strong>Imposto:</strong> Selecione o tributo (PIS, COFINS, IPI, IRPJ, CSLL ou INSS).</li>
        <li><strong>Valor Compensado:</strong> Montante a ser abatido do PER.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/06_02_Formulario_DCOMP.png" class="img-screenshot" alt="Formulário DCOMP">
        </div>
    </div>

    <h3 id="secao-4-2">4.2 Retificação de DCOMP</h3>
    <p>Caso precise corrigir uma compensação, crie uma nova DCOMP e utilize o campo <strong>DCOMP a Retificar (Opcional)</strong>. O sistema listará apenas as DCOMPs vigentes vinculadas a este PER.</p>
    
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/08_05_DCOMP_Retificador.png" class="img-screenshot" alt="Campo de Retificação">
        </div>
        <p class="img-caption">Selecione o documento original para vincular a retificação.</p>
    </div>

    <p>Na lista de lançamentos, a retificação aparecerá com o número do documento original destacado em laranja.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/08_07_Lista_Retificada.png" class="img-screenshot" alt="Lista com Retificação">
        </div>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Ressarcimentos</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1 Registro de Pagamento em Espécie</h3>
    <p>Quando a Receita Federal realiza o pagamento do crédito em dinheiro, utilize a opção <strong>$ Novo Ressarcimento</strong> na tela de detalhes.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/07_01_Btn_Ressarcimento.png" class="img-screenshot" alt="Botão Ressarcimento">
        </div>
    </div>
    
    <p>Informe o <strong>Valor Ressarcido</strong> e a <strong>Data do Pagamento</strong>. Ao salvar:</p>
    <ul>
        <li>O valor será deduzido do saldo do PER.</li>
        <li>A situação do PER será atualizada automaticamente para <strong>PER deferido</strong>.</li>
        <li>A data de pagamento será registrada no histórico.</li>
    </ul>

    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/07_02_Formulario_Ressarcimento.png" class="img-screenshot" alt="Dados do Ressarcimento">
        </div>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Busca Avançada</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para localizar rapidamente um processo específico, utilize o campo de busca global <strong>Nº do Processo</strong> no painel de filtros.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/09_02_Filtro_Numero_Proc.png" class="img-screenshot" alt="Campo de Busca Global">
        </div>
    </div>
    <p>Você pode digitar o número completo ou parcial. O sistema buscará tanto pelo número do PER quanto pelo número de qualquer DCOMP vinculada.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/09_03_Resultado_Filtrado_PER.png" class="img-screenshot" alt="Resultado da Busca">
        </div>
    </div>
  </div>
</div>