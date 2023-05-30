import React from "react";

// js
import {
  setSourceOne,
  setSourceTwo,
  startAnimation,
} from "./functions/animation";

// svg
import { ReactComponent as MySVG } from "./svgs/drawing-laser.svg";

// style
import "./App.css";

function App() {
  return (
    <div className="App">
      <MySVG id="svg" />

      <div id="button-div">
        <button onClick={() => setSourceOne()}>Source One</button>
        <button onClick={() => setSourceTwo()}>Source Two</button>
        <button id="animation" onClick={() => startAnimation(1000)}>
          One Scan
        </button>
      </div>
    </div>
  );
}

export default App;
