import React, { Component } from 'react';
import Aux from '../../AuxiliaryMethod';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;