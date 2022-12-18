import { createSlice } from "@reduxjs/toolkit";

const burgerConstructorSlice = createSlice({
    name: 'constructor',
    initialState: {
        itemsBurger: [],
        bun: null,
    },
    reducers: {
        addIngredient: (state, action) => {
            state.itemsBurger.push({ ...action.payload, id: crypto.randomUUID() })
        },
        addBun: (state, action) => {
            state.bun = action.payload
        },
        removeIngredient: (state, action) => {
            state.itemsBurger.splice(action.payload, 1)
        },
        movedIngredient: (state, action) => {
            const movedItem = state.itemsBurger.splice(action.payload.dragIndex, 1);
            state.itemsBurger.splice(action.payload.hoverIndex, 0, movedItem[0]);
        },
        cleanConstructor: () => {
            return {
                bun: null,
                itemsBurger: [],
            }
        },
    }
})

export default burgerConstructorSlice.reducer
export const { addIngredient, addBun, removeIngredient, cleanConstructor, movedIngredient } = burgerConstructorSlice.actions
