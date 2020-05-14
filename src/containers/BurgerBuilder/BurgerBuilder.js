import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//GLOBAL VAR ALL CAPS
const INGREDIENT_PRICES ={
    salad: 0.75,
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
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
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
    }

    removeIngredientHandler = (type) => {

    }
    render () {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div><BuildControls 
                    ingredientAdded={this.addIngredientHandler}/>
                        </div>
            </Aux>
        );
    }
}


export default BurgerBuilder;