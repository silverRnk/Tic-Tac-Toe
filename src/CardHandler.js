import player from "./player";
import { pieces } from "./board";

function CardHandler() {
    let card = null;
    let callback;
    const player1 = {name: "", piece:'x'}
    const player2 = {name: "", piece:'o'}

    const setPlayerSelectionCard = (element) => {
        if(!card){
            card = element
        }

        playerNameHandler();
        playerPieceSelectionHandler();
        submitButtonHandler();
    }

    const playerNameHandler = () => {
        let player1InputForm = card
        .querySelector('input[id="player-1"]')
        
        let player2InputForm = card
        .querySelector('input[id="player-2"]')
        
        player1InputForm
        .addEventListener('input', (e) => {
            player1.name = e.target.value;
        })
        
        player2InputForm
        .addEventListener('input', (e) => {
            player2.name = e.target.value;
        })
    }

    const playerPieceSelectionHandler = () => {
        let player1PieceSelection = card
        .querySelectorAll('input[name="piece-1"]')
        player1PieceSelection = Array.from(player1PieceSelection)

        let player2PieceSelection = card
        .querySelectorAll('input[name="piece-2"]')
        player2PieceSelection = Array.from(player2PieceSelection)


        player1PieceSelection.forEach((element, j) => {
            element.addEventListener('input', (e) => {
                
                player1.piece = e.target.value;
                if(e.target.value == 'x'){
                    player2.piece = 'o'
                }else{
                    player2.piece = 'x'
                }
                player2PieceSelection
                .filter(element => {
                    return element.value != e.target.value })
                .forEach(value => {
                    value.checked = true;
                })
            })
        });

        player2PieceSelection.forEach((element, j) => {
            element.addEventListener('input', (e) => {
                
                player2.piece = e.target.value;
                if(e.target.value == 'x'){
                    player1.piece = 'o'
                }else{
                    player1.piece = 'x'
                }
                player1PieceSelection
                .filter(element => {
                    return element.value != e.target.value })
                .forEach(value => {
                    value.checked = true;
                })
            })
        });
    } 

    const submitButtonHandler = () => {
        let submitButton = card.querySelector('button')

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            if(checkIfEmpty()){
                alert("Names Are Empty")
            }else{

                callback(
                    player(
                        player1.name,
                        convertToPieceObject(player1.piece)),
                    player(
                        player2.name,
                        convertToPieceObject(player2.piece)))
                
                card.classList.add('hidden')
            }
            
        })
    }

    const convertToPieceObject = x => {
        if(x === 'x'){
            return pieces[0]
        }else if(x === 'o'){
            return pieces[1]
        }
    }

    const checkIfEmpty = () => {
        let playerNameField = card.querySelectorAll('.player-name')
            playerNameField = Array.from(playerNameField)
        let isEmpty = false
            playerNameField.forEach(element => {
                if(element.value == ''){
                  isEmpty = true  
                }
            })

            return isEmpty
    }

    /**
     * 
     * @param {(player, player)} callBack 
     */
    const setPlayerSetting = 
    (callBack) => {
        callback = callBack;
    }

    return {setPlayerSelectionCard, setPlayerSetting}
}

export default CardHandler