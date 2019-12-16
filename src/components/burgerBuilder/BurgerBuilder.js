import React, {Component, Fragment} from 'react';

import Burger from '../Burger/Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    ingredientPrices = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.5,
        bacon: 1.0
    } 

    state = {
        ingredients :  {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls add={this.addIngredient} ingredients={this.state.ingredients} remove={this.removeIngredient}/>
            </Fragment>
        )
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const upgardedIngredients = {...this.state.ingredients};
        upgardedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + this.ingredientPrices[type];

        this.setState(() => {
            return ( {
                ingredients: upgardedIngredients,
                totalPrice: updatedPrice
            })
        })
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const upgardedIngredients = {...this.state.ingredients};
        upgardedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - this.ingredientPrices[type];

        this.setState(() => {
            return ({
                ingredients: upgardedIngredients,
                totalPrice: updatedPrice
            })
        })

    }
}

export default BurgerBuilder;