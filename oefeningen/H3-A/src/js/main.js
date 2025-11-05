// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const namen = [];

document.addEventListener("DOMContentLoaded", () =>{


    function maakLijstHTML(items) {
        return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
    }

    const inp = document.getElementById("fs_text");




    document.getElementById("fs_upper")
        ?.addEventListener("click", () => {
            up()
        })

    document.getElementById("fs_lower")
        ?.addEventListener("click", () =>{
            lower()
        })

    document.getElementById("fs_cap")
        ?.addEventListener("click", () =>{
            capital()
        })

})