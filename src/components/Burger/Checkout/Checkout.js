import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';



class Checkout extends Component {
    componentDidUpdate() {
        console.log('[Checkout] did update');
    }

    render() {
        return(
            <Aux>
                <h3>Payment Methods</h3>
                <p>Please choose a payment method: </p>
                <p>Your Total Is: ${this.props.price.toFixed(2)}</p>
                <Button btnType="PayPal">PayPal</Button>
                <Button btnType="Credit">Credit Card</Button>
                <Button btnType="Danger" clicked={this.props.modalClosed}>Cancel</Button>
            </Aux>
        );
   }

}

export default Checkout;