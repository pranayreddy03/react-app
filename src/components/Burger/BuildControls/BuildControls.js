import React from 'react';

import '../BuildControls/BuildControls.css'

import BuildControl from '../BuildControls/BuildControl/BuildControl';

const BuildControls = (props) => {

    console.log(props);
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]

    return (
        <div className="buildControls">
            {controls.map((control) => {

                return <BuildControl key={control.label} 
                                     label={control.label}
                                     type={control.type}
                                     added={()=> props.add(control.type)}
                                     removed={() => props.remove(control.type)}
                                     ingredients ={props.ingredients[control.type]}/>
            }) }
        </div>
    );
} 

export default BuildControls;