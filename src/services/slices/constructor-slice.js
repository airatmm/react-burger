import { createSlice } from "@reduxjs/toolkit";

const constructorSlice = createSlice({
    name: 'constructor',
    initialState: {
        itemsBurger: [],
        bun: null,
    },
    reducers: {
        addIngredient: (state, action) => {
            console.log(state)
            return {
                ...state,
                itemsBurger:  [{ ...action.payload, id: crypto.randomUUID() }]
                // itemsBurger:  [ { ...action.payload, id: crypto.randomUUID() }]
                //, state.itemsBurger].map((item) => ({ ...action.payload, id: crypto.randomUUID()}))

                //itemsBurger: ({ ...action.payload, id: crypto.randomUUID() })

            //...orderIngredients,
            // [...orderIngredients.fillings, ingredient].map((item) => ({ ...item, id: crypto.randomUUID()}))
            //state.items.push({ ...action.payload, id: crypto.randomUUID() });
            //state.items.push({ ...action.payload, id: crypto.randomUUID() })
            }
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
                itemsBurger: [],
            }
        },
    }
})

export default constructorSlice.reducer
export const { addIngredient, addBun, removeIngredient, cleanConstructor } = constructorSlice.actions
