import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const checkout = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                {igKey}</span> {props.ingredients[igKey]}</li>); 
    });
   
    return(
        <Aux>
            <h3>Payment Methods</h3>
            <p>Please choose a payment method: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <Button btnType="PayPal">PayPal</Button>
            <Button btnType="Credit">Credit Card</Button>
            <Button btnType="Danger" clicked={props.modalClosed}>Cancel</Button>
            <p>Your Total Is: ${props.price.toFixed(2)}</p>
        </Aux>
    )

}

export default checkout;