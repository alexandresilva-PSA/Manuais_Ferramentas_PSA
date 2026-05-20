---
layout: manual
title: "Apuração PIS/COFINS"
versao: "1.0"
github_url: "https://github.com/psa-elevate/apuracao-pis-cofins"
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
    title: "3. Visão geral da ferramenta"
  - id: secao-4
    title: "4. Filtros de busca e configuração"
    items:
      - id: secao-4-1
        title: "4.1. Seleção de cliente e contribuinte"
      - id: secao-4-2
        title: "4.2. Tipo de análise (EFD vs. Balancete)"
      - id: secao-4-3
        title: "4.3. Período de apuração"
  - id: secao-5
    title: "5. Navegação pelas abas de resultados (modo EFD/Cliente)"
    items:
      - id: secao-5-1
        title: "5.1. Resumo"
      - id: secao-5-2
        title: "5.2. Débitos"
      - id: secao-5-3
        title: "5.3. Créditos"
      - id: secao-5-4
        title: "5.4. Apuração"
      - id: secao-5-5
        title: "5.5. Rateio"
  - id: secao-6
    title: "6. Apuração via balancete (modo Prado)"
  - id: secao-7
    title: "7. Interação com as tabelas de dados"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta de <strong>Apuração PIS/COFINS</strong>, parte integrante do sistema PSA Elevate. Esta ferramenta consolida débitos, créditos, isenções e rateios do contribuinte para calcular o resultado do período e o saldo apurado mês a mês.</p>
    <p>O objetivo é permitir a conferência detalhada da base de cálculo, seja através da importação de dados do <strong>EFD Contribuições</strong> (Modo Cliente) ou do <strong>Balancete contábil</strong> (Modo Prado).</p>
    <h3>Principais funcionalidades</h3>
    <ul>
        <li><strong>Dois modos de análise:</strong> suporta apuração baseada em EFD Contribuições ou em Balancete contábil.</li>
        <li><strong>Visão por abas:</strong> distribui o resultado em Resumo, Débitos, Créditos, Apuração e Rateio.</li>
        <li><strong>Detalhamento por período:</strong> permite expandir anos e meses para validar a composição dos saldos.</li>
        <li><strong>Ferramentas de apoio:</strong> oferece filtros de coluna, filtros por conta e tooltips para interpretação da memória de cálculo.</li>
    </ul>
    <div class="dica">
        <span class="material-icons-round">lightbulb</span>
        <p><strong>Escolha do modo:</strong> defina corretamente o <em>Tipo de Análise</em> antes de consultar, pois isso altera as abas exibidas, os filtros aplicáveis e a origem dos dados apurados.</p>
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
    <p>Na tela de departamentos, abra a lista suspensa e selecione a opção <strong>"Digital"</strong> para acessar o sistema de gestão de demandas e às ferramentas internas.</p>
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
        <p class="img-caption">Seleção do ambiente de trabalho</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Identifique o cartão correspondente e clique no botão <strong>"Acessar Ferramenta"</strong> no módulo de Apuração PIS/COFINS.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-05-hub-ferramentas.png" class="img-screenshot" alt="Hub de Ferramentas">
        </div>
        <p class="img-caption">Acesso via Hub de Ferramentas</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">Visão geral da ferramenta</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A interface principal é composta por um painel superior de filtros de busca e uma seção de resultados organizada em abas (separadores). Um alerta inicial (em tom verde) resume o propósito da ferramenta: calcular e demonstrar a base de cálculo e saldos apurados mês a mês.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/1-visao-geral-ferramenta.png" class="img-screenshot" alt="Visão geral da Apuração PIS/COFINS">
        </div>
        <p class="img-caption">Interface principal destacando o painel de filtros e o alerta informativo</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Filtros de busca e configuração</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-4-1">4.1. Seleção de cliente e contribuinte</h3>
    <p>Obrigatório para iniciar. Selecione primeiro o <strong>Cliente</strong> (ou grupo) e, em seguida, o <strong>Contribuinte</strong> (CNPJ) alvo da apuração.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/2-filtro-cliente.png" class="img-screenshot" alt="Seleção de Cliente">
        </div>
        <p class="img-caption">Menu suspenso para seleção do Cliente</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3-filtro-contribuinte.png" class="img-screenshot" alt="Seleção de Contribuinte">
        </div>
        <p class="img-caption">Menu suspenso para seleção do Contribuinte (CNPJ)</p>
    </div>

    <h3 id="secao-4-2">4.2. Tipo de análise (EFD vs. Balancete)</h3>
    <p>Você pode escolher entre duas metodologias de análise através do menu "Tipo de análise":</p>
    <ul>
        <li><strong>Cliente (EFD):</strong> Utiliza os registros do EFD Contribuições como base para extrair os valores.</li>
        <li><strong>Prado (Balancete):</strong> Utiliza o balancete importado como base da análise.</li>
    </ul>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4-filtro-tipo-de-analise.png" class="img-screenshot" alt="Filtro Tipo de Análise">
        </div>
        <p class="img-caption">Seleção da fonte de dados para a apuração</p>
    </div>

    <h3 id="secao-4-3">4.3. Período de apuração</h3>
    <p>Defina a <strong>Data Início</strong> e a <strong>Data Fim</strong> (Mês/Ano). A data final deve ser igual ou superior à data inicial.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5-filtro-data-inicio-data-fim.png" class="img-screenshot" alt="Filtros de Período">
        </div>
        <p class="img-caption">Definição do intervalo de apuração</p>
    </div>
    <p>Após configurar, clique no botão <strong>Consultar</strong>. Caso queira redefinir os parâmetros, utilize o botão <strong>Limpar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6-limpar-filtros-nova-busca.png" class="img-screenshot" alt="Botão Limpar Filtros">
        </div>
        <p class="img-caption">Limpando os filtros para uma nova busca</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Navegação pelas abas de resultados (modo EFD/Cliente)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Ao consultar os dados (utilizando o Tipo de Análise "Cliente"), o sistema apresenta os resultados divididos nas seguintes abas:</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7-visao-geral-pos-busca.png" class="img-screenshot" alt="Visão geral após a busca">
        </div>
        <p class="img-caption">Interface carregada com as abas de resultados</p>
    </div>

    <h3 id="secao-5-1">5.1. Resumo</h3>
    <p>Apresenta a "Base da Apuração" (EFD Contribuições). Você pode utilizar o filtro de seleção múltipla para focar em contas contábeis específicas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8-filtro-conta-contabil.png" class="img-screenshot" alt="Filtro de conta contábil">
        </div>
        <p class="img-caption">Filtrando a base de dados por contas contábeis específicas</p>
    </div>

    <h3 id="secao-5-2">5.2. Débitos</h3>
    <p>Consolida os valores a pagar. Os itens com Código de Situação Tributária (CST) de 01 a 10 são considerados débitos, enquanto os CSTs de 04 a 09 representam as Isenções e Exclusões. Apresenta quadros de "Base Normal" e "Débitos do Mês" separados por PIS, COFINS e as respectivas Alíquotas Reduzidas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/9-aba-debitos.png" class="img-screenshot" alt="Aba Débitos">
        </div>
        <p class="img-caption">Cálculo detalhado dos Débitos apurados</p>
    </div>

    <h3 id="secao-5-3">5.3. Créditos</h3>
    <p>Demonstra os valores a abater. Para créditos, são considerados itens com CST de 50 a 66. As operações não geradoras de crédito abrangem os CSTs de 70 a 99.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/10-aba-creditos.png" class="img-screenshot" alt="Aba Créditos">
        </div>
        <p class="img-caption">Visualização do cálculo de créditos com valores mensais</p>
    </div>

    <h3 id="secao-5-4">5.4. Apuração</h3>
    <p>Demonstra o resultado final do PIS e da COFINS no período. Inclui a Contribuição Bruta, o Crédito do Mês, o Crédito Anterior, o Valor Devido e o Saldo Acumulado para o mês seguinte.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/11-aba-apuracao.png" class="img-screenshot" alt="Aba Apuração">
        </div>
        <p class="img-caption">Resumo final do valor devido e saldos acumulados</p>
    </div>

    <h3 id="secao-5-5">5.5. Rateio</h3>
    <p>Demonstra a distribuição percentual das receitas (tributadas no mercado interno, não tributadas e de exportação) e a respectiva aplicação sobre o crédito apurado, segmentados pelos códigos 101, 201 e 301 para PIS e COFINS.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/12-aba-rateio.png" class="img-screenshot" alt="Aba Rateio">
        </div>
        <p class="img-caption">Cálculo do percentual de rateio sobre as receitas</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Apuração via balancete (modo Prado)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Ao selecionar "Prado" no Tipo de Análise, o sistema constrói a apuração utilizando os saldos do balancete contábil como base.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13-tipo-analise-prado.png" class="img-screenshot" alt="Tipo de Análise Prado">
        </div>
        <p class="img-caption">Análise baseada nos saldos contábeis do Balancete</p>
    </div>

    <h4>Período fechado</h4>
    <p>Neste modo, o filtro <strong>"Período Fechado"</strong> fica disponível. Quando ativado, o sistema considera apenas as competências já encerradas no balancete para trazer o saldo final da conta, ao invés da movimentação periódica.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/14-filtro-periodo-fechado.png" class="img-screenshot" alt="Filtro Período Fechado">
        </div>
        <p class="img-caption">Opção para consultar apenas saldos de competências encerradas</p>
    </div>

    <h4>Navegação na árvore de contas</h4>
    <p>A aba Resumo exibe o plano de contas em formato hierárquico. Você pode expandir ou recolher as contas manualmente ou usar os botões globais ("Expandir Tudo" / "Recolher Tudo").</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/15-expandir-contas-manualmente.png" class="img-screenshot" alt="Expandir Contas Manualmente">
        </div>
        <p class="img-caption">Expansão de níveis do plano de contas</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/16-expandir-todas-as-contas.png" class="img-screenshot" alt="Botão Expandir Todas as Contas">
        </div>
        <p class="img-caption">Expandindo toda a hierarquia de contas de uma vez</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17-colapsar-todas-contas.png" class="img-screenshot" alt="Botão Recolher Todas as Contas">
        </div>
        <p class="img-caption">Recolhendo os níveis para voltar à visualização sintética</p>
    </div>

    <h4>Visualização das demais abas no modo Prado</h4>
    <p>As abas de Débitos, Créditos e Apuração funcionam com a mesma lógica do modo EFD, porém consumindo e formatando os dados provenientes da matriz do balancete.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/18-aba-debitos-prado.png" class="img-screenshot" alt="Débitos Prado">
        </div>
        <p class="img-caption">Aba de Débitos gerada via Balancete</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/19-aba-creditos-prado.png" class="img-screenshot" alt="Créditos Prado">
        </div>
        <p class="img-caption">Aba de Créditos gerada via Balancete</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/20-aba-apuracao-prado.png" class="img-screenshot" alt="Apuração Prado">
        </div>
        <p class="img-caption">Resultado final da Apuração pelo modo Prado</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Interação com as tabelas de dados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>As tabelas foram desenhadas para facilitar a análise de grandes volumes de dados ao longo de múltiplos meses:</p>
    
    <h4>Expansão de meses</h4>
    <p>Os cabeçalhos das tabelas apresentam os totais agrupados por ano. Clique no sinal de <code>+</code> junto ao ano para expandir e visualizar as colunas de cada mês individualmente. Para voltar ao total anual, clique no <code>-</code>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/21-expandir-colunas-periodo.png" class="img-screenshot" alt="Expandir Mês/Ano">
        </div>
        <p class="img-caption">Expandindo o agrupamento anual para ver a quebra mensal</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/22-recolher-colunas-periodo.png" class="img-screenshot" alt="Recolher Mês/Ano">
        </div>
        <p class="img-caption">Recolhendo os meses para a visão sintética anual</p>
    </div>

    <h4>Dicas flutuantes (tooltips)</h4>
    <p>Passe o mouse sobre os títulos de colunas (como CST, Bloco, Conta) ou sobre os ícones de informação <code>(i)</code> para obter descrições rápidas sobre o significado de cada campo e seção.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/23-demonstracao-tooltips.png" class="img-screenshot" alt="Demonstração de Tooltips">
        </div>
        <p class="img-caption">Ícones de informação auxiliam no entendimento das regras de negócio</p>
    </div>

    <h4>Filtros de coluna</h4>
    <p>Na aba de Resumo, os cabeçalhos possuem um ícone de funil, permitindo aplicar filtros rápidos na base de dados, ordenando ou isolando registros específicos.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/24-filtro-colunas.png" class="img-screenshot" alt="Filtros de Coluna">
        </div>
        <p class="img-caption">Utilizando filtros em colunas específicas na tabela de dados</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/25-filtros-de-coluna.png" class="img-screenshot" alt="Painel de Filtros de Coluna">
        </div>
        <p class="img-caption">Painel suspenso com os valores disponíveis na coluna</p>
    </div>
    <p>As contas contábeis e as categorias de receitas e despesas também possuem filtros globais na parte superior de suas respectivas abas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/26-filtro-por-conta.png" class="img-screenshot" alt="Filtro Múltiplo por Conta">
        </div>
        <p class="img-caption">Seleção de múltiplas contas contábeis</p>
    </div>
  </div>
</div>
