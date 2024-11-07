import "../CSS/style.css";
import {games} from "./items";

games.forEach((game) => console.log(game.name))


const DOM ={
    cardbox: document.querySelector(".cardbox"),
    fromsoftbtn: document.getElementById("FromSoftware"),
    ubisoftbtn: document.getElementById("Ubisoft"),
    rockstarbtn: document.getElementById("RockstarGames"),
    capcombtn: document.getElementById("Capcom"),
    cdprobtn: document.getElementById("CDProject"),
    teamcherbtn: document.getElementById("TeamCherry"),
}


function createcard(game){
    game.forEach((gamename) => DOM.cardbox.insertAdjacentHTML("beforeend", 
        `<div class = "card"> 
        <h1 class = "name">${gamename.name}</h1>
        <h5 class = "price">${gamename.price}</h5>
        <h5 class = "studio" id = "${gamename.studio}">${gamename.studio}</h5>
        <br>
    </div>`))
    
}
createcard(games)

function filterstudio(studio){

    const cards = document.querySelectorAll(".card")



    cards.forEach((card) => {

        const gamestudio = card.querySelector(".studio").getAttribute("id");

        if (gamestudio != studio){
            card.remove()
        }
        

    }) 

}

function fromsoftfilter(){
    const frombutton = DOM.fromsoftbtn

    frombutton.addEventListener("click", function(){
        filterstudio("FromSoftware")
    })

    
}
fromsoftfilter()
 
function ubisoftfilter(){
    const ubibutton = DOM.ubisoftbtn
    ubibutton.addEventListener("click", () => filterstudio("Ubisoft"))
}
ubisoftfilter()

function rockstarfilter(){
    const rockstarbutton = DOM.rockstarbtn
    rockstarbutton.addEventListener("click", () => filterstudio("Rockstar Games"))
}
rockstarfilter()
 
function capcomfilter(){
    const capcombutton = DOM.capcombtn
    capcombutton.addEventListener("click", () => filterstudio("Capcom Production Studio 4"))
}
capcomfilter()
 
function cdprojectfilter(){
    const cdprobutton = DOM.cdprobtn
    cdprobutton.addEventListener("click", () => filterstudio("CD Projekt Red"))
}
cdprojectfilter()
 
function teamchefilter(){
    const teamchebutton = DOM.teamcherbtn
    teamchebutton.addEventListener("click", () => filterstudio("Team Cherry"))
}
teamchefilter()
 