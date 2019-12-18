import React, {Fragment} from 'react';

import Button from '../shared/button/Button';

const OrderSummary = (props) => {

    const list = Object.keys(props.ingredients).map((key) => {
        return (
            <li key={key}> 
                <span style={{textTransform: 'capitalize'}}> key: </span> 
                    {props.ingredients[key]} 
            </li>
        ) 
    })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {list}
            </ul>
            <p> <strong> Total Price: {props.totalPrice.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
            <Button click={props.clickedBkdrp} btnType="Danger"> CANCEL </Button>
            <Button btnType="Success" click={props.purchaseContinue}> CONTINUE </Button>
        </Fragment>
    );
}

export default OrderSummary;