import React, {Component, Fragment} from 'react';

import Burger from '../Burger/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Fragment>
                <Burger/>
                <div>Build Controls</div>
            </Fragment>
        )
    }
}

export default BurgerBuilder;