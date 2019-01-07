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

var dice = Math.floor((Math.random() * 6)) + 1;  //sets dice from 1 to 6
console.log(dice);


document.querySelector('#current-0').textContent = dice;