// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () =>{
    const mt_a = document.getElementById("mt_a")
    const mt_b = document.getElementById("mt_b")
    const mt_add = document.getElementById("mt_add")
    const mt_out = document.getElementById("mt_out")

    function add(getal1, getal2){
        return getal1+getal2
    }
    function min(getal1, getal2){
        return getal1-getal2
    }
    function maal(getal1, getal2){
        return getal1*getal2
    }
    function deel(getal1, getal2){
        return getal1/getal2
    }

    document.getElementById("mt_add")
        ?.addEventListener("click", () =>{
        mt_out.textContent = add(Number(mt_a.value),Number(mt_b.value))
    })
    document.getElementById("mt_sub")
        ?.addEventListener("click", () =>{
            mt_out.textContent = min(Number(mt_a.value),Number(mt_b.value))
        })
    document.getElementById("mt_mul")
        ?.addEventListener("click", () =>{
            mt_out.textContent = maal(Number(mt_a.value),Number(mt_b.value))
        })
    document.getElementById("mt_div")
        ?.addEventListener("click", () =>{
            mt_out.textContent = deel(Number(mt_a.value),Number(mt_b.value))
        })


})