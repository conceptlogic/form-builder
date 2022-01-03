import "./App.scss";

const App = () => {
  const dragStart = (e) => {
    e.target.className = `${e.target.className} isDragging`;
  };

  const dragEnd = (e) => {
    e.target.className = e.target.className.replace("isDragging", "");
  };

  const dragEnter = (e) => {
    if (e.target.className !== "formBuilder") {
      e.target.className = `${e.target.className} dropTarget`;
    }
  };

  const dragLeave = (e) => {
    if (e.target.className !== "formBuilder") {
      e.target.className = e.target.className.replace("dropTarget", "");
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Form Elements</h2>
        <p>
          Drag elements on to the form canvas to build and customize your form.
        </p>
      </header>

      <ul onDragStart={dragStart} onDragEnd={dragEnd}>
        <li title="Add a Heading">
          <div className="draggable" draggable>
            <h1>Heading</h1>
          </div>
        </li>

        <li title="Add a Text Input">
          <div className="draggable" draggable>
            <input type="text" placeholder="Text Input" />
          </div>
        </li>

        <li title="Add a Button">
          <div className="draggable" draggable>
            <button>Button</button>
          </div>
        </li>
      </ul>

      <h2>Form Canvas</h2>
      <div
        className="formBuilder"
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        title="Drop elements here"
      >
        <div className="dropCell"></div>
        <div className="dropCell"></div>
        <div className="dropCell"></div>
        <div className="dropCell"></div>
        <div className="dropCell"></div>
        <div className="dropCell"></div>
        <div className="dropCell"></div>
        <div className="dropCell"></div>
      </div>
    </div>
  );
};

export default App;
