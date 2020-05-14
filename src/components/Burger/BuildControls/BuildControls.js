import React from 'react'

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'Chese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
];

//creates an array of build controls
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
)

export default buildControls;