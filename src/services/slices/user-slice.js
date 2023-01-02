import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        isLogged: false,
    },
    reducers: {
        setUserData: (state, action) => {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                isLogged: true,
            }
        },
        logoutUser: () => {
            return {
                name: '',
                email: '',
                isLogged: false,
            }
        }
    }
})
export default userSlice.reducer;
export const { setUserData, logoutUser } = userSlice.actions;
