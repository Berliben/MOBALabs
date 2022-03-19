import React, { Component } from 'react';
 
 
class WizardsList extends Component {
 
    constructor(props) {
        super(props)   
        this.state = {
            wizards: []
        }
         
    }
 
    componentDidMount() {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then(response => response.json())
            .then(wizards => {
                this.setState({
                    wizards: wizards
                })
            })
            .catch(error => console.log(error))
    }
 
    renderList() {
        let wizardNameList = []
        this.state.wizards.map(wizard => {
            return wizardNameList.push(<li>{wizard.name}</li>)
        })
 
        return wizardNameList;
    }
 
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}
 
export default WizardsList;