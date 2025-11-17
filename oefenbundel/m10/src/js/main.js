// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS

var count1 = 0 + 1
var count2 = 0 + 1
var count3 = 0 + 1
var count4 = 0 + 1

const shortcutmode = document.getElementById("m10_shortcut_mode")
const status = document.getElementById("m10_shortcut_status")
const value =document.getElementById("m10_key_value")
const keycode =document.getElementById("m10_key_code")
const mod =document.getElementById("m10_modifiers")



const display = document.getElementById("m10_key_display")
const entercounter = document.getElementById("m10_enter_count")
const escapecounter = document.getElementById("m10_escape_count")
const spacecounter = document.getElementById("m10_space_count")
const arrowcounter = document.getElementById("m10_arrow_count")

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("m10_shortcut_mode").addEventListener("click", () =>{
        if(shortcutmode.checked){
            document.addEventListener('keydown', (e) => {

                const isN = e.key === 'n' ||e.key === 'N'
                const isCtrl = e.ctrlKey || e.metaKey;
                const isShift = e.shiftKey

                if (isCtrl || isN || isShift ) {
                    e.preventDefault();
                    console.log("caps blocked")
                }
            });

            status.textContent = `sneltoetsmodus staat aan`

        }else{
            status.textContent = `sneltoetsmodus staat uit`
        }
    })

    document.addEventListener('keydown', (e) =>{
        display.textContent = e.key
        value.textContent = e.key
        keycode.textContent = e.key


        if(e.getModifierState('CapsLock') == true){
            mod.innerHTML = `<li>CapsLock actief.</li>`
        }else{
            mod.innerHTML = `<li>Geen modifier keys actief.</li>`
        }

        if(e.key == "Enter"){
            entercounter.textContent = count1++
        }
        if(e.key == "Escape"){
            escapecounter.textContent = count2++
        }
        if(e.key == " "){
            spacecounter.textContent = count3++
            display.textContent = "Space"
        }
        if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight"){
            arrowcounter.textContent = count4++
        }
    })
})