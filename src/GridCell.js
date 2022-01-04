import pt from "prop-types";
import cx from "classnames";

import nextData from "./nextData";
import { elementIdentifiers } from "./constants";

import s from "./GridCell.module.scss";

const GridCell = ({ data, index, setCanvasData, canvasData }) => {
  const handlers = {
    // see https://stackoverflow.com/a/50233827
    dragOver: (e) => {
      e.stopPropagation();
      e.preventDefault();
    },
    dragEnter: (e) => {
      if (e.target.className !== s.container && e.target.className !== s.grid) {
        e.target.className = `${e.target.className} ${s.dropTarget}`;
      }
    },
    dragLeave: (e) => {
      e.target.className = e.target.className.replace(s.dropTarget, "");
    },
    drop: (e) => {
      const next = nextData({
        canvasData,
        index: e.target.dataset.index,
        indexData: {
          element: e.dataTransfer.getData("text/json"),
        },
      });

      setCanvasData(next);
      e.target.className = e.target.className.replace(s.dropTarget, "");
    },
    clearCell: (e) => {
      if (e.target.className === s.clearCell) {
        const next = nextData({
          canvasData,
          index: e.currentTarget.dataset.index,
          indexData: {},
        });

        setCanvasData(next);
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

  return (
    <div
      className={cx(s.dropCell, data.element && s.hasElement)}
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
  setCanvasData: pt.func.isRequired,
  canvasData: pt.array.isRequired,
};

export default GridCell;
