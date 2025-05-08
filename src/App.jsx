import React from "react";

import './App.css';
import WordBox from "./components/wordBox";
import Keyboard from "./components/keyboard";
import MyActionListener from "./MyActionListener";

const App = () => {
  const actionListener = new MyActionListener();

  return (
    <div className="app-container">
      <h1>Word Game</h1>
      <WordBox actionListener={actionListener} />
      <Keyboard actionListener={actionListener} />
    </div>
  );
}

export default App;
