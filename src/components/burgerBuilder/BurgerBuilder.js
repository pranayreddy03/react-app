import React, {Component, Fragment} from 'react';
import axiosInstance from '../../axios-orders';

import Burger from '../Burger/Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import OrderSummary from '../OrderSummary/OrderSummary'; 
import Modal from '../shared/modal/Modal';
import Spinner from '../shared/spinner/Spinner';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    render() {

        let orderSumamry = <OrderSummary ingredients={this.state.ingredients} 
        clickedBkdrp={this.backdropHandler}
        totalPrice ={this.state.totalPrice}  
        purchaseContinue ={this.purchaseContinueHandler} />
        if(this.state.loading) {
            orderSumamry = <Spinner/>
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} clickedBkdrp={this.backdropHandler}>
                    {orderSumamry}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls add={this.addIngredient}
                               ingredients={this.state.ingredients}
                               price={this.state.totalPrice}
                               purchasable = {this.state.purchasable}
                               purchasing = {this.purchaseHandler}
                               remove={this.removeIngredient}/>
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
        });
        this.checkPurchasable(upgardedIngredients);
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
        this.checkPurchasable(upgardedIngredients);
    }

    checkPurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce( (sum,el) => {
            return sum + el;
        } ,0)
        this.setState({
            purchasable: sum > 0
        })
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    backdropHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Pranay',
                address: {
                    street: '1 Main street',
                    city: 'NYC',
                    state: 'NY',
                    zipCode: 99999
                },
            email: 'test@test.com'  
            }
        }
        axiosInstance.post('/orders.json', order)
        .then(response => {
            this.setState({
                loading: false,
                purchasing: false
            })
        })
        .catch(error => {
            this.setState({
                loading: false,
                purchasing: false
            })
        });
    }

}

export default BurgerBuilder;