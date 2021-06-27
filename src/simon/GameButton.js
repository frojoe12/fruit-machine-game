import React from "react"
import "./button.css"

const GameButton = ({colorSelect, buttonColor, highlight}) => {
    return (<button colorname={buttonColor} onClick={colorSelect} className={`game-button color-button-${buttonColor} ${highlight ? ` button-on ` : ` button-off `} `}>a</button>)
}

export default GameButton