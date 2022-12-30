import styles from './ingredient-group.module.css';
import { forwardRef, useMemo } from 'react';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useSelector } from "react-redux";

const IngredientGroup = forwardRef(({ data, title }, ref) => {
    const burgerConstructor = useSelector(store => store.burgerConstructor);

    const ingredientsCounter = useMemo(() => {
        const { bun, itemsBurger } = burgerConstructor;
        const counters = {};
        itemsBurger.forEach((ingredient) => {
            if (!counters[ingredient._id]) counters[ingredient._id] = 0;
            counters[ingredient._id]++;
        });
        if (bun) counters[bun._id] = 2;
        return counters;
    }, [burgerConstructor]);

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
                        count={ ingredientsCounter[ingredient._id] }
                        key={ ingredient._id }
                        ingredient={ ingredient }
                    />) }
            </div>
        </section>
    )
});

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    title: PropTypes.string.isRequired,
}

export default IngredientGroup;
