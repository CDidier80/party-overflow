import React, { useEffect } from "react"
import Prism from "prismjs"
import '../../styles/prism.css'

const Codeblock = (props) => {

    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0)
    }, [])

    return (
        <div style={{width: '100%'}}>
            <pre>
                <code className="language-javascript">
                    { props.codeblock }
                </code>
            </pre>
        </div>
    )
}

export default Codeblock
