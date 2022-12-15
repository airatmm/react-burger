import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredients-slice';
import constructorSlice from "./slices/constructor-slice";

const rootReducer = combineReducers({
    ingredients: ingredientsSlice,
    constructor: constructorSlice,
});

export const store = configureStore({
    reducer: rootReducer
});
