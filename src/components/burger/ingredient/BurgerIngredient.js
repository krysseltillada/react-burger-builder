import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './BurgerIngredient.module.css';

class BurgerIngredient extends Component{
    render(){
        let ingredient = null;

        switch(this.props.type){
            case ('bread-bottom'):
                ingredient = <div className={style['BreadBottom']}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={style['BreadTop']}>
                        <div className={style['Seeds1']}></div>
                        <div className={style['Seeds2']}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={style['Meat']}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={style['Cheese']}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={style['Bacon']}></div>;
                break;
            case ('salad'):
                ingredient = <div className={style['Salad']}></div>;
                break;
            default: 
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;