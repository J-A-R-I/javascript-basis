// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS

class M13Product {
    constructor(name, category, price, description) {
        this.name = name;
        this.category = category; // 'books', 'courses', 'software'
        this.price = price; // number
        this.description = description;
    }
}
// Vooraf gedefinieerde lijst met producten
const m13_allProducts = [
    new M13Product(
        'JavaScript Basis',
        'books',
        29.99,
        'Boek voor absolute beginners in JavaScript.'
    ),
    new M13Product(
        'Geavanceerde JavaScript Patterns',
        'books',
        49.5,
        'Voor ontwikkelaars die hun JS kennis willen verdiepen.'
    ),
    new M13Product(
        'Online cursus HTML en CSS',
        'courses',
        39,
        'Stapsgewijze videoreeks om webpagina s te leren bouwen.'
    ),
    new M13Product(
        'Full Stack traject',
        'courses',
        99,
        'Een traject dat front end en back end combineert.'
    ),
    new M13Product(
        'Task Manager App',
        'software',
        15,
        'Eenvoudige tool om dagelijkse taken bij te houden.'
    ),
    new M13Product(
        'Budget Planner',
        'software',
        9.99,
        'Software om inkomsten en uitgaven overzichtelijk te beheren.'
    )
];
// Kleine helper om een nette categorie naam te tonen
function m13_categoryLabel(category) {
    switch (category) {
        case 'books':
            return 'Boek';
        case 'courses':
            return 'Cursus';
        case 'software':
            return 'Software';
        default:
            return category;
    }
}
// Helper voor badge klasse op basis van categorie
function m13_categoryBadgeClass(category) {
    switch (category) {
        case 'books':
            return 'bg-outline-secondary border text-muted';
        case 'courses':
            return 'bg-primary text-white';
        case 'software':
            return 'bg-info text-dark';
        default:
            return 'bg-light text-muted';
    }
}
// Producten tekenen
function m13_renderProducts(products, isFiltered) {
    const container = document.getElementById('m13_products');
    const status = document.getElementById('m13_status');
    if (!products || products.length === 0) {
        container.innerHTML = '';
        status.className = 'alert alert-warning mb-3';
        status.textContent = 'Geen producten gevonden met deze filter.';
        return;
    }
// Als er gefilterd is, tonen we de hoeveelheid
    if (isFiltered) {
        status.className = 'alert alert-success mb-3';
        status.textContent = `Gevonden producten: ${products.length}`;
    } else {
        status.className = 'alert alert-secondary mb-3';
        status.textContent = 'Er worden momenteel alle producten getoond.';
    }
    container.innerHTML = products
        .map(product => {
            const badgeClass = m13_categoryBadgeClass(product.category);
            const catLabel = m13_categoryLabel(product.category);
            return `
<div class="col-md-6 col-lg-4">
<div class="card h-100 shadow-sm">
<div class="card-body d-flex flex-column">
<div class="d-flex justify-content-between align-items-start
mb-2">
<h5 class="card-title mb-0">${product.name}</h5>
<span class="badge ${badgeClass}">${catLabel}</span>
</div>
<p class="card-text mb-2">${product.description}</p>
<p class="mt-auto fw-bold">
€${product.price.toFixed(2)}
</p>
</div>
</div>
</div>
`;
        })
        .join('');
}
// Filter toepassen op basis van de input
function m13_applyFilter() {
    const catSelect = document.getElementById('m13_cat');
    const maxPriceInput = document.getElementById('m13_max');
    const selectedCategory = catSelect.value; // 'all', 'books', ...
    const maxPriceStr = maxPriceInput.value.trim();
    const maxPrice = maxPriceStr ? Number(maxPriceStr) : null;
    let filtered = m13_allProducts.slice();
// Categorie filter
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }
// Prijs filter
    if (maxPrice !== null && !Number.isNaN(maxPrice) && maxPrice >= 0) {
        filtered = filtered.filter(p => p.price <= maxPrice);
    }
    const isFiltered =
        selectedCategory !== 'all' || (maxPrice !== null
            && !Number.isNaN(maxPriceStr));
    m13_renderProducts(filtered, isFiltered);
}
document.addEventListener('DOMContentLoaded', () => {
// Initieel alle producten tonen
    m13_renderProducts(m13_allProducts, false);
// Filter knop koppelen
    document.getElementById('m13_filter')?.addEventListener('click',
        m13_applyFilter);
// Optional: filter ook bij Enter in het prijsveld
    document.getElementById('m13_max')?.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            m13_applyFilter();
        }
    });
});