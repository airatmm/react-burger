import styles from './ingredient-group.module.css';
import { forwardRef } from 'react';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const IngredientGroup = forwardRef(({ data, title }, ref) => {
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
                    />) }
            </div>
        </section>
    )
});

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    title: PropTypes.string.isRequired,
}

export default IngredientGroup;
