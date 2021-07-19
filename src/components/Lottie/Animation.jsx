import React from "react";
import Lottie from 'react-lottie-player'


const Animation = ({ animationData }) => (
    <div>
        <Lottie
            style={{ width: '100%', height: '100%' }}
            animationData={animationData}
            speed={1}
            loop
            play
        />
    </div>
)

export default Animation

