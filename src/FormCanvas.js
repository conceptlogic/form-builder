import { useState } from "react";

import s from "./FormCanvas.module.scss";

const FormCanvas = () => {
  const [canvasData, setCanvasData] = useState(new Array(8).fill({}));

  const handlers = {
    // see https://stackoverflow.com/a/50233827
    dragOver: (e) => {
      e.stopPropagation();
      e.preventDefault();
    },
    dragEnter: (e) => {
      if (e.target.className !== s.formCanvas) {
        e.target.className = `${e.target.className} ${s.dropTarget}`;
      }
    },
    dragLeave: (e) => {
      if (e.target.className !== s.formCanvas) {
        e.target.className = e.target.className.replace(s.dropTarget, "");
      }
    },
    drop: (e) => {
      const nextData = Object.assign([], canvasData, {
        [e.target.dataset.index]: {
          element: e.dataTransfer.getData("text/json"),
        },
      });

      setCanvasData(nextData);

      e.target.className = e.target.className.replace(s.dropTarget, "");
    },
    clearCell: (e) => {
      const nextData = Object.assign([], canvasData, {
        [e.currentTarget.dataset.index]: {},
      });

      setCanvasData(nextData);
    },
  };

  return (
    <>
      <h1>Form Canvas</h1>

      <div
        className={s.formCanvas}
        onDragOver={handlers.dragOver}
        onDragEnter={handlers.dragEnter}
        onDragLeave={handlers.dragLeave}
        onDrop={handlers.drop}
      >
        {canvasData.map((data, i) => (
          <div
            className={s.dropCell}
            key={i}
            data-index={i}
            onClick={handlers.clearCell}
          >
            {data.element && (
              <span className={s.clearCell} title="Clear cell">
                x
              </span>
            )}

            {data.element}
          </div>
        ))}
      </div>
    </>
  );
};

export default FormCanvas;
