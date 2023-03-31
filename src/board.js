import {
  checkForDiagonalWinningCondition,
  checkForHorizontalWinningCombination,
  checkForVerticalWinningCombination,
} from "./helpers/WinnerChecker";
import player from "./player";
import close from "./assets/close.svg";
import circle from "./assets/circle.svg";

const pieces = [
  {
    type: "x",
    element: `<img src=${close} alt="close" />`,
  },
  {
    type: "o",
    element: `<img src=${circle} alt="circle" />`
    },
  ,
];

function board() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let player1, player2;
  let boardDOM = null;
  let announcementDOM = null;
  let endOfGame = false;
  let isGameStarted = false;

  const setPlayers = (p1, p2) =>{
    player1 = p1
    player2 = p2;
    player1.isTurn = true;
    displayNames();
    isGameStarted = true;
  }

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
        element.innerHTML = player1.getPiece().element;
        player1.isTurn = false;
        player2.isTurn = true;
        
      } else if (player2.isTurn) {
        board[row - 1][col - 1] = player2.getPiece().type;
        // boardDOM.querySelector(`#${row}${col}`).innerHTML = player2
        //   .getPiece()
        //   .element();
        element.innerHTML = player2.getPiece().element;
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
          setTimeout(() => {
            checkForWinner();
          }, 100)
          
        });
      });
    }
  };


  const enPlayerPieceSelector = () => {
    playerPieceSelector.querySelector('#player1-name')
  }


  const setBoardSetAnnouncementDisplay = (element) => {
    announcementDOM = element
  }

  const displayNames = () => {
    let player1NameDOM, player2NameDOM;
    player1NameDOM = announcementDOM.querySelector('#player1-name')
    player2NameDOM = announcementDOM.querySelector('#player2-name')

    player1NameDOM.querySelector('.name').innerHTML = player1.name;
    player1NameDOM.querySelector('.select').innerHTML = player1.getPiece().element;
  
    player2NameDOM.querySelector('.name').innerHTML = player2.name;
    player2NameDOM.querySelector('.select').innerHTML = player2.getPiece().element;
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
  const checkForWinner = () => {
    if (
      checkForVerticalWinningCombination(board, player1, 0) ||
      checkForHorizontalWinningCombination(board, player1) ||
      checkForDiagonalWinningCondition(board, player1)
    ) {
      alert('Winner Player 1');
    } else if (
      checkForVerticalWinningCombination(board, player2, 0) ||
      checkForHorizontalWinningCombination(board, player2) ||
      checkForDiagonalWinningCondition(board, player2)
    ) {
      alert('Winner Player 2');
      
    } else{
      if(player1.isTurn){
        alert(`${player1.name} turn`)
      }else{
        alert(`${player2.name} turn`)
      }
      return
    }

    endOfGame = true;
  };



  return {
    makeAMove,
    getBoard,
    checkForWinner,
    getBoardDOM,
    enBoardDOM,
    setPlayers,
    setBoardSetAnnouncementDisplay
  };
}

export {pieces, board}
