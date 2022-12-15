import { BASE_URL } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${ res.status }`);
};

const request = (url, options) => {
    return fetch(url, options).then(checkResponse)
}

export const getAllIngredients = request(
    `${ BASE_URL }/ingredients`,

    {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        }
    }
);

export const setOrderRequest = (ingredients) => request(
    `${ BASE_URL }/orders`,

    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
    }
);
