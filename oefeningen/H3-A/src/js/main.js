// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("fs_text");
  const results = document.getElementById("fs_results");

  function toUpper(str) {
    return str.trim().toUpperCase();
  }

  function toLower(str) {
    return str.trim().toLowerCase();
  }

  function capitalize(str) {
    const tekst = str.trim();
    if (tekst.length === 0) return "";
    return tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();
  }

  function voegResultaatToe(tekst) {
    if (!tekst || tekst.trim() === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = tekst;

    results.insertBefore(li, results.firstChild);

    while (results.children.length > 5) {
      results.removeChild(results.lastChild);
    }
  }

  document.getElementById("fs_upper")
    ?.addEventListener("click", () => {
      voegResultaatToe(toUpper(input.value));
    });

  document.getElementById("fs_lower")
    ?.addEventListener("click", () => {
      voegResultaatToe(toLower(input.value));
    });

  document.getElementById("fs_cap")
    ?.addEventListener("click", () => {
      voegResultaatToe(capitalize(input.value));
    });

});
