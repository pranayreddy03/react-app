import React from 'react';
import '../../Burger/Burger/Burger.css';


import BurgerIngredient from '../BurgerIngredients/BurgerIngredient';

const Burger = (props) => {

    const receivedIngredients = Object.keys(props.ingredients).map((ingredientKey) => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        })
    })

    return (
        <div className="burger">
             <BurgerIngredient type="bread-top"/>
             {receivedIngredients}
             <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;