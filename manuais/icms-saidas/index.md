---
layout: manual
title: "ICMS das Saídas"
versao: "1.0"
github_url: "https://github.com/psa-elevate/icms-saidas"
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
    title: "3. Filtros de busca e configuração"
  - id: secao-4
    title: "4. T01 - Apuração e recolhimentos"
  - id: secao-5
    title: "5. T02 - Conciliação por CFOP"
  - id: secao-6
    title: "6. T03.1 - Saídas (famílias fiscais)"
    items:
      - id: secao-6-1
        title: "6.1. Açúcar"
      - id: secao-6-2
        title: "6.2. Etanol interno e interestadual"
      - id: secao-6-3
        title: "6.3. Resíduos e sucata"
      - id: secao-6-4
        title: "6.4. Biodiesel"
  - id: secao-7
    title: "7. T03.2 - Saídas ST (substituição tributária)"
  - id: secao-8
    title: "8. Lançamento de correções manuais"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>ICMS das Saídas</strong>, parte do sistema de ferramentas digitais da PSA Consultores.</p>
    <p>A ferramenta permite realizar a apuração, reconciliação e classificação fiscal detalhada das operações de saída. O sistema divide a análise em grandes blocos (Apuração Geral, Conciliação por CFOP, e Análise por Famílias Fiscais), permitindo a validação de cálculos e a inserção de correções manuais para garantir a conformidade tributária.</p>
    <h3>Principais funcionalidades</h3>
    <ul>
        <li><strong>Apuração consolidada:</strong> resume os valores de ICMS por período e compara o escriturado com o recolhido.</li>
        <li><strong>Conciliação por CFOP:</strong> detalha a relação entre itens de nota, resumos analíticos e totalizadores do SPED.</li>
        <li><strong>Famílias fiscais especializadas:</strong> segmenta Açúcar, Etanol, Resíduos, Sucata, Biodiesel e cenários de ST em abas específicas.</li>
        <li><strong>Correções manuais:</strong> permite registrar ajustes que recalculam automaticamente os totais do resumo mensal.</li>
    </ul>
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Revisão de ajustes:</strong> use correções manuais apenas quando houver evidência documental para o ajuste, pois elas impactam diretamente os totalizadores e os indicadores comparativos da ferramenta.</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/1-tela-inicio.png" class="img-screenshot" alt="Tela inicial ICMS das Saídas">
        </div>
        <p class="img-caption">Visão inicial da ferramenta ICMS das Saídas</p>
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
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-04-ambiente-dev.png" class="img-screenshot" alt="Seleção do ambiente Digital Dev">
        </div>
        <p class="img-caption">Escolha do ambiente da área Digital</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, identifique o cartão correspondente e clique no botão <strong>"Acessar Ferramenta"</strong> no módulo de ICMS das Saídas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-05-hub-ferramentas.png" class="img-screenshot" alt="Hub de Ferramentas">
        </div>
        <p class="img-caption">Visão geral do Hub de Ferramentas</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Filtros de busca e configuração</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para iniciar as apurações, preencha os parâmetros no painel superior.</p>
    <p>Selecione o <strong>Cliente</strong> e, em seguida, o <strong>Contribuinte</strong> (CNPJ) para o qual deseja carregar as operações.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/2-filtro-cliente.png" class="img-screenshot" alt="Filtro de Cliente">
        </div>
        <p class="img-caption">Seleção do Cliente</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3-filtro-contribuinte.png" class="img-screenshot" alt="Filtro de Contribuinte">
        </div>
        <p class="img-caption">Seleção do Contribuinte</p>
    </div>
    <p>Utilize os calendários para definir a <strong>Data Início</strong> e a <strong>Data Fim</strong> do período de análise.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4-filtro-periodo.png" class="img-screenshot" alt="Filtro de Período">
        </div>
        <p class="img-caption">Seleção das datas de análise</p>
    </div>
    <p>Para limpar as seleções e iniciar uma nova pesquisa, clique no botão <strong>Limpar filtros</strong>. Após configurar os parâmetros corretamente, clique em <strong>Buscar produtos</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5-limpar-filtros.png" class="img-screenshot" alt="Limpar Filtros">
        </div>
        <p class="img-caption">Botão para limpar os filtros atuais</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">T01 - Apuração e recolhimentos</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A aba <strong>T01 - Apuração</strong> traz um resumo gerencial. A primeira tabela apresenta o resumo consolidado por mês (Débitos, Créditos, Estornos e Totais a Recolher).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6-resultado-busca-apuracao-resumo.png" class="img-screenshot" alt="Resumo T01">
        </div>
        <p class="img-caption">Visão do Resumo Mensal da Apuração</p>
    </div>
    <p>Abaixo, são apresentadas as matrizes de apuração, que comparam o valor escriturado na EFD contra o que foi efetivamente recolhido, destacando possíveis diferenças.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7-apuracao-icms-normal-matriz.png" class="img-screenshot" alt="Matriz ICMS Normal">
        </div>
        <p class="img-caption">Matriz de apuração do ICMS Normal</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8-apuracao-icms-difal-matriz.png" class="img-screenshot" alt="Matriz DIFAL">
        </div>
        <p class="img-caption">Matriz de apuração do DIFAL</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">T02 - Conciliação por CFOP</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A aba <strong>T02 - CFOP</strong> permite conciliar os valores consolidados. A tela exibe duas tabelas fundamentais: o agrupamento pelas notas físicas (Registro C170) e o resumo analítico escriturado no SPED (Registro C190).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/9-cfop-itens-nota.png" class="img-screenshot" alt="Itens da Nota C170">
        </div>
        <p class="img-caption">Agrupamento de itens por CFOP com base no C170</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/10-cfop-resumo-analitico-c190.png" class="img-screenshot" alt="Resumo Analítico C190">
        </div>
        <p class="img-caption">Resumo analítico do SPED (Registro C190)</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">T03.1 - Saídas (famílias fiscais)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>O sistema organiza as saídas em sub-abas chamadas "Famílias Fiscais". Cada família possui sua própria <strong>Base Legal</strong>, regras de cálculo e colunas customizadas para atender à legislação tributária aplicável.</p>

    <h3 id="secao-6-1">6.1. Açúcar</h3>
    <p>Na aba de Açúcar, você confere o cálculo do ICMS Normal e as incidências dos fundos de amparo (FUNDES, FUNDED), previstos na Base Legal informada na tela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/11-saidas-acucar-base-legal-resumo.png" class="img-screenshot" alt="Açúcar Base Legal">
        </div>
        <p class="img-caption">Base legal e resumo mensal de Açúcar</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/12-saidas-acucar-analise.png" class="img-screenshot" alt="Açúcar Análise Detalhada">
        </div>
        <p class="img-caption">Análise detalhada, linha a linha, da família Açúcar</p>
    </div>

    <h3 id="secao-6-2">6.2. Etanol interno e interestadual</h3>
    <p>Para o Etanol Interno, as tabelas exibem cálculos focados na PMPF (Preço Médio Ponderado ao Consumidor Final) e Bases Calculadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13-saidas-etanol-interno-base-legal.png" class="img-screenshot" alt="Etanol Interno Base Legal">
        </div>
        <p class="img-caption">Etanol Interno: Regras e Legislação aplicáveis</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/14-saidas-etanol-interno-resumo-analise.png" class="img-screenshot" alt="Etanol Interno Análise">
        </div>
        <p class="img-caption">Análise detalhada de Etanol Interno</p>
    </div>
    <p>Para o Etanol Interestadual, o foco do cálculo ajusta-se para contemplar o ICMS Devido, Crédito Outorgado e repasses a fundos como o FUNDEIC.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/15-saidas-etanol-interestadual-base-legal-resumo.png" class="img-screenshot" alt="Etanol Interestadual Base Legal">
        </div>
        <p class="img-caption">Etanol Interestadual: Resumo e Base Legal</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/16-saidas-etanol-interestadual-analise.png" class="img-screenshot" alt="Etanol Interestadual Análise">
        </div>
        <p class="img-caption">Análise detalhada do Etanol Interestadual</p>
    </div>

    <h3 id="secao-6-3">6.3. Resíduos e sucata</h3>
    <p>As famílias de Resíduos de Produção e Sucata costumam ter benefícios de diferimento, redução de base ou isenção, não possuindo totalizadores mensais complexos, focando-se na validação da incidência do ICMS na tabela de detalhe.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17-saidas-residuo-prod-base-legal-analise.png" class="img-screenshot" alt="Resíduos Base Legal">
        </div>
        <p class="img-caption">Operações com Resíduos de Produção</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/18-saidas-sucata-base-legal-analise.png" class="img-screenshot" alt="Sucata Base Legal">
        </div>
        <p class="img-caption">Análise e base legal para operações com Sucata</p>
    </div>

    <h3 id="secao-6-4">6.4. Biodiesel</h3>
    <p>A aba Biodiesel incorpora as alíquotas Ad Rem, as bases recalculadas (ICMS_17) e contribuições aos fundos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/19-saidas-biodiesel-base-legal-resumo.png" class="img-screenshot" alt="Biodiesel Base Legal">
        </div>
        <p class="img-caption">Base legal e resumo do Biodiesel</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/20-saidas-biodiesel-analise.png" class="img-screenshot" alt="Biodiesel Análise">
        </div>
        <p class="img-caption">Análise detalhada de Biodiesel</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">T03.2 - Saídas ST (substituição tributária)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Operações sujeitas à Substituição Tributária (ST) são separadas na aba T03.2. As colunas são adaptadas para exibir MVA, Base de Cálculo ST e ICMS ST.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/21-saidas-st-acucar-resumo.png" class="img-screenshot" alt="Açúcar ST Resumo">
        </div>
        <p class="img-caption">Açúcar ST - Resumo de totais por competência</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/22-saidas-st-acucar-analise.png" class="img-screenshot" alt="Açúcar ST Análise">
        </div>
        <p class="img-caption">Análise detalhada de saídas de Açúcar ST</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/23-saidas-st-etanol-interestadual-resumo.png" class="img-screenshot" alt="Etanol Interestadual ST Resumo">
        </div>
        <p class="img-caption">Etanol Interestadual ST - Resumo por competência</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/24-saidas-st-etanol-interestadual-analise.png" class="img-screenshot" alt="Etanol Interestadual ST Análise">
        </div>
        <p class="img-caption">Análise detalhada de Etanol Interestadual ST</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Lançamento de correções manuais</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>O sistema permite adicionar linhas de ajustes (correções) em determinadas famílias (ex: Açúcar, Etanol Interestadual, Biodiesel) para alinhar a base com as apurações corretas. Esse lançamento altera automaticamente os totalizadores do "Resumo Mensal".</p>
    <p>Para incluir um ajuste, clique no botão <strong>Adicionar correção</strong> disponível na aba correspondente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/25-saidas-acucar-nova-correcao.png" class="img-screenshot" alt="Nova Correção Açúcar">
        </div>
        <p class="img-caption">Formulário de Nova Correção (Exemplo: Açúcar)</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/26-saidas-etanol-interestadual-nova-correcao.png" class="img-screenshot" alt="Nova Correção Etanol">
        </div>
        <p class="img-caption">Formulário de Nova Correção (Exemplo: Etanol Interestadual)</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/27-saidas-biodiesel-nova-correcao.png" class="img-screenshot" alt="Nova Correção Biodiesel">
        </div>
        <p class="img-caption">Formulário de Nova Correção (Exemplo: Biodiesel)</p>
    </div>
    <p>Após inserir o ajuste, o sistema exibe um selo informando quantas correções foram aplicadas àquela família. A linha de correção será exibida na tabela com a numeração destacada ("CORREÇÃO").</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/28-saidas-acucar-contagem-correcao.png" class="img-screenshot" alt="Contagem de Correções">
        </div>
        <p class="img-caption">Indicativo de correções ativas no Resumo Mensal</p>
    </div>
  </div>
</div>
