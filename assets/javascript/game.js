var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t",
    "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessedChoices = [];
var userGuess;

document.onkeydown = function (event) {

    console.log(event.key);
    userGuess = event.key;

    console.log(userGuess);

var randomcomputerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(userGuess);
if (userGuess === randomcomputerGuess) {
    wins++;
    console.log('wins:', wins);
    numGuesses--;
    console.log(numGuesses);
    guessedChoices.push(userGuess);
}
else {
    losses++;
    console.log('losses:', losses);
    numGuesses--;
    guessedChoices.push(userGuess);
}

var html =
    "<h1> The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + numGuesses + "</p>" +
    "<p>Your Guesses so far: " + guessedChoices.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;
};



