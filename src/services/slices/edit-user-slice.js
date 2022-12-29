import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "../../utils/api/main-api";
import { setUserData } from "./user-slice";
import { updateToken } from "./update-token-slice";

const editUserSlice = createSlice({
    name: 'editUser',
    initialState: {
        editUserDataRequest: false,
        editUserDataSuccess: false,
        editUserDataFiled: false
    },
    reducers: {
        editUserDataRequest: () => {
            return {
                editUserDataRequest: true,
                editUserDataSuccess: false,
                editUserDataFiled: false
            }
        },
        editUserDataSuccess: () => {
            return {
                editUserDataRequest: false,
                editUserDataSuccess: true,
                editUserDataFiled: false
            }
        },
        editUserDataFiled: () => {
            return {
                editUserDataRequest: false,
                editUserDataSuccess: false,
                editUserDataFiled: true
            }
        }
    }
});

export default editUserSlice.reducer;
export const { editUserDataRequest, editUserDataSuccess, editUserDataFiled } = editUserSlice.actions;

export const editUser = (name, email, password) => async dispatch => {
    dispatch(editUserDataRequest())
    try {
        await editProfile(name, email, password)
            .then((data) => {
                dispatch(editUserDataSuccess())
                dispatch(setUserData(data.user))
            })
    } catch (e) {
        if (e.message === 'jwt expired' || e.message === 'Token is invalid') {
            dispatch(updateToken())
            dispatch(editUser(name, email, password))
        } else {
            dispatch(editUserDataFiled())
        }
    }
}
