---
layout: manual
title: "Consulta de XMLs"
versao: "3.0"
github_url: "https://github.com/psa-elevate/consulta-xmls"
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
    title: "3. Navegação no ambiente Digital Dev"
    items:
      - id: secao-2-3
        title: "3.1. Abertura da ferramenta de consulta"
      - id: secao-2-4
        title: "3.2. Ajuste de visualização"
  - id: secao-3
    title: "3. Aplicação de filtros de consulta"
    items:
      - id: secao-3-1
        title: "3.1. Visão geral dos filtros"
      - id: secao-3-2
        title: "3.2. Filtro de cliente"
      - id: secao-3-3
        title: "3.3. Filtro de contribuinte"
      - id: secao-3-4
        title: "3.4. Filtro de tipo de documento (DOC)"
      - id: secao-3-5
        title: "3.5. Filtro de tipo de movimentação (MOV)"
      - id: secao-3-6
        title: "3.6. Filtro de período (data)"
      - id: secao-3-7
        title: "3.7. Filtro por emitente"
      - id: secao-3-8
        title: "3.8. Filtro por destinatário"
      - id: secao-3-9
        title: "3.9. Filtro por chave de acesso"
  - id: secao-4
    title: "4. Execução da busca e análise de resultados"
    items:
      - id: secao-4-1
        title: "4.1. Acionamento da consulta"
      - id: secao-4-2
        title: "4.2. Carregamento dos dados"
      - id: secao-4-3
        title: "4.3. Estrutura da tabela de resultados"
      - id: secao-4-4
        title: "4.4. Paginação dos resultados"
  - id: secao-5
    title: "5. Exportação avançada para Excel"
    items:
      - id: secao-5-1
        title: "5.1. Abertura do modal de exportação"
      - id: secao-5-2
        title: "5.2. Seleção de colunas"
      - id: secao-5-3
        title: "5.3. Salvar novo perfil de exportação"
      - id: secao-5-4
        title: "5.4. Seleção de perfis de exportação"
      - id: secao-5-5
        title: "5.5. Excluir perfil de exportação"
      - id: secao-5-6
        title: "5.6. Favoritar perfil (definir como padrão)"
      - id: secao-5-7
        title: "5.7. Visualização prévia (preview)"
      - id: secao-5-8
        title: "5.8. Conclusão da exportação"
  - id: secao-6
    title: "6. Ações individuais e limpeza"
    items:
      - id: secao-6-1
        title: "6.1. Download de arquivos originais"
      - id: secao-6-2
        title: "6.2. Limpeza de filtros"
---

<!-- SEÇÃO INTRO -->
<div class="secao" id="secao-intro">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>Consulta de XMLs</strong>, parte integrante do sistema PSA Elevate. A ferramenta permite buscar, filtrar, visualizar, exportar e baixar arquivos no formato XML (NFe e CTe) de forma centralizada e eficiente.</p>
    <p>O objetivo deste documento é orientar os analistas fiscais na utilização completa dos recursos disponíveis, desde a aplicação dos filtros de consulta até a exportação personalizada dos dados para Excel e o download dos arquivos originais.</p>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p>Para uma consulta eficiente, certifique-se de preencher os filtros obrigatórios: cliente, contribuinte, tipo de documento (DOC), data início e data fim antes de acionar a busca.</p>
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

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Navegação no ambiente Digital Dev</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-2-3">3.1. Abertura da ferramenta de consulta</h3>
    <p>Para acessar a ferramenta de consulta de XML, clique em "Consulta de XMLs" no menu lateral. O sistema irá abrir a página da ferramenta. Inicialmente, nenhum dado será carregado.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/2.3. Abertura da ferramenta de consulta.png" class="img-screenshot" alt="Abertura da ferramenta de consulta">
        </div>
        <p class="img-caption">Navegação pelo menu lateral para a Consulta de XMLs</p>
    </div>

    <h3 id="secao-2-4">3.2. Ajuste de visualização</h3>
    <p>Para minimizar o painel lateral e ampliar a visualização da página da ferramenta, clique na seta no topo do painel, ao lado do título da ferramenta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/2.4. Ajuste de visualização.png" class="img-screenshot" alt="Ajuste de visualização">
        </div>
        <p class="img-caption">Minimizando o menu lateral para melhor visualização</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Aplicação de filtros de consulta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-3-1">3.1. Visão geral dos filtros</h3>
    <p>Para realizar a consulta, é necessário preencher os filtros obrigatórios: cliente, contribuinte, tipo DOC, data início e data fim; os demais filtros são opcionais.</p>

    <h3 id="secao-3-2">3.2. Filtro de cliente</h3>
    <p>Para filtrar o cliente, clique no filtro correspondente. Uma lista suspensa será aberta com a lista de todos os clientes cadastrados; selecione apenas o cliente que deseja consultar.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.2. Filtro de cliente.png" class="img-screenshot" alt="Filtro de cliente">
        </div>
        <p class="img-caption">Seleção do cliente na lista suspensa</p>
    </div>

    <h3 id="secao-3-3">3.3. Filtro de contribuinte</h3>
    <p>Para filtrar o contribuinte (empresas ou pessoas físicas vinculadas ao cliente), clique no filtro e escolha uma opção na lista suspensa. É permitido selecionar apenas um por consulta. Caso haja apenas um cadastrado, o sistema fará a seleção automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.3. Filtro de contribuinte.png" class="img-screenshot" alt="Filtro de contribuinte">
        </div>
        <p class="img-caption">Seleção do contribuinte específico</p>
    </div>

    <h3 id="secao-3-4">3.4. Filtro de tipo de documento (DOC)</h3>
    <p>Para filtrar o tipo DOC, que consiste no tipo de documento a ser consultado, clique no filtro e escolha entre NFe e CTe.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.4. Filtro de tipo de documento (DOC).png" class="img-screenshot" alt="Filtro de tipo de documento (DOC)">
        </div>
        <p class="img-caption">Escolha entre Nota Fiscal ou Conhecimento de Transporte</p>
    </div>

    <h3 id="secao-3-5">3.5. Filtro de tipo de movimentação (MOV)</h3>
    <p>Para filtrar o tipo MOV, que consiste no tipo de movimentação dos XMLs, clique no filtro e escolha entre todos, entradas ou saídas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.5. Filtro de tipo de movimentação (MOV).png" class="img-screenshot" alt="Filtro de tipo de movimentação (MOV)">
        </div>
        <p class="img-caption">Definição do fluxo de movimentação dos documentos</p>
    </div>

    <h3 id="secao-3-6">3.6. Filtro de período (data)</h3>
    <p>Para filtrar pela data, clique no filtro de "Data início" para selecionar o começo do período da consulta, e no filtro de "Data fim" para selecionar o término do período.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.6. Filtro de período (data).png" class="img-screenshot" alt="Filtro de período (data)">
        </div>
        <p class="img-caption">Uso do calendário para definição de datas</p>
    </div>

    <h3 id="secao-3-7">3.7. Filtro por emitente</h3>
    <p>Para filtrar por CPF/CNPJ emitente, clique no filtro e digite o documento correspondente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.7. Filtro por emitente.png" class="img-screenshot" alt="Filtro por emitente">
        </div>
        <p class="img-caption">Busca focada por CNPJ ou CPF do emitente</p>
    </div>

    <h3 id="secao-3-8">3.8. Filtro por destinatário</h3>
    <p>Para filtrar por CPF/CNPJ destinatário, clique no filtro e digite o documento correspondente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.8. Filtro por destinatário.png" class="img-screenshot" alt="Filtro por destinatário">
        </div>
        <p class="img-caption">Busca focada por CNPJ ou CPF do destinatário</p>
    </div>

    <h3 id="secao-3-9">3.9. Filtro por chave de acesso</h3>
    <p>Para filtrar pela chave de acesso, clique no filtro e digite o número correspondente ao documento (NFe ou CTe).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3.9. Filtro por chave de acesso.png" class="img-screenshot" alt="Filtro por chave de acesso">
        </div>
        <p class="img-caption">Busca exata pela chave do documento fiscal</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Execução da busca e análise de resultados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1. Acionamento da consulta</h3>
    <p>Após preencher os filtros necessários, clique no botão "Buscar" para realizar a consulta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.1. Acionamento da consulta.png" class="img-screenshot" alt="Acionamento da consulta">
        </div>
        <p class="img-caption">Acionamento do botão buscar com filtros preenchidos</p>
    </div>

    <h3 id="secao-4-2">4.2. Carregamento dos dados</h3>
    <p>Após alguns instantes, a ferramenta carregará na página uma tabela contendo a lista de arquivos XMLs encontrados.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.2. Carregamento dos dados.png" class="img-screenshot" alt="Carregamento dos dados">
        </div>
        <p class="img-caption">Tabela populada após o carregamento da busca</p>
    </div>

    <h3 id="secao-4-3">4.3. Estrutura da tabela de resultados</h3>
    <p>Cada linha da tabela corresponderá a um arquivo XML. Para cada arquivo, a tabela mostrará as informações de: CNPJ emitente, razão social, chave de acesso, UF, número, data de emissão, valor, produtos e ações.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.3. Estrutura da tabela de resultados.png" class="img-screenshot" alt="Estrutura da tabela de resultados">
        </div>
        <p class="img-caption">Colunas e dados disponíveis no grid de resultados</p>
    </div>

    <h3 id="secao-4-4">4.4. Paginação dos resultados</h3>
    <p>A tabela exibe um limite de 10 arquivos por página. Vá até o rodapé da tabela e clique no botão "Próximo" para avançar e visualizar as demais páginas, ou clique em "Anterior" para retroceder.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4.4. Paginação dos resultados.png" class="img-screenshot" alt="Paginação dos resultados">
        </div>
        <p class="img-caption">Controles de navegação no rodapé da tabela</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Exportação avançada para Excel</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1. Abertura do modal de exportação</h3>
    <p>Para consolidar os dados em uma planilha, clique no botão "Exportar Excel" na barra superior. Uma janela será aberta. Atenção: a exportação engloba todos os arquivos carregados no filtro atual, e não apenas os que estão visíveis na página atual da tabela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.1. Abertura do modal de exportação.png" class="img-screenshot" alt="Abertura do modal de exportação">
        </div>
        <p class="img-caption">Acesso à interface de exportação personalizada</p>
    </div>

    <h3 id="secao-5-2">5.2. Seleção de colunas</h3>
    <p>Na opção "Colunas", você pode escolher exatamente quais informações deseja exportar. Os dados estão divididos em categorias (como documento, emitente, destinatário, etc.). Clique sobre uma categoria para expandi-la e marque as caixas das colunas desejadas. Utilize os botões "Marcar todos" ou "Desmarcar todos" para agilizar o processo.</p>
 <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.2. Seleção de colunas.png" class="img-screenshot" alt="Seleção de colunas">
        </div>
        <p class="img-caption">Seleção das colunas necessárias para exportação</p>
    </div>

    <h3 id="secao-5-3">5.3. Salvar novo perfil de exportação</h3>
    <p>Para não precisar selecionar as mesmas colunas toda vez, você pode salvar a sua seleção. Após escolher as colunas, clique no botão "Salvar" na parte superior. Um pequeno modal se abrirá para que você digite o nome do seu novo perfil. Em seguida, clique em "Salvar" neste novo modal.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.3. Salvar novo perfil de exportação.png" class="img-screenshot" alt="Salvar novo perfil de exportação">
        </div>
        <p class="img-caption">Criação de um novo perfil com a seleção atual</p>
    </div>

    <h3 id="secao-5-4">5.4. Seleção de perfis de exportação</h3>
    <p>Para usar um perfil salvo, clique na lista suspensa no topo. Você verá a lista de todos os seus perfis.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.4. Seleção de perfis de exportação.png" class="img-screenshot" alt="Seleção de perfis de exportação">
        </div>
        <p class="img-caption">Carregando um perfil de exportação salvo anteriormente</p>
    </div>

    <h3 id="secao-5-5">5.5. Excluir perfil de exportação</h3>
    <p>Para excluir um perfil que não usa mais, selecione-o nesta lista e depois clique no botão vermelho "Excluir" (ícone de lixeira) localizado ao lado dos botões de salvar e favoritar.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.5. Excluir perfil de exportação.png" class="img-screenshot" alt="Excluir perfil de exportação">
        </div>
        <p class="img-caption">Remoção de perfis de exportação</p>
    </div>

    <h3 id="secao-5-6">5.6. Favoritar perfil (definir como padrão)</h3>
    <p>Se você usa um perfil com muita frequência, pode defini-lo como padrão. Após carregar o perfil desejado na lista suspensa, clique no botão "Favoritar" (ícone de estrela). A estrela ficará destacada (amarela), indicando que este perfil será carregado automaticamente sempre que você abrir a exportação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.6. Favoritar perfil (definir como padrão).png" class="img-screenshot" alt="Favoritar perfil (definir como padrão)">
        </div>
        <p class="img-caption">Definindo um perfil como carregamento padrão</p>
    </div>

    <h3 id="secao-5-7">5.7. Visualização prévia (preview)</h3>
    <p>Antes de baixar o arquivo, clique na opção "Preview" no topo da janela. Esta visualização mostrará uma prévia de como a sua planilha ficará, exibindo as colunas selecionadas e os 10 primeiros registros da sua busca.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.7. Visualização prévia (preview).png" class="img-screenshot" alt="Visualização prévia (preview)">
        </div>
        <p class="img-caption">Conferência dos dados antes da geração do Excel</p>
    </div>

    <h3 id="secao-5-8">5.8. Conclusão da exportação</h3>
    <p>Após configurar as colunas desejadas, clique no botão verde "Exportar Excel" localizado no canto inferior direito da janela. O sistema processará os dados e fará o download da planilha consolidada.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5.8. Conclusão da exportação.png" class="img-screenshot" alt="Conclusão da exportação">
        </div>
        <p class="img-caption">Finalizando o processo de download da planilha</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Ações individuais e limpeza</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-6-1">6.1. Download de arquivos originais</h3>
    <p>Para baixar o arquivo XML no formato original, localize a nota desejada na tabela e clique no ícone de download na coluna de ações, no final da linha correspondente. O arquivo será baixado individualmente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6.1. Download de arquivos originais.png" class="img-screenshot" alt="Download de arquivos originais">
        </div>
        <p class="img-caption">Baixando arquivo XML de uma nota específica</p>
    </div>

    <h3 id="secao-6-2">6.2. Limpeza de filtros</h3>
    <p>Para iniciar uma nova consulta, clique no botão "Limpar filtros". Após esse processo, os filtros aplicados serão redefinidos e você poderá realizar uma nova busca.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6.2. Limpeza de filtros.png" class="img-screenshot" alt="Limpeza de filtros">
        </div>
        <p class="img-caption">Resetando os parâmetros de busca para uma nova consulta</p>
    </div>
  </div>
</div>
