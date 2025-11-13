// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

async function loadLocalUsers() {
    const status = document.getElementById("prod_status_local");
    const list = document.getElementById("prod_list_local");

    try {
        status.className = "alert alert-warning mb-0";
        status.textContent = "⏳ JSON laden...";

        const res = await fetch("./data/products.json");
        if (!res.ok) throw new Error("Fout bij laden JSON");

        const users = await res.json();

        list.innerHTML = users
            .map(p => `<li class="list-group-item"><strong>${p.icon} ${p.name}</strong> - ${p.price} euro</li>`)
            .join("");

        status.className = "alert alert-success mb-0";
        status.textContent = ` ${users.length} gebruikers geladen`;

    } catch(err) {
        status.className = "alert alert-danger mb-0";
        status.textContent = "❌ Kon JSON niet laden";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_load_btn")
        ?.addEventListener("click", loadLocalUsers);
});