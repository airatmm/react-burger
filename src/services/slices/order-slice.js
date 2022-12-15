import { createSlice } from "@reduxjs/toolkit";
import { setOrderRequest } from "../../utils/api";
import { cleanConstructor } from "./constructor-slice";
// import { SERVER_ERROR } from "../../utils/constants";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        items: [],
        itemsRequest: false,
        itemsSuccess: false,
        itemsFiled: false
    },
    reducers: {
        orderSuccess: (state, action) => {
            return {
                ...state,
                items: action.payload,
                itemsRequest: false,
                itemsSuccess: true,
                itemsFiled: false
            }
        },
        orderRequest: (state) => {
            return {
                ...state,
                itemsRequest: true,
                itemsSuccess: false,
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

export const setOrder = () => async dispatch => {
    dispatch(orderRequest())
    try {
        await setOrderRequest
            .then((data) => {
                dispatch(orderSuccess(data))
                dispatch(cleanConstructor())
            })

        // .then((data) => dispatch(console.log(data.data)))
    } catch (e) {
        dispatch(orderError())
        // console.log(SERVER_ERROR)
    }
}



