import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import  Modal  from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import ModalPay from '../../components/UI/Modal/ModalPay';
import Checkout from '../../components/Burger/Checkout/Checkout';


//GLOBAL VAR ALL CAPS
const INGREDIENT_PRICES ={
    veggies: 0.75,
    cheese: 0.5,
    meat: 1.5,
    bacon: 1.0
};

class BurgerBuilder extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    state = {
        ingredients: {
            veggies: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        purchased: false,
    }

    updatePurchaseState (ingredients) {
        const sum =Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum +el;
        }, 0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <=0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
   
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    checkouthandler = () => {
        this.setState({purchased: true})
        this.setState({purchasing: false})
    }

    closeModalHandler = () => {
        this.setState({purchased: false})
        this.setState({purchasing: false})
    }
     
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.closeModalHandler}
                    >
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchased={this.state.purchased}
                        checkout={this.checkouthandler} 
                        modalClosed={this.closeModalHandler}
                    />
                </Modal>
                <ModalPay 
                    show={this.state.purchased}
                    modalClosed={(this.closeModalHandler)}
                >
                    <Checkout 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        modalClosed={(this.closeModalHandler)}
                    />
                </ModalPay>
                <Burger 
                ingredients={this.state.ingredients} 
                />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
                        
            </Aux>
        );
    }
}


export default BurgerBuilder;