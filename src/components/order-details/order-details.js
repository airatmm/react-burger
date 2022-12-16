import styles from './order-details.module.css';
import doneImage from '../../images/done-image.svg';
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const OrderDetails = ({number}) => {


    //number={ data.order.number }
    return (
        <section className={ styles.main }>
            <span className={ `${ styles.orderId } text text_type_digits-large mt-30 mb-8` }>{ number }</span>
            <span className={ 'text text_type_main-medium mb-15' }>идентификатор заказа</span>
            <img className={ `${ styles.image } mb-15` } src={ doneImage } alt='Done' />
            <span className={ 'text text_type_main-small mb-2' }>Ваш заказ начали готовить</span>
            <span className={ 'text text_type_main-small text_color_inactive mb-30' }>Дождитесь готовности на орбитальной станции</span>
        </section>
    )
}

OrderDetails.propTypes = {
    number: PropTypes.number
}

export default OrderDetails;
