import { useState } from "react";

import GridCell from "./GridCell";
import nextData from "./nextData";

import s from "./FormGrid.module.scss";

const FormGrid = () => {
  const cellCount = 8;
  const [canvasData, setCanvasData] = useState(new Array(cellCount).fill({}));

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
  };

  return (
    <div className={s.container}>
      <div
        className={s.grid}
        onDragOver={handlers.dragOver}
        onDragEnter={handlers.dragEnter}
        onDragLeave={handlers.dragLeave}
        onDrop={handlers.drop}
      >
        {canvasData.map((data, i) => (
          <GridCell
            data={data}
            key={i}
            index={i}
            canvasData={canvasData}
            setCanvasData={setCanvasData}
          />
        ))}
      </div>
    </div>
  );
};

export default FormGrid;
