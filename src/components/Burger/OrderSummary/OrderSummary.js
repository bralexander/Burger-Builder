import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    //this could be a functional component
    componentDidUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                {igKey}</span> {this.props.ingredients[igKey]}</li>); 
    });
        return (
        <Aux>
            <h3>YourOrder</h3>
            <p>A delicious burger with the folowing ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total: ${this.props.price.toFixed(2)}</p>
            <Button btnType="Danger" clicked={this.props.modalClosed}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.checkout}>Checkout</Button>
        </Aux>
        );

    }
}

export default OrderSummary;