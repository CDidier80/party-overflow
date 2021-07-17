import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Services
import { updateUser } from '../services/authService'
import { getUserPosts } from '../services/postService'
import { getUser } from '../services/authService'

//Components
import PostCard from '../components/Post/PostCard'


const Profile = (props) => {
    const { _id, avatar, handle } = props.currentUser

    const [userPosts, setUserPosts] = useState([])



    //will fetch data once component mounts
    useEffect(() => {
        const fetchUserPosts = async (id) => {
            const response = await getUserPosts(id)
            setUserPosts(response.posts)
        }
        fetchUserPosts(_id)
    }, [_id])


    return (
        <div>
            <img src={avatar} alt="user avatar"></img>
            <p>{handle}</p>
            <div>
                {userPosts.length ?

                    userPosts.map((post, index) => (
                        <Link key={index} to={`/post/${post._id}`} >
                            <div>
                                <p>{post.question}</p>
                            </div>
                        </Link>

                    ))
                    : null}
            </div>
        </div>
    )
}

export default Profile