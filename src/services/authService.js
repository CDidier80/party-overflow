import tokenService from './tokenService'
const BASE_URL = '/api/auth/'

export function getUser() {
    return tokenService.getUserFromToken()
}

export function getTopUsers() {
    return fetch(BASE_URL, { mode: "cors" })
        .then(res => res.json())
}


export function updateUser(formData, id) {
    const requestUrl = `${BASE_URL}${id}`
    const requestOptions = {
        body: JSON.stringify(formData),
        method: "PUT",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }

    const response = fetch(requestUrl, requestOptions, { mode: "cors" })
        .then(res => res.json())

    return response
}

export function signup(user) {
    const requestUrl = `${BASE_URL}signup`
    const requestOptions = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    }

    return fetch(requestUrl, requestOptions)
        .then(res => {
            console.log(res, '<-- response object')
            // use semicolons everywhere or nowhere - keep consistent
            return res.json();
        })
        .then(json => {
            if (json.token) return json;
            console.log(json, '<-- the error')
            throw new Error(`${json.err}`)
        })
        .then(({ token }) => {
            tokenService.setToken(token);
        })
}

export function login(creds) {
    const requestUrl = `${BASE_URL}login`
    const requestOptions = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(creds)
    }

    return fetch(requestUrl, requestOptions)
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Bad Credentials!')
        })
        .then(({ token }) => tokenService.setToken(token))
}

export function logout() {
    tokenService.removeToken()
}

