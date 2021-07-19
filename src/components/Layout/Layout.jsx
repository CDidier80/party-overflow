import React from 'react'
import '../../styles/App.css'

//Components
import Leaderboard from '../Layout/Leaderboard'
import SideMenu from '../Layout/SideMenu'

const Layout = ({ children, ...rest }) => (
    <div className="home-page">
        <SideMenu { ...rest } />
        { children }
        <Leaderboard/>
    </div>
)

export default Layout