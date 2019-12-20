import React, {Fragment} from 'react';

import '../sideDrawer/sideDrawer.css';

import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../shared/backdrop/Backdrop';

const SideDrawer = (props) => {

    let attachClasses = ['SideDrawer', 'Close'].join(' ');

    if(props.open) {
        attachClasses = ['SideDrawer', 'Open'].join(' ');
    }

    return (
        <Fragment> 
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses}>
                <div>BURGER</div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Fragment>
    );
}

export default SideDrawer;