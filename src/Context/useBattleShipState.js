import React from 'react'

const BattleShipContext = React.createContext()

export const initialState = {
  gameState: 'player-turn',
  players: {
    player1: {
      board: [
        ['A', null, 'B', 'B', 'B', 'B', null, null, null, null],
        ['A', null, null, null, null, null, null, null, null, null],
        ['A', null, null, null, null, 'S', null, null, null, null],
        ['A', null, null, null, null, 'S', null, null, null, null],
        ['A', null, null, null, null, 'S', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 'C', 'C', 'C'],
        [null, null, null, 'D', 'D', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ],
      currentShips: {
        A: true,
        B: true,
        S: true,
        C: true,
        D: true
      }
    },
    player2: {
      board: [
        ['A', null, 'B', 'B', 'B', 'B', null, null, null, null],
        ['A', null, null, null, null, null, null, null, null, null],
        ['A', null, null, null, null, 'S', null, null, null, null],
        ['A', null, null, null, null, 'S', null, null, null, null],
        ['A', null, null, null, null, 'S', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 'C', 'C', 'C'],
        [null, null, null, 'D', 'D', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ],
      currentShips: {
        A: true,
        B: true,
        S: true,
        C: true,
        D: true
      }
    }
  }

}

const battleShipReducer = (state, action) => {
  switch (action.type) {
    case 'gameState': {
      const {gameState} = action
      return {
        ...state,
        gameState
      }
    }
    case 'board': {
      const {player, board} = action

      return player === 'player1' ? {
        ...state,
        players: {
          ...state.players,
          player1: {
            ...state.players.player1,
            board: board,
          }
        }
      } : {
        ...state,
        players: {
          ...state.players,
          player2: {
            ...state.players.player2,
            board: board,
          }
        }
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}


export const BattleShipProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(battleShipReducer, initialState)
  return <BattleShipContext.Provider value={[state, dispatch]}>{children}</BattleShipContext.Provider>
}

export const useBattleShipState = () => {
  const context = React.useContext(BattleShipContext)
  if (context === undefined) {
    throw new Error(`useNumberFacts must be used within a NumberFactsProvider`)
  }
  return context
}
