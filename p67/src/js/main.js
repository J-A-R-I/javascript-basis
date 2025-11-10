// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

function updatePreview() {
    const email = document.getElementById("em_input").value;
    const preview = document.getElementById("em_preview");

    if (email.trim() === "") {
        preview.className = "alert alert-secondary mb-2";
        preview.textContent = "Wacht op input…";
    } else {
        preview.className = "alert alert-info mb-2";
        preview.textContent = `${email}! 👋`;
    }
}

function handleSubmit(event) {
    event.preventDefault(); // stop page reload

    const email = document.getElementById("em_input").value.trim();
    const status = document.getElementById("em_status");

    if (!email || !email.includes('@')) {
        status.className = "alert alert-danger mb-0 mt-3";
        status.textContent = "❌ Vul een email in";
        return;
    }
    if(email.includes('@')){
        status.className = "alert alert-success mb-0 mt-3";
        status.textContent = ` Formulier verstuurd voor ${email}`;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("em_input")?.addEventListener("input", updatePreview);
    document.getElementById("em_form")?.addEventListener("submit", handleSubmit);
});
