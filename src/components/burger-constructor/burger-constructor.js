import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from "../constructor-item/constructor-item";
import { calculationCost } from "../../utils/tools";
import { useDispatch, useSelector } from "react-redux";
import {
    addBun,
    addIngredient,
    movedIngredient,
    removeIngredient
} from "../../services/slices/burger-constructor-slice";
import { orderClear, setOrder } from "../../services/slices/order-slice";
import { useDrop } from "react-dnd";
import EmptyBurgerConstruction from "../empty-burger-constructor/empty-burger-constructor";
import { useCallback, useMemo } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useHistory } from "react-router-dom";

const burgerConstructorState = (store) => store.burgerConstructor;
const isOrderNumberState = (store) => store.order.result;
const isLoggedState = (store) => store.user.isLogged;

const BurgerConstructor = () => {
    const { itemsBurger: data, bun } = useSelector(burgerConstructorState);
    const isOrderNumber = useSelector(isOrderNumberState)
    const isLogged = useSelector(isLoggedState);
    const dispatch = useDispatch();
    const history = useHistory();

    const addToOrder = (ingredient) => {
        dispatch(ingredient.type === 'bun' ? addBun(ingredient) : addIngredient(ingredient))
    }
    const [{ isHover }, dropTarget] = useDrop({
        accept: 'ingredients',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(ingredient) {
            addToOrder(ingredient)
        },
    });

    const moveItem = useCallback(
        (dragIndex, hoverIndex) => {
            dispatch(movedIngredient({ dragIndex: dragIndex, hoverIndex: hoverIndex })
            );
        },
        [dispatch]
    );
    const getOrderNumbers = () => {
        if (isLogged) {
            dispatch(setOrder(data.map(el => el._id)))
        } else {
            const location = {
                pathname: '/login',
                state: { from: '/' },
            }
            history.replace(location)
        }
    }


    const deleteToOrder = (ingredient) => {
        dispatch(removeIngredient(ingredient))
    }

    const totalPrice = useMemo(() => calculationCost(bun, data), [bun, data]);

    return (
        <section className={ `${ styles.main } pt-25` } ref={ dropTarget }>
            <div className={ styles.content }>
                { bun &&
                    <ConstructorItem
                        type="top"
                        isLocked={ true }
                        text={ `${ bun.name } (верх)` }
                        price={ bun.price }
                        thumbnail={ bun.image }
                    /> }

                { data.length !== 0
                    ?
                    <div className={ styles.container }>
                        { data.map((data, ingredient) =>
                            <ConstructorItem
                                key={ data.id }
                                isDraggable
                                text={ data.name }
                                price={ data.price }
                                thumbnail={ data.image }
                                isAdded={ true }
                                handleClose={ () => deleteToOrder(ingredient) }
                                ingredient={ ingredient }
                                moveItem={ moveItem }
                            />
                        ) } </div>
                    :
                    <EmptyBurgerConstruction isFieldHover={ isHover } /> }

                { bun && <ConstructorItem
                    type="bottom"
                    isLocked={ true }
                    text={ `${ bun.name } (низ)` }
                    price={ bun.price }
                    thumbnail={ bun.image }
                /> }
            </div>

            <div className={ `${ styles.orderInfo } pt-10` }>
                <div className={ `${ styles.priceTotal } pr-10` }>
                    <p className={ 'text text_type_digits-medium' }>{ totalPrice }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType='button' type='primary' size='medium' disabled={ (!data || !bun) }
                        onClick={ getOrderNumbers }
                >
                    Оформить заказ
                </Button>
            </div>
            { isOrderNumber &&
                <Modal onClose={ () => dispatch(orderClear()) }>
                    <OrderDetails />
                </Modal>
            }
        </section>

    )
}

export default BurgerConstructor;
