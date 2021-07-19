import React from 'react'

//Components
import PostCard from './PostCard'

const PostList = ({ posts, ...props }) => (
    posts &&
        posts.map((post, index) => (
            <PostCard
                key={index}
                post={post}
                { ...props }
            />
        ))
)

export default PostList