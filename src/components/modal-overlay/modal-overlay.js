import {useCallback, useEffect} from "react";
import styles from './modal-overlay.module.css';

const ModalOverlay = ({ children, onClose }) => {

    const handleEscClose = useCallback(({ key }) => {
        if (key === 'Escape') {
            onClose()
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    }, [handleEscClose]);

    return (
        <div className={ styles.overlay } onClick={ onClose }>
            { children }
        </div>

    )
}

export default ModalOverlay;
