const nextData = ({ formData, index, indexData }) => {
  return Object.assign([], formData, {
    [index]: indexData,
  });
};

export default nextData;
