import { useContext, useState, useRef  } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";

const BurgerIngredients = () => {
    const { allIngredients: data } = useContext(IngredientsContext);
    const [current, setCurrent] = useState('one')
    const { setModal } = useContext(ModalContext);

    const ingredientModal = (ingredient) => {
        setModal({
            visible: true,
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

    const bunRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)

    const scroll = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section className={ `${ styles.ingredients } pt-10` }>
            <h2 className={ 'text text_type_main-large pb-5' }>Соберите бургер</h2>
            <div className={ `${ styles.content } custom-scroll` }>
                <div className={ `${ styles.tabs } pb-10` }>
                    <Tab value="one" active={ current === 'one' } onClick={() => {
                        scroll(bunRef)
                        setCurrent('one')
                    }}>
                        Булки
                    </Tab>
                    <Tab value="two" active={ current === 'two' } onClick={() => {
                        scroll(sauceRef)
                        setCurrent('two')
                    }}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={ current === 'three' } onClick={() => {
                        scroll(mainRef)
                        setCurrent('three')
                    }}>
                        Начинки
                    </Tab>
                </div>
                <div className={ styles.container }>
                    <IngredientGroup data={ data.filter(el => el.type === 'bun') } title={ 'Булки' }
                                     ingredientModal={ ingredientModal } ref={bunRef} />
                    <IngredientGroup data={ data.filter(el => el.type === 'sauce') } title={ 'Соусы' }
                                     ingredientModal={ ingredientModal } ref={sauceRef} />
                    <IngredientGroup data={ data.filter(el => el.type === 'main') } title={ 'Начинки' }
                                     ingredientModal={ ingredientModal } ref={mainRef} />
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;
