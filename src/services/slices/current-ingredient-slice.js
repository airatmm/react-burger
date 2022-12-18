import { createSlice } from '@reduxjs/toolkit'

const currentIngredientSlice = createSlice({
    name: 'currentIngredient',
    initialState: null,
    reducers: {
        setCurrentIngredient: (state, action) => {
            return action.payload
        },
        removeCurrentIngredient: () => {
            return null
        }
    }
})

export default currentIngredientSlice.reducer
export const { setCurrentIngredient, removeCurrentIngredient } = currentIngredientSlice.actions
