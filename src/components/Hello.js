// JSX example
import React from 'react'
/*
const Hello = () => {
    return (
        <div>
            <h1>Hello from JSX</h1>
        </div>
    )
}
*/

// without jsx
const Hello = () => {
    return React.createElement(
        'div', 
        {id: "hello", className: 'cssClass'}, 
        React.createElement('h1', null, 'Hello without jsx')
    )
}

export default Hello;