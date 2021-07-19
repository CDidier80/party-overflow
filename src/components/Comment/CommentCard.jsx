import React from "react"

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'
import CommentInteractions from './CommentInteractions'

const CommentCard = ({
    comment: {
        commenter,
        comment_text,
        codeblock,
        is_solution
    },
    ...props
}) => (
    comment &&
    <div>-
        <UserCard user={commenter} />
        <p>{comment_text}</p>
        <Codeblock codeblock={codeblock} />
        <p>{is_solution ? 'Solution' : ''}</p>
        <CommentInteractions
            comment={comment}
            { ...props }
        />
    </div>
)

export default CommentCard
