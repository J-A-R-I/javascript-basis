// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS


const title = document.getElementById('m8_title')
const titleHelp = document.getElementById('m8_title_help')

const desc = document.getElementById('m8_desc')
const descHelp = document.getElementById('m8_desc_help')

const email = document.getElementById('m8_email')
const emailHelp = document.getElementById('m8_email_help')

const m8_status = document.getElementById('m8_status')


const summary = document.getElementById('m8_summary')



function validInput(parameter, text){
    parameter.textContent = text
    parameter.className = "text-success"
}

function inValidInput(parameter, text){
    parameter.textContent = text
    parameter.className = "text-danger"
}

function status(){

    if (!email.value.includes('@' && '.')){
        email.focus()
        inValidInput(emailHelp, "email ongeldig")
    }else{
        validInput(emailHelp, "email lijkt geldig")
    }

    if (desc.value.length >= 10){
        validInput(descHelp, "beschrijving is goed")
    }else{
        desc.focus()
        inValidInput(descHelp, "beschrijving is te kort")
    }

    if (!title.value){
        title.focus()
        inValidInput(titleHelp, "Niet ok")
    }else{
        validInput(titleHelp, "Ok")
    }

    if(title.value && desc.value.length >= 10 && email.value.includes('@' && '.')){
        m8_status.textContent = "Alles in orde. geen lege velden meer."
        m8_status.className = "alert alert-success"
        summary.innerHTML = `<span class="fw-bold">Title </span>${title.value} <br> <span class="fw-bold">Desc </span>${desc.value} <br> <span class="fw-bold">Email </span>${email.value} <br>`
    }else{
        m8_status.textContent = "vul alles correct in aub."
        m8_status.className = "alert alert-danger"
        summary.className = "list-unstyled mb-0"
        summary.innerHTML = "<span></span>"

    }


}


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('m8_focus_btn').addEventListener('click', () =>{
        status()

    })
})