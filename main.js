import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import player from "./src/player";
import board from "./src/board";
import close from "/close.svg";
import circle from "/circle.svg";

const gameBoard = board();

document.querySelector("#app").innerHTML = `

<div id="set-player-card"></div>
  <div id="board">
    <h1>Tik Tac Toe</h1>
    <div id="player-selection">
        <div>
        <label for="player1-piece">player</label>
        <div class="select"><img src=${close} alt="close" /></div>
        </div>
        <div>
        <label for="player1-piece">player</label>
        <div class="select">y</div>
        </div> 
          </div>
    <div class="content">
    </div>
  </div>
`;

gameBoard.getBoardDOM(document.querySelectorAll(".cell-item"));
gameBoard.enBoardDOM();
// setupCounter(document.querySelector('#counter'))
