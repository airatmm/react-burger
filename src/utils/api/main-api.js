import { BASE_URL } from "../constants";
import request from "./api-tools";
import { getCookie } from "../cookies";

export const authorize = (email, password) => request(
    `${ BASE_URL }/auth/login`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(email, password)
    }
);

export const register = (name, email, password) => request(
    `${ BASE_URL }/auth/register`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(name, email, password)
    }
);

export const logout = () => request(
    `${ BASE_URL }/auth/logout`,

    {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        }
    }
);

export const forgotPassword = (email) => request(
    `${ BASE_URL }/password-reset`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(email)
    }
);

export const resetPassword = (password, token) => request(
    `${ BASE_URL }/password-reset/reset`,

    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        //credentials: 'include',
        body: JSON.stringify(password, token)
    }
);


export const getUserInfo = () => request(
    `${ BASE_URL }/auth/user`,

    {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            authorization: getCookie('accessToken'),

        },
        //credentials: 'include',
    }
);

export const editProfile = (name, email, password) => request(
    `${ BASE_URL }/auth/user`,
    {
        method: 'PATCH',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            authorization: getCookie('accessToken'),
        },
        body: JSON.stringify(
            name,
            email,
            password
        ),
        // credentials: 'include',
    })
;
