import { useEffect, useState, useCallback } from "react";

import MyActionListener from "../myActionListener";

const actionListener = new MyActionListener();

const isEnglishWord = async (word) => {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  return res.ok;
};

const isValidChar = (char) => /^[A-Z]$/.test(char);

export const useWordGame = () => {
  const [chars, setChars] = useState([]);
  const [wordValidation, setWordValidation] = useState(null); // null | "valid" | "invalid"

  const addChar = useCallback((char) => {
    setChars((prev) => (prev.length < 5 ? [...prev, char] : prev));
    setWordValidation(null);
  }, []);

  const removeChar = useCallback(() => {
    setChars((prev) => prev.slice(0, -1));
    setWordValidation(null);
  }, []);

  const submitWord = useCallback(async () => {
    if (chars.length === 5) {
      const word = chars.join("").toLowerCase();
      const valid = await isEnglishWord(word);
      setWordValidation(valid ? "valid" : "invalid");
    }
  }, [chars]);

  const handleKeyPress = useCallback(
    (key) => {
      if (isValidChar(key)) {
        addChar(key);
      } else if (key === "⌫") {
        removeChar();
      } else if (key === "ENTER") {
        submitWord();
      }
    },
    [addChar, removeChar, submitWord]
  );

  useEffect(() => {
    actionListener.registerListener("keyPress", handleKeyPress);
    return () => actionListener.removeListener("keyPress");
  }, [handleKeyPress]);

  return { chars, wordValidation, actionListener };
}
