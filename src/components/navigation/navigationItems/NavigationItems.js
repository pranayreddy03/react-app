import React from 'react';
import NavigationItem from '../navigationItem/NavigationItem.js';

import '../navigationItems/navigationItems.css';

const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;