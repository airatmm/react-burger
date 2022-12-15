import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredients-slice';
import constructorSlice from "./slices/constructor-slice";
import currentIngredientSlice from "./slices/current-ingredient-slice";

const rootReducer = combineReducers({
    ingredients: ingredientsSlice,
    constructor: constructorSlice,
    currentIngredient: currentIngredientSlice,
});

export const store = configureStore({
    reducer: rootReducer
});
