import styles from './empty-burger-constructor.module.css';
import PropTypes from "prop-types";

const EmptyBurgerConstruction = ({ isFieldHover }) => {
    const style = {
        border: `2px dashed ${isFieldHover ? 'rgba(45, 45, 200, 0.8)' : 'gray'}`
    }
    return (
        <div className={ styles.main } style={style}>
            { isFieldHover ?
                <>
                    <h3>Корзина пуста</h3>
                    <p>Положите ингредиент в корзину</p>
                </>
                :
                <>
                    <h3>Корзина пуста</h3>
                    <p>Добавьте ингредиенты</p>
                </>
            }
        </div>
    )
}
EmptyBurgerConstruction.propTypes = {
    isLocked: PropTypes.bool,
}
export default EmptyBurgerConstruction;
