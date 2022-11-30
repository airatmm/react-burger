import styles from './constructor-item.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const ConstructorItem = ({ type, isLocked, text, price, thumbnail }) => {
    return (
        <div className={ `${ styles.content } pt-4 pb-4` }>
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

// ConstructorItem.propTypes = {
//     type: PropTypes.string,
//     isLocked: PropTypes.bool,
//     text: PropTypes.string,
//     price: PropTypes.number,
//     thumbnail: PropTypes.string,
// }

ConstructorItem.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    isLocked: PropTypes.bool,
    text: PropTypes.string,
    thumbnail: PropTypes.string,
}

export default ConstructorItem;
