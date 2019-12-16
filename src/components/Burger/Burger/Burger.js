import React from 'react';
import '../../Burger/Burger/Burger.css';


import BurgerIngredient from '../BurgerIngredients/BurgerIngredient';

const Burger = (props) => {

    let receivedIngredients = Object.keys(props.ingredients).map((ingredientKey) => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(receivedIngredients.length === 0) {
        receivedIngredients = <p>Please start adding ingredients.</p>
    }

    return (
        <div className="burger">
             <BurgerIngredient type="bread-top"/>
             {receivedIngredients}
             <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;