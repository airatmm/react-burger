import { useState, useRef, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/modal";
import { removeCurrentIngredient } from "../../services/slices/current-ingredient-slice";

const BurgerIngredients = () => {
    const [current, setCurrent] = useState('one')
    const data = useSelector(store => store.ingredients.items)
    const dispatch = useDispatch()
    const currentIngredient = useSelector(store => store.currentIngredient)

    const buns = useMemo(() => data.filter(el => el.type === 'bun'), [data])
    const mains = useMemo(() => data.filter(el => el.type === 'main'), [data])
    const sauces = useMemo(() => data.filter(el => el.type === 'sauce'), [data])

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
                    <IngredientGroup data={ buns } title={ 'Булки' } ref={ bunRef } />
                    <IngredientGroup data={ sauces } title={ 'Соусы' } ref={ sauceRef } />
                    <IngredientGroup data={ mains } title={ 'Начинки' } ref={ mainRef } />
                </div>
                {currentIngredient &&
                    <Modal header={'Детали ингредиента'} onClose={() => dispatch(removeCurrentIngredient())}>
                        <IngredientDetails ingredient={currentIngredient}/>
                    </Modal>
                }
            </div>
        </section>
    )
}

export default BurgerIngredients;
