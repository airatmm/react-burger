import { BASE_URL } from "../constants";
import request from "./api-tools";

export const getAllIngredients = () => request(
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
