import React, {Fragment} from 'react';
import Toolbar from '../../components/navigation/toolbar/Toolbar';

import SideDrawer from '../navigation/sideDrawer/SideDrawer';

// css
import './layout.css';

class Layout extends React.Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    render() {
        return(
            <Fragment>
                <Toolbar/>
                <SideDrawer open={this.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="content">
                    {this.props.children}
                </main>
            </Fragment>
        );
    }

}

export default Layout;