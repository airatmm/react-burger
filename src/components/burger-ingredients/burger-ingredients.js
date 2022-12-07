import { useContext, useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";

const BurgerIngredients = () => {
    const { allIngredients: data } = useContext(IngredientsContext);
    const [current, setCurrent] = useState('one')
    const { setModal } = useContext(ModalContext);

    const renderModal = (ingredient) => {
        setModal({
            visible: true,
            title: 'Детали ингредиента',
            content: <IngredientDetails
                image={ ingredient.image }
                name={ ingredient.name }
                calories={ ingredient.calories }
                proteins={ ingredient.proteins }
                fat={ ingredient.fat }
                carbohydrates={ ingredient.carbohydrates }
            />
        })
    }

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
                    <IngredientGroup data={ data.filter(el => el.type === 'bun') } title={ 'Булки' }
                                     renderModal={ renderModal } />
                    <IngredientGroup data={ data.filter(el => el.type === 'sauce') } title={ 'Соусы' }
                                     renderModal={ renderModal } />
                    <IngredientGroup data={ data.filter(el => el.type === 'main') } title={ 'Начинки' }
                                     renderModal={ renderModal } />
                </div>
            </div>
        </section>
    )
}
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType)
}

export default BurgerIngredients;
