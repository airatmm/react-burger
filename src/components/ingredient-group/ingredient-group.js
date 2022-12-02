import styles from './ingredient-group.module.css';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useState } from "react";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const IngredientGroup = ({ data, title }) => {
    const [currentIngredient, setCurrentIngredient] = useState();

    return (
        <section className={ 'pb-10' }>
            <div className={ styles.title }>
                <p className='text text_type_main-medium'>
                    { title }
                </p>
            </div>
            <div className={ styles.items }>
                { data.map(ingredient => <IngredientItem key={ ingredient._id } ingredient={ ingredient }
                                                         onSelect={ setCurrentIngredient } />) }
            </div>
            { currentIngredient && <Modal title={ 'Детали ингредиента' } onClose={ () => setCurrentIngredient(null) }>
                <IngredientDetails data={ currentIngredient } />
            </Modal> }
        </section>
    )
}

IngredientGroup.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    title: PropTypes.string.isRequired
}

export default IngredientGroup;
