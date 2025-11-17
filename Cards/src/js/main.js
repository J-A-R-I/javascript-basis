import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
// Imports van onze modules
import { fetchUser } from "./service/apiService.js";
import { userCard } from "./component/userCard.js";
import { capitalize } from "./utils/format.js";
// DOM
document.addEventListener("DOMContentLoaded", async () => {
    const out = document.getElementById("mod_out");
    out.textContent = "⏳ Laden...";
    try {
        const user = await fetchUser(1);
        out.innerHTML = userCard(user);
        console.log(capitalize("module systeem actief!"));
    } catch {
        out.innerHTML = `<div class="alert alert-danger">❌ Kon user niet
laden</div>`;
    }
});