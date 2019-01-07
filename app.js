/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores = [0,0]; //first player is scores[0], and second player is scores[1]
var roundScore = 0;
var activePlayer = 0; //first player is 0, second player is 1

//var dice = Math.floor((Math.random() * 6)) + 1;  //sets dice from 1 to 6
//console.log(dice);


//document.querySelector('#current-' + activePlayer).textContent = dice;

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.dice').style.display = 'none'; //suppose to manipulate the CSS .dice to remove the image


document.querySelector('.btn-roll').addEventListener('click', diceRoll);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', newGame);


/*-----------------------------------------------------------------------*/
function diceRoll()
{
    //checks whos turn it is
    var turn = '';
    if(activePlayer == 0){
        turn = 'current-0';
    }
    else{
        turn = 'current-1';
    }
    
    //get random number
    var dice = Math.floor((Math.random() * 6)) + 1;
    
    //Display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //Update the Round score if the number rolled is not 1
    if(dice !== 1){
        roundScore += dice;
        document.getElementById(turn).textContent = roundScore;
    }
    else{
        roundScore = 0;
        document.getElementById(turn).textContent = roundScore;
        if(turn === 'current-0'){
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display = 'none';
        }
        else{
            activePlayer = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.dice').style.display = 'none';
        }
    }
    
}

function hold()
{
    if(activePlayer === 0){
        scores[0] += roundScore;
        if(scores[activePlayer] >= 20){
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('score-0').textContent = scores[0];
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-').style.display = 'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        }
        else{
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            document.getElementById('score-0').textContent = scores[0];
            document.getElementById('current-0').textContent = '0';
            roundScore = 0;
            activePlayer = 1;
            document.querySelector('.dice').style.display = 'none';
        }
        
    }
    else{
        scores[1] += roundScore;
        if(scores[activePlayer] >= 20){
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('score-1').textContent = scores[1];
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-').style.display = 'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        }
        else{
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.getElementById('score-1').textContent = scores[1];
            activePlayer = 0;
            roundScore = 0;
            document.getElementById('current-1').textContent = '0';
            document.querySelector('.dice').style.display = 'none';
        }
    }
}

function newGame()
{
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    activePlayer = 0;
    roundScore = 0;
    scores[0] = 0;
    scores[1] = 0;
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}