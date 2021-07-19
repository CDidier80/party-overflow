import React, { useState, useEffect } from 'react'
import '../styles/App.css'

// Components
import CommentSection from '../components/Comment/CommentSection'
import PostCard from '../components/Post/PostCard'

//Services
import { getPostById } from '../services/postService'

const PostDetails = (props) => {
    const { id } = props.match.params
    const [post, setPost] = useState()

    useEffect(() => {
        let componentMounted = true
        const fetchUserPosts = async () => {
            try {
                const response = await getPostById(id)
                if (componentMounted) {
                    setPost(response.post)
                }
            } catch (error) {
                throw error
            }
        }
        fetchUserPosts()
        // not sure, but can you remove these {  } ?
        return () => { componentMounted = false }
    }, [id])

    return (
        <div className="layout">

            { post ?
                <div>
                    <h1>post details</h1>
                    <PostCard
                        post={post}
                        markPostResolved={props.markPostResolved}
                        handleDeletePost={props.handleDeletePost}
                        currentUser={props.currentUser}
                    />
                    <CommentSection
                        post={post}
                        setPost={setPost}
                        currentUser={props.currentUser}
                    />
                </div>
                :
                <div>Oops</div>
            }
        </div>
    )
}

export default PostDetails