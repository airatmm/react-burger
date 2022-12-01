import { useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = useState('one')

    return (
        <section className={ `${ styles.ingredients } pt-10` }>
            <h2 className={ 'text text_type_main-large pb-5' }>Соберите бургер</h2>
            <div className={ `${ styles.content } custom-scroll` }>
                <div className={ `${ styles.tabs } pb-10` }>
                    <Tab value="one" active={ current === 'one' } onClick={ setCurrent }>
                        Булки
                    </Tab>
                    <Tab value="two" active={ current === 'two' } onClick={ setCurrent }>
                        Соусы
                    </Tab>
                    <Tab value="three" active={ current === 'three' } onClick={ setCurrent }>
                        Начинки
                    </Tab>
                </div>
                <div className={ styles.container }>
                    <IngredientGroup data={ data.filter(el => el.type === 'bun') } title={ 'Булки' } />
                    <IngredientGroup data={ data.filter(el => el.type === 'sauce') } title={ 'Соусы' } />
                    <IngredientGroup data={ data.filter(el => el.type === 'main') } title={ 'Начинки' } />
                </div>
            </div>
        </section>
    )
}
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType)
}

export default BurgerIngredients;
