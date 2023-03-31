import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import player from "./src/player";
import board from "./src/board";
import { CreateLayout } from "./src/HTMLayoutFactory/createLayout";

const htmlLayoutFactory = CreateLayout()
const gameBoard = board();

document.querySelector("#app").innerHTML = `
<div id="set-player-card"></div>
<h1>Tik Tac Toe</h1>
    <div id="player-selection">
        <div>
        <label for="player1-piece">player 1</label>
        <div class="select"></div>
        </div>
        <div>
        <label for="player1-piece">player 2</label>
        <div class="select"></div>
        </div> 
          </div>
          <div class="content">
          </div>
`;

htmlLayoutFactory.playerSelectionCard(document
  .querySelector('#set-player-card'))
htmlLayoutFactory.createTicTakToeBoard(document.
  querySelector(".content"))

gameBoard.getBoardDOM(document.querySelectorAll(".cell-item"));
gameBoard.enBoardDOM();
// setupCounter(document.querySelector('#counter'))
