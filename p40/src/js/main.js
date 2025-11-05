// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

function darkmode() {
    const htmlNode = document.documentElement; // <html>
    // lichte highlight

        htmlNode.style.transition = "1.3s"
        htmlNode.style.background = "#222";
        htmlNode.style.color = "#fff"
}
function lightmode() {
    const htmlNode = document.documentElement; // <html>
    // lichte highlight
    htmlNode.style.transition = "1.3s"
    htmlNode.style.background = "#e6f3ff";
    htmlNode.style.color = "#000"
}

function toonFeedback(tekst) {
    const out = document.getElementById("dm_status");
    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("dm_on")
        ?.addEventListener("click", () => {
            darkmode();
            toonFeedback("Achtergrond aangepast via <html> node 🎨");
        });

    document.getElementById("dm_off")
        ?.addEventListener("click", () => {
            lightmode();
            toonFeedback("Achtergrond aangepast via <html> node 🎨");
        });
});

