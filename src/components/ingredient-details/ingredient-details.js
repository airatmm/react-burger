import styles from './ingredient-details.module.css';
import Meat from '../../images/meat-01.png'
const IngredientDetails = () => {
    return (
        <section className={styles.main}>
            <img src={Meat} alt='Meat'/>
            <span className={'text text_type_main-medium'}>Биокотлета из марсианской Магнолии</span>
            <div className={styles.nutrition}>
                <div className={styles.nutritionItem}>
                    <span className={'text text_type_main-default text_color_inactive'}>Калории,ккал</span>
                    <span className={'text text_type_main-default text_color_inactive'}>244,4</span>
                </div>
                <div className={styles.nutritionItem}>
                    <span className={'text text_type_main-default text_color_inactive'}>Белки, г</span>
                    <span className={'text text_type_main-default text_color_inactive'}>12,2</span>
                </div>
                <div className={styles.nutritionItem}>
                    <span className={'text text_type_main-default text_color_inactive'}>Жиры, г</span>
                    <span className={'text text_type_main-default text_color_inactive'}>17,2</span>
                </div>
                <div className={styles.nutritionItem}>
                    <span className={'text text_type_main-default text_color_inactive'}>Углеводы, г</span>
                    <span className={'text text_type_main-default text_color_inactive'}>10,2</span>
                </div>
            </div>
        </section>
    )
}

export default IngredientDetails;
