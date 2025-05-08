import React from "react";

import './keyboardStyles.css';
import CharKeyboard from "../charKeyboard";

const KEYBOARD_ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

const Keyboard = ({actionListener}) => {
    return (
        <div className="keyboard">
            {KEYBOARD_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((key) => (
                        <CharKeyboard key={key} actionListener={actionListener} char={key} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;
