import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Constructor = () => {
    return (
        <main className={ styles.main }>
            <DndProvider backend={ HTML5Backend }>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>

    )
}

export default Constructor;
