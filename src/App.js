import "./App.scss";

const handlers = {
  // see https://stackoverflow.com/a/50233827
  dragOver: (e) => {
    e.stopPropagation();
    e.preventDefault();
  },
  dragEnter: (e) => {
    if (e.target.className !== "formBuilder") {
      e.target.className = `${e.target.className} dropTarget`;
    }
  },
  dragLeave: (e) => {
    if (e.target.className !== "formBuilder") {
      e.target.className = e.target.className.replace("dropTarget", "");
    }
  },
  drop: (e) => {
    e.target.className = e.target.className.replace("dropTarget", "");
  },
};

const App = () => {
  return (
    <div className="App">
      <header>
        <h2>Form Elements</h2>
        <p>
          Drag elements on to the form canvas to build and customize your form.
        </p>
      </header>

      <ul onDragStart={handlers.dragStart} onDragEnd={handlers.dragEnd}>
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
        onDragOver={handlers.dragOver}
        onDragEnter={handlers.dragEnter}
        onDragLeave={handlers.dragLeave}
        onDrop={handlers.drop}
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
