import styles from './ingredient-details.module.css';
import { ingredientType } from "../../utils/types";

const IngredientDetails = ({ ingredient: data }) => {
    console.log(data)
    const spanStyle = 'text text_type_main-default text_color_inactive';
    return (
        <section className={ `${ styles.main } pb-15` }>
            <span className={ `${ styles.title } text text_type_main-large mt-10 ml-10` }>Детали ингридиента</span>
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
    data: ingredientType
}

export default IngredientDetails;
