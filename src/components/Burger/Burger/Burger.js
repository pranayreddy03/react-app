import React from 'react';
import '../../Burger/Burger/Burger.css';


import BurgerIngredient from '../BurgerIngredients/BurgerIngredient';

const Burger = (props) => {
    return (
        <div className="burger">
             <BurgerIngredient type="bread-top"/>
             <BurgerIngredient type="cheese"/>
             <BurgerIngredient type="meat"/>
             <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;