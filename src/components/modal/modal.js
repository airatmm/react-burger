import styles from './modal.module.css';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import { modalProps } from "../../utils/types";
import { ModalContext } from '../../contexts/modal-context';

const modalRoot = document.getElementById("root-modals");

const Modal = ({ children }) => {
    const { setModal } = useContext(ModalContext);

    const handleClose = () => {
        setModal({
            visible: false,
            title: '',
            content: null
        })
    }
    const handleEscClose = ({ key }) => {
        if (key === 'Escape') {
            handleClose()
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    });

    return createPortal(
        <>
            <ModalOverlay onClose={ handleClose }>
                <div className={ `${ styles.modal } ` } onClick={ (e) => e.stopPropagation() }>
                    <div className={ styles.closeIcon } onClick={ handleClose }>
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
    children: modalProps.children
}

export default Modal;
