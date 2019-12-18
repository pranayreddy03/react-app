import React from 'react';

import '../BuildControl/BuildControl.css';

const BuildControl = (props) => {

    return (
        <div className="BuildControl">
            <div className="Label"> {props.label} </div>
            <button className="Less" onClick={props.removed} disabled={!props.ingredients}>Less</button>
            <p>{props.ingredients}</p>
            <button className="More" onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl;