import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from 'react';
import style from './burger-ingredients.module.css';

const BurgerIngredients = () => {
    const [current, setCurrent] = useState('one')
    return (
        <section className={ style.ingredients }>
            <h2 className={ `${ style.title } pt-10 pb-5` }>Соберите бургер</h2>
            <div className={ style.content }>
                <div className={ style.tabs }>
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
                <div className={ style.container }>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;
