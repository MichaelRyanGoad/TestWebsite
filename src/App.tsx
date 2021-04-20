import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ThreeExample from "./Three/threeExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EXPERIENCE THE Cube</p>
        <ThreeExample />
      </header>
    </div>
  );
}

export default App;
