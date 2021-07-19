import tokenService from '../services/tokenService'
const BASE_URL = '/api/comments/'

// why do the services use es5 function syntax while
// react files use es6? I'd pick one and stick with it,
// preferably es6 unless you need 'this' binding, but
// haven't come across anything like that yet
export function createComment(postId, comment) {
    const requestUrl = `${BASE_URL}${postId}`
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }
    const response = fetch(requestUrl, requestOptions, { mode: "cors" })
        .then(res => res.json())
    return response
}

export function updateComment(commentId, postId, userId) {
    const requestUrl = `${BASE_URL}${commentId}/${postId}/${userId}`
    const requestOptions = {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }

    const response = fetch(requestUrl, requestOptions, { mode: "cors" })
        .then(res => res.json())
    return response
}

export function deleteComment(postId, commentId) {
    const requestUrl = `${BASE_URL}${postId}/${commentId}`
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    }
    const response = fetch(requestUrl, requestOptions, { mode: "cors" })
        .then(res => res.json())
    return response
}
