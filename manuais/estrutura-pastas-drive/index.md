---
layout: manual
title: "Estrutura de Pastas do Drive (TAX – Clientes)"
versao: "1.0"
github_url: "https://github.com/psa-elevate/estrutura-pastas-drive"
toc:
  - id: secao-1
    title: "1. Introdução"
  - id: secao-2
    title: "2. Como funciona a coleta automática"
  - id: secao-3
    title: "3. A estrutura padrão"
  - id: secao-4
    title: "4. Principais erros"
    items:
      - id: secao-4-1
        title: "4.1. Subpastas dentro de Entradas / Saídas"
      - id: secao-4-2
        title: "4.2. Renomear pastas padrão"
      - id: secao-4-3
        title: "4.3. Criar pastas fora de Docs. Prado"
  - id: secao-5
    title: "5. Checklist antes de subir um arquivo"
  - id: secao-6
    title: "6. Em caso de dúvida"
---

<style>
/* Estilos escopados específicos do manual de Estrutura de Pastas */
.drive-manual code {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  font-size: 0.9em;
  background: var(--gray-100);
  color: var(--gray-800);
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 500;
  border: 1px solid var(--gray-200);
}

/* Pipeline (fluxo) */
.drive-manual .pipeline {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px 24px;
  margin: 24px 0;
  position: relative;
  gap: 16px;
}
.drive-manual .pipeline::before {
  content: '';
  position: absolute;
  top: 52px; left: 60px; right: 60px;
  height: 2px;
  background: var(--border-color);
  z-index: 1;
}
.drive-manual .pipe-stage {
  text-align: center;
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.drive-manual .pipe-icon-wrap {
  width: 44px; height: 44px;
  background: var(--card-bg);
  border: 2px solid var(--teal-600);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  box-shadow: 0 0 0 4px var(--card-bg);
}
.drive-manual .pipe-icon-wrap svg { width: 20px; height: 20px; color: var(--teal-600); }
.drive-manual .pipe-stage strong {
  display: block;
  color: var(--text-main);
  font-size: 14px;
  margin-bottom: 4px;
}
.drive-manual .pipe-stage span {
  display: block;
  font-size: 12px;
  color: var(--gray-500);
}

/* Legenda */
.drive-manual .legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin: 24px 0;
  font-size: 14px;
  color: var(--gray-600);
  padding: 16px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
}
.drive-manual .legend-item { display: flex; align-items: center; gap: 10px; }

/* Badges */
.drive-manual .badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 600;
  border-radius: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
}
.drive-manual .badge-fixa     { background: var(--gray-100); color: var(--gray-600); border: 1px solid var(--gray-200); }
.drive-manual .badge-livre    { background: #ECFCCB; color: #4D7C0F; border: 1px solid var(--lime-400); }
.drive-manual .badge-deposito { background: var(--amber-100); color: #B45309; border: 1px solid #FCD34D; }

/* Árvore de pastas */
.drive-manual .tree {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 28px;
  font-size: 14px;
  overflow-x: auto;
  margin: 16px 0;
}
.drive-manual .tree ul {
  list-style: none;
  padding-left: 28px;
  margin: 0;
  position: relative;
}
.drive-manual .tree > ul { padding-left: 0; }
.drive-manual .tree ul ul::before {
  content: '';
  position: absolute;
  left: 11px; top: -10px; bottom: 18px;
  width: 1px;
  background: var(--border-color);
}
.drive-manual .tree li {
  position: relative;
  padding: 4px 0;
}
.drive-manual .tree ul ul li::before {
  content: '';
  position: absolute;
  left: -17px; top: 19px;
  width: 14px; height: 1px;
  background: var(--border-color);
}
.drive-manual .tree .item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 6px 10px;
  border-radius: 6px;
  transition: background 0.2s;
}
.drive-manual .tree .item:hover { background: var(--gray-100); }
.drive-manual .tree .name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--gray-700);
}
.drive-manual .tree .name::before {
  content: '';
  display: inline-block;
  width: 16px; height: 16px;
  background-color: var(--gray-400);
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z'/%3E%3C/svg%3E") no-repeat center / contain;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z'/%3E%3C/svg%3E") no-repeat center / contain;
}
.drive-manual .tree .name-root { color: var(--teal-700); font-weight: 600; font-size: 15px; }
.drive-manual .tree .name-root::before { background-color: var(--teal-600); }
.drive-manual .tree .note {
  font-size: 12px;
  color: var(--gray-500);
  font-style: italic;
}
.drive-manual .tree .item.highlight {
  background: #F7FEE7;
  border: 1px solid #BEF264;
}
.drive-manual .tree .item.highlight .name { color: #4D7C0F; font-weight: 600; }
.drive-manual .tree .item.highlight .name::before { background-color: #65A30D; }
.drive-manual .tree .item.highlight .note { color: #65A30D; font-style: normal; font-weight: 500; }

/* Numeração de subseções */
.drive-manual .step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  background: var(--gray-900);
  color: white;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 12px;
}

/* Error grid */
.drive-manual .error-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 16px 0 16px;
}
.drive-manual .error-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 24px;
}
.drive-manual .error-card.bad  { border-top: 4px solid #DC2626; }
.drive-manual .error-card.good { border-top: 4px solid #16A34A; }
.drive-manual .error-card h4 {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.drive-manual .error-card.bad h4  { color: #B91C1C; }
.drive-manual .error-card.good h4 { color: #15803D; }
.drive-manual .mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px; height: 20px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
}
.drive-manual .mark-bad  { background: #FEE2E2; color: #B91C1C; }
.drive-manual .mark-good { background: #DCFCE7; color: #15803D; }
.drive-manual .ex {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  font-size: 12.5px;
  background: #0F172A;
  color: #F1F5F9;
  padding: 16px;
  border-radius: 6px;
  line-height: 1.7;
  white-space: pre;
  overflow-x: auto;
  border: 1px solid #1E293B;
  margin: 0;
}
.drive-manual .err-explain {
  font-size: 14px;
  color: var(--gray-600);
  margin: 12px 0 0;
  padding: 12px 16px;
  background: var(--gray-100);
  border-radius: 6px;
}

/* Checklist */
.drive-manual .checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}
.drive-manual .checklist li {
  padding: 16px 22px;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 15px;
  color: var(--text-main);
}
.drive-manual .checklist li:last-child { border-bottom: none; }
.drive-manual .checklist li::before {
  content: '';
  flex-shrink: 0;
  width: 22px; height: 22px;
  margin-top: 2px;
  background-color: var(--teal-500);
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") no-repeat center;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") no-repeat center;
}

/* Responsivo */
@media (max-width: 768px) {
  .drive-manual .pipeline {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 28px;
  }
  .drive-manual .pipeline::before {
    top: 32px; bottom: 32px; left: 50px; right: auto;
    width: 2px; height: auto;
  }
  .drive-manual .pipe-stage { flex-direction: row; text-align: left; gap: 16px; width: 100%; }
  .drive-manual .pipe-icon-wrap { margin-bottom: 0; }
  .drive-manual .error-grid { grid-template-columns: 1fr; }
}
</style>

<div class="drive-manual">

<div class="secao" id="secao-1">
  <div class="secao-header">
    <span class="secao-numero editable-text">1</span>
    <h2 class="editable-text">Introdução</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>A pasta <code>TAX – Clientes</code> é a ponte que abastece o banco de dados da PSA Digital.</p>
    <p>Toda manhã, uma rotina automática varre as pastas dos clientes, identifica os arquivos novos depositados e os envia ao banco de dados. A partir dali, dashboards no Data Studio, automações no n8n e ferramentas internas — DIFAL Inteligente, ICMS das Saídas, PERDcomp, entre outras — consomem esses dados.</p>
    <p>Por isso, manter a estrutura padrão do drive é essencial. Pastas criadas no lugar errado, ou nomes alterados, causam erros silenciosos: arquivos não coletados, registros duplicados no banco, e divergências em apurações. Já aconteceu, e é evitável.</p>
  </div>
</div>

<div class="secao" id="secao-2">
  <div class="secao-header">
    <span class="secao-numero editable-text">2</span>
    <h2 class="editable-text">Como funciona a coleta automática</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Para entender por que a estrutura importa, vale visualizar o caminho de um arquivo depositado:</p>

    <div class="pipeline">
      <div class="pipe-stage">
        <div class="pipe-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </div>
        <strong>Drive</strong>
        <span>TAX – Clientes</span>
      </div>
      <div class="pipe-stage">
        <div class="pipe-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <strong>Rotina automática</strong>
        <span>Varredura diária</span>
      </div>
      <div class="pipe-stage">
        <div class="pipe-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
        </div>
        <strong>Banco de dados</strong>
        <span>Processamento</span>
      </div>
      <div class="pipe-stage">
        <div class="pipe-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        </div>
        <strong>Ferramenta</strong>
        <span>Consumo dos dados</span>
      </div>
    </div>

    <p>A rotina identifica novos arquivos <strong>pelo caminho da pasta</strong>. Se o caminho esperado é <code>.../NFes/Entradas/</code> e o arquivo está em <code>.../NFes/12-2025/Notas/</code>, ele simplesmente não é coletado — ou pior, é coletado em rota diferente e gera duplicidade no banco.</p>
  </div>
</div>

<div class="secao" id="secao-3">
  <div class="secao-header">
    <span class="secao-numero editable-text">3</span>
    <h2 class="editable-text">A estrutura padrão</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Cada cliente segue uma estrutura única, em quatro níveis:</p>
    <ol>
      <li><strong>Cliente</strong> — pasta-raiz no drive (ex: <code>Barralcool</code>, <code>Coprodia</code>)</li>
      <li><strong>Ano</strong> — agrupador anual (ex: <code>2026</code>)</li>
      <li><strong>Categoria</strong> — uma das quatro fixas: <code>Proposta</code>, <code>Execução</code>, <code>E-mails</code>, <code>Relatórios</code></li>
      <li><strong>Documentos</strong> — apenas dentro de <code>Execução/Docs. Cliente/[Empresa]/</code></li>
    </ol>

    <div class="legend">
      <div class="legend-item"><span class="badge badge-fixa">Pasta fixa</span> Não crie, não renomeie, não exclua</div>
      <div class="legend-item"><span class="badge badge-livre">Pasta livre</span> Crie subpastas de projeto somente aqui</div>
      <div class="legend-item"><span class="badge badge-deposito">Depósito de arquivos</span> Deposite apenas arquivos — nunca subpastas</div>
    </div>

    <div class="tree">
      <ul>
        <li>
          <div class="item">
            <span class="name name-root">TAX – Clientes/</span>
            <span class="badge badge-fixa">Drive compartilhado</span>
          </div>
          <ul>
            <li>
              <div class="item">
                <span class="name">[Cliente]/</span>
                <span class="badge badge-fixa">Pasta fixa</span>
                <span class="note">ex: Barralcool, Coprodia, Bussolaro…</span>
              </div>
              <ul>
                <li>
                  <div class="item">
                    <span class="name">2026/</span>
                    <span class="badge badge-fixa">Pasta fixa</span>
                    <span class="note">Estrutura fixa</span>
                  </div>
                  <ul>
                    <li>
                      <div class="item">
                        <span class="name">Proposta/</span>
                        <span class="badge badge-fixa">Pasta fixa</span>
                      </div>
                    </li>
                    <li>
                      <div class="item">
                        <span class="name">Execução/</span>
                        <span class="badge badge-fixa">Pasta fixa</span>
                      </div>
                      <ul>
                        <li>
                          <div class="item">
                            <span class="name">Docs. Cliente/</span>
                            <span class="badge badge-fixa">Pasta fixa</span>
                          </div>
                          <ul>
                            <li>
                              <div class="item">
                                <span class="name">[Empresa do grupo]/</span>
                                <span class="badge badge-fixa">Pasta fixa</span>
                                <span class="note">PSA Digital cadastra · ex: Auto Posto Barralcool, Usina Barralcool S/A</span>
                              </div>
                              <ul>
                                <li>
                                  <div class="item">
                                    <span class="name">21 pastas padrão de documentos/</span>
                                    <span class="badge badge-deposito">Depósito de arquivos</span>
                                  </div>
                                </li>
                                <li>
                                  <div class="item">
                                    <span class="name">NFes/  ·  NFSes/  ·  CTes/</span>
                                    <span class="badge badge-fixa">Pasta fixa</span>
                                  </div>
                                  <ul>
                                    <li>
                                      <div class="item">
                                        <span class="name">Entradas/</span>
                                        <span class="badge badge-deposito">Depósito de arquivos</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="item">
                                        <span class="name">Saídas/</span>
                                        <span class="badge badge-deposito">Depósito de arquivos</span>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div class="item highlight">
                            <span class="name">Docs. Prado/</span>
                            <span class="badge badge-livre">Pasta livre</span>
                            <span class="note">crie subpastas de projeto somente neste nível</span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="item">
                        <span class="name">E-mails/</span>
                        <span class="badge badge-fixa">Pasta fixa</span>
                      </div>
                    </li>
                    <li>
                      <div class="item">
                        <span class="name">Relatórios/</span>
                        <span class="badge badge-fixa">Pasta fixa</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="dica">
      <span class="material-icons-round">lightbulb</span>
      <p><strong>A PSA Digital cria e mantém toda a estrutura.</strong> Deposite arquivos nas pastas corretas e crie subpastas de projeto apenas em <code>Docs. Prado/</code>. Para qualquer outra alteração estrutural (novo cliente, nova empresa do grupo, novo tipo de pasta de arquivo), acione a PSA Digital.</p>
    </div>
  </div>
</div>

<div class="secao" id="secao-4">
  <div class="secao-header">
    <span class="secao-numero editable-text">4</span>
    <h2 class="editable-text">Principais erros</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <p>Os três erros abaixo são os que já causaram duplicidades, arquivos não coletados ou divergências em apurações. Cada um vem com o exemplo correto ao lado.</p>

    <h3 id="secao-4-1"><span class="step-num">1</span>Subpastas dentro de Entradas / Saídas</h3>
    <div class="error-grid">
      <div class="error-card bad">
        <h4><span class="mark mark-bad">×</span> Errado</h4>
        <div class="ex">NFSes/
├── 12-2025/
├── 11-2025/
└── 07-2025/
    └── Notas com ST destacados/
        └── NF 8057782/
            └── nota.xml</div>
      </div>
      <div class="error-card good">
        <h4><span class="mark mark-good">✓</span> Correto</h4>
        <div class="ex">NFSes/
├── Entradas/
│   ├── nfse-001.xml
│   ├── nfse-002.xml
│   └── nfse-003.xml
└── Saídas/
    └── nfse-saida-001.xml</div>
      </div>
    </div>
    <p class="err-explain">A rotina busca arquivos diretamente em <code>Entradas/</code> e <code>Saídas/</code>. Subpastas por mês ou por nota individual fazem a coleta ignorar os arquivos.</p>

    <h3 id="secao-4-2"><span class="step-num">2</span>Renomear pastas padrão</h3>
    <div class="error-grid">
      <div class="error-card bad">
        <h4><span class="mark mark-bad">×</span> Errado</h4>
        <div class="ex">EFD Contribuicoes/    (sem cedilha)
NF-es/                (com hífen)
Notas Fiscais/        (nome traduzido)
ICMS - IPI/           (separadores trocados)</div>
      </div>
      <div class="error-card good">
        <h4><span class="mark mark-good">✓</span> Correto</h4>
        <div class="ex">EFD Contribuições/
NFes/
NFSes/
EFD ICMS IPI/</div>
      </div>
    </div>
    <p class="err-explain">Os nomes das pastas são chave de rota da coleta. Acentos, espaços e capitalização precisam ser exatos. Se algum nome parecer incorreto, acione a PSA Digital — não renomeie.</p>

    <h3 id="secao-4-3"><span class="step-num">3</span>Criar pastas fora de Docs. Prado</h3>
    <div class="error-grid">
      <div class="error-card bad">
        <h4><span class="mark mark-bad">×</span> Errado</h4>
        <div class="ex">2026/
└── Backup/                  (extra)

Execução/Docs. Cliente/
└── Materiais Cliente/       (não é nível livre)

Docs. Cliente/Empresa/NFes/
└── Janeiro 2026/            (subpasta proibida)</div>
      </div>
      <div class="error-card good">
        <h4><span class="mark mark-good">✓</span> Correto</h4>
        <div class="ex">Execução/Docs. Prado/
└── [Subpasta de projeto]/   (permitida)</div>
      </div>
    </div>
    <p class="err-explain">Crie subpastas de projeto apenas em <code>Docs. Prado/</code>. Em qualquer outro lugar (Proposta, E-mails, Relatórios, Docs. Cliente ou dentro das pastas de empresa), não crie pastas: isso pode quebrar a coleta ou abrir espaço para depósitos no lugar errado.</p>
  </div>
</div>

<div class="secao" id="secao-5">
  <div class="secao-header">
    <span class="secao-numero editable-text">5</span>
    <h2 class="editable-text">Checklist antes de subir um arquivo</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <ul class="checklist">
      <li>Confirme se o cliente tem pasta-raiz no drive <code>TAX – Clientes</code>. Se não, acione a PSA Digital.</li>
      <li>Confirme se a pasta do ano corrente (<code>2026</code>) existe sob o cliente.</li>
      <li>Confirme se a empresa do grupo está cadastrada em <code>Docs. Cliente/</code>. Se não, acione a PSA Digital.</li>
      <li>Confirme se a pasta de documento (NFes, ECD, Balancete…) existe e se o nome está exato — com acentos e capitalização.</li>
      <li>Deposite XMLs de NFes, NFSes ou CTes diretamente em <code>Entradas/</code> ou <code>Saídas/</code>, sem subpastas.</li>
      <li>Não renomeie nenhuma pasta padrão.</li>
      <li>Crie subpastas de projeto exclusivamente em <code>Docs. Prado/</code>.</li>
    </ul>
  </div>
</div>

<div class="secao" id="secao-6">
  <div class="secao-header">
    <span class="secao-numero editable-text">6</span>
    <h2 class="editable-text">Em caso de dúvida</h2>
  </div>
  <div class="secao-conteudo editable-area">
    <div class="aviso">
      <span class="material-icons-round">warning</span>
      <p><strong>Atenção:</strong> se uma pasta não existir, estiver com o nome incorreto, ou se for necessário criar nova pasta de cliente, nova empresa do grupo ou novo tipo de pasta de arquivo, <strong>não crie nem renomeie</strong>. Acione a PSA Digital — qualquer alteração na estrutura precisa ser sincronizada com a rotina automática para evitar erros silenciosos.</p>
    </div>
  </div>
</div>

</div>
