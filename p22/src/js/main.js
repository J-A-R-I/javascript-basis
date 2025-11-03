// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function bepaalFruitInfo(fruit) {
    const input = fruit.toLowerCase()


    if (input === "appel") return { text: "je koos appel", emoji:"🍎"};
    if (input === "banaan") return { text: "je koos banaan", emoji:"🍌" };


    return { text: "Waarschuwing", emoji: "⚠️" };
}

// Impure function (DOM)
function toonKleur() {
    const inp = document.getElementById("fr_input");
    const out = document.getElementById("fr_text");
    const box = document.getElementById("fr_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        out.className = "alert alert-warning mb-2";
        out.textContent = "⚠️ Geef de naam van fruit in";
        box.style.background = "#f8f9fa";
        box.textContent = "Geen fruit";
        return;
    }

    const resultaat = bepaalFruitInfo(waarde);

    if (!resultaat.emoji) {
        out.className = "alert alert-danger mb-2";
        out.textContent = resultaat.text;
        box.style.background = "#f8f9fa";
        box.textContent = "Onbekend";
        return;
    }

    out.className = "alert alert-success mb-2";
    out.textContent = resultaat.text;
    box.textContent = resultaat.emoji;
}

// Event koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fr_btn")
        ?.addEventListener("click", toonKleur);
});