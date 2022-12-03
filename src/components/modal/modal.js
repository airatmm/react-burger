import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useCallback, useEffect } from "react";
import { modalProps } from "../../utils/types";

const modalRoot = document.getElementById("root-modals");

const Modal = ({ children, title, onClose }) => {

    const handleEscClose = useCallback(({ key }) => {
        if (key === 'Escape') {
            onClose()
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    }, [handleEscClose]);

    return createPortal(
        <>
            <ModalOverlay onClose={ onClose }>
                <div className={ `${ styles.modal } `} onClick={(e) =>e.stopPropagation() }>
                    <span className={ `text text_type_main-large mt-10 ml-10` }>{ title }</span>
                    <div className={ styles.closeIcon } onClick={ onClose }>
                        <CloseIcon type='secondary'  />
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
    onClose: modalProps.onClose,
    title: modalProps.title,
}

export default Modal;
