import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";
import { modalProps } from "../../utils/types";

const ModalOverlay = ({ children, onClose }) => {

    return (
        <div className={ styles.overlay} onClick={onClose}>
            { children }
        </div>

    )
}

ModalOverlay.propTypes = {
    children: modalProps.children,
    onClose: modalProps.onClose,
}

export default ModalOverlay;
