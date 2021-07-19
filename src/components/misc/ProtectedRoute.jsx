import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({
    component: Component,
    authenticated,
    children,
    ...rest
}) =>
    authenticated === true ? (
        <Route {...rest} component={Component}/>
    ) : (
        <Redirect to="/" />
    )

export default ProtectedRoute