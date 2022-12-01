import styles from './order-details.module.css';
import doneImage from '../../images/done-image.svg';

const OrderDetails = () => {
    return (
        <section className={styles.main}>
            <span className={ `${ styles.orderId } text text_type_digits-large mb-8` }>034536</span>
            <span className={ 'text text_type_main-medium mb-15' }>идентификатор заказа</span>
            <img className={ `${ styles.image } mb-15` } src={doneImage} alt='Done'/>
            <span className={ 'text text_type_main-small mb-2' }>Ваш заказ начали готовить</span>
            <span className={ 'text text_type_main-small text_color_inactive' }>Дождитесь готовности на орбитальной станции</span>
        </section>
    )
}

export default OrderDetails;
