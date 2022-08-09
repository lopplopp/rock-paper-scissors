let playerScore = 0;
let computerScore = 0;
const roundResult = document.getElementById('roundResult');
const score = document.getElementById('score');
score.textContent = `Player: ${playerScore} computer: ${computerScore}`;

const buttons = document.querySelectorAll('.button');
for(let button of buttons){
    button.addEventListener('click', () => playRound(button.getAttribute('id'), getComputerChoice()));
}  



function updateScore(){
    score.textContent = `Player: ${playerScore} computer: ${computerScore}`;
}

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3)+1;
    let computerSelection;

    switch(randomNum){
        case(1):
            computerSelection = 'rock';
            break;
        case(2):
            computerSelection = 'paper';
            break;
        case(3):
            computerSelection = 'scissor';
            break;
    }

    return computerSelection;
}

function endGame(){
    if(playerScore == 5 || computerScore == 5){
        let gameWinner = winner();
        let resultDiv = document.querySelector('.result')
        resultDiv.innerHTML = '';
        let gameover = document.createElement('h1');
        gameover.textContent = 'GAMEOVER';
        let score = document.createElement('p');
        score.textContent = `${playerScore}:${computerScore}`;
        let finalWinner = document.createElement('p');
        finalWinner.textContent = `The Winner is ${gameWinner}!!`
        let restartBtn = document.createElement('button');
        restartBtn.textContent = `restart?`;
        restartBtn.setAttribute('id', 'restartButton');
        restartBtn.style.alignSelf = 'center';
        resultDiv.appendChild(gameover);
        resultDiv.appendChild(score);
        resultDiv.appendChild(finalWinner);
        resultDiv.appendChild(restartBtn);
        restartBtn.addEventListener('click', ()=>restart());
        return true;
    }
    return false;
}


function restart(){
    playerScore = 0;
    computerScore = 0;
    let resultDiv = document.querySelector('.result');
    resultDiv.innerHTML ='';
    let title = document.createElement('h1');
    title.textContent = `Score`
    updateScore();
    roundResult.textContent='';
    resultDiv.appendChild(title);
    resultDiv.appendChild(score);
    resultDiv.appendChild(roundResult);
}

function winner(){
    if(playerScore < computerScore){
        return 'computer';
    }else{
        return 'player';
    }
}

function playRound(playerSelection, computerSelection){
    if(endGame())restart();
    console.log(playerSelection, computerSelection);
    if(playerSelection === computerSelection){
        roundResult.textContent = `Tie Game`;
        return;
    }

    switch(playerSelection){
        case('rock'):
            if(computerSelection === 'paper'){
                computerScore++;
                roundResult.textContent = `${computerSelection} beats ${playerSelection}`;
                updateScore();
                endGame();
            }else{
                playerScore++;
                roundResult.textContent = `${playerSelection} beats ${computerSelection}`;
                updateScore();
                endGame();
            }
            break;
        case('paper'):
            if(computerSelection === 'scissor'){
                computerScore++;
                roundResult.textContent = `${computerSelection} beats ${playerSelection}`;
                updateScore();
                endGame();
            }else{
                playerScore++;
                roundResult.textContent = `${playerSelection} beats ${computerSelection}`;
                updateScore();
                endGame();
            }
            break;
        case('scissor'):
            if(computerSelection === 'rock'){
                computerScore++;
                roundResult.textContent = `${computerSelection} beats ${playerSelection}`;
                updateScore();
                endGame();
            }else{
                playerScore++;
                roundResult.textContent = `${playerSelection} beats ${computerSelection}`;
                updateScore();
                endGame();
            }
            break;
    }
}