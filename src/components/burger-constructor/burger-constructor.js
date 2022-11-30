import styles from "../burger-constructor/burger-constructor.module.css";
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from "../constructor-item/constructor-item";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/types";

const BurgerConstructor = ({ data }) => {

    const bunImage = data[0];
    const priceTotal = data.reduce((acc, value) => acc + value.price, 0)

    return (
        <section className={ `${ styles.main } pt-25` }>
            <div className={ styles.content }>
                <ConstructorElement
                    type="top"
                    isLocked={ true }
                    text={ bunImage.name }
                    price={ bunImage.price }
                    thumbnail={ bunImage.image }
                />
                <div className={ styles.container }>
                    { data.map(item =>
                        <ConstructorItem
                            key={ item._id }
                            text={ item.name }
                            price={ item.price }
                            thumbnail={ item.image }
                        />
                    ) }
                </div>


                <ConstructorElement
                    type="bottom"
                    isLocked={ true }
                    text={ bunImage.name }
                    price={ bunImage.price }
                    thumbnail={ bunImage.image }
                />
            </div>

            <div className={ `${ styles.orderInfo } pt-10` }>
                <div className={ `${ styles.priceTotal } pr-10` }>
                    <p className={ 'text text_type_digits-medium' }>{ priceTotal }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType='button' type='primary' size='medium'>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientType)
}
export default BurgerConstructor;
