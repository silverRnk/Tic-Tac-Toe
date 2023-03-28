import {
  checkForDiagonalWinningCondition,
  checkForHorizontalWinningCombination,
  checkForVerticalWinningCombination,
} from "./helpers/WinnerChecker";
import close from "./assets/close.svg";
import circle from "./assets/circle.svg";

function board() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const pieces = [
    {
      type: "x",
      element: () => {
        return `<img src=${close} alt="close" />`;
      },
    },
    {
      type:'o',
      element:() => {
        return `<img src=${circle} alt="circle" />`
      }
    }
  ];
  let endOfGame = false;
  let isBoardCreated = false;
  let isGameStarted = false;

  const makeAMove = (col, row, type) => {
    board[row - 1][col - 1] = type;
  };

  const getBoard = () => {
    return board;
  };

  const createTheBoard = (element) => {
    if (!isBoardCreated) {
      element.innerHTML = `
    <div class="board">
      <div class="cell-item" id="11"></div>
      <div class="cell-item" id="12"></div>
      <div class="cell-item" id="13"></div>
      <div class="cell-item" id="21"></div>
      <div class="cell-item" id="22"></div>
      <div class="cell-item" id="23"></div>
      <div class="cell-item" id="31"></div>
      <div class="cell-item" id="32"></div>
      <div class="cell-item" id="33"></div>
    </div>
    `;
      isBoardCreated = true;
    }
  };

  const gameStart = (element) => {
    element.addEventListener('click', () => {
      isGameStarted = true
      element
    })
  }

  const checkForWinner = (player1, player2) => {
    if (
      checkForVerticalWinningCombination(board, player1, 0) &&
      checkForHorizontalWinningCombination(board, player1) &&
      checkForDiagonalWinningCondition(board, player1)
    ) {
      console.log("Winner Player 1");
    } else if (
      checkForVerticalWinningCombination(board, player2, 0) &&
      checkForHorizontalWinningCombination(board, player2) &&
      checkForDiagonalWinningCondition(board, player2)
    ) {
      console.log("Winner Player 2");
    }
  };
  return { makeAMove, getBoard, checkForWinner, createTheBoard };
}

export default board;
