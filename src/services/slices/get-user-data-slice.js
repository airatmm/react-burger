import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../utils/api/main-api";
import { setUserData } from "./user-slice";

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
        dispatch(getUserDataFiled())
    }
}
