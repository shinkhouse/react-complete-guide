import React from 'react';
import './Person.css';

const person = (props) => {
    
    return (
        <div className="person">
            <p onClick={props.click}>Hi I'm {props.name} and I am {props.age} year old person.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;