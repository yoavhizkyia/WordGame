import React from "react";

import './App.css';
import WordBox from "./components/wordBox";
import Keyboard from "./components/keyboard";
import { useWordGame } from "./hooks/useWordGame";

const App = () => {
  const { chars, wordValidation, actionListener } = useWordGame();

  return (
    <div className="app-container">
      <h1>Word Game</h1>
      <WordBox chars={chars} wordValidation={wordValidation} />
      <Keyboard actionListener={actionListener} />
    </div>
  );
}

export default App;
