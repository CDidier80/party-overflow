import React, { useState, useEffect } from 'react'
import '../../styles/App.css'

// Components
import UserCard from '../misc/UserCard'

//Services
import { getTopUsers } from '../../services/authService'

const Leaderboard = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        let componentMounted = true
        // weird to see promise syntax where
        // other functions use async-await
        getTopUsers().then((response) => {
            if (componentMounted) {
                setUserList(response)
            }
        })
        return () => { componentMounted = false }
    }, [])

    return (
        <div className="leaderboard">
            <p>Leaderboard</p>
            { userList &&
                userList.map((user, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <UserCard user={user} />
                        <p>Solution Count: {user.solution_count}</p>
                    </div>
                ))
                }
        </div>
    )
}

export default Leaderboard