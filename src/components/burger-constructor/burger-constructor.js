import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from "../constructor-item/constructor-item";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/types";
import { useContext } from "react";
import OrderDetails from "../order-details/order-details";
import { IngredientsContext } from "../../contexts/ingredients-context";
import { ModalContext } from "../../contexts/modal-context";

const BurgerConstructor = () => {
    const { orderIngredients } = useContext(IngredientsContext);
    const { fillings: data, buns: bun } = orderIngredients;
    // const ingredientsContext = useContext(IngredientsContext);
    // const { allIngredients, setAllIngredients } = ingredientsContext;
    console.log(data)
    console.log(bun)
    //console.log(orderIngredients)

    const { setModal } = useContext(ModalContext);

    const handleOpenModal = () => {
        setModal({
            visible: true,
            content: <OrderDetails />
        })
    }

    //const bun = data.find(item => item.type === 'bun');
    // if (!bun) {
    //     return "Loading";
    //}

    // const priceTotal = data.reduce((acc, value) => acc + value.price, 0)
    return (
        <section className={ `${ styles.main } pt-25` }>
            <div className={ styles.content }>
                {bun &&
                    <ConstructorItem
                        type="top"
                        isLocked={ true }
                        text={ `${ bun[0].name } (верх)` }
                        price={ bun[0].price }
                        thumbnail={ bun[0].image }
                    />}
                {data ? <div className={ styles.container }>
                    { data.map((item) =>
                        <ConstructorItem
                            key={ item._id }
                            text={ item.name }
                            price={ item.price }
                            thumbnail={ item.image }
                            isAdded={ true }
                        />
                    )
                    }

                </div>  : <h2>Добавьте ингредиенты</h2>}

                {bun && <ConstructorItem
                        type="bottom"
                        isLocked={ true }
                        text={ `${ bun[0].name } (низ)` }
                        price={ bun[0].price }
                        thumbnail={ bun[0].image }
                    />}
            </div>

            <div className={ `${ styles.orderInfo } pt-10` }>
                <div className={ `${ styles.priceTotal } pr-10` }>
                    <p className={ 'text text_type_digits-medium' }>{ 'priceTotal' }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType='button' type='primary' size='medium' onClick={ handleOpenModal }>
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
