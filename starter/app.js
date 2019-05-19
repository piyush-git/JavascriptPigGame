/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Videos 1 to 6:
/*
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1; 
//Math.floor rounds off to nearest integer. 4.6586 -> 4
console.log(dice);

//document.querySelector('#current-0').textContent = dice; 
document.querySelector('#current-' + activePlayer).textContent = dice;  // this is a setter

//lets us select stuff exactly how we do in CSS. Diff. is that it only selects the first element that it finds.
// textContent let's us change the text of that particular element
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //we used html tags inside single quotes as string cause if no string, then JS parser will think it's some JS code and throw an error cause the syntax would not match
//this part is used to use some html syntax/tags without them showing up in the browser as strings
//Hint: replace innerHTML with textContent and see what happens

//To read data using the querySelector, instead of updating:
//var x = document.querySelector('#score-0').textContent; // this is a getter
//console.log(x);


//#  to change the css of an element using the querySelector
document.querySelector('.dice').style.display = 'none'; //.dice cause it's a class this time instead of an id
//display is the css property and 'none' is the value attributed to this property
*/


// 7. Events and Event Handling: Rolling the Dice
/*
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//var dice = Math.floor(Math.random() * 6) + 1; 
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('player-0').textContent = '0';
document.getElementById('player-1').textContent = '0';

//function btn() {
//    // Do something here
//}
//btn();

//document.querySelector('.btn-roll').addEventListener('click', btn); //#Note that there is no () after btn as we don't want to call the function,
//#We want the event listener to call the function for us
//'btn' function is called the 'callback' function
//as it's a function not called by us, but by another function

//addEventListener takes two arguments: 
//1. Event Type, 2. function that will be called as soon as that event happens

//But we will use anonymous function to do this:
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1; // moved here as we only need this when clicked 
    //we don't need this right after our application loads

    // 2. Display the result
    //document.querySelector('.dice')document.querySelector('.dice').style.display = 'block';
    // we had set .display to 'none' to hide the dice. //'block' brings it back
    //We have to keep selecting the 'dice' over and over again. 
    //So, we're going to store this selection in a variable and use this variable whenever needed. 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; //modified querySelector code
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score if the rolled no. was not a '1'

});

// to set the player 1 and 2 score , and round score to 0, we could use the document.querySelector and use current-1,0 and score-1,0 id's.
//or there's another method; Using 'document.getElementById'.
//this only works for id's, but is FASTER than 'querySelector'.
*/



// 8. Updating Scores and Changing the Active Player

/*
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1; // moved here as we only need this when clicked 
    //we don't need this right after our application loads

    // 2. Display the result
    //document.querySelector('.dice')document.querySelector('.dice').style.display = 'block';
    // we had set .display to 'none' to hide the dice. //'block' brings it back
    //We have to keep selecting the 'dice' over and over again. 
    //So, we're going to store this selection in a variable and use this variable whenever needed. 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; //modified querySelector code
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score if the rolled no. was not a '1'
    if(dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';


    }

});
*/

// 9. Implementing our 'HOLD' Function and the DRY Principle
/*
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1; // moved here as we only need this when clicked 
    //we don't need this right after our application loads

    // 2. Display the result
    //document.querySelector('.dice')document.querySelector('.dice').style.display = 'block';
    // we had set .display to 'none' to hide the dice. //'block' brings it back
    //We have to keep selecting the 'dice' over and over again. 
    //So, we're going to store this selection in a variable and use this variable whenever needed. 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; //modified querySelector code
    diceDOM.src = 'dice-' + dice + '.png'; //image

    // 3. Update the round score if the rolled no. was not a '1'
    if(dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else { //if dice = 1
        //Next player
        
        /*
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';*/ /*

        nextPlayer();


    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // 1. Addd the current score to the global score
    scores[activePlayer] += roundScore; 

    // 2. Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // 3. Check if player won the game
    if (scores[activePlayer] >= 19) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');


    } else {
        // 4. Next player
    
        /*
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
        */ /*
        //commented as this code was being repeated from our if else block, above
        
        nextPlayer();
            
    }
        
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
*/

//10. Creating a Game Initialization Function

/*
var scores, roundScore, activePlayer;

//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0;
init();


//document.querySelector('#current-' + activePlayer).textContent = dice;

/*document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/ /*

document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1; // moved here as we only need this when clicked 
    //we don't need this right after our application loads

    // 2. Display the result
    //document.querySelector('.dice')document.querySelector('.dice').style.display = 'block';
    // we had set .display to 'none' to hide the dice. //'block' brings it back
    //We have to keep selecting the 'dice' over and over again. 
    //So, we're going to store this selection in a variable and use this variable whenever needed. 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; //modified querySelector code
    diceDOM.src = 'dice-' + dice + '.png'; //image

    // 3. Update the round score if the rolled no. was not a '1'
    if(dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else { //if dice = 1
        //Next player
        
        /*
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';*/ /*

        nextPlayer();


    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // 1. Addd the current score to the global score
    scores[activePlayer] += roundScore; 

    // 2. Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // 3. Check if player won the game
    if (scores[activePlayer] >= 19) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');


    } else {
        // 4. Next player
    
        /*
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
        */ /*
        //commented as this code was being repeated from our if else block, above
        
        nextPlayer();
            
    }
        
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

/*document.querySelector('.btn-new').addEventListener('click', function() {
    //scores = [0,0];
    //activePlayer = 0;
    //roundScore = 0;
    init(); // does what above 3 lines of code do;

});*/ /* // or we could do what's in the lines below

document.querySelector('.btn-new').addEventListener('click', init); //no parentheses after 'init' as we're not calling the function here. we want our eventListener to call it on the click event

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    //or 
    //document.getElementById('name-0').textContent = 'Player 1';
    //document.getElementById('name-1').textContent = 'Player 2'; // # is for querySelector for selecting id's

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}
*/

// 11. Finishing Touches State Variables 


var scores, roundScore, activePlayer, gamePlaying;

//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0;
init();


//document.querySelector('#current-' + activePlayer).textContent = dice;

/*document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/ 

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1; // moved here as we only need this when clicked 
        //we don't need this right after our application loads

        // 2. Display the result
        //document.querySelector('.dice')document.querySelector('.dice').style.display = 'block';
        // we had set .display to 'none' to hide the dice. //'block' brings it back
        //We have to keep selecting the 'dice' over and over again. 
        //So, we're going to store this selection in a variable and use this variable whenever needed. 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; //modified querySelector code
        diceDOM.src = 'dice-' + dice + '.png'; //image

        // 3. Update the round score if the rolled no. was not a '1'
        if(dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else { //if dice = 1
            //Next player
            
            /*
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';*/ 

            nextPlayer();


        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Addd the current score to the global score
        scores[activePlayer] += roundScore; 

        // 2. Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Check if player won the game
        if (scores[activePlayer] >= 19) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;


        } else {
            // 4. Next player
        
            /*
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
            */ 
            //commented as this code was being repeated from our if else block, above
            
            nextPlayer();
                
        }
    }
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

/*document.querySelector('.btn-new').addEventListener('click', function() {
    //scores = [0,0];
    //activePlayer = 0;
    //roundScore = 0;
    init(); // does what above 3 lines of code do;

});*/  // or we could do what's in the lines below

document.querySelector('.btn-new').addEventListener('click', init); //no parentheses after 'init' as we're not calling the function here. we want our eventListener to call it on the click event

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    //or 
    //document.getElementById('name-0').textContent = 'Player 1';
    //document.getElementById('name-1').textContent = 'Player 2'; // # is for querySelector for selecting id's

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}


