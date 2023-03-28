// @ts-check
/**
 * @param {string} name
 * @param {{type:string, element:string}} type
 * @returns {{ name:string,
 *  type:{ type:string, element:string},
 *  isTurn:Boolean }}
 */

function player(name, type) {
  let isTurn = false;
  //change the value of an array at index of a value of type
  const makeAMove = (index, array) => {
    array[index] = type;
  };

  return { name, type, isTurn };
}

export default player;
