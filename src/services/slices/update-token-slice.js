import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/cookies";
import { setUserData } from "./user-slice";
import { refreshToken } from "../../utils/api/main-api";

const updateTokenSlice = createSlice({
    name: 'updateToken',
    initialState: {
        updateTokenRequest: false,
        updateTokenSuccess: false,
        updateTokenFiled: false
    },
    reducers: {
        updateTokenRequest: () => {
            return {
                updateTokenRequest: true,
                updateTokenSuccess: false,
                updateTokenFiled: false
            }
        },
        updateTokenSuccess: () => {
            return {
                updateTokenRequest: false,
                updateTokenSuccess: true,
                updateTokenFiled: false
            }
        },
        updateTokenFiled: () => {
            return {
                updateTokenRequest: false,
                updateTokenSuccess: false,
                updateTokenFiled: true
            }
        }
    }
});

export default updateTokenSlice.reducer;
export const { updateTokenRequest, updateTokenSuccess, updateTokenFiled } = updateTokenSlice.actions;

export const updateToken = () => async dispatch => {
    dispatch(updateTokenRequest())
    try {
        await refreshToken()
            .then((data) => {
                console.log(data)
                setCookie('accessToken', data.accessToken, { expires: 120 })
                localStorage.setItem('refreshToken', data.refreshToken)
                dispatch(updateTokenSuccess(data))
                dispatch(setUserData(data.user))
            })
    } catch (e) {
        if (e.message === 'Token is invalid') {
            updateToken()
        } else {
            dispatch(updateTokenFiled())
        }


    }
}
