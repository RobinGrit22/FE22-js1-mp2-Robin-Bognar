const btnName = document.getElementById('nameBtn');
const showName = document.getElementById('showUserName');
let inputName = document.getElementById('name');


btnName.addEventListener('click', function(e){
    e.preventDefault();
    showName.innerText = 'Välkommen' + ' ' + inputName.value
})





const userChoiceShow = document.getElementById('leftPickPosition')
const compChoiceShow = document.getElementById('rightPickPosition')
const leftCardPick = document.querySelectorAll('div.userPick')
const rightCardPick = document.querySelectorAll('div.compPick')
const userScoreShow = document.getElementById('user-points')
const compScoreShow = document.getElementById('comp-points')
const restult = document.getElementById('result')
const resultRestart = document.getElementById('result-restart')
let userPick
let compPick
let userScore = 0
let compScore = 0



leftCardPick.forEach(leftCardPick => leftCardPick.addEventListener('click', (e) =>{
    e.preventDefault();
    userPick = e.target.id
    userChoiceShow.innerText = userPick
    addComputerChoise()
    result()
    restart()
    
}))
   
function addComputerChoise(){
    const randomNumber = Math.floor(Math.random() * leftCardPick.length) +1
    
    if(randomNumber === 1){
        compPick = 'ROCK'
        
    }
    if(randomNumber === 2){
        compPick = 'PAPER'
        
    }
    if(randomNumber === 3){
        compPick = 'SCISSOR'
       
    }
    compChoiceShow.innerHTML = compPick
}     


function result(){
    if(compPick === userPick){
     restult.innerText = 'DRAW!'
     restult.style.color = 'orange'
    }
    else if(compPick === 'ROCK' && userPick === 'PAPER' || compPick === 'PAPER' && userPick === 'SCISSOR' || compPick === 'SCISSOR' && userPick === 'ROCK'){
        restult.innerText = 'YOU WIN!'
        restult.style.color = 'green'
        userScoreShow.innerText = (userScore++)+1
        
    }
    else if(compPick === 'ROCK' && userPick === 'SCISSOR' || compPick === 'PAPER' && userPick === 'ROCK' || compPick === 'SCISSOR' && userPick === 'PAPER'){
        restult.innerText = 'YOU LOSE!'
        restult.style.color = 'red'
        compScoreShow.innerText = (compScore++)+1
    }
}
function restart() {
    if(compScore == 3){
        resultRestart.innerText = 'YOU LOST THE GAME! GAME RESTARTED'
        resultRestart.style.color = 'red'
        compScore = 0
        userScore = 0
        compScoreShow.innerText = '0'
        userScoreShow.innerText = '0'
        
    }
    else if(userScore == 3){
        resultRestart.innerText = 'YOU WON THE GAME! GAME RESTARTED'
        resultRestart.style.color = 'green'
        compScore = 0
        userScore = 0
        userScoreShow.innerText = '0'
        compScoreShow.innerText = '0'
        
    }
}





    





