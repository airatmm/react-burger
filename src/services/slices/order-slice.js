import { createSlice } from "@reduxjs/toolkit";
import { setOrderRequest } from "../../utils/api";
import { cleanConstructor } from "./burger-constructor-slice";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        result: {},
        itemsRequest: false,
        itemsSuccess: false,
        itemsFiled: false
    },
    reducers: {
        orderRequest: (state) => {
            return {
                ...state,
                itemsRequest: true,
                itemsSuccess: false,
                itemsFiled: false
            }
        },
        orderSuccess: (state, action) => {
            return {
                ...state,
                result: action.payload,
                itemsRequest: false,
                itemsSuccess: true,
                itemsFiled: false
            }
        },
        orderError: (state) => {
            return {
                ...state,
                itemsRequest: false,
                itemsSuccess: false,
                itemsFiled: true
            }
        },
    }
})

export default orderSlice.reducer
export const { orderSuccess, orderRequest, orderError } = orderSlice.actions

export const setOrder = (ingredients) => async dispatch => {
    dispatch(orderRequest())
    try {
        await setOrderRequest(ingredients)
            .then((data) => {
                dispatch(orderSuccess(data))
                dispatch(cleanConstructor())
            })
    } catch (e) {
        dispatch(orderError())
    }
}


