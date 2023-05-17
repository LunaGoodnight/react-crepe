export const handleToggleItemCallback = ({
  selectedItems,
  setSelectedItems,
  index,
}) => {
  let arr = selectedItems.slice().sort();

  // 完全沒有點過的checkbox，單純加進去就好
  // add this index
  if (arr.length === 0) {
    const newArray = arr.concat(index);
    setSelectedItems(newArray);
    return;
  }
  // 已經有點過
  if (arr.includes(index)) {
    // 是最上面第一個
    if (arr[0] === index) {
      // 把自己清掉就好
      const newArray = arr.filter((elementIndex) => elementIndex !== index);
      setSelectedItems(newArray);
    } else {
      // 不是最上面第一個，把下面清空
      const newArray = arr.filter((elementIndex) => elementIndex < index);
      setSelectedItems(newArray);
    }
  } else {
    // 還沒點過，如果上面有點過的，就自動補齊
    if (arr.some((ele) => ele < index)) {
      const firstElement = arr[0];
      for (let i = firstElement + 1; i <= index; i++) {
        arr = [...arr, i];
      }
      setSelectedItems(arr);
    } else {
      // 還沒點過，上面也沒有點過的，就限定只能點擊上面相鄰的
      if (arr.includes(index + 1)) {
        const newArray = arr.concat(index);
        setSelectedItems(newArray);
      } else {
        alert("只能點相鄰的周！");
      }
    }
  }
};

export default {};
