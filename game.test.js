/**
 * @jest-environment jsdom
 */
import { checkGuess, restartGame, startGame } from './script';

describe('Guess the Number Game', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="game-container">
                <input type="number" id="guess">
                <p id="message"></p>
                <button id="restart" onclick="restartGame()">Restart Game</button>
            </div>
        `;
        startGame();
    });

    test('should initialize the game correctly', () => {
        expect(document.getElementById('message').textContent).toBe('');
        expect(document.getElementById('restart').style.display).toBe('none');
    });

    test('should provide feedback for low guesses', () => {
        document.getElementById('guess').value = '10';
        checkGuess();
        expect(document.getElementById('message').textContent).toBe('Too low! Try again.');
    });

    test('should provide feedback for high guesses', () => {
        document.getElementById('guess').value = '90';
        checkGuess();
        expect(document.getElementById('message').textContent).toBe('Too high! Try again.');
    });

    test('should congratulate on correct guess', () => {
        const correctGuess = document.getElementById('guess').value = '50'; // Assuming 50 is the generated number
        checkGuess();
        expect(document.getElementById('message').textContent).toMatch(/Congratulations! You guessed the number/);
        expect(document.getElementById('restart').style.display).toBe('block');
    });

    test('should restart the game correctly', () => {
        restartGame();
        expect(document.getElementById('message').textContent).toBe('');
        expect(document.getElementById('restart').style.display).toBe('none');
        expect(document.getElementById('guess').value).toBe('');
    });
});
