import React from "react";

// js
import {
  setSourceOne,
  setSourceTwo,
  startAnimation,
} from "./functions/animation";

// svg
import { ReactComponent as MySVG } from "./svgs/drawing.svg";

// style
import "./App.css";

function App() {
  return (
    <div className="App">
      <MySVG id="svg" />
      <div id="button-div">
        <button onClick={() => setSourceOne()}>Source One</button>
        <button onClick={() => setSourceTwo()}>Source Two</button>
        <button id="animation" onClick={() => startAnimation(5000)}>
          Five Scans
        </button>
      </div>
    </div>
  );
}

export default App;
