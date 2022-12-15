import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Constructor = () => {
    return (
        <main className={ styles.main }>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>

    )
}

export default Constructor;
