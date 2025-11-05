// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'


//pure function

function maakGroet(naam,achternaam,leeftijd,land){
    return `Hallo ${naam} ${achternaam} je bent ${leeftijd} jaar oud en leeft in het land ${land} !`
}

//impure function
function handleGroetClick(){
    const naamInput = document.getElementById('n_input')
    const achternaamInput = document.getElementById("achternaam_input")
    const leeftijdInput = document.getElementById("age_input")
    const landInput = document.getElementById("land_input")
    const output = document.getElementById('fr_text')
    const naam = naamInput.value.trim()
    const achternaam = achternaamInput.value.trim()
    const land = landInput.value.trim()
    const leeftijd = leeftijdInput.value


    if(!naam){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een naam in!"
        return
    }
    if(!achternaam){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een achternaam in!"
        return
    }

    if(!leeftijd){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een leeftijd in!"
        return
    }
    if(!land){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een land in!"
        return
    }
    const boodschap = maakGroet(naam,achternaam,leeftijd,land)

    output.textContent = boodschap;
    output.className="alert alert-success mt-3 mb-0"
}

document.addEventListener("DOMContentLoaded", () => {
    const btnGreet = document.getElementById('fr_btn')
    btnGreet.addEventListener("click", handleGroetClick);
});