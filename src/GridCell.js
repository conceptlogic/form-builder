import { useState } from "react";
import pt from "prop-types";
import cx from "classnames";

import nextData from "./nextData";
import { elementIdentifiers } from "./constants";

import s from "./GridCell.module.scss";

const GridCell = ({ data, index, setFormData, formData }) => {
  const [isDragging, setIsDragging] = useState();

  const handlers = {
    // see https://stackoverflow.com/a/50233827
    dragOver: (e) => {
      e.stopPropagation();
      e.preventDefault();
    },
    dragEnter: (e) => {
      if (e.target.className.includes(s.dropCell)) {
        e.target.className = `${e.target.className} ${s.isDragging}`;
        setIsDragging(true);
      }
    },
    dragLeave: (e) => {
      e.target.className = e.target.className.replace(s.isDragging, "");
      setIsDragging(false);
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
    clearCell: (e) => {
      if (e.target.className === s.clearCell) {
        const next = nextData({
          formData,
          index: e.currentTarget.dataset.index,
          indexData: {},
        });

        setFormData(next);
      }
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
      onClick={handlers.clearCell}
      onDragOver={handlers.dragOver}
      onDragEnter={handlers.dragEnter}
      onDragLeave={handlers.dragLeave}
      onDrop={handlers.drop}
    >
      {data.element && (
        <span className={s.clearCell} title="Clear cell">
          x
        </span>
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
