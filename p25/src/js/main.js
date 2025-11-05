// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'


//pure function

function maakGroet(naam, leeftijd){
    return `Hallo ${naam} je bent ${leeftijd} jaar oud!`
}

//impure function
function handleGroetClick(){
    const naamInput = document.getElementById('n_input')
    const leeftijdInput = document.getElementById("age_input")
    const output = document.getElementById('fr_text')
    const naam = naamInput.value.trim();
    const leeftijd = leeftijdInput.value

    if(!naam && !leeftijd){
        output.className = "alert alert-warning mt-3 mb-0 fs-2"
        output.textContent = "je hebt niets ingevuld!"
        return
    }
    const boodschap = maakGroet(naam, leeftijd)


    if(!naam){
        output.className = "alert alert-warning mt-3 mb-0 fs-2"
        output.textContent = "Geef een naam in!"
        return
    }
    if(!leeftijd){
        output.className = "alert alert-warning mt-3 mb-0 fs-2"
        output.textContent = "Geef een leeftijd in!"
        return
    }


    output.textContent = boodschap;
    output.className="alert alert-success mt-3 mb-0 fs-2"
}

document.addEventListener("DOMContentLoaded", () => {
    const btnGreet = document.getElementById('fr_btn')
    btnGreet.addEventListener("click", handleGroetClick);
});