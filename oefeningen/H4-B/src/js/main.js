// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {

  const naamInput = document.getElementById("ig_full");
  const resultaat = document.getElementById("ig_out");

  function splitNaam(naam) {
    return naam.trim().split(/\s+/);
  }

  function isGeldigeNaam(delen) {
    return delen.length >= 2;
  }


  function maakInitialen(delen) {
    return delen
      .map(deel => deel.charAt(0).toUpperCase())  
      .join(".") + ".";                          
  }

  function toonResultaat(resultaatText) {
    resultaat.textContent = resultaatText;
    resultaat.className = resultaatText === "Onvolledige naam" ? "badge text-bg-danger" : "badge text-bg-success";
  }

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