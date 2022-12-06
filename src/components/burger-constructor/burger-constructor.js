import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from "../constructor-item/constructor-item";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/types";
import { useContext, useState } from "react";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { IngredientsContext } from "../../contexts/ingredients-context";

const BurgerConstructor = () => {
    const { allIngredients: data } = useContext(IngredientsContext);

    // console.log(data)
    // const [addIngredients, setAddIngredients] = useState([]);

    const [visible, setVisible] = useState(false)

    const handleOpenModal = () => {
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
    }

    // const bun = {
    //     name: "Краторная булка N-200i",
    //     price: 1255,
    //     image: "https://code.s3.yandex.net/react/code/bun-02.png",
    // }
    const bun = data.find(item => item.type === 'bun');
    if (!bun) {
        return "Loading";
    }

    const priceTotal = data.reduce((acc, value) => acc + value.price, 0)
    //const priceTotal = 5000;
    return (
        <section className={ `${ styles.main } pt-25` }>
            <div className={ styles.content }>
                <ConstructorItem
                    type="top"
                    isLocked={ true }
                    text={ `${ bun.name } (верх)` }
                    price={ bun.price }
                    thumbnail={ bun.image }
                />
                <div className={ styles.container }>
                    { data.filter(item => item.type !== 'bun').slice(0, 4).map((item) =>
                        <ConstructorItem
                            key={ item._id }
                            text={ item.name }
                            price={ item.price }
                            thumbnail={ item.image }
                            isAdded={ true }
                        />
                    ) }
                </div>

                <ConstructorItem
                    type="bottom"
                    isLocked={ true }
                    text={ `${ bun.name } (низ)` }
                    price={ bun.price }
                    thumbnail={ bun.image }
                />
            </div>

            <div className={ `${ styles.orderInfo } pt-10` }>
                <div className={ `${ styles.priceTotal } pr-10` }>
                    <p className={ 'text text_type_digits-medium' }>{ priceTotal }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType='button' type='primary' size='medium' onClick={ handleOpenModal }>
                    Оформить заказ
                </Button>
                { visible && <Modal onClose={ handleCloseModal }>
                    <OrderDetails />
                </Modal> }
            </div>
        </section>

    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientType)
}
export default BurgerConstructor;
