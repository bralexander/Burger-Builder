import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                {igKey}</span> {props.ingredients[igKey]}</li>); 
    });
   
    return(
        <Aux>
            <h3>YourOrder</h3>
            <p>A delicious burger with the folowing ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total: ${props.price.toFixed(2)}</p>
            <Button btnType="Danger" clicked={props.modalClosed}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkout}>Checkout</Button>
        </Aux>
    )

}

export default orderSummary;