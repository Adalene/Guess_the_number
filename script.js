// let randomNumber;
// let attempts = 0;

export function startGame() {
    // randomNumber = Math.floor(Math.random() * 100) + 1;
    // attempts = 0;
    // const messageElem = document.getElementById('message')
    // document.getElementById('message').textContent = '';
    // document.getElementById('restart').style.display = 'none';
    // checkGuess()
}

export function checkGuess() {
    // const guess = parseInt(document.getElementById('guess').value);
    // attempts++;

    // if (isNaN(guess) || guess < 1 || guess > 100) {
    //     document.getElementById('message').textContent = 'Please enter a number between 1 and 100.';
    //     return;
    // }

    // if (guess === randomNumber) {
    //     document.getElementById('message').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    //     document.getElementById('restart').style.display = 'block';
    // } else if (guess < randomNumber) {
    //     document.getElementById('message').textContent = 'Too low! Try again.';
    // } else {
    //     document.getElementById('message').textContent = 'Too high! Try again.';
    // }
    return 1
}

export function restartGame() {
    startGame();
    // document.getElementById('guess').value = '';
}

startGame();
