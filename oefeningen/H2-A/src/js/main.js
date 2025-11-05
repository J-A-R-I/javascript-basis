// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () =>{

    const glob = document.getElementById("sc_global")
    const loc = document.getElementById("sc_local")
    const stat = document.getElementById("sc_status")

    function maakLijstHTML(items) {
        return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
    }

    function global(){
        stat.textContent = "global"
    }
    function local(){
        stat.textContent = "local"
    }

    function setStatus(){
        stat.backgroundColor = "green"
    }



    document.getElementById("sc_global")
        ?.addEventListener("click", () =>{
            global()
        })

    document.getElementById("sc_local")
        ?.addEventListener("click", () =>{
            local()
        })

})