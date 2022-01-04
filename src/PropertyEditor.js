import { elementIdentifiers } from "./constants";

import s from "./PropertyEditor.module.scss";

const HeadingEditor = ({ editing }) => {
  return (
    <div>
      <label htmlFor="headingText">Heading Text</label>
      <input id="headingText" type="text" value={editing?.text} />
    </div>
  );
};

const ButtonEditor = ({ editing }) => {
  return (
    <div>
      <label htmlFor="buttonText">Button Text</label>
      <input id="buttonText" type="text" value={editing?.text} />
    </div>
  );
};

const TextInputEditor = ({ editing }) => {
  return (
    <>
      <div className={s.row}>
        <label htmlFor="buttonLabel">Label</label>
        <input id="buttonLabel" type="text" value={editing?.label} />
      </div>

      <div className={s.row}>
        <label htmlFor="buttonPlaceholder">Placeholder</label>
        <input
          id="buttonPlaceholder"
          type="text"
          value={editing?.placeholder}
        />
      </div>
    </>
  );
};

const PropertyEditor = ({ formData }) => {
  const editing = formData.find((x) => x.isEditing);

  const getEditor = () => {
    switch (editing?.element) {
      case elementIdentifiers.heading:
        return <HeadingEditor editing={editing} />;
      case elementIdentifiers.textInput:
        return <TextInputEditor editing={editing} />;
      case elementIdentifiers.button:
        return <ButtonEditor editing={editing} />;
      default:
        break;
    }
  };

  if (!editing?.element) {
    return null;
  }

  return (
    <div>
      {getEditor()}

      <ul className={s.links}>
        <li>
          <a href="#">Apply</a>
        </li>
        <li>
          <a href="#">Cancel</a>
        </li>
      </ul>
    </div>
  );
};

export default PropertyEditor;
