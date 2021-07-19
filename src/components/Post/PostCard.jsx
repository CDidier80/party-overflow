import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PostCard.css'

// Assets
import Check from '../../assets/check.png'
import Remove from '../../assets/remove.png'

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'
import PostInteractions from './PostInteractions'

const PostCard = ({
    currentUser,
    markPostResolved,
    handleDeletePost,
    post: {
        question,
        is_resolved,
        codeblock,
        is_resolved,
        _id: postId,
        comments
    }
}) => (
    <div className="post-card">
        <UserCard user={currentUser} />
        <p>{ question }</p>
        { codeblock &&
            <Codeblock codeblock={codeblock} />
        }
        <img
            src={is_resolved ? Check : Remove}
            alt="resolution symbol"
            className="resolution-icon"
        ></img>

        <p>{comments.length} Comments</p>

        { currentUser &&
            <Link to={`/post/${postId}`}>
                View Comments
            </Link>
        }

        <PostInteractions
            post={post}
            currentUser={currentUser}
            markPostResolved={markPostResolved}
            handleDeletePost={handleDeletePost}
        />
    </div>
)

export default PostCard