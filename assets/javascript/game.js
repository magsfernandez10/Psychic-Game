var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t",
    "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessedChoices = [];
var userGuess;

var reset = function () {
    guessedChoices = [];
    numGuesses = 10;
}

document.onkeydown = function (event) {


    userGuess = event.key;

    var randomcomputerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === randomcomputerGuess) {
        wins++;
        numGuesses--;
        guessedChoices.push(userGuess);
    }
    else {
        losses++;
        numGuesses--;
        guessedChoices.push(userGuess);
    }

    if (numGuesses === 0) {
        reset();
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





