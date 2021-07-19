import React, { useState } from 'react'
import '../../styles/PostForm.css'

// Components
import CodeEditor from '../Code/CodeEditor'

const PostForm = ({ handleCreatePost, currentUser: { _id: userId }}) => {
    const [question, setQuestion] = useState('')
    const [codeblock, setCodeblock] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreatePost({
            question: question,
            codeblock: codeblock,
            added_by: userId,
        })
    }

    return (
        <form
            className="post-form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <label>Create Post</label>
            <input
                required
                placeholder="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            ></input>
            <CodeEditor
                codeblock={codeblock}
                setCodeblock={setCodeblock}
            />
            <button>Submit</button>
        </form>
    )
}

export default PostForm