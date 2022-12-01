import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
// import { ingredientType } from "../../utils/types";

const IngredientDetails = ({ data }) => {
    console.log(data);
    const spanStyle = 'text text_type_main-default text_color_inactive';
    return (
        <section className={ `${ styles.main } pb-15` }>
            <img src={ data.image_large } alt={ data.image } />
            <span className={ 'text text_type_main-medium pt-4 pb-8' }>{ data.name }</span>
            <div className={ styles.nutrition }>
                <div className={ styles.nutritionItem }>
                    <span className={ spanStyle }>Калории,ккал</span>
                    <span className={ spanStyle }>{ data.calories }</span>
                </div>
                <div className={ styles.nutritionItem }>
                    <span className={ spanStyle }>Белки, г</span>
                    <span className={ spanStyle }>{ data.proteins }</span>
                </div>
                <div className={ styles.nutritionItem }>
                    <span className={ spanStyle }>Жиры, г</span>
                    <span className={ spanStyle }>{ data.fat }</span>
                </div>
                <div className={ styles.nutritionItem }>
                    <span className={ 'text text_type_main-default text_color_inactive' }>Углеводы, г</span>
                    <span className={ 'text text_type_main-default text_color_inactive' }>{ data.carbohydrates }</span>
                </div>
            </div>
        </section>
    )
}

IngredientDetails.propTypes = {
    data: PropTypes.shape({
        image_large: PropTypes.string,
        name: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number
    })
}




export default IngredientDetails;
