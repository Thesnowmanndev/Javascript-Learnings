'use strict';

// Math.trunc removes fractional digits (float points) and returns a solid int
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// Math.random gives a random number between 0 and 1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let guessNumber = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function updateScore() {
    score = score - 1;
    document.querySelector('.score').textContent = score;
}

function loseGame() {
    displayMessage(`😢 You lose.`);
    score = 0;
    document.querySelector('.score').textContent = score;
}

function winScreen() {
    // style can be changed by changing its css properties
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    displayMessage(`🥳 You Guessed the correct number!`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = highScore;
}

// querySelector looks for an element with the chosen class or id
// querySelector -- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// addEventListener is a function that takes in and event type and a listener and/or options.
// addEventListener -- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.querySelector('.check').addEventListener('click', function () {
    // value returns a string representing the attribute value
    //  https://developer.mozilla.org/en-US/docs/Web/API/Attr/value
    guessNumber = Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        // textContent changes the text in an HTML element
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
        displayMessage('👎 Guess is not a number.');
    } else if (guessNumber === secretNumber) {
        if (score > 0) {
            // check to see if current score is higher than previous high score
            if (score > highScore) {
                highScore = score;
            }
            winScreen();
        } else {
            loseGame();
        }
    } else if (guessNumber !== secretNumber) {
        if (score > 0) {
            guessNumber > secretNumber
                ? displayMessage(`📈 ${guessNumber} is too high!`)
                : displayMessage(`📉 ${guessNumber} is too low!`);
            updateScore();
        } else {
            loseGame();
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    // reset random number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // reset score to 20
    score = 20;
    // reset score message
    document.querySelector('.score').textContent = score;
    // change the background to black
    document.querySelector('body').style.backgroundColor = '#222';
    // reset the size of the secret number
    document.querySelector('.number').style.width = '15rem';
    // reset the secret number block to ?
    document.querySelector('.number').textContent = `?`;
    // reset guess input to blank
    document.querySelector('.guess').value = '';
    // reset game message
    displayMessage(`Start guessing...`);
});
