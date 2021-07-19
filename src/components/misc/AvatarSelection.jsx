import React from 'react'
import '../../styles/AvatarSelection.css'


const AvatarSelection = ({ handlePopup, formData: { avatar }, handleChange}) => {

    const animalOptions = [
        { url: 'Wdyo4ow.png', text: 'Cat' },
        { url: '74imy42.png', text: 'Bear' },
        { url: '51nVPDR.png', text: 'Monkey' },
        { url: 'JjgmvrX.png', text: 'Koala' },
        { url: 'qWHIXp5.png', text: 'Fox' },
        { url: 'BC8wCCP.png', text: 'Dear' },
        { url: 'ydToVuJ.png', text: 'Raccoon' },
        { url: 'ut1szAk.png', text: 'Panda' },
        { url: 'MULaROr.png', text: 'Wolf' }
    ]

    return (
        <div className="popup">
            <div className="select-menu">
                <img src={avatar} alt="animal-avatar"></img>
                <select
                    /* handleChange is too general a name */
                    onChange={(e) => handleChange(e)}
                    value={avatar}
                    name="avatar"
                >
                    { animalOptions.map(({ url, text}) => (
                        <option value={"https://i.imgur.com/" + url}>
                            { text }
                        </option>
                    ))}
                </select>
                <button onClick={handlePopup}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default AvatarSelection