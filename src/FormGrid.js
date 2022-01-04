import { useState } from "react";

import GridCell from "./GridCell";

import s from "./FormGrid.module.scss";

const FormGrid = () => {
  const cellCount = 8;
  const [canvasData, setCanvasData] = useState(new Array(cellCount).fill({}));

  return (
    <div className={s.container}>
      <div className={s.grid}>
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
