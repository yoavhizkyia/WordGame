import React from "react";

const CharKeyboard = ({actionListener, char}) => {
    return (
        <button
            onClick={() => actionListener.emit("keyPress", char)}
            className="keyboard-key"
        >
            {char}
        </button>
    );
}

export default CharKeyboard;
