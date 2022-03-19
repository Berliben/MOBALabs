import { Component } from "react";
import Cell from './cell'

class Column extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colours: [
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
            ],
        }
    }

    clickHandle() {
        var newState = this.state.colours.slice()

        for(var i = 0; i <= newState.length; i++) {
            if(newState[i] === "white") {
                newState[i] = this.props.player
                break
            }
        }

        var change = this.props.changeState
        change()
        this.setState({colours: newState, player: this.props.player})
    }

    render() {
        return (
            <div style={{backgroundColor: "lightblue"}}>
                <div onClick={() => this.clickHandle()}>
                    <Cell colour= {this.state.colours[5]} />
                    <Cell colour= {this.state.colours[4]} />
                    <Cell colour= {this.state.colours[3]} />
                    <Cell colour= {this.state.colours[2]} />
                    <Cell colour= {this.state.colours[1]} />
                    <Cell colour= {this.state.colours[0]} />
                </div>
            </div>
        )
    }
}

export default Column