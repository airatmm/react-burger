import { useState, useRef, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";
import { useSelector } from "react-redux";

const BurgerIngredients = () => {
    const tabs = { bun: 'bun', sauce: 'sauce', main: 'main'};
    const {bun, sauce, main} = tabs;
    const [current, setCurrent] = useState(bun);

    const data = useSelector(store => store.ingredients.items);

    const buns = useMemo(() => data.filter(el => el.type === bun), [data, bun]);
    const sauces = useMemo(() => data.filter(el => el.type === sauce), [data, sauce]);
    const mains = useMemo(() => data.filter(el => el.type === main), [data, main]);

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

        //работает также ...
        if (distToBun < distToSauce) {
            setCurrent(bun);
        } else if (distToSauce < distToMain) {
            setCurrent(sauce);
        } else {
            setCurrent(main);
        }

        //... как и это

        // const distances = [distToBun, distToSauce, distToMain]
        // const minElement = Math.min(...distances)
        // const minIndex = distances.findIndex(el => el === minElement)
        // let newTab = tabs[minIndex]

        // if (newTab !== current) {
        //     setCurrent(newTab)
        // }
    }

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
                    <Tab value={ bun } active={ current === bun } onClick={ () => {
                        scroll(bunRef)
                        setCurrent(bun)
                    } }>
                        Булки
                    </Tab>
                    <Tab value={ sauce } active={ current === sauce } onClick={ () => {
                        scroll(sauceRef)
                        setCurrent(sauce)
                    } }>
                        Соусы
                    </Tab>
                    <Tab value={ main } active={ current === main } onClick={ () => {
                        scroll(mainRef)
                        setCurrent(main)
                    } }>
                        Начинки
                    </Tab>
                </div>
                <div ref={ rootRef } onScroll={ onScroll } className={ styles.container }>
                    <IngredientGroup data={ buns } title={ 'Булки' } ref={ bunRef } />
                    <IngredientGroup data={ sauces } title={ 'Соусы' } ref={ sauceRef } />
                    <IngredientGroup data={ mains } title={ 'Начинки' } ref={ mainRef } />

                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;

