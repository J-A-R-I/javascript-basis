// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

function showBOM() {
    const data = [
        `📡 Online: ${navigator.onLine ? "Ja" : "Nee"}`,
        `Touch ${navigator.maxTouchPoints > 0 ? "Ja" : "Nee"}`,
        `💬 taal: ${navigator.language}`,
        `device ${window.innerWidth > 1920 ? "computer" : "mobile"}`,
        `🌐 User Agent: ${navigator.userAgent.includes("windows")}`,


        // `🪟 Window breedte: ${window.innerWidth}`,
        // `🖥️ Screen resolutie: ${screen.width} x ${screen.height}`,
        // `🌐 User Agent: ${navigator.userAgent}`,
        // `🔗 URL: ${location.href}`
    ];

    document.getElementById("dc_list").innerHTML =
        data.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dc_btn")
        ?.addEventListener("click", showBOM);
});