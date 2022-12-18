import { useState, useRef, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/modal";
import { removeCurrentIngredient } from "../../services/slices/current-ingredient-slice";
//import {useInView} from "react-intersection-observer";

const BurgerIngredients = () => {
    const tabs = ['one', 'two', 'three']
    const [current, setCurrent] = useState(tabs[0]);
    console.log(current)

    const data = useSelector(store => store.ingredients.items);
    const dispatch = useDispatch();
    const currentIngredient = useSelector(store => store.currentIngredient);

    const buns = useMemo(() => data.filter(el => el.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter(el => el.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter(el => el.type === 'sauce'), [data]);

    const rootRef = useRef(null);
    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);

    function onScroll() {
        const rootTop = rootRef.current.getBoundingClientRect().top
        const bunTop = bunRef.current.getBoundingClientRect().top
        const sauceTop = sauceRef.current.getBoundingClientRect().top
        const mainTop = mainRef.current.getBoundingClientRect().top

        const distToBun = Math.abs(rootTop - bunTop)
        const distToSauce = Math.abs(rootTop - sauceTop)
        const distToMain = Math.abs(rootTop - mainTop)

        const distances = [distToBun, distToSauce, distToMain]
        const minElement = Math.min(...distances)
        const minIndex = distances.findIndex(el => el === minElement)
        let newTab = tabs[minIndex]

        if (newTab !== current) {
            setCurrent(newTab)
        }
    }
    //const [inViewRef, inView] = useInView()
    // const { ref: inViewRef, inView } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    // });
    // function handleRef(node) {
    //     inViewRef(node);
    //     mainRef.current = node;
    // }
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
                        setCurrent(tabs[0])
                    } }>
                        Булки
                    </Tab>
                    <Tab value="two" active={ current === 'two' } onClick={ () => {
                        scroll(sauceRef)
                        setCurrent(tabs[1])
                    } }>
                        Соусы
                    </Tab>
                    <Tab value="three" active={ current === 'three' } onClick={ () => {
                        scroll(mainRef)
                        setCurrent(tabs[2])
                    } }>
                        Начинки
                    </Tab>
                </div>
                <div ref={rootRef} onScroll={onScroll} className={ styles.container }>
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
