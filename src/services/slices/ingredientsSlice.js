import { createSlice } from "@reduxjs/toolkit";
import { getAllIngredients } from "../../utils/api";
import { SERVER_ERROR } from "../../utils/constants";

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        items: [],
        itemsRequest: false,
        itemsSuccess: false,
        itemsError: false
    },
    reducers: {
        ingredientsSuccess: (state, action) => {
            return {
                items: action.payload,
                itemsRequest: false,
                itemsSuccess: true,
                itemsError: false
            }
        },
        ingredientsRequest: (state) => {
            return {
                ...state,
                itemsRequest: true,
                itemsSuccess: false,
                itemsError: false
            }
        },
        ingredientsError: (state) => {
            return {
                ...state,
                itemsRequest: false,
                itemsSuccess: false,
                itemsError: true
            }
        },
    }
})

export default ingredientsSlice.reducer
export const { ingredientsSuccess, ingredientsRequest, ingredientsError } = ingredientsSlice.actions

export const getAllData = () => dispatch => {
    dispatch(ingredientsRequest())
    getAllIngredients
        .then((data) => dispatch(ingredientsSuccess(data.data)))
        // .then((data) => dispatch(console.log(data.data)))
        .catch = () => {
        dispatch(ingredientsError())
        console.log(SERVER_ERROR)
    }
}

// export const getAllIngredientsData = () => async dispatch => {
//     dispatch(ingredientsRequest())
//     try {
//         await getAllIngredients
//             .then((data) => dispatch(ingredientsSuccess(data.data)))
//         // .then((data) => dispatch(console.log(data.data)))
//     } catch (e) {
//         dispatch(ingredientsError())
//         dispatch(console.log(SERVER_ERROR))
//     }
// }

