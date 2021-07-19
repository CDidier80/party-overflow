import React, { useEffect, useState } from "react"
import Prism from "prismjs"
import '../../styles/prism.css'
import '../../styles/CodeEditor.css'

const CodeEditor = ({ codeblock, setCodeblock }) => {

    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0)
    }, [codeblock])

    return (
        <div className="code-editor">
            <pre className="display-field">
                <code className="language-javascript">
                    { codeblock }
                </code>
            </pre>
            <textarea
                className="input-field"
                value={codeblock}
                onChange={(e) => setCodeblock(e.target.value)}
            ></textarea>
        </div>
    )
}

export default CodeEditor
