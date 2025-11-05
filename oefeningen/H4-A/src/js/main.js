// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () => {

  const firstNameInput = document.getElementById("tp_first");
  const lastNameInput = document.getElementById("tp_last");
  const cityInput = document.getElementById("tp_city");
  const preview = document.getElementById("tp_preview");

  const pillP1 = document.getElementById("tp_p1");
  const pillP2 = document.getElementById("tp_p2");

  function getTemplateP1(first, last, city) {
    if (!first || !last || !city) {
      return "Vul alle velden in";
    }
    return `Hallo ${first} ${last} uit ${city}!`;
  }

  function getTemplateP2(first, last, city) {
    if (!first || !last || !city) {
      return "Vul alle velden in";
    }
    return `Welkom, ${first} ${last}, afkomstig uit ${city}. We hopen dat je het hier naar je zin hebt!`;
  }

  function updatePreview(template) {
    preview.innerHTML = template;
  }

  function setActivePill(activePill) {
    pillP1.classList.remove("active");
    pillP2.classList.remove("active");
    activePill.classList.add("active");
  }

  function updateTemplate() {
    const first = firstNameInput.value;
    const last = lastNameInput.value;
    const city = cityInput.value;

    let template = pillP1.classList.contains("active") ? getTemplateP1(first, last, city) : getTemplateP2(first, last, city);

    updatePreview(template);
  }

  firstNameInput.addEventListener("input", updateTemplate);
  lastNameInput.addEventListener("input", updateTemplate);
  cityInput.addEventListener("input", updateTemplate);

  pillP1.addEventListener("click", () => {
    setActivePill(pillP1);
    updateTemplate();
  });

  pillP2.addEventListener("click", () => {
    setActivePill(pillP2);
    updateTemplate();
  });

  updateTemplate();

});