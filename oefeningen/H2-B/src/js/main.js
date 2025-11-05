// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const Array = []

document.addEventListener("DOMContentLoaded", () =>{

    const inp = document.getElementById("sh_base")
    const run = document.getElementById("sh_run")
    const out = document.getElementById("sh_out")


    function maakLijstHTML(items) {
        return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
    }

    function maakItems(){
        const items = inp.value.trim();

        if (!items) {
            alert("⚠️ Geef een naam in!");
            return;
        }
        array.push(items);

        lijst.innerHTML = maakLijstHTML(array);
        out.textContent = array.length;
    }


    document.getElementById("sh_run")
        ?.addEventListener("click", () =>{
            maakLijstHTML()
            alert(inp.value)
        })


})