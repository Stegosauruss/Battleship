import React from 'react';
import { useBattleShipState } from '../../Context/useBattleShipState';

const fireAtBoard = (firingIndex, board) => {
  const currentTargetValue = board[firingIndex[0]][firingIndex[1]]

  const newBoard = board.map()
  return {newBoard: board, update: 'hit'}
}

const BattleShip = () => {
  const [state, dispatch] = useBattleShipState()
  const {gameState, players} = state
  const [xCoordinate, setXCoordinate] = React.useState("1")
  const [yCoordinate, setYCoordinate] = React.useState("1")
  const handleChangeX = (event) => {
    setXCoordinate(event.target.value)
  }
  const handleChangeY = (event) => {
    setYCoordinate(event.target.value)
  }

  const takePlayerTurn = (firingIndex) => {
    const {newBoard, update} = fireAtBoard(firingIndex, players.player2.board)
    dispatch({type: 'board', player: 'player2', board: newBoard})
    return update
  }

  const takeOpponentTurn = () => {
    dispatch({type: 'gameState', gameState: 'player-turn'})
  }

  const takeTurn = () => {
    dispatch({type: 'gameState', gameState: 'opponent turn'})
    const firingIndex = [10 - parseInt(yCoordinate), parseInt(xCoordinate) - 1,]
    const result = takePlayerTurn(firingIndex)
    console.log(result)
    if( result !== 'win') {
      setTimeout(() => {
        takeOpponentTurn()
      }, 3000);
    }
  }
  

  return (
    <div>
      <div>
        <h1>Player Board</h1>
        {players.player1.board.map((line) => (
          <>
            {JSON.stringify(line)}
            <br/>
          </>
        ))}
      </div>
      <div>
        <h1>Computer Board</h1>
        {players.player2.board.map((line) => (
          <>
            {JSON.stringify(line)}
            <br/>
          </>
        ))}
      </div>
      <div>
        <h1>Input</h1>
        <input type="number" value={xCoordinate} min="1" max="10" onChange={handleChangeX} />
        <input type="number" value={yCoordinate} min="1" max="10" onChange={handleChangeY} />
        <button onClick={takeTurn} disabled={gameState !== 'player-turn'}>FIRE</button>
      </div>
    </div>
  )
}

export default BattleShip;
