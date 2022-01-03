import s from "./ElementTray.module.scss";

const handlers = {
  dragStart: (e) => {
    e.dataTransfer.setData("text/json", e.target.dataset.element);
  },
};

const ElementTray = () => {
  return (
    <ul onDragStart={handlers.dragStart} className={s.elementTray}>
      <li title="Add a Heading">
        <div className={s.draggable} draggable data-element="heading">
          <h1>Heading</h1>
        </div>
      </li>

      <li title="Add a Text Input">
        <div className={s.draggable} draggable data-element="text-input">
          <input type="text" placeholder="Text Input" />
        </div>
      </li>

      <li title="Add a Button">
        <div className={s.draggable} draggable data-element="button">
          <button>Button</button>
        </div>
      </li>
    </ul>
  );
};

export default ElementTray;
