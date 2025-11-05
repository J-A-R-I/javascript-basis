// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {

  const statusBadge = document.getElementById("sc_status");
  const varsList = document.getElementById("sc_vars");

  function updateStatus(tekst, kleur) {
    statusBadge.textContent = tekst;
    statusBadge.className = `badge ${kleur}`;
  }

  function toonVariabelen(lijst) {
    varsList.innerHTML = "";
    lijst.forEach(item => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = item;
      varsList.appendChild(li);
    });
  }

  function globalScope() {
    var a = "var → function scope";
    let b = "let → block scope";
    const c = "const → block scope";

    const zichtbareVariabelen = [
      `${a}`,
      `${b}`,
      `${c}`
    ];

    toonVariabelen(zichtbareVariabelen);
    updateStatus("Global uitgevoerd", "text-bg-primary");
  }

  function localScope() {
    let letBlock = "let → block scope";
    const constBlock = "const → block scope";
    

    const zichtbareVariabelen = [
      `${letBlock}`,
      `${constBlock}`,
    ];

    toonVariabelen(zichtbareVariabelen);
    updateStatus("Local uitgevoerd", "text-bg-primary");
  }

  document.getElementById("sc_global")
    ?.addEventListener("click", globalScope);

  document.getElementById("sc_local")
    ?.addEventListener("click", localScope);

});