import styles from './form.module.css';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Form = ({ name, handleSubmit, title, children, buttonText, handleClick }) => {
    return (
        <form className={ styles.form } name={ name } onSubmit={ handleSubmit }>
            <h3 className={ `${ styles.title } pb-6` }>{ title }</h3>
            <fieldset className={ styles.fieldset }>
                { children }
            </fieldset>
            <Button
                onClick={ handleClick }
                htmlType="button"
                type="primary"
                size="medium"
                extraClass="mb-20">
                { buttonText }
            </Button>
        </form>
    )
};

Form.propTypes = {
    name: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    buttonText: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Form;
