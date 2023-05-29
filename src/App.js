import React from "react";

// svg
import { ReactComponent as MySVG } from "./svgs/drawing.svg";

// style
import "./App.css";

function App() {
  return (
    <div className="App">
      <MySVG id="svg" />
    </div>
  );
}

export default App;
