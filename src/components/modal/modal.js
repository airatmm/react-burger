import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("root");

const Modal = ({ children, title, onClose }) => {

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={ onClose }>
                <div className={ `${ styles.modal } ` }>
                    <span className={ `text text_type_main-large` }>{ title }</span>
                    <div className={ styles.closeIcon }>
                        <CloseIcon type='secondary' onClose={ onClose } />
                    </div>
                    { children }
                </div>
            </ModalOverlay>
        </>,
        modalRoot
    );
}

export default Modal;
