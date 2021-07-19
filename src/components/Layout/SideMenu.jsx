import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/App.css'

const SideMenu = ({ display, setDisplay, currentUser }) => {
    const menuText = display ? 'Create Post' : 'Feed'

    return (
        <div className="side-menu">
            { currentUser &&
                <div>
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                    <button onClick={() => setDisplay(!display)}>
                        { menuText }
                    </button>
                </div>
            }
        </div>
    )
}

export default SideMenu