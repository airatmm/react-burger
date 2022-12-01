import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Constructor = ({ ingredients }) => {
    return (
        <main className={ styles.main }>
            <BurgerIngredients data={ ingredients } />
            { ingredients && <BurgerConstructor data={ ingredients } /> }
        </main>

    )
}

export default Constructor;
