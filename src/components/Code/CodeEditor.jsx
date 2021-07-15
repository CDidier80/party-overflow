import React, { useEffect, useState } from "react"
import Prism from "prismjs"
import '../../styles/prism.css'
import '../../styles/CodeEditor.css'


const CodeEditor = (props) => {

    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0)
    }, [props.codeblock])

    return (
        <div className="code-editor">

            <pre className="display-field">
                <code className="language-javascript">
                    {props.codeblock}
                </code>
            </pre>

            <textarea className="input-field" value={props.codeblock} onChange={(e)=>props.setCodeblock(e.target.value)}></textarea>

        </div>
    )
}

export default CodeEditor