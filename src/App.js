import { useState } from "react";

import "./App.scss";

const App = () => {
  const [selectedElement, setSelectedElement] = useState();

  return (
    <div className="App">
      <header>Form Builder</header>

      <ul onClick={(e) => console.log(e.target.innerText)}>
        <li className="heading" draggable title="Add a Heading">
          <h1>Heading</h1>
        </li>
        <li className="text-input" draggable title="Add a Text Input">
          <input type="text" placeholder="Text Input" />
        </li>
        <li className="button" draggable title="Add a Button">
          <button>Button</button>
        </li>
      </ul>

      <div style={{ border: "dashed 2px orange", cursor: "move" }}>
        <h2>Form Canvas</h2>
      </div>
    </div>
  );
};

export default App;
