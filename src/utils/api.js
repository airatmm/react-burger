import { BASE_URL } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getAllIngredients = () => {
    return fetch(`${BASE_URL}/ingredients`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(checkResponse);
}
