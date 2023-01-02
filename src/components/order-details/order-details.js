import styles from './order-details.module.css';
import doneImage from '../../images/done-image.svg';
import { useSelector } from "react-redux";

const orderState = (store) => store.order.result;

const OrderDetails = () => {
    const { order } = useSelector(orderState)
    return (
        <section className={ styles.main }>
            <span className={ `${ styles.orderId } text text_type_digits-large mt-30 mb-8` }>{ order.number }</span>
            <span className={ 'text text_type_main-medium mb-15' }>идентификатор заказа</span>
            <img className={ `${ styles.image } mb-15` } src={ doneImage } alt='Done' />
            <span className={ 'text text_type_main-small mb-2' }>Ваш заказ начали готовить</span>
            <span className={ 'text text_type_main-small text_color_inactive mb-30' }>Дождитесь готовности на орбитальной станции</span>
        </section>
    )
}

export default OrderDetails;
