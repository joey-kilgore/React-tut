import React, { Component } from 'react'
import Greet from './Greet';
/*
class Welcome extends Component {
    render() {
        return (
            <h1>Hello From a Class Component</h1>
        )
    }
}
*/

/*props in a class and state */
class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello from class component'
        }
    }

    changeMessage() {
        this.setState((prevState, props) =>({
            message: 'YOU CLICKED THE BUTTON'
        }))
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click Me!</button>
                <p>{this.props.text}</p>
            </div>   
        )
    }
}

export default Welcome;