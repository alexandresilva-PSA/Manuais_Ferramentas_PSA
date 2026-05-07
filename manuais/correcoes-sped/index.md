---
layout: manual
title: "Correções no SPED"
versao: "1.0"
github_url: "https://github.com/psa-elevate/correcoes-sped"
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
    title: "3. Filtros de Busca e Configuração"
    items:
      - id: secao-3-1
        title: "3.1. Cliente e Contribuinte"
      - id: secao-3-2
        title: "3.2. Período e NCM"
      - id: secao-3-3
        title: "3.3. Filtros Específicos (Aba F100)"
  - id: secao-4
    title: "4. Visão Geral das Abas (Registros SPED)"
  - id: secao-5
    title: "5. Navegação e Análise de Dados"
    items:
      - id: secao-5-1
        title: "5.1. Dicas flutuantes (Tooltips)"
      - id: secao-5-2
        title: "5.2. Filtros de Coluna"
      - id: secao-5-3
        title: "5.3. Detalhes de NFe e Itens Consolidados"
  - id: secao-6
    title: "6. Regras de NCM"
  - id: secao-7
    title: "7. Modo de Edição e Correções"
    items:
      - id: secao-7-1
        title: "7.1. Habilitando a edição"
      - id: secao-7-2
        title: "7.2. Editando registros"
      - id: secao-7-3
        title: "7.3. Salvando as alterações"
  - id: secao-8
    title: "8. Consulta Simples Nacional (D100/F100)"
  - id: secao-9
    title: "9. Envio e Exportação"
---

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Este manual apresenta as funcionalidades da ferramenta <strong>Correções no SPED</strong>, parte do sistema de ferramentas digitais da PSA Consultores.</p>
    <p>A ferramenta permite revisar e ajustar os registros do SPED Contribuições (blocos <strong>C170, A170, D100, F100, F120, F130</strong>) cruzando os dados da escrituração com os XMLs originais. Através de uma interface de edição em massa, o analista pode corrigir CSTs, Alíquotas e Valores de PIS/COFINS, gerando um histórico rastreável e exportável de todas as modificações.</p>
    <h3>Principais Funcionalidades</h3>
    <ul>
        <li><strong>Cruzamento documental:</strong> relaciona registros do SPED com os XMLs originais para localizar inconsistências.</li>
        <li><strong>Edição controlada:</strong> habilita correções em massa com campos específicos por aba e por registro fiscal.</li>
        <li><strong>Regras auxiliares:</strong> permite consultar e manter regras de NCM que apoiam os tratamentos tributários aplicados.</li>
        <li><strong>Rastreabilidade:</strong> registra o histórico das alterações e suporta envio/exportação das correções processadas.</li>
    </ul>
    <div class="aviso">
        <span class="material-icons-round">warning</span>
        <p><strong>Persistência das alterações:</strong> editar a grade não é suficiente por si só. Após revisar os registros, conclua o fluxo com o salvamento e o envio das correções para garantir que a alteração seja efetivamente aplicada.</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/1-inicio.png" class="img-screenshot" alt="Tela inicial Correções SPED">
        </div>
        <p class="img-caption">Visão inicial da ferramenta Correções no SPED</p>
    </div>
  </div>
</div>

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
    <p>Após o login, selecione o ambiente <strong>"Digital Dev"</strong>. Este é o ambiente de criação, desenvolvimento e utilização das ferramentas fiscais automatizadas.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/padrao-04-ambiente-dev.png" class="img-screenshot" alt="Seleção do ambiente Digital Dev">
        </div>
        <p class="img-caption">Escolha do ambiente da área Digital</p>
    </div>

    <h3 id="secao-acesso-5">2.5. Hub de Ferramentas</h3>
    <p>Ao entrar no ambiente Digital Dev, o sistema carregará o <strong>Hub de Ferramentas</strong>. Identifique o card correspondente e clique no botão <strong>"Acessar Ferramenta"</strong> no módulo de Correções no SPED.</p>
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
    <h2 class="editable-text">Filtros de Busca e Configuração</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para iniciar qualquer correção, é necessário preencher os parâmetros obrigatórios no painel de filtros superiores.</p>

    <h3 id="secao-3-1">3.1. Cliente e Contribuinte</h3>
    <p>Selecione o Cliente e, em seguida, o Contribuinte (CNPJ). Caso a empresa tenha apenas um contribuinte, ele será selecionado automaticamente.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/3-filtro-contribuinte.png" class="img-screenshot" alt="Filtro de Contribuinte">
        </div>
        <p class="img-caption">Seleção do Contribuinte</p>
    </div>

    <h3 id="secao-3-2">3.2. Período e NCM</h3>
    <p>Defina o intervalo de datas (Data Início e Data Fim) da escrituração. Opcionalmente, utilize o filtro de NCM para trazer apenas itens com ou sem NCM cadastrado.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/4-filtro-periodo.png" class="img-screenshot" alt="Filtro de Período">
        </div>
        <p class="img-caption">Definição de Datas Início e Fim</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/5-filtro-ncm.png" class="img-screenshot" alt="Filtro de NCM">
        </div>
        <p class="img-caption">Filtro condicional de NCM</p>
    </div>

    <h3 id="secao-3-3">3.3. Filtros Específicos (Aba F100)</h3>
    <p>A aba F100 exige a definição de parâmetros exclusivos para evitar sobrecarga de dados. Para consultá-la, você <strong>deve</strong> informar a "Nat. Base de Crédito" e/ou o "Código da Conta".</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/24-aba-f100-outros.png" class="img-screenshot" alt="Aviso de filtros da Aba F100">
        </div>
        <p class="img-caption">Mensagem solicitando filtros específicos para a aba F100</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/25-codigos-conta.png" class="img-screenshot" alt="Preenchimento do Código de Conta">
        </div>
        <p class="img-caption">Preenchendo a Natureza de Base de Crédito no dropdown múltiplo</p>
    </div>
    <p>Após preencher os dados, clique em <strong>Consultar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/6-resultado-busca.png" class="img-screenshot" alt="Resultados da Busca">
        </div>
        <p class="img-caption">Tabela carregada após a execução da consulta</p>
    </div>
    <p>Para resetar os parâmetros e realizar uma nova pesquisa, clique no botão <strong>Limpar</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/32-limpar-produtos.png" class="img-screenshot" alt="Limpar produtos">
        </div>
        <p class="img-caption">Botão Limpar para redefinir formulários e tela</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Visão Geral das Abas (Registros SPED)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Após a consulta, o sistema organiza os resultados em abas, dividindo as informações por tipo de registro da EFD Contribuições.</p>
    
    <ul>
        <li><strong>C170 (NFe/NFCe):</strong> Itens de notas fiscais eletrônicas de produto. Esta aba exibe um cruzamento lado-a-lado com os dados lidos do arquivo XML.</li>
        <li><strong>A170 (NFSe):</strong> Itens de notas fiscais de serviço.</li>
        <div class="img-container">
            <div class="img-wrapper">
                <img src="imagens/22-aba-a170-nfse.png" class="img-screenshot" alt="Aba A170">
            </div>
            <p class="img-caption">Registros de Notas de Serviço (A170)</p>
        </div>
        <li><strong>D100 (CTe):</strong> Conhecimentos de transporte.</li>
        <div class="img-container">
            <div class="img-wrapper">
                <img src="imagens/23-aba-d100-cte.png" class="img-screenshot" alt="Aba D100">
            </div>
            <p class="img-caption">Registros de Conhecimento de Transporte (D100)</p>
        </div>
        <li><strong>F100 (Outros):</strong> Demais receitas e operações com direito a crédito não abrangidas nos blocos A, C e D.</li>
        <div class="img-container">
            <div class="img-wrapper">
                <img src="imagens/26-aba-f100-carregada.png" class="img-screenshot" alt="Aba F100 Carregada">
            </div>
            <p class="img-caption">Registros consolidados no Bloco F100</p>
        </div>
        <li><strong>F120 (Depreciação):</strong> Créditos sobre encargos de depreciação de bens do imobilizado.</li>
        <div class="img-container">
            <div class="img-wrapper">
                <img src="imagens/30-aba-120-depreciacao.png" class="img-screenshot" alt="Aba F120">
            </div>
            <p class="img-caption">Registros de depreciação e amortização</p>
        </div>
        <li><strong>F130 (Aquisição):</strong> Créditos sobre valor de aquisição de bens do ativo imobilizado.</li>
        <div class="img-container">
            <div class="img-wrapper">
                <img src="imagens/31-aba-130-aquisicao.png" class="img-screenshot" alt="Aba F130">
            </div>
            <p class="img-caption">Registros de bens adquiridos</p>
        </div>
    </ul>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Navegação e Análise de Dados</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <h3 id="secao-5-1">5.1. Dicas flutuantes (Tooltips)</h3>
    <p>Passe o mouse sobre os cabeçalhos de coluna pontilhados ou ícones de informação <code>(i)</code> para exibir balões explicativos sobre o campo ou registro.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/7-como-acessar-tooltip.png" class="img-screenshot" alt="Como acessar Tooltips">
        </div>
        <p class="img-caption">Tooltips detalhando a origem contábil ou fiscal do campo</p>
    </div>

    <h3 id="secao-5-2">5.2. Filtros de Coluna</h3>
    <p>Utilize os ícones de filtro ao lado dos cabeçalhos para classificar (crescente/decrescente) ou selecionar valores específicos (ex: exibir apenas itens com determinado NCM ou CST).</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/8-filtro-colunas.png" class="img-screenshot" alt="Filtro de Colunas">
        </div>
        <p class="img-caption">Filtro drop-down nas colunas de dados</p>
    </div>

    <h3 id="secao-5-3">5.3. Detalhes de NFe e Itens Consolidados</h3>
    <p>Na aba <strong>C170</strong>, você verá a coluna de "Dados XML". O sistema alerta (em vermelho) quando há divergência de NCM entre o SPED e o XML, e em laranja quando há divergência de Valor. <br>
    Se o item no SPED foi agrupado, exibirá o selo <strong>Consolidado</strong>. Ao clicar nesta coluna, um modal abrirá detalhando todos os itens originários da NFe.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/9-filtro-detalhes-itens-nfe-consolidado.png" class="img-screenshot" alt="Detalhes de NFe Consolidado">
        </div>
        <p class="img-caption">Modal detalhando a NFe e seus itens originais cruzados com a EFD</p>
    </div>
    <p>Para voltar, basta clicar no <code>X</code> ou fora da janela modal.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/10-voltando-a-tabela-principal.png" class="img-screenshot" alt="Retornando à tabela">
        </div>
        <p class="img-caption">Fechando os detalhes da NFe para retomar a edição na tabela</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Regras de NCM</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Na aba C170, ao clicar sobre um NCM destacado, o sistema abre o <strong>Mapa NCM</strong>, que exibe os tratamentos tributários mapeados (CSTs e Alíquotas) para aquele código em específico.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/11-regras-ncm.png" class="img-screenshot" alt="Regras de NCM">
        </div>
        <p class="img-caption">Regras tributárias associadas ao NCM clicado</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/12-detalhes-regra.png" class="img-screenshot" alt="Detalhes da Regra">
        </div>
        <p class="img-caption">Expandindo o card para visualizar a Base Legal</p>
    </div>
    <p>Nesta tela de apoio, você pode <strong>Editar</strong> uma regra existente ou <strong>Adicionar Nova Regra</strong> para o Mapa, caso ela ainda não conste na base.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/13-editar-regra.png" class="img-screenshot" alt="Editar Regra">
        </div>
        <p class="img-caption">Modal para edição do mapa tributário</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/15-nova-regra.png" class="img-screenshot" alt="Nova Regra">
        </div>
        <p class="img-caption">Formulário de cadastro de nova regra</p>
    </div>
    <p>As modificações feitas aqui serão refletidas instantaneamente. Para voltar, feche o modal.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/14-voltar-tela-regras.png" class="img-screenshot" alt="Voltando da tela de Regras">
        </div>
        <p class="img-caption">Fechando o painel de Regras de NCM</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-7">
  <div class="secao-header">
    <span class="secao-numero editable-text">7</span>
    <h2 class="editable-text">Modo de Edição e Correções</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A ferramenta permite alterar diretamente as informações tributárias da tabela sem afetar o arquivo SPED original, gerando uma camada segura de correção.</p>

    <h3 id="secao-7-1">7.1. Habilitando a edição</h3>
    <p>No canto superior direito da tabela de resultados, clique no botão <strong>Habilitar modo edição</strong>. As colunas da tabela se tornarão campos preenchíveis.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/16-habilitar-edicao.png" class="img-screenshot" alt="Habilitar Modo Edição">
        </div>
        <p class="img-caption">Botão para entrar no modo de correção em massa</p>
    </div>

    <h3 id="secao-7-2">7.2. Editando registros</h3>
    <p>Você pode alterar os valores digitando diretamente nos campos de texto ou utilizando os menus dropdown (como os códigos da Tabela 4.3.7 em F120/F130). As linhas modificadas ou selecionadas ficarão destacadas em verde.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/17-editar-registros.png" class="img-screenshot" alt="Editando os registros">
        </div>
        <p class="img-caption">Interface da tabela com inputs de texto habilitados</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">bolt</span>
        <p><strong>Dica de Produtividade:</strong> Utilize a caixa de seleção na primeira coluna para marcar várias linhas simultaneamente. Ao editar um campo (ex: CST) em uma linha selecionada, a mesma alteração será replicada para todas as linhas marcadas no lote.</p>
    </div>

    <h3 id="secao-7-3">7.3. Salvando as alterações</h3>
    <p>Após concluir as modificações desejadas, clique no botão verde <strong>Salvar alterações</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/18-salvar-alteracoes-aplicacao.png" class="img-screenshot" alt="Salvar Alterações">
        </div>
        <p class="img-caption">Confirmando e gravando as edições no banco</p>
    </div>
    <p>O sistema processará os dados e, em caso de sucesso, exibirá a tag "Corrigido" na última coluna da linha. Os valores alterados ficarão destacados na cor laranja.</p>
  </div>
</div>

<div class="secao" id="secao-8">
  <div class="secao-header">
    <span class="secao-numero editable-text">8</span>
    <h2 class="editable-text">Consulta Simples Nacional (D100/F100)</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Nas abas D100 e F100, é fundamental identificar se o participante da operação (o prestador ou fornecedor) é optante pelo Simples Nacional.</p>
    <p>Para isso, utilize o botão <strong>Consultar Simples Nacional</strong> localizado acima da tabela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/27-consultar-simples-nacional.png" class="img-screenshot" alt="Consultar Simples Nacional">
        </div>
        <p class="img-caption">Botão de integração com a consulta do Simples</p>
    </div>
    <p>O sistema processará as requisições em lote para os CNPJs exibidos na tabela.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/28-aguardar-consulta-simples-nacional.png" class="img-screenshot" alt="Aguardando a Consulta">
        </div>
        <p class="img-caption">Processando os CNPJs em segundo plano</p>
    </div>
    <p>Após a conclusão, a coluna "Simples" será automaticamente populada com o selo "Optante" ou "Não Optante", fundamentando as suas decisões de tomada de crédito.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/29-consulta-finalizada.png" class="img-screenshot" alt="Consulta Finalizada">
        </div>
        <p class="img-caption">Coluna populada com a condição do Simples Nacional</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-9">
  <div class="secao-header">
    <span class="secao-numero editable-text">9</span>
    <h2 class="editable-text">Envio e Exportação</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Após salvar as correções localmente (passo 7.3), é necessário submetê-las ou extrair o relatório destas modificações.</p>
    <p>Para efetivar o processo no banco central e atualizar a inteligência do projeto, clique em <strong>Enviar Correções</strong>.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/19-enviar-correcoes-banco.png" class="img-screenshot" alt="Enviar Correções ao Banco">
        </div>
        <p class="img-caption">Submissão definitiva das correções efetuadas</p>
    </div>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/20-acompanhar-envio-correcoes.png" class="img-screenshot" alt="Acompanhando o envio">
        </div>
        <p class="img-caption">Status de envio dos registros corrigidos</p>
    </div>
    <p>Uma notificação confirmará o sucesso da sincronização.</p>
    <div class="img-container">
        <div class="img-wrapper">
            <img src="imagens/21-confirmar-envio-correcoes.png" class="img-screenshot" alt="Confirmação do envio">
        </div>
        <p class="img-caption">Confirmação de sincronização concluída com sucesso</p>
    </div>
    <div class="dica">
        <span class="material-icons-round">info</span>
        <p><strong>Exportar Correções:</strong> Caso precise do relatório para envio contábil ou análise offline, utilize o botão <strong>Exportar correções</strong>, que gerará uma planilha (Excel) com o antes e depois de cada linha modificada, detalhando exatamente as melhorias efetuadas.</p>
    </div>
  </div>
</div>
