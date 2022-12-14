import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from '../services/slices/ingredientsSlice';

const rootReducer = combineReducers({
    ingredients: ingredientsSlice,
});

export const store = configureStore({
    reducer: rootReducer
});
