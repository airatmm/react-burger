import { createContext } from 'react';

const initialState = {
    allIngredients: [],
    orderIngredients: {}
};

export const IngredientsContext = createContext(initialState);

