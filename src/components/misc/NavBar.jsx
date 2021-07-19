import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'

//Components
import SearchBar from './SearchBar'

const NavBar = ({ authenticated, handleLogout, setPosts }) => {
    // let wrapperRef = useRef()
    const navRef = useRef()

    // get a more descriptive name? What's it doing?
    const handleClick = () => {
        const nav = navRef.current
        nav.classList.toggle('open')
    }


    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img
                    src="https://i.imgur.com/4tgXjNw.png"
                    alt="disco-ball"
                ></img>
                <h3>partyoverflow</h3>
            </Link>
            <Link to='/home'>
                Home
            </Link>
            { authenticated ?
                <p onClick={handleLogout}>
                    Sign Out
                </p>
                :
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            }
            <SearchBar setPosts={setPosts}/>
            <button className="hamburger" onClick={handleClick}>
                <img src="https://i.imgur.com/4pxvdUi.png" alt="hamburger icon"></img>
            </button>
            <div
                ref={navRef}
                className="mobile-nav"
            ></div>
        </div>
    )
}

export default NavBar