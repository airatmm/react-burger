import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { getAllIngredients } from "../../utils/api";
import { SERVER_ERROR } from "../../utils/constants";
import { useEffect, useState } from "react";
import {IngredientsContext} from "../../contexts/ingredients-context";

const Constructor = () => {
    const [allIngredients, setAllIngredients] = useState([])

    const getAllIngredientsData = () => {
        getAllIngredients
            .then((data) => {
                setAllIngredients(data.data)
            })

            .catch(() => {
                console.log(SERVER_ERROR)
            })
    }
    useEffect(() => {
        getAllIngredientsData();
    }, [])
    return (
        <main className={ styles.main }>
            <IngredientsContext.Provider value={{allIngredients, setAllIngredients}}>
            <BurgerIngredients data={ allIngredients } />
            <BurgerConstructor />
            </IngredientsContext.Provider>
        </main>

    )
}

Constructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType),
}

export default Constructor;
