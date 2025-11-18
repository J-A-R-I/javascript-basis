// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS

let m14_characters = [];
let m14_filtered = [];
function m14_setStatus(msg, type = "secondary") {
    const box = document.getElementById("m14_status");
    box.className = `alert alert-${type} mb-3`;
    box.textContent = msg;
}
function m14_renderCards(list) {
    const container = document.getElementById("m14_cards");
    if (!list || list.length === 0) {
        container.innerHTML = "";
        return;
    }
    container.innerHTML = list
        .map(ch => {
            return `
<div class="col-md-6 col-lg-4">
<div class="card h-100 shadow-sm">
<img src="${ch.image}" class="card-img-top" alt="${ch.name}">
<div class="card-body">
<h5 class="card-title">${ch.name}</h5>
<p class="card-text mb-1">
<strong>Status:</strong> ${ch.status}
</p>
<p class="card-text mb-1">
<strong>Soort:</strong> ${ch.species}
</p>
<p class="card-text mb-0">
<strong>Locatie:</strong> ${ch.location.name}
</p>
</div>
</div>
</div>
`;
        })
        .join("");
}
async function m14_loadCharacters() {
    const url = "https://rickandmortyapi.com/api/character/?page=1";
    m14_setStatus("Bezig met laden…", "warning");
    document.getElementById("m14_cards").innerHTML = "";
    document.getElementById("m14_search").disabled = true;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("HTTP fout");
        const data = await res.json();
        m14_characters = data.results;
        m14_filtered = [...m14_characters];
        m14_renderCards(m14_filtered);
        m14_setStatus("20 personages geladen.", "success");
        document.getElementById("m14_search").disabled = false;
    } catch (err) {
        m14_setStatus("Er ging iets mis bij het laden.", "danger");
    }
}
function m14_applyFilter() {
    const search =
        document.getElementById("m14_search").value.trim().toLowerCase();
    if (!search) {
        m14_filtered = [...m14_characters];
        m14_setStatus("20 personages geladen.", "success");
        m14_renderCards(m14_filtered);
        return;
    }
    m14_filtered = m14_characters.filter(ch =>
        ch.name.toLowerCase().includes(search)
    );
    if (m14_filtered.length === 0) {
        m14_setStatus("Geen resultaten voor deze zoekopdracht.", "info");
    } else {
        m14_setStatus(`${m14_filtered.length} resultaten gevonden.`, "success");
    }
    m14_renderCards(m14_filtered);
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("m14_load")?.addEventListener("click",
        m14_loadCharacters);
    document.getElementById("m14_search")?.addEventListener("input",
        m14_applyFilter);
});