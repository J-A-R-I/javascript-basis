// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () => {

  const inputField = document.getElementById("ic_n");
  
  const clampValue = (value) => {
    if (value > 999) return 999;
    if (value < -999) return -999;
    return value;
  };

  document.getElementById("ic_plus").addEventListener("click", () => {
    inputField.value = clampValue(Number(inputField.value) + 1);
  });

  document.getElementById("ic_minus").addEventListener("click", () => {
    inputField.value = clampValue(Number(inputField.value) - 1);
  });

});
