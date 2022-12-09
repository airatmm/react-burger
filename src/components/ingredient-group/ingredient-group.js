import styles from './ingredient-group.module.css';
import { forwardRef, useContext } from 'react';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { IngredientsContext } from "../../contexts/ingredients-context";

const IngredientGroup = forwardRef(({ data, title, ingredientModal }, ref) => {
    const ingredientsContext = useContext(IngredientsContext);
    const { orderIngredients, setOrderIngredients } = ingredientsContext;

    const addToOrder = (ingredient) => {
        if (ingredient.type === 'bun') {
            setOrderIngredients({
                ...orderIngredients,
                buns: [ingredient],
            })
        }
        if (ingredient.type !== 'bun') {
            setOrderIngredients({
                ...orderIngredients,
                fillings: [...orderIngredients.fillings, ingredient].map((item) => ({ ...item, id: crypto.randomUUID()}))
            })
        }
    }
    return (
        <section className={ 'pb-10' }>
            <div className={ styles.title }>
                <p ref={ ref } className='text text_type_main-medium'>
                    { title }
                </p>
            </div>
            <div className={ styles.items }>
                { data.map(ingredient =>
                    <IngredientItem
                        count={ 1 }
                        key={ ingredient._id }
                        ingredient={ ingredient }
                        ingredientModal={ ingredientModal }
                        addToOrder={ addToOrder }
                    />) }
            </div>
        </section>
    )
});

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    title: PropTypes.string.isRequired,
    ingredientModal: PropTypes.func.isRequired
}

export default IngredientGroup;
