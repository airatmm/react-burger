import styles from './ingredient-group.module.css';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const IngredientGroup = ({ data, title, renderModal }) => {
    return (
        <section className={ 'pb-10' }>
            <div className={ styles.title }>
                <p className='text text_type_main-medium'>
                    { title }
                </p>
            </div>
            <div className={ styles.items }>
                { data.map(ingredient => <IngredientItem key={ ingredient._id } ingredient={ ingredient }
                                                         renderModal={ renderModal } />) }
            </div>
        </section>
    )
}

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    title: PropTypes.string
}

export default IngredientGroup;
