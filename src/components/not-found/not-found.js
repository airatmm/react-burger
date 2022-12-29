import styles from './not-found.module.css';

function NotFound() {
    return (
        <div className={styles.main}>
            <p className={ `${ styles.title } text text_type_digits-large mb-10 ` }>404</p>
            <p className={'text text_type_main-small'}>Такой страницы не существует</p>
        </div>
    );
}

export default NotFound;
