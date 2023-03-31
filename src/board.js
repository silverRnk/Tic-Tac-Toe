import {
  checkForDiagonalWinningCondition,
  checkForHorizontalWinningCombination,
  checkForVerticalWinningCombination,
} from "./helpers/WinnerChecker";
import player from "./player";
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
      type: "o",
      element: () => {
        return `<img src=${circle} alt="circle" />`;
      },
    },
  ];
  const player1 = player("Player1", pieces[0]);
  const player2 = player("Player2", pieces[1]);
  let boardDOM = null;
  let playerPieceSelector = null;
  let endOfGame = false;
  let isBoardCreated = false;
  let isGameStarted = false;

  player1.isTurn = true;

  /**
   * @param {number} col 
   * @param {number} row 
   * @param {HtmlElement} element 
   * @returns 
   */
  //take the row and col of cell to add a marking
  // depending on who's turn its marking would be add
  const makeAMove = (col, row, element) => {
    if (
      board[row - 1][col - 1] || endOfGame) {
      return;
    }

    if (boardDOM) {
      if (player1.isTurn) {
        board[row - 1][col - 1] = player1.getPiece().type;
        // boardDOM.querySelector(`#${row}${col}`).innerHTML = player1
        //   .getPiece()
        //   .element();
        element.innerHTML = player1.getPiece().element();
        player1.isTurn = false;
        player2.isTurn = true;
      } else if (player2.isTurn) {
        board[row - 1][col - 1] = player2.getPiece().type;
        // boardDOM.querySelector(`#${row}${col}`).innerHTML = player2
        //   .getPiece()
        //   .element();
        element.innerHTML = player2.getPiece().element();
        player1.isTurn = true;
        player2.isTurn = false;
      }
    }
  };

  const getBoard = () => {
    return board;
  };

  /**
   *
   * @param {HTMLElement} element
   */
  const getBoardDOM = (element) => {
    console.log(element);
    boardDOM = element;
  };

  const enBoardDOM = () => {
    if (boardDOM) {
      let arrayBoardDOM = Array.from(boardDOM);
      arrayBoardDOM.forEach((cell) => {
        cell.addEventListener("click", (e) => {
          console.log(e);
          let rowCols = e.target.id.split("");
          console.log(rowCols);
          makeAMove(Number(rowCols[1]), Number(rowCols[0]), e.target);
        });
      });
    }
  };

  /**
   * 
   * @param {HTMLElement} element 
   */
  const getPlayerPieceSelection = (element) => {
    if(!playerPieceSelector){
      playerPieceSelector = element
    }

    if(playerPieceSelector){

    }
  }

  const enPlayerPieceSelector = () => {
    playerPieceSelector.querySelector('#player1-name')
  }



  const gameStart = (element) => {
    element.addEventListener("click", () => {
      isGameStarted = true;
      element;
    });
  };

  /**
   * 
   * @param {Player} player1 
   * @param {Player} player2 
   */
  const checkForWinner = (player1, player2) => {
    if (
      checkForVerticalWinningCombination(board, player1, 0) &&
      checkForHorizontalWinningCombination(board, player1) &&
      checkForDiagonalWinningCondition(board, player1)
    ) {
      alert('Winner Player 1');
    } else if (
      checkForVerticalWinningCombination(board, player2, 0) &&
      checkForHorizontalWinningCombination(board, player2) &&
      checkForDiagonalWinningCondition(board, player2)
    ) {
      alert('Winner Player 2')
    }
  };
  return {
    makeAMove,
    getBoard,
    checkForWinner,
    getBoardDOM,
    enBoardDOM,
    pieces,
  };
}

export default board;
