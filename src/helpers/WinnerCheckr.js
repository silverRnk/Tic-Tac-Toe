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
  player,
  initRow
) => {
  /*
       get an 2d array then check if a row x has same value type x
       [][] number type -> bool
       */
  const checkAtRow = (array, x, row) => {
    const rowToCheck = array[row];
    const checkIfRowValueMatch = (array1, type) => {
      if (array1.length == 0) {
        console.log(array1);
        console.log(true);
        return true;
      } else {
        console.log(array1);
        console.log("x");
        console.log(array1[0] === type);
        console.log(array1.slice(1));
        return (
          array1[0] === type &&
          checkIfRowValueMatch(array1.slice(1), type)
        );
      }
    };
    return checkIfRowValueMatch(rowToCheck, x);
  };

  if (array.length < initRow) {
    return false;
  } else {
    console.log(`Row:${initRow}`);
    return (
      checkAtRow(array, player.type, initRow) ||
      checkForHorizontalWinningCombination(array, player, initRow + 1)
    );
  }
};

export {
  checkForVerticalWinningCombination,
  checkForHorizontalWinningCombination,
};
