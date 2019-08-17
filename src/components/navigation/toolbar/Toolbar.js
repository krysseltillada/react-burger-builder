import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';
import DrawerToggle from '../side-drawer/drawer-toggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes['Toolbar']}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes['Logo']}>
            <Logo />
        </div>
        <nav className={classes['DesktopOnly']}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;