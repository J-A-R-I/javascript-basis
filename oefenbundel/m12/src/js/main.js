// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS

const array = []

const naam = document.getElementById("m12_name")
const leeftijd = document.getElementById("m12_age")
const rol = document.getElementById("m12_role")
const list = document.getElementById("m12_list")

const totalcounter = document.getElementById("m12_total_count")
const usercounter = document.getElementById("m12_user_count")
const admincounter = document.getElementById("m12_admin_count")

var totalcount = 0 + 1
var usercount = 0 + 1
var admincount = 0 + 1
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("m12_add").addEventListener("click", (e) =>{
        e.preventDefault()
        totalcounter.textContent = totalcount++

        if(naam.value && leeftijd.value){
            if (rol.value === "user"){
                usercounter.textContent = usercount++
            }else if(rol.value === "admin"){
                admincounter.textContent = admincount++
            }
        }

        list.innerHTML += `<div class="card">
                                <div class="card-body">
                                    <h2 class="card-title">${naam.value}</h2>
                                    <h3 class="card-text">leeftijd: <span class="fw-bold">${leeftijd.value}</span></h3>
                                    <div> ${naam.value} (${leeftijd.value}) is een ${rol.value} </div>
                                </div>
                            </div`

    })

})

