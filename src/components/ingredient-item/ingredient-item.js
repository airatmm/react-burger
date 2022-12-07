import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useContext } from "react";
import { IngredientsContext } from "../../contexts/ingredients-context";

const IngredientItem = ({ ingredient, count, renderModal }) => {
    const { allIngredients, setAllIngredients} = useContext(IngredientsContext);

    const ingredientCard = {
        image: ingredient.image_large,
        name: ingredient.name,
        calories: ingredient.calories,
        fat: ingredient.fat,
        carbohydrates: ingredient.carbohydrates,
        proteins: ingredient.proteins,
        price: ingredient.price,
        _id: ingredient._id,
    }
    const onSelectIngredient = () => {
        setAllIngredients(allIngredients)
        renderModal(ingredientCard);
    }

    count = 16;
    return (
        <div className={ `${ styles.content } pt-6` } onClick={ onSelectIngredient }>
            { count &&
                <div className={ styles.counter }>

                    { count < 99 ? <Counter count={ count } size='default' />
                        :
                        <Counter count={ count } size='small' />
                    }

                </div>
            }
            <div className={ `${ styles.image } ml-4 mr-4` }>
                <img src={ ingredient.image } alt={ ingredient.name } />
            </div>

            <div className={ `${ styles.price } mt-1` }>
                <p className='text text_type_digits-default mr-2'>
                    { ingredient.price }
                </p>
                <CurrencyIcon type="primary" />
            </div>

            <div className={ `${ styles.name } mt-1` }>
                <p className='text text_type_main-default'>
                    { ingredient.name }
                </p>
            </div>
        </div>
    )
}

IngredientItem.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    count: PropTypes.number,
    onSelect: PropTypes.func
}

export default IngredientItem;
