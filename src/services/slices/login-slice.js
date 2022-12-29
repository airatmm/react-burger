import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/cookies";
import { setUserData } from "./user-slice";
import { authorize } from "../../utils/api/main-api";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginRequest: false,
        loginSuccess: false,
        loginFiled: false
    },
    reducers: {
        loginRequest: () => {
            return {
                loginRequest: true,
                loginSuccess: false,
                loginFiled: false,
            }
        },
        loginSuccess: () => {
            return {
                loginRequest: false,
                loginSuccess: true,
                loginFiled: false,
            }
        },
        loginFiled: () => {
            return {
                loginRequest: false,
                loginSuccess: false,
                loginFiled: true,
            }
        },
    }
});

export default loginSlice.reducer;
export const { loginRequest, loginSuccess, loginFiled } = loginSlice.actions

export const login = (email, password) => async dispatch => {
    dispatch(loginRequest())
    try {
        await authorize(email, password)
            .then((data) => {
                setCookie('accessToken', data.accessToken, { expires: 120 })
                localStorage.setItem('refreshToken', data.refreshToken)
                dispatch(loginSuccess(data))
                dispatch(setUserData(data.user))
            })
    } catch (e) {
        dispatch(loginFiled())
    }
}
