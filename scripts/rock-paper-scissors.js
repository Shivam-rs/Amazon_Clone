let score = JSON.parse(localStorage.getItem('score')) || {
    won: 0,
    lost: 0,
    tied: 0
};
  
function computerMoveGen(){
    const randomSr = Math.random();
    let computerMove = '';
    if(randomSr < (1/3)) { 
      computerMove = 'rock';
    }
    else if(randomSr < (2/3)){
      computerMove = 'paper';
    }else{
      computerMove = 'scissors';
    }

    return computerMove;
}

function letsPlay(playerMove){
    let computerMove = computerMoveGen();

    if(playerMove == 'scissors'){
        if(computerMove === 'rock'){
          displayResult('Lost', playerMove, computerMove)
        }else if(computerMove === 'paper'){
          displayResult('Won', playerMove, computerMove)
        }else{
          displayResult('Tied', playerMove, computerMove)
        }

    }else if(playerMove == 'paper'){
        if(computerMove === 'rock'){
          displayResult('Won', playerMove, computerMove)
        }else if(computerMove === 'paper'){
          displayResult('Tied', playerMove, computerMove)
        }else{
          displayResult('Lost', playerMove, computerMove)
        }

    }else if(playerMove == 'rock'){
        if(computerMove === 'rock'){
          displayResult('Tied', playerMove, computerMove)
        }else if(computerMove === 'paper'){
          displayResult('Lost', playerMove, computerMove)
        }else{
          displayResult('Won', playerMove, computerMove)
        }
    }
}

function updateScore(result){
    if(result === 'Won'){
      score.won +=1;
    }else if(result === 'Lost'){
      score.lost +=1;
    }else if(result === 'Tied'){
      score.tied += 1;
    }else{
      score.won = 0;
      score.lost = 0;
      score.tied = 0;
    } 
    localStorage.setItem('score', JSON.stringify(score));       
}

function displayScore(){
    document.querySelector('.js-score')
      .innerHTML = `Won: ${score.won}, Lost: ${score.lost} & ties: ${score.tied}`;
}

function displayResult(result, playerMove, computerMove){
    let message = ''
    
    if(result === 'Won'){
      message = `You ${result}!!!!`;
    }else if(result === 'Lost'){
      message = `Opps!! you ${result} the match`;
    }else if(result === 'Tied'){
      message = `Match has ${result}`;
    }
    
    document.querySelector('.js-game-result')
      .innerHTML = message;
    
    if(message != ''){
      document.querySelector('.js-choices')
        .innerHTML = `You chose: <img src="images/${playerMove}-emoji.png" class="move-icon"> Vs Computer Chose: <img src="images/${computerMove}-emoji.png" class="move-icon">`;
    }else{
      document.querySelector('.js-choices')
        .innerHTML = ''
    }
    

    updateScore(result);
    displayScore();
}