const words = ["action", "comedy", "romance", "horror", "western", "drama", "adventure"];
let word = selectRandomWord(words);
let maxLives = 6;
let lives = maxLives;
let guessedLetters = [];
let wordDisplay = document.getElementById("word-display");
let hangmanImage = document.getElementById("hangman-image");
let messageElement = document.getElementById("message");

function selectRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function displayWord() {
    let display = "";
    for (let char of word) {
        if (guessedLetters.includes(char)) {
            display += char + " ";
        } else {
            display += "_ ";
        }
    }
    wordDisplay.textContent = display.trim();
}

function updateHangmanImage() {
    let imageIndex = maxLives - lives;
    hangmanImage.src = `Hangman${imageIndex}.png`;
}

function endGame(message, color) {
    messageElement.textContent = message;
    messageElement.style.color = color;
    document.getElementById("guess-input").disabled = true;
    document.getElementById("submit-button").disabled = true;
}

function checkGameStatus() {
    if (lives === 0) {
        endGame("Game Over! You ran out of lives. The correct word was: " + word, "red");
    } else if (!word.split("").some(char => !guessedLetters.includes(char))) {
        endGame("Congratulations! You guessed the word: " + word, "green");
    }
}

function makeGuess() {
    let guessInput = document.getElementById("guess-input");
    let guess = guessInput.value.toLowerCase();

    if (guessedLetters.includes(guess)) {
        messageElement.textContent = "You already guessed that letter. Try again.";
        messageElement.style.color = "orange";
    } else if (word.includes(guess)) {
        guessedLetters.push(guess);
        displayWord();
    } else {
        lives--;
        updateHangmanImage();
    }

    checkGameStatus();
    guessInput.value = "";
}

displayWord();