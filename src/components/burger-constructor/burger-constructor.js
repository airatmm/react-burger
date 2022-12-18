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
import { setOrder } from "../../services/slices/order-slice";
import { useDrop } from "react-dnd";
import EmptyBurgerConstruction from "../empty-burger-constructor/empty-burger-constructor";
import { useCallback, useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {
    const { itemsBurger: data, bun } = useSelector(store => store.burgerConstructor);
    const isOrderSuccess = useSelector(store => store.order.itemsSuccess)
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);

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

    const getOrderNumbers = ()  => {
        dispatch(setOrder(data.map(el => el._id)))
        setIsModal(true)
    }

    const deleteToOrder = (ingredient) => {
        dispatch(removeIngredient(ingredient))
    }

    const moveItem = useCallback(
        (dragIndex, hoverIndex) => {
            dispatch(movedIngredient({ dragIndex: dragIndex, hoverIndex: hoverIndex })
            );
        },
        [dispatch]
    );
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
                                moveItem={moveItem}
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
                    <p className={ 'text text_type_digits-medium' }>{ calculationCost(bun, data) }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType='button' type='primary' size='medium' disabled={ (!data || !bun) }
                    onClick={ getOrderNumbers }
                >
                    Оформить заказ
                </Button>
            </div>
            {isModal && isOrderSuccess &&
                <Modal onClose={() => setIsModal(false)}>
                    <OrderDetails />
                </Modal>
            }
        </section>

    )
}

export default BurgerConstructor;
