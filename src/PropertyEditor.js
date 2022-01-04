import { useState } from "react";

import { elementIdentifiers } from "./constants";

import s from "./PropertyEditor.module.scss";

const HeadingEditor = ({ editing }) => {
  const [text, setText] = useState();

  return (
    <div>
      <label htmlFor="headingText">Heading Text</label>
      <input
        id="headingText"
        type="text"
        value={text || editing?.text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

const ButtonEditor = ({ editing }) => {
  const [text, setText] = useState();

  return (
    <div>
      <label htmlFor="buttonText">Button Text</label>
      <input
        id="buttonText"
        type="text"
        value={text || editing?.text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

const TextInputEditor = ({ editing }) => {
  const [label, setLabel] = useState();
  const [placeholder, setPlaceholder] = useState();

  return (
    <>
      <div className={s.row}>
        <label htmlFor="buttonLabel">Label</label>
        <input
          id="buttonLabel"
          type="text"
          value={label || editing?.label}
          onChange={(e) => {
            setLabel(e.target.value);
          }}
        />
      </div>

      <div className={s.row}>
        <label htmlFor="buttonPlaceholder">Placeholder</label>
        <input
          id="buttonPlaceholder"
          type="text"
          value={placeholder || editing?.placeholder}
          onChange={(e) => {
            setPlaceholder(e.target.value);
          }}
        />
      </div>
    </>
  );
};

const PropertyEditor = ({ formData }) => {
  const editing = formData.find((x) => x.isEditing);

  const getEditor = () => {
    const lookup = {
      [elementIdentifiers.heading]: <HeadingEditor editing={editing} />,
      [elementIdentifiers.textInput]: <TextInputEditor editing={editing} />,
      [elementIdentifiers.button]: <ButtonEditor editing={editing} />,
    };

    return lookup[editing?.element];
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
