import { checkForVerticalWinningCombination } from "./helpers/WinnerCheckr";

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
    /*
        array player player -> player.name
        check if player1 won or player 2 won
        */
  };
  return { makeAMove, getBoard };
}

export default board;
