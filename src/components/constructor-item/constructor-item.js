import styles from './constructor-item.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ConstructorItem = ({ type, isLocked, isAdded, text, price, thumbnail, handleClose }) => {
    return (
        <div className={ `${ styles.content } pt-4 pb-4` }>
            { isAdded && <DragIcon type="primary" /> }
            <ConstructorElement
                type={ type }
                isLocked={ isLocked }
                text={ text }
                price={ price }
                thumbnail={ thumbnail }
                handleClose={ handleClose }
            />
        </div>
    )
}

ConstructorItem.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    isAdded: PropTypes.bool,
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    handleClose: PropTypes.func
}

export default ConstructorItem;
