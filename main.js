import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { fooHandler } from './src/evenHandler'
import player from './src/player'
import board from './src/board'
import { checkForHorizontalWinningCombination } from './src/helpers/WinnerCheckr'
import { runTest, runTest2, runTest3 } from './src/helpers/test'


const player1 = player("Human", 'x')
const player2 = player("Alien", 'o')
const gameBoard = board();

gameBoard.makeAMove(1, 1, player1.type);
gameBoard.makeAMove(2, 1, player1.type);
gameBoard.makeAMove(3, 1, player2.type);

// console.log(gameBoard.getBoard())
// console.log(gameBoard.getBoard().length)
// console.log(checkForHorizontalWinningCombination(gameBoard.getBoard(), player1))

runTest();
runTest2();
runTest3();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
