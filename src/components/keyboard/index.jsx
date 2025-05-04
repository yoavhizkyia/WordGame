import React from "react";

import './keyboardStyles.css';

const KEYBOARD_ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

const Keyboard = ({ actionListener }) => {
    return (
        <div className="keyboard">
            {KEYBOARD_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((key) => (
                        <button
                            key={key}
                            onClick={() => actionListener.emit("keyPress", key)}
                            className="keyboard-key"
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;
