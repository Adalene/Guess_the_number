/**
 * @jest-environment jsdom
 */

import { checkGuess, restartGame, startGame } from '../script';

describe('Guess the Number Game', () => {
    let randomSpy;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="game-container">
                <input type="number" id="guess">
                <p id="message"></p>
                <button id="restart" onclick="restartGame()">Restart Game</button>
            </div>
        `;
        // Default mock for most tests
        randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.8); // Will generate 81
        startGame();
    });

    afterEach(() => {
        randomSpy.mockRestore();
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
        // Override mock for this specific test
        randomSpy.mockReturnValue(0.49); // Will generate 50
        startGame(); // Re-start the game with the new random number

        document.getElementById('guess').value = '50';
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
