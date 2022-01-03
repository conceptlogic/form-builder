const nextData = ({ canvasData, index, indexData }) => {
  return Object.assign([], canvasData, {
    [index]: indexData,
  });
};

export default nextData;
