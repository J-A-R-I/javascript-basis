// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Lege array om namen op te slaan
const taken = [];

// Pure functie -> maakt lijst HTML
function maakLijstHTML(items) {
    return items.map(item => `<div> <h2><span class="badge text-bg-primary me-1">${item}<button type="button" class="btn-close" aria-label="Close"></button></span> </h2></div>`).join("");
}

// UI handler
function voegNaamToe() {
    const inp = document.getElementById("todo_input");
    const lijst = document.getElementById("todo_list");
    const count = document.getElementById("todo_count");

    const taak = inp.value.trim();

    if (!taak) {
        alert("⚠️ Geef een naam in!");
        return;
    }

    // voeg toe aan array
    taken.push(taak);

    // UI updaten
    lijst.innerHTML = maakLijstHTML(taken);
    count.textContent = taken.length;

    // veld leegmaken
    inp.value = "";
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("todo_btn")
        ?.addEventListener("click", voegNaamToe);
});
