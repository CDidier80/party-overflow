import React, { useEffect, useState } from 'react'

//Services
import { getUserPosts } from '../services/postService'

//Components
import PostList from '../components/Post/PostList'


const Profile = (props) => {
    const { _id, avatar, handle } = props.currentUser
    const [userPosts, setUserPosts] = useState([])

    console.log(userPosts)

    // will fetch data once component mounts
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
                { userPosts.length &&
                    <PostList
                        posts={userPosts}
                        { ...props }
                    />
                }
            </div>
        </div>
    )
}

export default Profile