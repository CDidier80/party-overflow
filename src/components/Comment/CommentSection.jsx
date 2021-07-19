import React, { useState } from "react"

// Components
import CommentList from './CommentList'
import CommentForm from './CommentForm'

// Services
import { createComment, deleteComment, updateComment } from '../../services/commentService'

const CommentSection = ({
    currentUser,
    setPost,
    post: {
        _id: postId,
        comments,
    }
}) => {
    const [comments, setComments] = useState([...comments])
    const [showNewComment, setShowNewComment] = useState(false)

    // formData is too general a name to be very helpful
    const handleCreateComment = async (formData) => {
        try {
            const response = await createComment(postId, formData)
            // It's strange to see assignment to a response object.
            // Is the response the db record stripped of
            // the other axios meta info? If so, rename response to be more
            // specific to whatever it is
            response.commenter = currentUser
            // putting response directly into state suggests that response isn't
            // the typical 'response' you'd get from axios - misnomer?
            setComments(comments => [...comments, response])
            setShowNewComment(false)
        } catch (error) {
            throw error
        }
    }

    const handleDeleteComment = async (commentToDeleteId) => {
        try {
            await deleteComment(postId, commentToDeleteId)
            const remainingComments = comments.filter(comment =>
                comment._id !== commentToDeleteId
            )
            setComments(remainingComments)
        } catch (error) {
            throw error
        }
    }

    // notes on this function:
            // strange to see a function that updates a comment return a post,
            // rather than a comment

            // it's better not to add the data type to the name of the variable

            // array.prototype.map creates an array of new elements, implying many
            // changes to many elements. What you're really doing is changing the properties
            // of just one element in an array. Using array.prototype.find is better for this use-case

            // You can change the properties of of the object without needing a mapping function
            // The comment's memory pointer is still inside the original array, so no array manipulation needed
            // However, react won't treat the changes made to a nested object as a state change. So, just return
            // a copy of the original array
    const handleSolution = async ({ _id: solutionCommentId, commenter: user }) => {
        try {
            const updatedPost = await updateComment(solutionCommentId, postId, user.id)
            const { comments } = updatedPost

            const solutionComment = comments.find(comment =>
                comment._id === solutionCommentId
            )

            if (solutionComment) {
                solutionComment.is_solution = true
                solutionComment.commenter = user
            }

            setComments([...comments])
            setPost(updatedPost)
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="comment-section">

            <CommentList
                post={post}
                comments={comments}
                currentUser={currentUser}
                handleSolution={handleSolution}
                handleDeleteComment={handleDeleteComment}
            />

            { currentUser &&
                <button
                    onClick={() => setShowNewComment(!showNewComment)}
                >
                    New Comment
                </button>
            }

            { showNewComment &&
                <CommentForm
                    post={post}
                    handleCreateComment={handleCreateComment}
                    currentUser={currentUser}
                />
            }

        </div>
    )
}

export default CommentSection
