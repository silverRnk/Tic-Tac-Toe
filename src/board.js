import {
  checkForHorizontalWinningCombination,
  checkForVerticalWinningCombination,
} from "./helpers/WinnerChecker";

function board() {
  const board = [
    ["", "", ""],
    ["s", "s", "s"],
    ["s", "s", "s"],
  ];
  let endOfGame = false;
  const makeAMove = (x, y, type) => {
    board[y - 1][x - 1] = type;
  };
  const getBoard = () => {
    return board;
  };
  const checkForWinner = (player1, player2) => {
    if (
      checkForVerticalWinningCombination(board, player1, 0) &&
      checkForHorizontalWinningCombination(board, player1)
    ) {
      console.log("Winner Player 1");
    } else if (
      checkForVerticalWinningCombination(board, player2, 0) &&
      checkForHorizontalWinningCombination(board, player2)
    ) {
      console.log("Winner Player 2");
    }
  };
  return { makeAMove, getBoard };
}

export default board;
