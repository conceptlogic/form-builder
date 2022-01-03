import { useState } from "react";

import s from "./FormCanvas.module.scss";

const FormCanvas = () => {
  const [canvasData, setCanvasData] = useState(new Array(8).fill(null));

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
      let next = Object.assign([], canvasData, {
        [e.target.dataset.index]: {
          element: e.dataTransfer.getData("text/json"),
        },
      });

      setCanvasData(next);

      e.target.className = e.target.className.replace(s.dropTarget, "");
    },
  };

  console.log(canvasData);

  return (
    <div
      className={s.formCanvas}
      onDragOver={handlers.dragOver}
      onDragEnter={handlers.dragEnter}
      onDragLeave={handlers.dragLeave}
      onDrop={handlers.drop}
      title="Drop elements here"
    >
      {canvasData.map((data, i) => (
        <div className={s.dropCell} key={i} data-index={i}>
          {data?.element}
        </div>
      ))}
    </div>
  );
};

export default FormCanvas;
