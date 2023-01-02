import { createSlice } from "@reduxjs/toolkit";
import { signout } from "../../utils/api/main-api";
import { deleteCookie } from "../../utils/cookies";
import { logoutUser } from "./user-slice";

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        logoutRequest: false,
        logoutSuccess: false,
        logoutFiled: false
    },
    reducers: {
        logoutRequest: () => {
            return {
                logoutRequest: true,
                logoutSuccess: false,
                logoutFiled: false
            }
        },
        logoutSuccess: () => {
            return {
                logoutRequest: false,
                logoutSuccess: true,
                logoutFiled: false
            }
        },
        logoutFiled: () => {
            return {
                logoutRequest: false,
                logoutSuccess: false,
                logoutFiled: true
            }
        }
    }
});

export default logoutSlice.reducer;
export const { logoutRequest, logoutSuccess, logoutFiled } = logoutSlice.actions;

export const logout = () => async dispatch => {
    dispatch(logoutRequest())
    try {
        await signout()
            .then((data) => {
                localStorage.removeItem('refreshToken')
                deleteCookie('accessToken')
                dispatch(logoutSuccess(data))
                dispatch(logoutUser())
            })
    } catch (e) {
        dispatch(logoutFiled())
    }
}
