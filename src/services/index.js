import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredients-slice';
import burgerConstructorSlice from "./slices/burger-constructor-slice";
import currentIngredientSlice from "./slices/current-ingredient-slice";
import orderSlice from "./slices/order-slice";

const rootReducer = combineReducers({
    ingredients: ingredientsSlice,
    burgerConstructor: burgerConstructorSlice,
    currentIngredient: currentIngredientSlice,
    order: orderSlice,
});

export const store = configureStore({
    reducer: rootReducer
});
