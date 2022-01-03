import s from "./FormCanvas.module.scss";

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
    e.target.className = e.target.className.replace(s.dropTarget, "");
  },
};

const FormCanvas = () => {
  return (
    <div
      className={s.formCanvas}
      onDragOver={handlers.dragOver}
      onDragEnter={handlers.dragEnter}
      onDragLeave={handlers.dragLeave}
      onDrop={handlers.drop}
      title="Drop elements here"
    >
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
      <div className={s.dropCell}></div>
    </div>
  );
};

export default FormCanvas;
