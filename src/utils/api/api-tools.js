const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    // return Promise.reject(`Ошибка ${ res.status }`)
    return res.json().then(err => Promise.reject(err))
};

const request = (url, options) => {
    return fetch(url, options).then(checkResponse)
}

export default request;
