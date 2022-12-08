import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from "../constructor-item/constructor-item";
import { useContext } from "react";
import OrderDetails from "../order-details/order-details";
import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";
import { getOrder } from "../../utils/api";
import { calculationCost } from "../../utils/tools";

const BurgerConstructor = () => {
    const { orderIngredients, setOrderIngredients } = useContext(IngredientsContext);
    const { fillings: data, buns: bun } = orderIngredients;

    const { setModal } = useContext(ModalContext);

    const getOrderNumbers = () => {
        getOrder(data.map(el => el._id))
            .then((data) => {
                setModal({
                    visible: true,
                    content: <OrderDetails number={ data.order.number } />
                })
            })
            .catch((err) => {
                (console.log(err))
            })
    }

    const deleteToOrder = (ingredient) => {
        setOrderIngredients({
            ...orderIngredients,
        fillings: [...orderIngredients.fillings.filter(i => i._id !== ingredient._id) ]
        })
    }

    return (
        <section className={ `${ styles.main } pt-25` }>
            <div className={ styles.content }>
                { bun &&
                    <ConstructorItem
                        type="top"
                        isLocked={ true }
                        text={ `${ bun[0].name } (верх)` }
                        price={ bun[0].price }
                        thumbnail={ bun[0].image }
                    /> }
                { data.length !== 0 ? <div className={ styles.container }>
                    { data.map((item) =>
                        <ConstructorItem
                            key={ item._id }
                            text={ item.name }
                            price={ item.price }
                            thumbnail={ item.image }
                            isAdded={ true }
                            handleClose={ () => deleteToOrder(item) }
                        />
                    )
                    }

                </div> : <h2>Добавьте ингредиенты</h2> }

                { bun && <ConstructorItem
                    type="bottom"
                    isLocked={ true }
                    text={ `${ bun[0].name } (низ)` }
                    price={ bun[0].price }
                    thumbnail={ bun[0].image }
                /> }
            </div>

            <div className={ `${ styles.orderInfo } pt-10` }>
                <div className={ `${ styles.priceTotal } pr-10` }>
                    <p className={ 'text text_type_digits-medium' }>{ calculationCost(bun, data) }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType='button' type='primary' size='medium' onClick={ getOrderNumbers }>
                    Оформить заказ
                </Button>

            </div>
        </section>

    )
}

export default BurgerConstructor;
