// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS


const name = document.getElementById('m9_name')
const nameHelp = document.getElementById('m9_name_help')

const email = document.getElementById('m9_email')
const emailHelp = document.getElementById('m9_email_help')


const msg = document.getElementById('m9_msg')
const msghelp = document.getElementById('m9_msg_help')

const m9_status = document.getElementById('m9_status')


const summary = document.getElementById('m9_summary')



function validInput(parameter, text){
    parameter.textContent = text
    parameter.className = "text-success"
}

function inValidInput(parameter, text){
    parameter.textContent = text
    parameter.className = "text-danger"
}


function msgHelp(){
    if (msg.value.length >= 10){
        validInput(msghelp, `Beschrijving is goed. Je hebt (${msg.value.length}) tekens.`)
    }else{
        inValidInput(msghelp, `Beschrijving is te kort. Je hebt (${msg.value.length}) van de ${10} tekens.`)
        msg.focus()
    }
}


function status(){
    // Zorg ervoor dat de helptekst en styling correct zijn ingesteld voor validatie
    msgHelp()

    // ✅ FIX 3: Correcte email validatie: controleer @ EN .
    const isEmailValid = email.value.includes('@') && email.value.includes('.');

    // Controleer de velden

    if (!isEmailValid){
        email.focus()
        inValidInput(emailHelp, "E-mailadres ongeldig (mist @ of .)")
    }else{
        validInput(emailHelp, "E-mailadres lijkt geldig")
    }

    if (!name.value.trim()){ // Gebruik trim om lege spaties te vangen
        name.focus()
        inValidInput(nameHelp, "Naam is verplicht")
    }else{
        validInput(nameHelp, "Naam is Ok")
    }

    // Controleer de samenvattende status
    if(name.value.trim() && msg.value.length >= 10 && isEmailValid){
        m9_status.textContent = "Alles in orde. Geen fouten meer."
        m9_status.className = "alert alert-success"
        summary.innerHTML = `<span class="fw-bold">Naam: </span>${name.value} <br> <span class="fw-bold">Beschrijving: </span>${msg.value} <br> <span class="fw-bold">Email: </span>${email.value} <br>`
    }else{
        m9_status.textContent = "Vul alles correct in alstublieft."
        m9_status.className = "alert alert-danger"
        summary.className = "list-unstyled mb-0"
        summary.innerHTML = "<span></span>"

    }
}


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('m9_submit').addEventListener('click', (e) =>{
        e.preventDefault()
        status()
    })

    // ✅ FIX 4: Gebruik 'keyup' in plaats van 'keydown'.
    // Keyup wordt pas geactiveerd NADAT de waarde in het invoerveld is bijgewerkt.
    document.getElementById("m9_msg").addEventListener("keyup", () =>{
        msgHelp()
    })
})