import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import { modalProps } from "../../utils/types";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("root-modals");

const Modal = ({ children, onClose }) => {
    const handleEscClose = ({ key }) => {
        if (key === 'Escape') {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    });

    return createPortal(
        <>
            <ModalOverlay onClose={ onClose }>
                <div className={ `${ styles.modal } ` } onClick={ (e) => e.stopPropagation() }>
                    <div className={ styles.closeIcon } onClick={ onClose }>
                        <CloseIcon type='secondary' />
                    </div>
                    { children }
                </div>
            </ModalOverlay>
        </>,
        modalRoot
    );
}

Modal.propTypes = {
    children: modalProps.children,
    onClose: PropTypes.func.isRequired,
}

export default Modal;
