import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../utils/api/main-api";
import { setCookie } from "../../utils/cookies";
import { setUserData } from "./user-slice";

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        registrationRequest: false,
        registrationSuccess: false,
        registrationFiled: false
    },
    reducers: {
        registrationRequest: () => {
            return {
                registrationRequest: true,
                registrationSuccess: false,
                registrationFiled: false
            }
        },
        registrationSuccess: () => {
            return {
                registrationRequest: false,
                registrationSuccess: true,
                registrationFiled: false
            }
        },
        registrationFiled: () => {
            return {
                registrationRequest: false,
                registrationSuccess: false,
                registrationFiled: true
            }
        }
    }
});

export default registrationSlice.reducer;
export const { registrationRequest, registrationSuccess, registrationFiled } = registrationSlice.actions;

export const registration = (name, email, password) => async dispatch => {
    dispatch(registrationRequest())
    try {
        await register(name, email, password)
            .then((data) => {
                setCookie('accessToken', data.accessToken, { expires: 120 })
                localStorage.setItem('refreshToken', data.refreshToken)
                dispatch(registrationSuccess(data))
                dispatch(setUserData(data.user))
            })
    } catch (e) {
        dispatch(registrationFiled())
    }
};
