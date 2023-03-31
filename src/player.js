// @ts-check
/**
 * @param {string} name
 * @param {{type:string, element:string}} type
 * @returns {{ name:string,
 *  getPiece:() => { type:string, element:string},
 *  setPiece: () => void,
 *  isTurn:Boolean }}
 */

function player(name, type) {
  let isTurn = false;
  //change the value of an array at index of a value of type
  const makeAMove = (index, array) => {
    array[index] = type;
  };

  const getPiece = () => {
    return type
  }

  const setPiece = (piece) => {
    type = piece
  }

  return { name, getPiece, setPiece ,isTurn };
}

export default player;
