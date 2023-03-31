import "./style.css"

function CreateLayout(){

    const createRootElement = (element) => {
      element.innerHTML = `
      <div id="set-player-card"></div>
      <h1>Tik Tac Toe</h1>
          <div id="player-selection">
              <div id="player1-name">
              <h2 class="name">player 1</h2>
              <div class="select"><img src=${blank} alt="" /></div>
              </div>
              <div id="player2-name">
              <h2 class="name">player 2</h2>
              <div class="select"><img src=${blank} alt="" /></div>
              </div> 
                </div>
                <div class="content">
                </div>
      `;
    }

    const playerSelectionCard = (element) => {
        element.innerHTML = `
        <form action="">
          <div class="player-selection" id="player1">
            <div class="player-name">
              <label for="player-1">Player 1:</label>
              <input class="player-name" type="text" name="player-1" id="player-1" required />
            </div>
            <div class="piece-selection">
              <legend for="piece">Select Your Piece:</legend>
              <div>
                <input type="radio" name="piece-1" id="piece-x" value="x" checked>
                <label for="piece-x">x</label>
                <input type="radio" name="piece-1" id="piece-o" value="o">
                <label for="piece-o">o</label>
              </div>
              </div>
            </div>
            <div class="player-selection" id="player2">
              <div class="player-name">
                <label for="player-1">Player 2:</label>
                <input class="player-name" type="text" name="player-2" id="player-2" required />
              </div>
              <div class="piece-selection">
                <legend for="piece">Select Your Piece:</legend>
                <div>
                  <input type="radio" name="piece-2" id="piece-x" value="x">
                  <label for="piece-x">x</label>
                  <input type="radio" name="piece-2" id="piece-o" value="o" checked>
                  <label for="piece-o">o</label>
                </div>
                </div>
              </div>
          </div>
          <button type="submit">Start</button>
        </form>`
    }

    const createTicTakToeBoard = (rooElement) => {
        rooElement.innerHTML = `
          <div id="board">
            <div class="cell-item" id="11"></div>
            <div class="cell-item" id="12"></div>
            <div class="cell-item" id="13"></div>
            <div class="cell-item" id="21"></div>
            <div class="cell-item" id="22"></div>
            <div class="cell-item" id="23"></div>
            <div class="cell-item" id="31"></div>
            <div class="cell-item" id="32"></div>
            <div class="cell-item" id="33"></div>
          </div>
          `;
            
    }

    return {createRootElement, playerSelectionCard, createTicTakToeBoard}
}

export {CreateLayout}