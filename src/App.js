import { useState } from "react";

import "./App.scss";

const App = () => {
  const [selectedElement, setSelectedElement] = useState();

  const dragStart = (e) => {
    e.target.className = `${e.target.className} isDragging`;
  };

  const dragEnd = (e) => {
    e.target.className = e.target.className.replace("isDragging");
  };

  return (
    <div className="App">
      <header>
        <h2>Form Builder</h2>
      </header>

      <ul onClick={(e) => console.log(e.target.innerText)}>
        <li title="Add a Heading">
          <div
            className="draggable"
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
          >
            <h1>Heading</h1>
          </div>
        </li>
        <li title="Add a Text Input">
          <div
            className="draggable"
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
          >
            <input type="text" placeholder="Text Input" />
          </div>
        </li>
        <li title="Add a Button">
          <div
            className="draggable"
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
          >
            <button>Button</button>
          </div>
        </li>
      </ul>

      <h2>Form Canvas</h2>
      <div className="formBuilder">
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
      </div>
    </div>
  );
};

export default App;
