import { createSlice } from "@reduxjs/toolkit";

const constructorSlice = createSlice({
    name: 'constructor',
    initialState: {
        bun: null,
        items: [],
    },
    reducers: {
        addIngredient: (state, action) => {
            return {
                ...state,
                items: ({ ...action.payload, id: crypto.randomUUID() })
            }
            //state.items.push({ ...action.payload, id: crypto.randomUUID() });
            //state.items.push({ ...action.payload, id: crypto.randomUUID() })

        },
        addBun: (state, action) => {
            return {
                ...state,
                bun: action.payload,
            }
            // state.bun = action.payload;
        },
        removeIngredient: (state, action) => {
            state.items.filter(item => item.id !== action.payload.id);
        },
        cleanConstructor: (state) => {
            return {
                bun: null,
                items: [],
            }
        },
    }
})

export default constructorSlice.reducer
export const { addIngredient, addBun, removeIngredient, cleanConstructor } = constructorSlice.actions
