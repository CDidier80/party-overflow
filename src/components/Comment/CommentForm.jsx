import React, { useState } from "react"

// Components
import CodeEditor from '../Code/CodeEditor'

const CommentForm = (props) => {
    const [text, setText] = useState('')
    const [codeblock, setCodeblock] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //make sure fields are filled out before allowing submit, if not display error message
        // I don't think you need to use a variable to contain the form data. It's too generic
        // of a concept to warrant a name. If it were unique or the purpose would be ambiguous
        // withou the name, you'd give it a name. Otherwise, plop it inline.
        props.handleCreateComment({
            comment_text: text,
            codeblock: codeblock,
            post_id: props.post._id,
            commenter: props.currentUser._id,
        })
    }

    return (
        <form
            className="comment-form"
            onSubmit={handleSubmit}
        >
            <label>Comment</label>
            <input
                onChange={(e) => setText(e.target.value)}
                name="comment_text"
                value={text}
            />
            <label>Codeblock</label>
            <CodeEditor
                setCodeblock={setCodeblock}
                codeblock={codeblock}
                name="code-editor"
            ></CodeEditor>
            <button>Submit</button>
        </form>
    )
}

export default CommentForm
