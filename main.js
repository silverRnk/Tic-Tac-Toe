import "./style.css";
import blank from "./src/assets/blank.svg"
import {BoardHandler} from "./src/board";
import { CreateLayout } from "./src/HTMLayoutFactory/createLayout";
import CardHandler from "./src/CardHandler";

const htmlLayoutFactory = CreateLayout()
const boardHandler = BoardHandler();
const cardHandler = CardHandler()

htmlLayoutFactory.createRootElement(document.querySelector("#app"))
htmlLayoutFactory.playerSelectionCard(document
  .querySelector('#set-player-card'))
htmlLayoutFactory.createTicTakToeBoard(document.
  querySelector(".content"));
boardHandler.getBoardDOM(document.querySelectorAll(".cell-item"));
boardHandler.setBoardSetAnnouncementDisplay(document.querySelector("#player-selection"))
cardHandler.setPlayerSelectionCard(document.querySelector('#set-player-card'))
cardHandler.setPlayerSetting(boardHandler.setPlayers)

// setupCounter(document.querySelector('#counter'))
