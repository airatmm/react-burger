import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { getAllIngredients } from "../../utils/api";
import { SERVER_ERROR } from "../../utils/constants";
import { useEffect, useState } from "react";
import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";
import Modal from '../modal/modal';

const Constructor = () => {
    const [allIngredients, setAllIngredients] = useState([]);
    // const [buns, setBuns] = useState([]);
    // const [burgerIngredients, setBurgerIngredients] = useState([])

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

    const [modal, setModal] = useState({
        visible: false,
        content: null,
    });

    const { visible, content } = modal;

    return (
        <main className={ styles.main }>
            <ModalContext.Provider value={{modal, setModal}}>
                <IngredientsContext.Provider value={ { allIngredients, setAllIngredients } }>
                    <BurgerIngredients />
                    <BurgerConstructor />
                    {visible && <Modal>{content}</Modal>}
                </IngredientsContext.Provider>
            </ModalContext.Provider>
        </main>

    )
}

Constructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType),
}

export default Constructor;
