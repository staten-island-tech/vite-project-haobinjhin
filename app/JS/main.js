import "../CSS/style.css";
import {games} from "./items";

games.forEach((game) => console.log(game.name))


const DOM ={
    cardbox: document.querySelector(".cardbox"),
    cards: document.getElementsByClassName("card"),
    fromsoftbtn: document.getElementById("FromSoftware"),
    ubisoftbtn: document.getElementById("Ubisoft"),
    rockstarbtn: document.getElementById("RockstarGames"),
    capcombtn: document.getElementById("Capcom"),
    cdprobtn: document.getElementById("CDProject"),
    teamcherbtn: document.getElementById("TeamCherry"),
    refreshbtn: document.getElementById("refresh"),
    lightdarkbtn: document.getElementById("light/dark"),
}


function createcard(game){
    game.forEach((gamename) => DOM.cardbox.insertAdjacentHTML("beforeend", 
        `<div class = "card"> 
        <h1 class = "name">${gamename.name}</h1>
        <h5 class = "price">${gamename.price}</h5>
        <h5 class = "studio" id = "${gamename.studio}">${gamename.studio}</h5>
        <br/>
        <img src="${gamename.pic}" alt="${gamename.name}" class = "image">
    </div>`))
    
}
createcard(games)


function displaycards(filteredgames){

    DOM.cardbox.innerHTML = ""

    filteredgames.forEach((game) =>{
        DOM.cardbox.insertAdjacentHTML("beforeend",
        `<div class = "card"> 
        
        <h1 class = "name">${game.name}</h1>
        <h5 class = "price">${game.price}</h5>
        <h5 class = "studio" id = "${game.studio}">${game.studio}</h5>
        <br/>
        <img src="${game.pic}" alt="${game.name}" class = "image">
        </div>`
        )
    })


}


function filterstudio(studio){
    const filtergames = games.filter((game) => game.studio === studio)
    displaycards(filtergames)
    
}


DOM.fromsoftbtn.addEventListener("click", () => filterstudio("FromSoftware"));
DOM.ubisoftbtn.addEventListener("click", () => filterstudio("Ubisoft"));
DOM.rockstarbtn.addEventListener("click", () => filterstudio("Rockstar Games"));
DOM.capcombtn.addEventListener("click", () => filterstudio("Capcom Production Studio 4"));
DOM.cdprobtn.addEventListener("click", () => filterstudio("CD Projekt Red"));
DOM.teamcherbtn.addEventListener("click", () => filterstudio("Team Cherry"));
DOM.refreshbtn.addEventListener("click", function(){
    DOM.cardbox.innerHTML = ""
    createcard(games)

});


DOM.lightdarkbtn.addEventListener("click", function(){
    if (document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
})


 