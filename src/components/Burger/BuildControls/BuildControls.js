import React from 'react';

import '../BuildControls/BuildControls.css'

import BuildControl from '../BuildControls/BuildControl/BuildControl';

const BuildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

    return (
        <div className="buildControls">
            <p>Price: <strong> {props.price.toFixed(2)} </strong> </p>
            {controls.map((control) => {

                return <BuildControl key={control.label} 
                                     label={control.label}
                                     type={control.type}
                                     added={()=> props.add(control.type)}
                                     removed={() => props.remove(control.type)}
                                     ingredients ={props.ingredients[control.type]}/>
            }) }
            <button className="OrderButton" onClick={props.purchasing} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
} 

export default BuildControls;