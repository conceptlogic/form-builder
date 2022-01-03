import { elementIdentifiers } from "./constants";

import s from "./ElementTray.module.scss";

const ElementTray = () => {
  const handlers = {
    dragStart: (e) => {
      e.dataTransfer.setData("text/json", e.target.dataset.element);
    },
  };

  return (
    <>
      <header>
        <h1>Form Builder</h1>
        <p>
          Drag elements from the list below onto grid to build and customize
          your form.
        </p>
      </header>
      <ul onDragStart={handlers.dragStart} className={s.elementTray}>
        <li title="Add a Heading">
          <div
            className={s.draggable}
            draggable
            data-element={elementIdentifiers.heading}
          >
            <h1>Heading</h1>
          </div>
        </li>

        <li title="Add a Text Input">
          <div
            className={s.draggable}
            draggable
            data-element={elementIdentifiers.textInput}
          >
            <input type="text" placeholder="Text Input" />
          </div>
        </li>

        <li title="Add a Button">
          <div
            className={s.draggable}
            draggable
            data-element={elementIdentifiers.button}
          >
            <button>Button</button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ElementTray;
