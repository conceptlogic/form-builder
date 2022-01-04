import { useState } from "react";
import pt from "prop-types";
import cx from "classnames";

import nextData from "./nextData";
import { elementIdentifiers } from "./constants";

import s from "./GridCell.module.scss";

const isSvg = (el) => typeof el.className !== "string"; // used to ignore drag events on SVG icons, where className is an object

const GridCell = ({ data, index, setFormData, formData }) => {
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
      const next = nextData({
        formData,
        index: e.target.dataset.index,
        indexData: {
          element: e.dataTransfer.getData("text/json"),
        },
      });

      setIsDragging(false);
      setFormData(next);
      e.target.className = e.target.className.replace(s.isDragging, "");
    },
    clearCell: (e, index) => {
      const next = nextData({
        formData,
        index,
        indexData: {},
      });

      setFormData(next);
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
          <li title="Edit properties">
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
  formData: pt.array.isRequired,
};

export default GridCell;
