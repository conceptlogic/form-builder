const nextData = ({ formData, index, indexData }) => {
  // if another object in formData was being edited, unset its isEditing property now
  if (indexData.isEditing) {
    const currentEditingIndex = formData.findIndex((x) => x.isEditing);

    if (currentEditingIndex > -1) {
      formData[currentEditingIndex].isEditing = false;
    }
  }

  return Object.assign([], formData, {
    [index]: indexData,
  });
};

export default nextData;
