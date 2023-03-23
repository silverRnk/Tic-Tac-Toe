function player(name, type){
    let isTurn = false;
    //change the value of an array at index of a value of type
    const makeAMove = (index, array) => {
        array[index] = type
    }

    return {name, type, isTurn}
}

export default player

