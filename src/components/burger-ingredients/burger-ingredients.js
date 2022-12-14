import { useContext, useState, useRef, useEffect, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
//import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";
import { useDispatch, useSelector } from "react-redux";
import { getAllIngredientsData } from "../../services/slices/ingredientsSlice";
//import { store } from "../../services";

const BurgerIngredients = () => {
    const [current, setCurrent] = useState('one')
    const { setModal } = useContext(ModalContext);
    const data = useSelector(store => store.ingredients.items)
    // console.log("DATA", data)

    const buns = useMemo(() => data.filter(el => el.type === 'bun'), [data])
    const mains = useMemo(() => data.filter(el => el.type === 'main'), [data])
    const sauces = useMemo(() => data.filter(el => el.type === 'sauce'), [data])

    const ingredientModal = (ingredient) => {
        setModal({
            visible: true,
            content: <IngredientDetails
                data={ ingredient }
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
                    <Tab value="one" active={ current === 'one' } onClick={ () => {
                        scroll(bunRef)
                        setCurrent('one')
                    } }>
                        Булки
                    </Tab>
                    <Tab value="two" active={ current === 'two' } onClick={ () => {
                        scroll(sauceRef)
                        setCurrent('two')
                    } }>
                        Соусы
                    </Tab>
                    <Tab value="three" active={ current === 'three' } onClick={ () => {
                        scroll(mainRef)
                        setCurrent('three')
                    } }>
                        Начинки
                    </Tab>
                </div>
                <div className={ styles.container }>
                    <IngredientGroup data={ buns } title={ 'Булки' }
                                     ingredientModal={ ingredientModal } ref={ bunRef } />
                    <IngredientGroup data={ sauces } title={ 'Соусы' }
                                     ingredientModal={ ingredientModal } ref={ sauceRef } />
                    <IngredientGroup data={ mains } title={ 'Начинки' }
                                     ingredientModal={ ingredientModal } ref={ mainRef } />
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;
