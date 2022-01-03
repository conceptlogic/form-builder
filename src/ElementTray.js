import s from "./ElementTray.module.scss";

const ElementTray = () => {
  return (
    <ul className={s.elementTray}>
      <li title="Add a Heading">
        <div className={s.draggable} draggable>
          <h1>Heading</h1>
        </div>
      </li>

      <li title="Add a Text Input">
        <div className={s.draggable} draggable>
          <input type="text" placeholder="Text Input" />
        </div>
      </li>

      <li title="Add a Button">
        <div className={s.draggable} draggable>
          <button>Button</button>
        </div>
      </li>
    </ul>
  );
};

export default ElementTray;
