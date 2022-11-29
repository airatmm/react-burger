import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from 'react';
import styles from './burger-ingredients.module.css';
import IngredientGroup from "../ingredient-group/ingredient-group";

const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = useState('one')
    return (
        <section className={ `${ styles.ingredients } pt-10` }>
            <h2 className={ `${ styles.title } text text_type_main-large pb-5` }>Соберите бургер</h2>
            <div className={ styles.content }>
                <div className={ `${styles.tabs} pb-10` }>
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
                    <IngredientGroup data={data.filter(el => el.type === 'bun')} title={ 'Булки' } />
                    <IngredientGroup data={data.filter(el => el.type === 'sauce')} title={ 'Соусы' } />
                    <IngredientGroup data={data.filter(el => el.type === 'main')} title={ 'Начинки' } />
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;
