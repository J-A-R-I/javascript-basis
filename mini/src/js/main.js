import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
// Imports van onze modules
import {fetchProducts} from "./service/apiService.js";
import {productCard} from "./component/userCard.js";
import { euro } from "./utils/format.js";
// DOM
document.addEventListener("DOMContentLoaded", async () => {
    const out = document.getElementById("mod_out");
    out.textContent = "⏳ Laden...";
    try {
        const products = await fetchProducts(1);
        out.innerHTML = productCard(products);
    } catch {
        out.innerHTML = `<div class="alert alert-danger">❌ Kon user niet
laden</div>`;
    }
});