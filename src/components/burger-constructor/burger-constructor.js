import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from "../constructor-item/constructor-item";
// import { IngredientsContext } from "../../contexts/ingredients-context";
//import { getOrder } from "../../utils/api";
import { calculationCost } from "../../utils/tools";
import { useDispatch, useSelector } from "react-redux";
import { addBun, addIngredient, removeIngredient } from "../../services/slices/burger-constructor-slice";
import { setOrder } from "../../services/slices/order-slice";
import { useDrop } from "react-dnd";
import EmptyBurgerConstruction from "./empty-burger-constructor/empty-burger-constructor";
import { useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
// import { initialState } from "../constructor/constructor";

const BurgerConstructor = () => {
    const { itemsBurger: data, bun } = useSelector(store => store.burgerConstructor);
    const isOrderSuccess = useSelector(store => store.order.orderSuccess)
    console.log(isOrderSuccess)
    const dispatch = useDispatch();
    console.log(data)
    const [isModal, setIsModal] = useState(false);

    const addToOrder = (ingredient) => {
        //console.log(ingredient)
        dispatch(ingredient.type === 'bun' ? addBun(ingredient) : addIngredient(ingredient))
    }
    const [{ isHover }, dropTarget] = useDrop({
        accept: 'ingredients',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(ingredient) {
            //console.log(ingredient)
            addToOrder(ingredient)
        },
    });

    //const { addBuns } = burgerConstructorSlice.actions;
    // const { orderIngredients, setOrderIngredients } = useContext(IngredientsContext);
    // const { fillings: data, buns: bun } = orderIngredients;
    //const { setModal } = useContext(ModalContext);

    const getOrderNumbers = ()  => {
        dispatch(setOrder(data.map(el => el._id)))
        setIsModal(true)

        // setModal({
        //     visible: true,
        //     content: <OrderDetails number={ data.order.number } />
        // })

    }

    const deleteToOrder = (ingredient) => {
        dispatch(removeIngredient(ingredient))
        // setOrderIngredients({
        //     ...orderIngredients,
        //     fillings: [...orderIngredients.fillings.filter(i => i.id !== ingredient.id)]
        // })
    }

    const { order: number } = useSelector(store => store.order.result)
    //console.log(order)

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
                                //key={ crypto.randomUUID() }
                                text={ data.name }
                                price={ data.price }
                                thumbnail={ data.image }
                                isAdded={ true }
                                handleClose={ () => deleteToOrder(ingredient) }
                                ingredient={ ingredient }
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
                    <OrderDetails number={number}/>
                </Modal>
            }
        </section>

    )
}

export default BurgerConstructor;
