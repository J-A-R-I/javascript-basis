// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const products = [];

function Product(name,prijs) {
    this.name = name;
    this.prijs = prijs;
    this.info = function() {
        return `${this.name} (${this.prijs} euro)`;
    };
}

function addProduct() {
    const name = document.getElementById("prod_name").value.trim();
    const prijs = document.getElementById("prod_price").value
    const list = document.getElementById("prod_list");

    console.log("name",name)
    console.log("prijs", prijs)


    if (!name || !prijs) return;

    const product = new Product(name, Number(prijs));
    products.push(product);

    list.innerHTML = products
        .map(p => `<li class="list-group-item">${p.info()}</li>`)
        .join("");
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_btn")
        ?.addEventListener("click", addProduct);
});