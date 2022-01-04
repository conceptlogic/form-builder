import pt from "prop-types";
import cx from "classnames";

import nextData from "./nextData";
import { elementIdentifiers } from "./constants";

import s from "./GridCell.module.scss";

const GridCell = ({ data, index, setCanvasData, canvasData }) => {
  const handlers = {
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
