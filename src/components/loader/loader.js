import styles from './loader.module.css'

const Loader = () => {
    return (
        <div id={ styles['universe'] }>
            <div id={ styles['galaxy'] }>
                <div className={ styles.circle } />
                <div className={ styles.circle2 } />
                <div className={ styles.circle3 } />
                <div id={ styles['orbit<%= i %>'] }>
                    <div id={ styles['pos<%= i %>'] }>
                        <div id={ styles['dot<%= i %>'] } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;
