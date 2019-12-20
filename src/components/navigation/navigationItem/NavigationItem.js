import React from 'react';

import '../navigationItem/NavigationItem.css';

const NavigationItem = (props) => {

    const aClass = props.active ? 'active' : null;
    return (
            <li className="NavigationItem">
                <a href={props.link} className={aClass}>{props.children}</a>
            </li>     
    );
}

export default NavigationItem;