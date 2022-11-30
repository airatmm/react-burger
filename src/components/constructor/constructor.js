import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
//import data from "../../utils/data";

const Constructor = ({ ingredients }) => {
    return (
        <main className={ styles.main }>
            <BurgerIngredients data={ ingredients } />
            <BurgerConstructor data={ ingredients }/>
        </main>

    )
}

export default Constructor;
