import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredients-slice';
import burgerConstructorSlice from "./slices/burger-constructor-slice";
import currentIngredientSlice from "./slices/current-ingredient-slice";
import orderSlice from "./slices/order-slice";
import userSlice from "./slices/user-slice";
import loginSlice from "./slices/login-slice";
import registrationSlice from "./slices/registration-slice";
import forgotPasswordSlice from "./slices/forgot-password-slice";
import resetPasswordSlice from "./slices/reset-password-slice";

const rootReducer = combineReducers({
    ingredients: ingredientsSlice,
    burgerConstructor: burgerConstructorSlice,
    currentIngredient: currentIngredientSlice,
    order: orderSlice,
    user: userSlice,
    registration: registrationSlice,
    login: loginSlice,
    forgot: forgotPasswordSlice,
    reset: resetPasswordSlice,
});

export const store = configureStore({
    reducer: rootReducer
});
