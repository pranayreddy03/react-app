import React from 'react';

import '../toolbar/Toolbar.css';
import NavigationItems from '../navigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>Menu</div>
            <div>BURGER</div>
            <nav className="DesktopOnly">
                 <NavigationItems/>
            </nav>
        </header>
    );
}

export default Toolbar;