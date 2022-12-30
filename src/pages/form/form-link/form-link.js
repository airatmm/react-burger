import styles from './form-link.module.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FormLink = ({ spanText, url, linkText }) => {
    return (
        <span className='text text_type_main-default text_color_inactive'>{ spanText }
            <Link to={ url } className={ `${ styles.link } text text_type_main-default` }>{ linkText }</Link>
        </span>
    )
};

Link.propTypes = {
    spanText: PropTypes.string,
    url: PropTypes.string,
    linkText: PropTypes.string
}
export default FormLink;
