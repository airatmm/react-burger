import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../../utils/api/main-api";

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: {
        resetPasswordRequest: false,
        resetPasswordSuccess: false,
        resetPasswordFiled: false
    },
    reducers: {
        resetPasswordRequest: () => {
            return {
                resetPasswordRequest: true,
                resetPasswordSuccess: false,
                resetPasswordFiled: false
            }
        },
        resetPasswordSuccess: () => {
            return {
                resetPasswordRequest: false,
                resetPasswordSuccess: true,
                resetPasswordFiled: false
            }
        },
        resetPasswordFiled: () => {
            return {
                resetPasswordRequest: false,
                resetPasswordSuccess: false,
                resetPasswordFiled: true
            }
        }
    }
});

export default resetPasswordSlice.reducer;
export const { resetPasswordRequest, resetPasswordSuccess, resetPasswordFiled } = resetPasswordSlice.actions;

export const reset = (password, token) => async dispatch => {
    dispatch(resetPasswordRequest())
    try {
        await resetPassword(password, token)
            .then((data) => {
                dispatch(resetPasswordSuccess(data))
            })
    } catch (e) {
        dispatch(resetPasswordFiled())
    }
};
