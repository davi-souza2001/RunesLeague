let champion = document.querySelector(".formcontenttext");

function getchamp(event) {
    event.preventDefault();
    console.log(`Peguei o champ e ele é o ${champion.value}`);
    /* window.location.href = `https://www.leagueofgraphs.com/pt/champions/runes/${champion.value}`; */
    window.location.href = `https://www.runas.lol/${champion.value}/`;
}