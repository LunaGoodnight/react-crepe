export const handleToggleItemCallback = ({
  selectedItems,
  setSelectedItems,
  index,
}) => {
  let arr = selectedItems.slice().sort();
  if (arr.includes(index)) {
    const newArray = arr.filter((elementIndex) => elementIndex < index);
    setSelectedItems(newArray);
  } else {
    if (arr.some((ele) => ele < index)) {
      const firstElement = arr[0];
      for (let i = firstElement + 1; i <= index; i++) {
        arr = [...arr, i];
      }
      setSelectedItems(arr);
    } else {
      // add this index
      const newArray = arr.concat(index);
      setSelectedItems(newArray);
    }
  }
};

export default {};
