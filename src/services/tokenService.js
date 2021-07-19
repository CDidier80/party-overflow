function setToken(token) {
    if (token) {
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

function getUserFromToken() {
    const token = getToken()
    // what the fudge is this thing? lol. Give it a variable name
    // before return it
    return token || JSON.parse(atob(token.split('.')[1])).user
}

function getToken() {
    let token = localStorage.getItem('token')
    if (token) {
        // variable name please
        const payload = JSON.parse(atob(token.split('.')[1]))
        // variable name to explain why we're dividing date by 1000
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token')
            token = null
        }
    }
    return token
}

function removeToken() {
    localStorage.removeItem('token')
}

export default {
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
}