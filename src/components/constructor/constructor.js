import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import data from "../../utils/data";

const Constructor = () => {
    return (
        <main className={ styles.main }>
            <BurgerIngredients data={ data } />
            <BurgerConstructor data={ data } />
        </main>

    )
}

export default Constructor;
