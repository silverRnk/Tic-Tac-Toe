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
      checkAtColumn(array, initCol, player.type) ||
      checkForVerticalWinningCombination(array, player, initCol + 1)
    );
  }
};

const checkForHorizontalWinningCombination = (
  array,
  player
) => {
  /*
       get an 2d array then check if a row x has same value type x
       [][] number type -> bool
       */


  if (array.length == 0) {
    return false;
  } else {
    console.log(array.length)
    return (
      checkAtRow(array[0], player.type) ||
      checkForHorizontalWinningCombination(array.slice(1), player)
    );
  }
};

const checkAtRow = (array, x) => {
  console.log(array)
  if (array.length == 0) {
    return true;
  } else {
    let y = (array[0] == x && checkAtRow(array.slice(1), x));
    return y
  }
};

export {
  checkForVerticalWinningCombination,
  checkForHorizontalWinningCombination,
  checkAtRow
};
