import { Component } from "react";
import { connect } from 'react-redux'
import { dropTile } from "./actions";
class Cell extends Component {

    handleClick() {
        this.props.sendDrop(this.props.x)
    }

    render() {
        const board = this.props.board
        const x = this.props.x
        const y = this.props.y

        let classes = "circle" 

        if(board[x][y] !== undefined) {
            if(board[x][y] === "blue") {
                classes += " p1"
            } else {
                classes += " p2"
            }
        }

        return (
            <div className="cell" onClick={() => this.handleClick()}>
                <p className={classes}> </p>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        board: state.board,
    }
}

const dispatchToProps = dispatch => {
        return {sendDrop(column) {
            dispatch(dropTile(column))
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Cell)