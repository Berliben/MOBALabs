import { createStore } from 'redux'

const initial = {
    current: 'red',
    board: [
        //columns
        [], 
        [], 
        [],
        [],
        [],
        [],
        [],
    ],
}

function reducer(state, action) {
    if(action.type === "DROP") {

        const tile = state.current
        const column = state.board[action.payload].concat(tile)

        const boardCopy = state.board.slice()
        boardCopy[action.payload] = column

        return {
            current: state.current === "red" ? "blue" : "red",
            board: boardCopy,
        }
    }
    return state
}

export default createStore(reducer, initial)