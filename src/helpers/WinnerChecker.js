const checkForVerticalWinningCombination = (
  array,
  player,
  initCol
) => {
  /*
     get an 2d array then check if a column x has same value type x
     [][] number type -> bool
     */
  const checkAtColumn = (array, column, x) => {
    if (array.length === 0) {
      return true;
    } else {
      return (
        array[0][column] == x &&
        checkAtColumn(array.slice(1), column, x)
      );
    }
  };

  if (array[0].length < initCol) {
    return false;
  } else {
    console.log(initCol);
    return (
      checkAtColumn(array, initCol, player.getPiece().type) ||
      checkForVerticalWinningCombination(array, player, initCol + 1)
    );
  }
};

const checkForHorizontalWinningCombination = (array, player) => {
  /*
       get an 2d array then check if a row x has same value type x
       [][] number type -> bool
       */
  const checkAtRow = (array, x) => {
    console.log(array);
    if (array.length == 0) {
      return true;
    } else {
      let y = array[0] == x && checkAtRow(array.slice(1), x);
      return y;
    }
  }

    if (array.length == 0) {
      return false;
    } else {
      console.log(array.length);
      return (
        checkAtRow(array[0], player.getPiece().type) ||
        checkForHorizontalWinningCombination(array.slice(1), player)
      );
    }
};


const checkForDiagonalWinningCondition = (array, player) => {
  const type = player.getPiece().type
  if((array.length == 0) || (array[0].length == 0)){
    return false
  }

  const firstDiagonal = (array[0][0] == type) && (array[1][1] == type) && (array[2][2] == type);
  const secondDiagonal = (array[0][2] == type) && (array[1][1] == type) && (array[2][0] == type);
  return firstDiagonal || secondDiagonal
}

export {
  checkForVerticalWinningCombination,
  checkForHorizontalWinningCombination,
  checkForDiagonalWinningCondition
};
