let champion = document.querySelector(".formcontenttext");
console.log(champion.value);


function getchamp(event){
    event.preventDefault();
    console.log(`Peguei o champ e ele é o ${champion.value}`)
}