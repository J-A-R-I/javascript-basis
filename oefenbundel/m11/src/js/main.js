// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS

document.addEventListener('DOMContentLoaded', () => {
    const inputDate = document.getElementById('m11_date');
    const button = document.getElementById('m11_btn');
    const statusBox = document.getElementById('m11_status');
    const summaryList = document.getElementById('m11_summary');

    const DAGNAMEN = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

    const summary = '<li class="text-muted">Samenvatting verschijnt zodra een geldige geboortedatum is berekend.</li>';
    summaryList.innerHTML = summary;

    function toonStatus(tekst, klasse) {
        statusBox.textContent = tekst;

        statusBox.className = `alert ${klasse} mb-3`;
    }
    button.addEventListener('click', (e) => {
        e.preventDefault();
        berekenGegevens();
    });

    function berekenGegevens() {
        const dateValue = inputDate.value;

        if (!dateValue) {
            toonStatus('Vul een geldige geboortedatum in.', 'alert-warning');
            summaryList.innerHTML = summary;
            return;
        }

        const birth = new Date(dateValue);
        const now = new Date();

        if (isNaN(birth.getTime())) {
            toonStatus('De ingevoerde datum is ongeldig.', 'alert-warning');
            summaryList.innerHTML = summary;
            return;
        }

        const geboorteJaar = birth.getFullYear();
        const geboorteMaand = birth.getMonth();
        const geboorteDag = birth.getDate();

        const huidigJaar = now.getFullYear();
        const huidigeMaand = now.getMonth();
        const huidigeDag = now.getDate();

        let leeftijd = huidigJaar - geboorteJaar;

        if (huidigeMaand < geboorteMaand || (huidigeMaand === geboorteMaand && huidigeDag < geboorteDag)) {
            leeftijd--;
        }

        const geboorteDagNaam = DAGNAMEN[birth.getDay()]; // getDay geeft 0 (Zondag) tot 6 (Zaterdag)


        let nextBirthday = new Date(huidigJaar, geboorteMaand, geboorteDag);

        if (nextBirthday < now) {
            nextBirthday = new Date(huidigJaar + 1, geboorteMaand, geboorteDag);
        }


        const diffMs = nextBirthday.getTime() - now.getTime();

        const dagenTotVerjaardag = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        const volgendeVerjaardagString = nextBirthday.toLocaleDateString('nl-BE');

        const korteSamenvatting = `Je bent ongeveer ${leeftijd} jaar oud. Je bent geboren op een ${geboorteDagNaam}.`;
        toonStatus(korteSamenvatting, 'alert-success');

        const detailLijst = `
            <li><span class="fw-bold">Leeftijd:</span> ${leeftijd} jaar</li>
            <li><span class="fw-bold">Geboortedag:</span> ${geboorteDagNaam}</li>
            <li><span class="fw-bold">Volgende verjaardag:</span> ${volgendeVerjaardagString}</li>
            <li><span class="fw-bold">Dagen tot volgende verjaardag:</span> ${dagenTotVerjaardag} dag(en)</li>
        `;
        summaryList.innerHTML = detailLijst;
    }
});