import React from 'react'
import '../../styles/PostCard.css'

const PostInteractions = ({
    currentUser,
    post: { added_by },
    markPostResolved
}) => (
    currentUser?._id === added_by._id &&
        <div>
            <button onClick={() => markPostResolved(post)}>
                Resolve
            </button>
            <button onClick={() => handleDeletePost(post)}>
                Delete
            </button>
        </div>
)

export default PostInteractions