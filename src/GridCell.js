import { useState } from "react";
import pt from "prop-types";
import cx from "classnames";

import { elementIdentifiers } from "./constants";

import s from "./GridCell.module.scss";

const isSvg = (el) => typeof el.className !== "string"; // used to ignore drag events on SVG icons, where className is an object

const GridCell = ({ data, index, setFormData }) => {
  const [isDragging, setIsDragging] = useState();

  const handlers = {
    // see https://stackoverflow.com/a/50233827
    dragOver: (e) => {
      e.stopPropagation();
      e.preventDefault();
    },
    dragEnter: (e) => {
      if (!isSvg(e.target) && e.target.className.includes(s.dropCell)) {
        e.target.className = `${e.target.className} ${s.isDragging}`;
        setIsDragging(true);
      }
    },
    dragLeave: (e) => {
      if (!isSvg(e.target)) {
        e.target.className = e.target.className.replace(s.isDragging, "");
        setIsDragging(false);
      }
    },
    drop: (e) => {
      const element = e.dataTransfer.getData("text/json");
      const indexData = { element };

      if (element === "heading") {
        indexData.text = "Heading";
      }

      if (element === "button") {
        indexData.text = "Button";
      }

      if (element === "textInput") {
        indexData.label = "";
        indexData.placeholder = "Text Input";
      }

      setIsDragging(false);
      setFormData({
        index: e.target.dataset.index,
        indexData,
      });
      e.target.className = e.target.className.replace(s.isDragging, "");
    },
    clearCell: (e, index) => {
      setFormData({
        index,
        indexData: {},
      });
    },
    editCell: (e, index) => {
      setFormData({
        index,
        indexData: { ...data, isEditing: true },
      });
    },
  };

  const componentLookup = {
    [elementIdentifiers.heading]: <h1>Heading</h1>,
    [elementIdentifiers.button]: <button>Button</button>,
    [elementIdentifiers.textInput]: (
      <input type="text" placeholder="Text Input" />
    ),
  };

  const getClassNames = () => {
    let classNames = "";

    if (isDragging && data.element) {
      classNames = [s.isDragging, s.hasElement];
    }
    if (data.element) {
      classNames = s.hasElement;
    }

    return classNames;
  };

  return (
    <div
      className={cx(s.dropCell, getClassNames())}
      data-index={index}
      onDragOver={handlers.dragOver}
      onDragEnter={handlers.dragEnter}
      onDragLeave={handlers.dragLeave}
      onDrop={handlers.drop}
    >
      {data.element && (
        <ul className={s.controls}>
          <li title="Edit" onClick={(e) => handlers.editCell(e, index)}>
            <svg className="icon icon-pencil">
              <use href="#icon-pencil"></use>
            </svg>
          </li>
          <li title="Clear cell" onClick={(e) => handlers.clearCell(e, index)}>
            <svg className="icon icon-cross">
              <use href="#icon-cross"></use>
            </svg>
          </li>
        </ul>
      )}

      {componentLookup[data.element]}
    </div>
  );
};

GridCell.propTypes = {
  data: pt.object.isRequired,
  index: pt.number.isRequired,
  setFormData: pt.func.isRequired,
};

export default GridCell;
