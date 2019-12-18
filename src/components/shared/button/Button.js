import React from 'react';

import '../button/Button.css';

const Button = (props) => {

    const buttonClasses = [props.btnType, 'Button'].join(' ');

    return (
        <button onClick="props.clicked"
                className={buttonClasses}
                onClick={props.click}>
            {props.children}
        </button> 
    )
}

export default Button;