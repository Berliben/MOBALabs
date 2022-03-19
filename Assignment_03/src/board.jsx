import { Component } from 'react';
import Column from './column'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            player: "red"
        }
    }

    changeState() {
        this.state.player === "red" ? this.setState({player:  "blue"}) : this.setState({player:  "red"})
    }

    render () {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div style={{ display:"flex" }}>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                    <Column player={this.state.player} changeState={() => this.changeState()}/>
                </div>
                <div>
                    It is {this.state.player}'s turn to play
                </div>
                <div>
                    <button onClick={() => {window.location.reload(false)}}>Reset Game</button>
                </div>
            </div>
        )
    }
}

export default Board