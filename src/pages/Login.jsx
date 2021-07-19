import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Assets
import coder from '../assets/coder.json'

//Components
import Animation from '../components/Lottie/Animation'

//Services
import { login } from '../services/authService'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [loginErr, setLoginErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login({ email: email, password: password })
            // as soon as you see the word "or" in a function it's likely
            // that the function needs to be divided into 2 functions.
            // Try to give each function one responsibility.
            // Move the logic that decides whether to sign up or log in
            // to the body of this function. Then, call either signUp() or
            // login()
            props.handleSignupOrLogin()
            props.history.push('/home')
        } catch (error) {
            alert('Invalid Credentials')
            throw error
        }
    }

    const handleEmail = (e) => setEmail(e.target.value)

    const handlePassword = (e) => setPassword(e.target.value)

    return (
        <div className="signup-page">
            <div className='left-container'>
                <div className='form-container'>
                    <div className="title-container">
                        <h1>Login</h1>
                        <h3>Please enter your login information</h3>
                    </div>
                    <form name="register" onSubmit={handleSubmit}>
                        { /* consider breaking these long lines - a bit hard to read */ }
                        <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmail}></input>
                        <input name="password" type="password" placeholder="Password" value={password} onChange={handlePassword}></input>
                        <button type="submit">SIGN IN</button>
                    </form>
                    <div className="redirect-container">
                        <p>Already have an account?</p>
                        <Link className="redirect-link" to="/register">
                            <p>Sign Up</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <Animation animData={coder}/>
            </div>
        </div>
    )
}

export default Login


