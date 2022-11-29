import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

const IngredientItem = ({ ingredient, count }) => {

    count = 16;
    return (
        <div className={ `${ styles.content } pt-6` }>
            { count &&
                <div className={ styles.counter }>

                    { count < 99 ? <Counter count={count}  size='default'/>
                        :
                        <Counter count={count}  size='small'/>
                    }

                </div>
            }
            <div className={ `${ styles.image } ml-4 mr-4` }>
                <img src={ ingredient.image } alt={ ingredient.name }/>
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
    ingredient: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
    }),
    count: PropTypes.number
}

export default IngredientItem;
