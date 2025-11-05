// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () => {

  let count = 0;

  const valueDisplay = document.getElementById("cc_val");
  const progressBar = document.getElementById("cc_bar");

  function clampValue(value) {
    return Math.max(0, Math.min(100, value));
  }

  function updateUI() {
    valueDisplay.textContent = count;

    progressBar.style.width = count + "%";
    progressBar.setAttribute("aria-valuenow", count);
    progressBar.textContent = count + "%";
  }

  function increaseCounter(increment) {
    count = clampValue(count + increment);
    updateUI();
  }

  function decreaseCounter(decrement) {
    count = clampValue(count - decrement);
    updateUI();
  }

  function resetCounter() {
    count = 0;
    updateUI();
  }

  document.getElementById("cc_inc1").addEventListener("click", () => increaseCounter(1));
  document.getElementById("cc_inc5").addEventListener("click", () => increaseCounter(5));
  document.getElementById("cc_dec1").addEventListener("click", () => decreaseCounter(1));
  document.getElementById("cc_reset").addEventListener("click", resetCounter); 

  updateUI();

});