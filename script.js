
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

function getPlayerChoice(){
    let playerSelection = prompt('Please enter rock, paper or scissor');
    playerSelection = playerSelection.toLowerCase();

    while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor'){
        alert('please enter rock, paper or scissor');
        playerSelection = prompt('Please enter rock, paper or scissor');
        if(playerSelection === null){
            return;
        }
    }

    return playerSelection;
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return result = 'Tie games';
    }

    switch(playerSelection){
        case('rock'):
            if(computerSelection === 'paper'){
                return result = 'lose';
            }else{
                return result = 'win';
            }
            break;
        case('paper'):
            if(computerSelection === 'scissor'){
                return result = 'lose';
            }else{
                return result = 'win';
            }
            break;
        case('scissor'):
            if(computerSelection === 'Rock'){
                return result = 'lose';
            }else{
                return result = 'win';
            }
            break;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i =0 ;playerScore < 5 && computerScore < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)

        if(result == 'win'){
            playerScore++;
            console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }else if(result == 'lose'){
            computerScore++;
            console.log(`You ${result}! ${computerSelection} beats ${playerSelection}`);
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }else{
            console.log(`Tie Game`);
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }

    if(playerScore > computerScore){
        console.log(`You Win! final score ${playerScore}:${computerScore}`);
    }else if(playerScore < computerScore){
        console.log(`You Lose! final score ${playerScore}:${computerScore}`);
    }
}


game();



