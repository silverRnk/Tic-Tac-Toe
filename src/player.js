function player(name, type){

    //change the value of an array at index of a value of type
    const makeAMove = (index, array) => {
        array[index] = type
    }

    return {name, type, makeAMove}
}

export default player

