import styles from './ingredient-group.module.css';
import { forwardRef } from 'react';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
// import { useDispatch } from "react-redux";
// import { addBun, addIngredient } from "../../services/slices/constructor-slice";

const IngredientGroup = forwardRef(({ data, title }, ref) => {
    //const dispatch = useDispatch();

    // const addToOrder = (ingredient) => {
    //     // console.log(ingredient)
    //
    //     dispatch(ingredient.type === 'bun' ? addBun(ingredient) : addIngredient(ingredient))
    //     // if (ingredient.type === 'bun') {
    //     //     dispatch(addBun(ingredient))
    //     //     // addBun({
    //     //     //     ...orderIngredients,
    //     //     //     buns: [ingredient],
    //     //     // })
    //     // }
    //     // if (ingredient.type !== 'bun') {
    //     //     dispatch(addIngredient(ingredient));
    //     //     // setOrderIngredients({
    //     //     //     ...orderIngredients,
    //     //     //     fillings: [...orderIngredients.fillings, ingredient].map((item) => ({ ...item, id: crypto.randomUUID()}))
    //     //     // })
    //     // }
    // }

    // const addToOrder = (ingredient) => {
    //     if (ingredient.type === 'bun') {
    //         setOrderIngredients({
    //             ...orderIngredients,
    //             buns: [ingredient],
    //         })
    //     }
    //     if (ingredient.type !== 'bun') {
    //         setOrderIngredients({
    //             ...orderIngredients,
    //             fillings: [...orderIngredients.fillings, ingredient].map((item) => ({ ...item, id: crypto.randomUUID()}))
    //         })
    //     }
    // }
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
                        //ingredientModal={ ingredientModal }
                        //addToOrder={ addToOrder }
                    />) }
            </div>
        </section>
    )
});

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    title: PropTypes.string.isRequired,
    ingredientModal: PropTypes.func
}

export default IngredientGroup;
