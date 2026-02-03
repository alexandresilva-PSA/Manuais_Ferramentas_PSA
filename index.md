---
layout: manual
title: "Central de Manuais PSA"
versao: "1.0"
search_enabled: false
---

<link rel="stylesheet" href="{{ '/assets/css/hub.css' | relative_url }}">

<div class="hub-header-hero">
    <h1>Central de Manuais PSA</h1>
    <p>Documentação técnica e guias operacionais para o ecossistema de ferramentas PSA Digital.</p>
</div>

<!-- Barra de Busca Instantânea -->
<div class="hub-search-container">
    <span class="material-icons-round">search</span>
    <input type="text" id="hubSearch" class="hub-search-input" placeholder="Qual ferramenta você está procurando?">
</div>

<div class="hub-grid">
    {% for manual in site.data.manuais %}
    <a href="{{ manual.url | relative_url }}" class="hub-card">
        <div class="hub-card-header">
            <div class="hub-icon">
                <span class="material-icons-round">{{ manual.icon }}</span>
            </div>
            <div class="hub-card-title-group">
                <h2 class="hub-card-title">{{ manual.title }}</h2>
                <span class="hub-badge-version">{{ manual.version }}</span>
            </div>
        </div>
        <div class="hub-card-body">
            {{ manual.description | markdownify }}
        </div>
        <div class="hub-card-footer">
            <span class="hub-update-date">Atualizado em: {{ manual.updated }}</span>
            <div class="hub-cta-text">
                Acessar Manual <span class="material-icons-round" style="font-size: 18px;">arrow_forward</span>
            </div>
        </div>
    </a>
    {% endfor %}
</div>

<script>
/**
 * Hub Search Logic
 * Filtra os cards em tempo real com base no título ou na descrição
 */
document.getElementById('hubSearch').addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.hub-card');

    cards.forEach(card => {
        const title = card.querySelector('.hub-card-title').textContent.toLowerCase();
        const desc = card.querySelector('.hub-card-body').textContent.toLowerCase();
        
        if (title.includes(term) || desc.includes(term)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    // Feedback visual se nenhum resultado for encontrado (opcional)
    const visibleCards = document.querySelectorAll('.hub-card[style="display: flex;"]');
    // Você poderia adicionar uma mensagem de "Nenhum resultado" aqui.
});
</script>