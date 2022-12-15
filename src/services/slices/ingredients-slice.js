import { createSlice } from "@reduxjs/toolkit";
import { getAllIngredients } from "../../utils/api";
// import { SERVER_ERROR } from "../../utils/constants";

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        items: [],
        itemsRequest: false,
        itemsSuccess: false,
        itemsFiled: false
    },
    reducers: {
        ingredientsSuccess: (state, action) => {
            return {
                ...state,
                items: action.payload,
                itemsRequest: false,
                itemsSuccess: true,
                itemsFiled: false
            }
        },
        ingredientsRequest: (state) => {
            return {
                ...state,
                itemsRequest: true,
                itemsSuccess: false,
                itemsFiled: false
            }
        },
        ingredientsError: (state) => {
            return {
                ...state,
                itemsRequest: false,
                itemsSuccess: false,
                itemsFiled: true
            }
        },
    }
})

export default ingredientsSlice.reducer
export const { ingredientsSuccess, ingredientsRequest, ingredientsError } = ingredientsSlice.actions

export const getAllIngredientsData = () => async dispatch => {
    dispatch(ingredientsRequest())
    try {
        await getAllIngredients
            .then((data) => dispatch(ingredientsSuccess(data.data)))
    } catch (e) {
        dispatch(ingredientsError())
        // console.log(SERVER_ERROR)
    }
}

