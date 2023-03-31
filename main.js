import "./style.css";
import blank from "./src/assets/blank.svg"
import {board} from "./src/board";
import { CreateLayout } from "./src/HTMLayoutFactory/createLayout";
import CardHandler from "./src/CardHandler";

const htmlLayoutFactory = CreateLayout()
const gameBoard = board();
const cardHandler = CardHandler()

htmlLayoutFactory.createRootElement(document.querySelector("#app"))
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
