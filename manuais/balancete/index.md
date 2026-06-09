---
layout: manual
title: "Controle de Balancetes"
versao: "1.0"
github_url: "https://github.com/psa-elevate/controle-balancetes"
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
    title: "3. Conhecendo a Tela Principal"
  - id: secao-4
    title: "4. Utilizando os Filtros e Realizando Buscas"
    items:
      - id: secao-4-1
        title: "4.1. Seleção de Cliente"
      - id: secao-4-2
        title: "4.2. Seleção de Contribuinte"
      - id: secao-4-3
        title: "4.3. Período de consulta"
      - id: secao-4-4
        title: "4.4. Executando a Busca e Limpando Filtros"
  - id: secao-5
    title: "5. Enviando um Novo Balancete"
    items:
      - id: secao-5-1
        title: "5.1. Abrindo a janela de envio"
      - id: secao-5-2
        title: "5.2. Inserindo o arquivo"
      - id: secao-5-3
        title: "5.3. Preenchimento de dados e detalhamento"
      - id: secao-5-4
        title: "5.4. Confirmação e Envio"
  - id: secao-6
    title: "6. Ações Individuais na Tabela"
    items:
      - id: secao-6-1
        title: "6.1. Baixar arquivo original"
      - id: secao-6-2
        title: "6.2. Exportar movimentos (Excel)"
  - id: secao-7
    title: "7. Ações em Lote"
---

<!-- SEÇÃO 1 -->
<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta de <strong>Controle de Balancetes</strong>, parte integrante do sistema PSA Elevate.</p>
    <p>A ferramenta foi desenvolvida para centralizar o envio, a consulta e a exportação de balancetes contábeis dos clientes. Através dela, a equipe pode realizar o upload seguro de arquivos originais, padronizar configurações de detalhamento por contribuinte e extrair os movimentos contábeis de forma unificada.</p>
    <h3>Principais Funcionalidades</h3>
    <ul>
        <li><strong>Busca filtrada:</strong> Localize balancetes por cliente, contribuinte e intervalo de datas.</li>
        <li><strong>Upload de arquivos originais:</strong> Envio seguro de planilhas (restrito aos formatos Excel .xlsx e .xls).</li>
        <li><strong>Configuração de detalhamento:</strong> Sistema inteligente vinculado ao contribuinte.</li>
        <li><strong>Download flexível:</strong> Baixe planilhas originais individualmente ou em lote (ZIP).</li>
        <li><strong>Exportação padronizada:</strong> Extraia os movimentos contábeis tratados para planilhas Excel estruturadas.</li>
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
    <p>A tela de autenticação será exibida. Insira suas credenciais corporativas (e-mail e senha) nos campos correspondentes e clique em <strong>"Entrar"</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-03-login.png" class="img-screenshot" alt="Tela de login preenchida">
        </div>
        <p class="img-caption">Preenchimento dos dados de acesso</p>
    </div>

    <h3 id="secao-acesso-4">2.4. Seleção do ambiente de trabalho</h3>
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>. Este é o ambiente de criação, desenvolvimento e utilização das ferramentas contábeis automatizadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-04-ambiente-dev.png" class="img-screenshot" alt="Seleção do ambiente Digital Dev">
        </div>
        <p class="img-caption">Escolha do ambiente da área Digital</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Localize o card correspondente e clique no botão <strong>"Acessar Ferramenta"</strong> no módulo Controle de Balancetes.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-05-hub-ferramentas.png" class="img-screenshot" alt="Hub de Ferramentas">
        </div>
        <p class="img-caption">Visão geral do Hub de Ferramentas</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 3 -->
<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Conhecendo a Tela Principal</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Ao acessar a ferramenta, a tela inicial é dividida em duas áreas funcionais principais: o painel superior de <strong>Filtros de Busca</strong> (onde você pesquisa ou inicia um novo envio) e o painel inferior de <strong>Balancetes</strong> (a tabela de resultados).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/Visão geral da ferramenta.png" class="img-screenshot" alt="Visão geral da ferramenta">
        </div>
        <p class="img-caption">Visão geral da ferramenta no estado inicial</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 4 -->
<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Utilizando os Filtros e Realizando Buscas</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1. Seleção de Cliente</h3>
    <p>No painel de filtros, clique no menu suspenso e selecione o cliente. Este campo é obrigatório (marcado com um asterisco vermelho).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/Filtro de clientes.png" class="img-screenshot" alt="Filtro de clientes">
        </div>
        <p class="img-caption">Seleção de cliente obrigatória</p>
    </div>

    <h3 id="secao-4-2">4.2. Seleção de Contribuinte</h3>
    <p>Após selecionar o cliente, este campo será habilitado. Escolha a empresa (CNPJ) ou pessoa (CPF) para a qual deseja listar os balancetes.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/Filtro de contribuintes.png" class="img-screenshot" alt="Filtro de contribuintes">
        </div>
        <p class="img-caption">Seleção do contribuinte específico</p>
    </div>

    <h3 id="secao-4-3">4.3. Período de consulta</h3>
    <p>Para restringir a busca, clique no campo Período para abrir o calendário e definir um intervalo de meses (Início e Fim).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/filtro de periodo.png" class="img-screenshot" alt="Filtro de período">
        </div>
        <p class="img-caption">Definição do intervalo de datas</p>
    </div>

    <h3 id="secao-4-4">4.4. Executando a Busca e Limpando Filtros</h3>
    <p>Com os dados preenchidos, clique no botão <strong>Buscar</strong>. O sistema processará as informações e listará os arquivos encontrados na tabela inferior.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/busca.png" class="img-screenshot" alt="Resultados da busca">
        </div>
        <p class="img-caption">Resultados da busca exibidos na tabela</p>
    </div>
    <p>Caso precise reiniciar sua pesquisa, clique no botão vermelho <strong>Limpar filtros</strong> para apagar os dados dos campos e esvaziar a tabela de uma só vez.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/limpar filtros.png" class="img-screenshot" alt="Limpar filtros">
        </div>
        <p class="img-caption">Botão para limpar todos os filtros</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 5 -->
<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Enviando um Novo Balancete</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1. Abrindo a janela de envio</h3>
    <p>No canto esquerdo do painel de filtros, clique no botão verde <strong>+ Novo Balancete</strong> para abrir a janela (modal) de upload.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/carregar arquivo.png" class="img-screenshot" alt="Abrir modal de upload">
        </div>
        <p class="img-caption">Janela de novo balancete aberta</p>
    </div>

    <h3 id="secao-5-2">5.2. Inserindo o arquivo</h3>
    <p>Arraste uma planilha do seu computador para dentro da área tracejada ou clique sobre ela. O sistema aceita apenas formatos <code>.xlsx</code> ou <code>.xls</code>. Após anexar, a área exibirá as informações do arquivo.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/arquivo carregado.png" class="img-screenshot" alt="Arquivo carregado">
        </div>
        <p class="img-caption">Arquivo validado e anexado com sucesso</p>
    </div>

    <h3 id="secao-5-3">5.3. Preenchimento de dados e detalhamento</h3>
    <p>Na lateral direita, preencha Cliente, Contribuinte e Período referentes à planilha. Verifique a chave de <strong>Detalhamento</strong> e ative-a (Sim/Não) conforme a estrutura do balancete da empresa.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/formulario preenchido.png" class="img-screenshot" alt="Formulário preenchido">
        </div>
        <p class="img-caption">Dados de identificação e configuração de detalhamento preenchidos</p>
    </div>

    <h3 id="secao-5-4">5.4. Confirmação e Envio</h3>
    <p>Clique no botão <strong>Enviar</strong>. Uma janela de confirmação exibirá um resumo do envio para que você faça uma conferência final.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/Resumo do upload.png" class="img-screenshot" alt="Resumo do upload">
        </div>
        <p class="img-caption">Resumo dos dados antes da confirmação final</p>
    </div>
    <p>Ao confirmar, o sistema realizará o upload. Em caso de sucesso, a janela se fechará e a tabela principal será atualizada exibindo o novo balancete.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/balacente carregado.png" class="img-screenshot" alt="Balancete carregado na tabela">
        </div>
        <p class="img-caption">Novo documento listado na tabela de resultados</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 6 -->
<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Ações Individuais na Tabela</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-6-1">6.1. Baixar arquivo original</h3>
    <p>Na coluna de Ações de cada linha, clique no ícone de <strong>Seta para baixo</strong> para fazer o download da planilha bruta, exatamente como foi enviada ao sistema.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/baixar arquivo original.png" class="img-screenshot" alt="Botão baixar arquivo original">
        </div>
        <p class="img-caption">Ação para download individual do arquivo bruto</p>
    </div>
    <p>O sistema solicitará uma confirmação de segurança antes de iniciar o download no seu navegador.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/confirmar download arquivo original.png" class="img-screenshot" alt="Confirmação de download">
        </div>
        <p class="img-caption">Janela de confirmação de segurança para download</p>
    </div>

    <h3 id="secao-6-2">6.2. Exportar movimentos (Excel)</h3>
    <p>Para extrair os dados tratados, clique no ícone de <strong>Documento com seta</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/exportar balancete.png" class="img-screenshot" alt="Botão exportar balancete">
        </div>
        <p class="img-caption">Ação para gerar planilha de movimentos formatada</p>
    </div>
    <p>O sistema processará o balancete de acordo com os filtros selcionados e gerará uma nova planilha Excel com as colunas padronizadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/Balancete tratado.png" class="img-screenshot" alt="Planilha de balancete tratado">
        </div>
        <p class="img-caption">Exemplo do arquivo final exportado e estruturado</p>
    </div>
  </div>
</div>

<!-- SEÇÃO 7 -->
<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Ações em Lote</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A ferramenta permite que você processe múltiplos balancetes simultaneamente. Caso sua pesquisa retorne vários arquivos, você pode baixar os originais ou exportar os movimentos de todos de uma só vez.</p>
    <ol>
        <li>Utilize as <strong>caixas de seleção (checkboxes)</strong> localizadas na primeira coluna da tabela para marcar os balancetes desejados (ou utilize a caixa no cabeçalho para selecionar todos os listados).</li>
        <li>Observe que os botões superiores <strong>Baixar original</strong> e <strong>Exportar movimentos</strong> serão ativados, exibindo uma <em>badge</em> numérica com a quantidade de itens selecionados.</li>
        <li>Clique na ação desejada. O sistema processará as requisições em segundo plano e efetuará o download de um único arquivo compactado (<strong>.zip</strong>) contendo todas as planilhas selecionadas.</li>
    </ol>
    <div class="dica">
        <span class="material-icons-round">bolt</span>
        <p>A exportação em lote é ideal para contribuintes que possuem o envio do balancete fragmentado (ex: arquivos mensais) e necessitam da análise de um exercício inteiro consolidado.</p>
    </div>
  </div>
</div>f