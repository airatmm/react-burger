import styles from './constructor-item.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { movedIngredient } from "../../services/slices/burger-constructor-slice";
//import { useDrag } from "react-dnd";

const ConstructorItem = ({ ingredient, type, isLocked, isAdded, text, price, thumbnail, handleClose, isDraggable, moveItem }) => {
    // const [{ isDragging }, drag] = useDrag({
    //     type: 'constructorIngredients',
    //     item: { ingredient },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });
    const ref = useRef();
    const dispatch = useDispatch();
    //console.log(ingredient)
    const [{handlerId}, drop] = useDrop({
        accept: 'constructorIngredient',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.ingredient
            const hoverIndex = ingredient

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveItem(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.ingredient = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'constructorIngredient',
        item: { ingredient },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    isDraggable && drag(drop(ref));

    const opacity = isDragging ? 0.5 : 1;

    return (
        <div ref={ref}  className={ `${ styles.content } mt-4 mb-4 ${ isDraggable ? styles.moved : '' }` } style={ { opacity }} >
            { isDraggable && <DragIcon type="primary" /> }
            <ConstructorElement
                type={ type }
                isLocked={ isLocked }
                text={ text }
                price={ price }
                thumbnail={ thumbnail }
                handleClose={ handleClose }
            />
        </div>
    )
}

ConstructorItem.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    isAdded: PropTypes.bool,
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    handleClose: PropTypes.func
}

export default ConstructorItem;
