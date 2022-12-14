import PropTypes from "prop-types";

// quote: если мы не проверяем существование просов в коде, то они по дефолту считаюся обязательными
export const ingredientType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string
});


export const modalProps = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
};

