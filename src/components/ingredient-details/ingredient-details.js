import styles from './ingredient-details.module.css';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ingredientsState = (store) => store.ingredients.items;
const IngredientDetails = () => {
    const { id } = useParams();
    const ingredients = useSelector(ingredientsState);
    const data = ingredients.length && ingredients.find((item) => item._id === id);

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

export default IngredientDetails;
