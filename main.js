import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import player from "./src/player";
import board from "./src/board";

const player1 = player("Player1", "x");
const player2 = player("Alien", "o");
const gameBoard = board();

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tik Tac Toe</h1>
    <div id="player-selection">
    <div>
    <label for="player1-piece">${player1.name}</label>
    <button id="select"></button>
    </div>
    <div>
    <label for="player">${player2.name}</label>
    <button id="select"></button>
    </div>
        
        
      </div>
    <div class="content">
    </div>
  </div>
`;
gameBoard.createTheBoard(document.querySelector(".content"));
// setupCounter(document.querySelector('#counter'))
