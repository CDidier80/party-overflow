import React from 'react'
import '../styles/Landing.css'

// consistent spacing
// subjective opinion: presentational components look cleaner
// without { return bla bla } because it implies the pure role of
// presentation and nothing functional. {  } clutter things up
// when no variables, functions, etc need to be defined
const Landing = () =>
    (
        <div className="landing-page">
            <div className="landing-elements">
                <div className="logo-container">
                    <img src="https://i.imgur.com/4tgXjNw.png" alt="disco-ball"></img>
                    <h1>partyoverflow</h1>
                </div>
                <p>Lorem Ipsum</p>
                <div>
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )


export default Landing