import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "../../utils/api/main-api";

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState: {
        forgotPasswordRequest: false,
        forgotPasswordSuccess: false,
        forgotPasswordFiled: false
    },
    reducers: {
        forgotPasswordRequest: () => {
            return {
                forgotPasswordRequest: true,
                forgotPasswordSuccess: false,
                forgotPasswordFiled: false
            }
        },
        forgotPasswordSuccess: () => {
            return {
                forgotPasswordRequest: false,
                forgotPasswordSuccess: true,
                forgotPasswordFiled: false
            }
        },
        forgotPasswordFiled: () => {
            return {
                forgotPasswordRequest: false,
                forgotPasswordSuccess: true,
                forgotPasswordFiled: false
            }
        }
    }
});

export default forgotPasswordSlice.reducer;
export const { forgotPasswordRequest, forgotPasswordSuccess, forgotPasswordFiled } = forgotPasswordSlice.actions;

export const forgot = (email, password) => async dispatch => {
    dispatch(forgotPasswordRequest())
    try {
        await forgotPassword(email)
            .then((data) => {
                dispatch(forgotPasswordSuccess(data))
            })
    } catch (e) {
        dispatch(forgotPasswordFiled())
    }
}
