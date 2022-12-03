import styles from './constructor.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const Constructor = ({ ingredients }) => {
    return (
        <main className={ styles.main }>
            <BurgerIngredients data={ ingredients } />
            { ingredients && <BurgerConstructor data={ ingredients } /> }
        </main>

    )
}

Constructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}

export default Constructor;
