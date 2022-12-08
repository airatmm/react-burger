import styles from './ingredient-group.module.css';
import { forwardRef, useContext } from 'react';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { IngredientsContext } from "../../contexts/ingredients-context";
// import order from "../order/order";

const IngredientGroup = forwardRef(({ title, ingredientModal }, ref) => {
    const ingredientsContext = useContext(IngredientsContext);
    const { allIngredients: data, orderIngredients, setOrderIngredients } = ingredientsContext;
    // const onIdClick = (id) => {
    //     setSelectedIds((selectedIds) => [...selectedIds, id]);
    // };
    //const { order, setOrder } = ingredientsContext;
    // setSelectedIds((selectedIds) => [...selectedIds, id]);
    // onClick={() => setCount(prevCount => prevCount - 1)}
    const addToOrder = (ingredient) => {
        if (ingredient.type === 'bun') {
            setOrderIngredients({
                ...orderIngredients,
                buns: [ingredient],
                //buns: [ingredient],
                //         ingredients: [...orderIngredients.ingredients]
                //fillings: [...orderIngredients]
            })
            //setOrderIngredients((orderIngredients) =>[...orderIngredients, ingredient])
        }
        if (ingredient.type !== 'bun') {
            setOrderIngredients({
                ...orderIngredients,
                fillings: [ingredient]
            })
        }

        //if(item.type === 'bun' && cartState.bun.length === 0) {
        //             setOrderIngredients({
        //                 bun: [ingredient],
        //                 fillings: [...orderIngredients.ingredients]
        //             })
        //         }
        // console.log(ingredient.type);
        // if (ingredient.type === 'bun' && orderIngredients.bun.length === 0) {
        //     setOrderIngredients({
        //         bun: [ingredient],
        //         ingredients: [...orderIngredients.ingredients]
        //     })
        // }
        //
        // if (ingredient.type !== 'bun' && orderIngredients.bun.length !== 0) {
        //     setOrderIngredients({
        //         ...orderIngredients,
        //         ingredients: [...orderIngredients.ingredients, ingredient]
        //     })
        // }
    }
    return (
        <section className={ 'pb-10' }>
            <div className={ styles.title }>
                <p ref={ ref } className='text text_type_main-medium'>
                    { title }
                </p>
            </div>
            <div className={ styles.items }>
                { data.map(ingredient => <IngredientItem count={ 1 } key={ ingredient._id } ingredient={ ingredient }
                                                         ingredientModal={ ingredientModal }
                                                         addToOrder={ addToOrder }
                />) }
            </div>
        </section>
    )
});

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    title: PropTypes.string
}

export default IngredientGroup;
