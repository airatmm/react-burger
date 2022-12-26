import { AUTH_URL } from "../constants";
import request from "./api-tools";

export const authorize = (email, password) => request(
    `${ AUTH_URL }/login`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(email, password),
    }
);

export const register = (name, email, password) => request(
    `${ AUTH_URL }/register`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(name, email, password),
    }
);

export const logout = () => request(
    `${ AUTH_URL }/logout`,

    {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        }
    }
);

export const forgotPassword = (email) => request(
    `${ AUTH_URL }/password-reset.`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(email),
    }
);


// export const editProfile = (name, email) => {
//     return fetch(`${BASE_URL}/users/me`, {
//         method: 'PATCH',
//         headers: {
//             Accept: "application/json",
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(
//             name,
//             email
//         ),
//         credentials: 'include',
//     })
//         .then(checkResponse);
// }
