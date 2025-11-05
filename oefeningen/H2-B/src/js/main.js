// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("sh_base");
  const output = document.getElementById("sh_out");

  function toonLijst(items) {
    output.innerHTML = "";
    items.forEach(tekst => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = tekst;
      output.appendChild(li);
    });
  }

  function toonShadowing() {
    let basis = Number(input.value);
    let x = basis;
    let regels = [];

    regels.push(`buiten block: x = ${x}`);

    {
      let x = basis;
      regels.push(`binnen block: x = ${x}`);
    }

    regels.push(`na block: x = ${x}`);

    toonLijst(regels);
  }

  document.getElementById("sh_run")
    ?.addEventListener("click", toonShadowing);

});