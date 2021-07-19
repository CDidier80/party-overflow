import React from "react"

//Components
import CommentCard from './CommentCard'

const CommentList = ({ comments, ...props }) => (
    comments.map((comment, index) => (
        <CommentCard
            { ...props }
            key={index}
            index={index}
            comment={comment}
        />
    ))
)

export default CommentList