import { useState } from "react";

import GridCell from "./GridCell";

import s from "./FormGrid.module.scss";

const FormGrid = () => {
  const cellCount = 8;
  const [formData, setFormData] = useState(new Array(cellCount).fill({}));

  return (
    <div className={s.container}>
      <div className={s.grid}>
        {formData.map((data, i) => (
          <GridCell
            data={data}
            key={i}
            index={i}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
    </div>
  );
};

export default FormGrid;
