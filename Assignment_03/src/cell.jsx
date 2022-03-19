import { Component } from "react";

class Cell extends Component {
    render() {
        return (
            <div style={{ width: "100px", height: "100px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{backgroundColor: this.props.colour, width: "70%", height: "70%", borderRadius: "50%"}}>
                </div>
            </div>
        )
    }
}

export default Cell