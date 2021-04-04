// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    state = {
        hasBeenClicked: false,
        count: 0,
        testVar: false
    }

    handleClick = () => {
        const prevState = this.state.count
        this.setState(state => ({ hasBeenClicked: !state.hasBeenClicked, count: prevState + 1 }), () => console.log("state has just been updated and is currently clicked?", this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
                <p>I am currently {this.state.hasBeenClicked ? null : 'not'} clicked!</p>
                <strong>{this.state.count}</strong> <br />
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
