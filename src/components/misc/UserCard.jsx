import React from 'react'
import '../../styles/UserCard.css'

const UserCard = (props) => (
    // this is why you use ?.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    props?.user &&
        <div className="user-card">
            <img src={user.avatar} alt="user avatar"></img>
            <p>{user.handle}</p>
        </div >
)


export default UserCard