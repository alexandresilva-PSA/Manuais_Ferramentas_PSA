---
layout: manual
title: "Mapa NCM"
versao: "1.0"
github_url: "https://github.com/psa-elevate/mapa-ncm"
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
    title: "3. Conhecendo a ferramenta"
    items:
      - id: secao-3-1
        title: "3.1. Navegação até o Mapa NCM"
      - id: secao-3-2
        title: "3.2. Visão geral da interface"
  - id: secao-4
    title: "4. Utilizando os filtros de busca"
    items:
      - id: secao-4-1
        title: "4.1. Busca livre (texto)"
      - id: secao-4-2
        title: "4.2. Filtro por setor"
      - id: secao-4-3
        title: "4.3. Filtro por permissão de crédito"
      - id: secao-4-4
        title: "4.4. Filtros de coluna e ordenação"
  - id: secao-5
    title: "5. Navegando na tabela de regras"
    items:
      - id: secao-5-1
        title: "5.1. Colunas de dados fiscais"
      - id: secao-5-2
        title: "5.2. Ações: visualizar e excluir"
  - id: secao-6
    title: "6. Detalhamento e cadastro de regras"
    items:
      - id: secao-6-1
        title: "6.1. Visualização detalhada (cartões)"
      - id: secao-6-2
        title: "6.2. Cadastrando uma nova regra"
      - id: secao-6-3
        title: "6.3. Editando uma regra existente"
  - id: secao-7
    title: "7. Boas práticas e análise"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>Mapa NCM</strong>, parte integrante do sistema PSA Elevate. Esta ferramenta atua como a inteligência central para a parametrização de regras fiscais de PIS/COFINS por NCM (Nomenclatura Comum do Mercosul) e segmento de negócio.</p>
    <p>O objetivo deste documento é orientar os analistas fiscais na manutenção da base de conhecimento tributário, garantindo que as regras de CST, base legal e permissões de crédito estejam atualizadas para consumo nos módulos de apuração e correções do SPED.</p>
    <h3>Principais funcionalidades</h3>
    <ul>
        <li><strong>Busca inteligente:</strong> localize tratamentos tributários por NCM, base legal ou setor rapidamente.</li>
        <li><strong>Gestão de regras:</strong> criação, edição e exclusão de regras fiscais com trilha de análise.</li>
        <li><strong>Segmentação:</strong> definição de regras específicas baseadas no setor/segmento do contribuinte.</li>
        <li><strong>Controle de vigência:</strong> histórico de validade (Início/Fim) para cada regra estabelecida.</li>
    </ul>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p><strong>Organização da base:</strong> mantenha nomes de setor, vigências e bases legais sempre consistentes para evitar duplicidade de regras e conflitos de prioridade nos módulos consumidores.</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-acesso">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Acesso e autenticação</h2>
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
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>. Este é o ambiente de criação, desenvolvimento e utilização das ferramentas fiscais automatizadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-04-ambiente-dev.png" class="img-screenshot" alt="Seleção do ambiente Digital Dev">
        </div>
        <p class="img-caption">Escolha do ambiente da área Digital</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Utilize a seção "Sessões em Andamento" para retomar trabalhos recentes ou localize o cartão correspondente e clique no botão <strong>"Acessar Ferramenta"</strong>.</p>
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
    <h2 class="editable-text">Conhecendo a ferramenta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-3-1">3.1. Navegação até o Mapa NCM</h3>
    <p>No menu lateral esquerdo do ambiente Digital Dev, localize a seção de ferramentas tributárias e clique na opção <strong>Mapa NCM</strong>.</p>

    <h3 id="secao-3-2">3.2. Visão geral da interface</h3>
    <p>A tela é dividida em duas partes principais: o painel superior de <strong>Filtros de Busca</strong> e a grade de dados (tabela) contendo as regras fiscais de PIS/COFINS já cadastradas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/1-tela-inicial-ferramenta.png" class="img-screenshot" alt="Visão geral da tela do Mapa NCM">
        </div>
        <p class="img-caption">Interface principal do Mapa NCM</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Utilizando os filtros de busca</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>O painel de filtros permite localizar tratamentos tributários específicos em uma base de dados extensa.</p>

    <h3 id="secao-4-1">4.1. Busca livre (texto)</h3>
    <p>Utilize o campo <strong>Buscar</strong> para digitar qualquer termo relacionado à regra. O sistema buscará instantaneamente correspondências no código do NCM, na descrição do CST, na base legal ou no nome do setor.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/2-filtro-busca.png" class="img-screenshot" alt="Filtro de busca livre">
        </div>
        <p class="img-caption">Filtro de texto para busca rápida</p>
    </div>
    
    <h3 id="secao-4-2">4.2. Filtro por setor</h3>
    <p>Selecione um segmento de negócio no menu suspenso <strong>Setor</strong> para visualizar apenas as regras aplicáveis a contribuintes daquela área específica de atuação.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3-filtro-setor.png" class="img-screenshot" alt="Filtro de Setor">
        </div>
        <p class="img-caption">Seleção do segmento de negócio aplicável à regra</p>
    </div>

    <h3 id="secao-4-3">4.3. Filtro por permissão de crédito</h3>
    <p>Utilize o filtro <strong>Permite Crédito</strong> (Sim/Não) para isolar rapidamente operações monofásicas, alíquota zero ou tributadas que geram ou não direito a crédito.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4-filtro-permite-credito.png" class="img-screenshot" alt="Filtro de Permite Crédito">
        </div>
        <p class="img-caption">Isolando operações geradoras de crédito</p>
    </div>

    <h3 id="secao-4-4">4.4. Filtros de coluna e ordenação</h3>
    <p>Além dos filtros globais superiores, cada cabeçalho de coluna na tabela possui ícones para ordenação (crescente/decrescente) e filtros específicos (ex: exibir apenas CST 01 e CST 04).</p>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Navegando na tabela de regras</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1. Colunas de dados fiscais</h3>
    <p>A tabela de resultados consolida as informações mais importantes:</p>
    <ul>
        <li><strong>NCM:</strong> O código da mercadoria.</li>
        <li><strong>Setor:</strong> O segmento ao qual a regra se aplica.</li>
        <li><strong>CST PIS/COFINS e Descrição:</strong> O tratamento tributário definido.</li>
        <li><strong>Base Legal:</strong> O amparo normativo (Lei, Decreto, ADI) da regra.</li>
        <li><strong>Crédito:</strong> Status visual (em verde "Sim", em cinza "Não") indicando o direito a crédito.</li>
    </ul>

    <h3 id="secao-5-2">5.2. Ações: visualizar e excluir</h3>
    <p>Na última coluna à direita (Ações), você encontra os controles individuais:</p>
    <ul>
        <li><strong>Ícone de olho (visualizar):</strong> abre os detalhes completos da regra. (Você também pode clicar em qualquer lugar da linha para obter o mesmo resultado).</li>
        <li><strong>Ícone de lixeira (excluir):</strong> remove a regra permanentemente. O sistema solicitará uma confirmação de segurança.</li>
    </ul>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5-excluir-regra.png" class="img-screenshot" alt="Excluir regra">
        </div>
        <p class="img-caption">Confirmação de segurança ao excluir uma regra do Mapa NCM</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Detalhamento e cadastro de regras</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-6-1">6.1. Visualização detalhada (cartões)</h3>
    <p>Ao clicar em uma regra ou buscar por um NCM específico no sistema, um painel lateral se abre exibindo as regras atreladas àquele código. É possível visualizar dados adicionais como o <strong>período de vigência</strong>, observações internas e os dados de quem criou/editou e quando.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6-detalhes-da-regra.png" class="img-screenshot" alt="Detalhes da regra">
        </div>
        <p class="img-caption">Painel de visualização com todos os dados da regra fiscal</p>
    </div>

    <h3 id="secao-6-2">6.2. Cadastrando uma nova regra</h3>
    <p>Para adicionar um novo tratamento tributário, clique no botão verde <strong>+ Nova Regra</strong> no painel de filtros. Um formulário lateral se abrirá.</p>
    <p>Preencha atentamente os campos obrigatórios: NCM, CST aplicável e a permissão de crédito. Recomenda-se sempre preencher a base legal correspondente e a vigência correta.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7-nova-regra-ncm.png" class="img-screenshot" alt="Formulário de nova regra">
        </div>
        <p class="img-caption">Painel lateral para cadastro de nova regra no Mapa NCM</p>
    </div>

    <h3 id="secao-6-3">6.3. Editando uma regra existente</h3>
    <p>Ao visualizar os detalhes de uma regra, clique no botão <strong>Editar</strong> com ícone de lápis. O mesmo formulário lateral se abrirá com os dados atuais preenchidos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8-editar-regra.png" class="img-screenshot" alt="Editar Regra">
        </div>
        <p class="img-caption">Editando as propriedades tributárias de uma regra já existente</p>
    </div>
    <p>Altere as informações necessárias e clique em "Salvar". O sistema registrará automaticamente a trilha de análise dessa alteração. Para sair do painel lateral e voltar à tabela principal, clique fora da janela ou utilize a tecla ESC.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/9-voltar-pagina-inicial.png" class="img-screenshot" alt="Voltar à página inicial">
        </div>
        <p class="img-caption">Fechando o painel de detalhes da regra</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Boas práticas e análise</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Cuidado com vigências conflitantes:</strong> ao cadastrar uma regra para o mesmo NCM e mesmo Setor, certifique-se de que a data de vigência fim da regra anterior não se sobreponha à vigência início da nova regra.</p>
    </div>
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Análise automática:</strong> todas as ações de criação, edição e exclusão no Mapa NCM são gravadas permanentemente nos registros de análise do sistema, contendo o autor da modificação e a diferença (o que foi alterado) de cada campo.</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p><strong>Regras genéricas vs específicas:</strong> se uma regra se aplica a todos os setores de negócio, deixe o campo Setor vazio (ou genérico). O sistema de apuração sempre dará prioridade a uma regra com setor específico antes de aplicar a genérica.</p>
    </div>
  </div>
</div>
