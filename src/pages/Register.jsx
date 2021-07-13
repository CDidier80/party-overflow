import React, { useState } from 'react'
import '../styles/Register.css'

//Services
import { signup } from '../services/authService'

const Register = (props) => {

    const [name, setName] = useState('')
    const [handle, setHandle] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('https://i.imgur.com/Wdyo4ow.png')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            handle: handle,
            email: email,
            password: password,
            passwordConf: password,
            avatar: avatar,
        }
        try {
            await signup(formData)
            props.handleSignupOrLogin()
            props.history.push('/home')
        } catch (error) {
            alert('Invalid Credentials')
            throw error
        }
    }


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleHandle = (e) => {
        setHandle(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAvatar = (e) => {
        setAvatar(e.target.value)
    }

    return (
        <div className="signup-page">
            <div className='left-container'>
                <div className='form-container'>
                    <div className="title-container">
                        <h1>Create an Account</h1>
                        <h3>Subheader text</h3>
                    </div>
                    <form name="register" onSubmit={handleSubmit}>
                        <input placeholder="name" onChange={handleName} value={name}></input>
                        <input placeholder="handle" onChange={handleHandle} value={handle}></input>
                        <input placeholder="email" onChange={handleEmail} value={email}></input>
                        <input placeholder="password" onChange={handlePassword} value={password}></input>
                        <select form="register" onChange={handleAvatar} value={avatar}>
                            <option value='https://i.imgur.com/Wdyo4ow.png'>Cat</option>
                            <option value='https://i.imgur.com/74imy42.png'>Bear</option>
                            <option value='https://i.imgur.com/51nVPDR.png'>Monkey</option>
                            <option value='https://i.imgur.com/JjgmvrX.png'>Koala</option>
                            <option value='https://i.imgur.com/qWHIXp5.png'>Fox</option>
                            <option value='https://i.imgur.com/BC8wCCP.png'>Dear</option>
                            <option value='https://i.imgur.com/ydToVuJ.png'>Raccoon</option>
                            <option value='https://i.imgur.com/ut1szAk.png'>Panda</option>
                            <option value='https://i.imgur.com/MULaROr.png'>Wolf</option>
                        </select>
                        <button type="submit">SIGN UP</button>
                    </form>
                </div>
            </div>
            <div className="right-container"></div>
        </div>
    )
}

export default Register
