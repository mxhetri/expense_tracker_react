import React from 'react';
import '../css/card.css'

// this is re-usable wrapper component
export function Card(props) {
    const classes = 'card ' + props.className;
    return (
    <div className={classes}>
        {props.children}
    </div>
    )
}