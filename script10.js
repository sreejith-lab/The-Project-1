const menu = document.getElementById('menu');
const aside = document.querySelector('aside');
menu.addEventListener('click',()=>{
    aside.classList.toggle('aside1');
if  (aside.classList.contains('aside1')){
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-x');
}else{
    menu.classList.remove('fa-x');
    menu.classList.add('fa-bars')
}
})

///////////////////////////////
function openid(id) {
    // Map li IDs to corresponding card IDs
    const map = {
        sumid1: "The-card1",
        sumid2: "The-card2",
        sumid3: "The-card3",
        sumid4: "The-card4",
        sumid5: "The-card5",
        sumid6: "The-card6"
    };

    // Hide all cards first
    for (let key in map) {
        document.getElementById(map[key]).classList.remove("display1");
        document.getElementById(map[key]).classList.add("display");
    }

    // Show only the selected one
    const cardId = map[id];
    const selectedCard = document.getElementById(cardId);
    selectedCard.classList.remove("display");
    selectedCard.classList.add("display1");
}
