import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import CloseIcon from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({ children, title, onClose }) => {
    const modalRoot = document.getElementById('react-modals');

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <span className={styles.title}>{title}</span>
                {children}
            </div>
            <CloseIcon type='secondary' onClick={onClose} />
        </>,
        modalRoot
    )
}

export default Modal;
