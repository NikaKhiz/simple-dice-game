const player1name = document.querySelector(".player1name")
const player2name = document.querySelector(".player2name")
const plyaer1dice = document.querySelector(".player1dice")
const plyaer2dice = document.querySelector(".player2dice")
const editNames = document.querySelector(".editNames")
const rollDices = document.querySelector(".rollDice")
const winner = document.querySelector(".winners")
const dices = []
const dicesUrl = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
for(let i= 0; i < dicesUrl.length; i++){
    dices[i] = new Image();
    dices[i].src = dicesUrl[i]
}
window.addEventListener("load",function(){
    renderNames()
    changeNames()
    rollDice()
})

function renderNames(){
    player1name.innerHTML = prompt("Enter player 1 name: ")
    player2name.innerHTML = prompt("Enter player 2 name: ")
}

function changeNames (){
    editNames.addEventListener("click",()=>{
    player1name.innerHTML = prompt("Enter player 1 name: ")
    player2name.innerHTML = prompt("Enter player 2 name: ")
    })
}

function rollDice () {
    rollDices.addEventListener("click",() =>{
        renderGame();
    })
}

function renderGame () {
    let randNum1 = Math.floor(Math.random() * 6 )
    let randNum2 = Math.floor(Math.random() * 6 )
    plyaer1dice.src = dices[randNum1].src
    plyaer2dice.src = dices[randNum2].src     
    if(randNum1 === randNum2){
        winner.innerHTML = `same dices , roll again`
    }else if (randNum1 > randNum2){
        winner.innerHTML = `${player1name.innerHTML} won!`
    }else{
        winner.innerHTML = `${player2name.innerHTML} won!`
    }

}