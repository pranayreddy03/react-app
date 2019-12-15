import React, {Fragment} from 'react';

// css
import './layout.css';

const Layout = (props) => {
    return(
        <Fragment>
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main className="content">
                {props.children}
            </main>
        </Fragment>
    );
}

export default Layout;