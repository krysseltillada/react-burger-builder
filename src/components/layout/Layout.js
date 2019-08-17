import React from 'react';
import Aux from '../../AuxiliaryMethod';
import style from './Layout.module.css';
import Toolbar from '../navigation/toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={style['Content']}>
            {props.children}
        </main>
    </Aux>
);

export default layout;