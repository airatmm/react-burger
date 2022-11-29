import styles from './constructor-item.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorItem = ({ type, isLocked, text, price, thumbnail }) => {
    return (
        <div className={ `${styles.content} pt-4 pb-4` }>
            <DragIcon type="primary" />
            <ConstructorElement
                type={ type }
                isLocked={ isLocked }
                text={ text }
                price={ price }
                thumbnail={ thumbnail }
            />
        </div>
    )
}

export default ConstructorItem;
