import React from 'react'
/*
function Greet() {
    return (
        <h1>Hello World!</h1>
    )
}
*/

// es6 out of function syntax
//export const Greet = () => <h1>Hello World</h1>
// requires import using { Greet } from './components/Greet'

// handle props and children
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}



// need to make this a component
export default Greet;