import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getAllIngredients } from "../../utils/api";
import { SERVER_ERROR } from "../../utils/constants";
import { useEffect,useState } from "react";
import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";
import Modal from '../modal/modal';

export const initialState = {
    buns: null,
    fillings: []
}

const Constructor = () => {

    const [allIngredients, setAllIngredients] = useState([]);
    const [orderIngredients, setOrderIngredients] = useState(initialState)
    const getAllIngredientsDataContext = () => {
        getAllIngredients
            .then((data) => {
                setAllIngredients(data.data)
            })

            .catch(() => {
                console.log(SERVER_ERROR)
            })
    }
    // console.log('allIngredients', allIngredients)
    //
    // const test = allIngredients.filter(el => el.type === 'bun')
    // console.log('test', test)


    useEffect(() => {
        getAllIngredientsDataContext();
    }, [])

    const [modal, setModal] = useState({
        visible: false,
        content: null,
    });

    const { visible, content } = modal;

    return (
        <main className={ styles.main }>
            <ModalContext.Provider value={ { modal, setModal } }>

                    <BurgerIngredients />
                <IngredientsContext.Provider
                    value={ {
                        allIngredients,
                        setAllIngredients,
                        orderIngredients,
                        setOrderIngredients
                    } }>
                    <BurgerConstructor />
                    { visible && <Modal>{ content }</Modal> }
                </IngredientsContext.Provider>
            </ModalContext.Provider>
        </main>

    )
}

export default Constructor;
