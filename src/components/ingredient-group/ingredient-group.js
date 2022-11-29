import styles from './ingredient-group.module.css';
import IngredientItem from '../ingredient-item/ingredient-item';
const IngredientGroup = ({ data, title }) => {
    return (
        <section className={'pb-10'}>
            <div className={styles.title}>
                <p className='text text_type_main-medium'>
                    {title}
                </p>
            </div>
            <div className={styles.items}>
                {data.map(ingredient => <IngredientItem key={ingredient._id} ingredient={ingredient} />)}
            </div>
        </section>
    )
}

export default IngredientGroup;
