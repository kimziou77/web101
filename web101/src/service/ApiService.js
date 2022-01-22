import {API_BASE_URL} from "../api-config";

export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    if (request) {
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
        .then((response) =>{
            if (response.status === 403) {
                window.location.href = "/login"; // redirect
            }
            return response.json().then((json) => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        })
        .catch((error) => {
            console.log(error.status);
            if (error.status === 403) {
                window.location.href = "/login"; // redirect
            }
            return Promise.reject(error);
        });
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO).then((response) => {
        if (response.token) {
            alert(response.token)
            window.location.href = "/";
        }
    });
}