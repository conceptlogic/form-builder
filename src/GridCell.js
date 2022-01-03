import pt from "prop-types";
import cx from "classnames";

import nextData from "./nextData";

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

      {data.element}
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
