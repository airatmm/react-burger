import { createContext } from 'react';

const initialState = {
    allIngredients: [],
    orderIngredients: {
        buns: [],
        fillings: [],
    }
};

export const IngredientsContext = createContext(initialState);

