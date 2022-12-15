import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from "../constructor-item/constructor-item";
// import { IngredientsContext } from "../../contexts/ingredients-context";
//import { getOrder } from "../../utils/api";
import { calculationCost } from "../../utils/tools";
import { useDispatch, useSelector } from "react-redux";
import { removeIngredient } from "../../services/slices/constructor-slice";
import { setOrder } from "../../services/slices/order-slice";
// import { initialState } from "../constructor/constructor";

const BurgerConstructor = () => {
    const { itemsBurger: data, bun } = useSelector(store => store.constructor);
    const dispatch = useDispatch();
    console.log(data)
    //const { addBuns } = constructorSlice.actions;
    // const { orderIngredients, setOrderIngredients } = useContext(IngredientsContext);
    // const { fillings: data, buns: bun } = orderIngredients;
    //const { setModal } = useContext(ModalContext);

    // const getOrderNumbers = () => dispatch => {
    //     dispatch(setOrder(data.map(el => el._id)))
    //     setModal({
    //         visible: true,
    //         content: <OrderDetails number={ data.order.number } />
    //     })
    //
    // }

    const deleteToOrder = (ingredient) => {
        dispatch(removeIngredient(ingredient))
        // setOrderIngredients({
        //     ...orderIngredients,
        //     fillings: [...orderIngredients.fillings.filter(i => i.id !== ingredient.id)]
        // })
    }

    return (
        <section className={ `${ styles.main } pt-25` }>
            <div className={ styles.content }>
                { bun &&
                    <ConstructorItem
                        type="top"
                        isLocked={ true }
                        text={ `${ bun.name } (верх)` }
                        price={ bun.price }
                        thumbnail={ bun.image }
                    /> }
                { data ? <div className={ styles.container }>
                    { data.map((data) =>
                        <ConstructorItem
                            key={ crypto.randomUUID() }
                            text={ data.name }
                            price={ data.price }
                            thumbnail={ data.image }
                            isAdded={ true }
                            handleClose={ () => deleteToOrder(data) }
                        />
                    )
                    }

                </div> : <h2>Добавьте ингредиенты</h2> }

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
                <Button htmlType='button' type='primary' size='medium'
                        //onClick={ getOrderNumbers }
                >
                    Оформить заказ
                </Button>

            </div>
        </section>

    )
}

export default BurgerConstructor;
