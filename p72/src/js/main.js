// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {

    const box = document.getElementById("rb_box");

    document.getElementById("rb_box")
        ?.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("rb_box").classList.add("border","border-1", "border-success")
            box.style.setProperty("background-color", "lightgreen", "important")
            document.getElementById("rb_msg").textContent = "Je klikt!"
            ;});

    document.getElementById("rb_box")
        ?.addEventListener("dblclick", (e) => {
            e.preventDefault();
            document.getElementById("rb_box").classList.add("border","border-1", "border-danger")
            document.getElementById("rb_msg").textContent = "Dubbelklik Wow!"
            ;});


    box.addEventListener("mouseover", () => {
        box.classList.add("bg-warning");
        box.style.setProperty("background-color", "lightgreen", "important")
        box.textContent = "hallo!";
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("bg-warning");
        box.style.setProperty("background-color", "lightgrey", "important")
        box.textContent = "Kom terug ️";
    });

    // 3) Form prevent + feedback
    document.getElementById("ev_form2")
        ?.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("ev_input2").value.trim();
            const msg = document.getElementById("ev_msg2");

            if (!name) {
                msg.className = "alert alert-danger mt-3 mb-0";
                msg.textContent = "❌ Vul je naam in";
                return;
            }

            msg.className = "alert alert-success mt-3 mb-0";
            msg.textContent = ` Form verzonden voor ${name} (zonder reload!)`;
        });
});