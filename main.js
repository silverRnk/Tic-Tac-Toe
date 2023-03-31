import "./style.css";
import blank from "./src/assets/blank.svg"
import {board} from "./src/board";
import { CreateLayout } from "./src/HTMLayoutFactory/createLayout";
import CardHandler from "./src/CardHandler";

const htmlLayoutFactory = CreateLayout()
const gameBoard = board();
const cardHandler = CardHandler()

document.querySelector("#app").innerHTML = `
<div id="set-player-card"></div>
<h1>Tik Tac Toe</h1>
    <div id="player-selection">
        <div id="player1-name">
        <h2 class="name">player 1</h2>
        <div class="select"><img src=${blank} alt="" /></div>
        </div>
        <div id="player2-name">
        <h2 class="name">player 2</h2>
        <div class="select"><img src=${blank} alt="" /></div>
        </div> 
          </div>
          <div class="content">
          </div>
`;

htmlLayoutFactory.playerSelectionCard(document
  .querySelector('#set-player-card'))
htmlLayoutFactory.createTicTakToeBoard(document.
  querySelector(".content"));
gameBoard.getBoardDOM(document.querySelectorAll(".cell-item"));
gameBoard.setBoardSetAnnouncementDisplay(document.querySelector("#player-selection"))
cardHandler.setPlayerSelectionCard(document.querySelector('#set-player-card'))
cardHandler.setPlayerSetting(gameBoard.setPlayers)


gameBoard.enBoardDOM();
// setupCounter(document.querySelector('#counter'))
