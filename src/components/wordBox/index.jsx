import React from "react";

import './wordBoxStyles.css'

const getBorderColor = (wordValidation) => {
    if (wordValidation === "valid") return "green";
    if (wordValidation === "invalid") return "red";
    return "#ccc";
};

const WordBox = ({ chars, wordValidation }) => {
    const filledCharBoxes = [...chars, ...Array(5 - chars.length).fill("")];

    return (
        <div className="word-container">
            {filledCharBoxes.map((char, index) => {

                return (
                    <div
                        key={index}
                        className="char-box"
                        style={{ borderColor: getBorderColor(wordValidation), }}
                    >
                        {char}
                    </div>
                );
            })}
        </div>
    );
}

export default WordBox;
