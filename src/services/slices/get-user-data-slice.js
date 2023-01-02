import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../utils/api/main-api";
import { setUserData } from "./user-slice";
import { updateToken } from "./update-token-slice";

const getUserDataSlice = createSlice({
    name: 'getUserData',
    initialState: {
        getUserDataRequest: false,
        getUserDataSuccess: false,
        getUserDataFiled: false
    },
    reducers: {
        getUserDataRequest: () => {
            return {
                getUserDataRequest: true,
                getUserDataSuccess: false,
                getUserDataFiled: false
            }
        },
        getUserDataSuccess: () => {
            return {
                getUserDataRequest: false,
                getUserDataSuccess: true,
                getUserDataFiled: false
            }
        },
        getUserDataFiled: () => {
            return {
                getUserDataRequest: false,
                getUserDataSuccess: true,
                getUserDataFiled: false
            }
        }
    }
});
export default getUserDataSlice.reducer;
export const { getUserDataRequest, getUserDataSuccess, getUserDataFiled } = getUserDataSlice.actions;

export const getUserData = () => async dispatch => {
    dispatch(getUserDataRequest())
    try {
        await getUserInfo()
            .then((data) => {
                dispatch(getUserDataSuccess())
                dispatch(setUserData(data.user))
            })
    } catch (e) {
        if (e.message === 'You should be authorised' || e.message === 'jwt expired' || e.message === 'Token is invalid') {
            await dispatch(updateToken())
            dispatch(getUserData())
        } else {
            dispatch(getUserDataFiled())
        }
    }
}
