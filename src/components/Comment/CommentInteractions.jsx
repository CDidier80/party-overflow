import React from 'react'
import '../../styles/PostCard.css'

const CommentInteractions = ({ post, handleDeletePost, ...props }) => (
    props?.currentUser._id === props.comment.commenter._id &&
        <div>
            <button onClick={() => markPostResolved(post)}>
                Resolve
            </button>
            <button onClick={() => handleDeletePost(post)}>
                Delete
            </button>
        </div>
)

export default CommentInteractions