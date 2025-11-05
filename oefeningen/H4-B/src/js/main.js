// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {

  const naamInput = document.getElementById("ig_full");
  const resultaat = document.getElementById("ig_out");

  // Functie: splits de naam op en filtert lege stukken
  function splitNaam(naam) {
    return naam.trim().split(/\s+/);
  }

  // Functie: controleer of de naam minimaal 2 delen heeft
  function isGeldigeNaam(delen) {
    return delen.length >= 2;
  }

  // Functie: maak initialen van de naam
  function maakInitialen(delen) {
    return delen
      .map(deel => deel.charAt(0).toUpperCase())  // eerste letter van elk deel
      .join(".") + ".";                          // voeg een punt toe
  }

  // Functie: toon resultaat in de badge
  function toonResultaat(resultaatText) {
    resultaat.textContent = resultaatText;
    // Als de naam onvolledig is, maak de badge rood
    resultaat.className = resultaatText === "Onvolledige naam" ? "badge text-bg-danger" : "badge text-bg-success";
  }

  // Event listener voor de knop
  document.getElementById("ig_make")
    ?.addEventListener("click", () => {
      const naam = naamInput.value;
      const delen = splitNaam(naam);

      if (!isGeldigeNaam(delen)) {
        toonResultaat("Onvolledige naam");
      } else {
        const initialen = maakInitialen(delen);
        toonResultaat(initialen);
      }
    });

});