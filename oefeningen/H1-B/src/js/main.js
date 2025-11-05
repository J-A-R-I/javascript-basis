// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

document.addEventListener("DOMContentLoaded", () =>{

    const inp = document.getElementById("uc_cm")
    const cmOut = document.getElementById("uc_m")
    const inchOut = document.getElementById("uc_in")

    function cm(getal1){
        if(!getal1){
            const out = document.getElementById('out');
            out.textContent = 'ongeldig!';
            out.className = 'alert alert-danger mt-3 mb-0';
        }else{
            out.textContent = 'success!';
            out.className = 'alert alert-success mt-3 mb-0';
            return getal1 / 100
        }
    }
    function inch(getal1){
        if(!getal1){
            const out = document.getElementById('out');
            out.textContent = 'ongeldig!';
            out.className = 'alert alert-danger mt-3 mb-0';
        }else{
            out.textContent = 'success!';
            out.className = 'alert alert-success mt-3 mb-0';
            return getal1 / 2.54
        }
    }



    document.getElementById("uc_to_m")
        ?.addEventListener("click", () =>{
            cmOut.textContent = cm(Number(inp.value)).toFixed(2)
            cmOut.style.color = "black"
        })

    document.getElementById("uc_to_in")
        ?.addEventListener("click", () =>{
            inchOut.textContent = inch(Number(inp.value)).toFixed(2)
            inchOut.style.color = "black"
        })

})