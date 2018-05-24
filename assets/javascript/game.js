// Creates variables
    var guessesLeft = 9;
    var guessesMade = "";
    var wins = 0;
    var losses = 0;
    // Creates an array that lists out all of the options (a-z).
    var alpha = "abcdefghijklmnopqrstuvwxyz".split('');
    var i = 0;
    console.log(alpha);

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        console.log(i);
        // Determines which key was pressed.
        var userGuess = event.key;
        userGuess = userGuess.toLowerCase();
        
        // Only run the following code block if the user presses "a-z".
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Nested if statement to make sure results are only added if the correct key is pressed.
            // Randomly chooses a choice from the options array. This is the Computer's guess.
            var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
            if (computerGuess === userGuess) {
                //you score
                wins++;
                guessesLeft = 9;
            } else {   
                //user scores
                guessesLeft--;
                guessesMade = userGuess + " " + guessesMade;
                if (guessesLeft === 0) {
                    losses++;
                    guessesLeft = 9;
                    guessesMade = "";
                }
            }
            console.log(userGuess + " " + computerGuess);
            // Select the div with the correct id, and insert the following HTML into it.
            document.querySelector("#game").innerHTML = "You chose: " + userGuess + ". <br />The computer chose: " + computerGuess;
            document.querySelector("#results").innerHTML = "Wins: " + wins + ". <br />Losses: " + losses + ". <br />Guesses Left: " + guessesLeft + "<br />Guesses so far: " + guessesMade;
        }
    };

