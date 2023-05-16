import { useCallback, useEffect, useRef, useState } from "react";

import { handleToggleItemCallback } from "./handleToggleItemCallback";
import { useClickOutside } from "../../hooks/useClickOutside";

export function useMultipleWeek({
  list = [],
  compareKey = "",
  defaultSelect = [],
  defaultSelectAll = false,
  nameKey = "",
}) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);

  const handleSelectAll = () => {
    if (selectedItems.length !== list?.length) {
      setSelectedItems(list);
    } else {
      setSelectedItems([]);
    }
  };

  const handleToggleItem = (index) => {
    // handleToggleItemCallback({
    //   selectedItems,
    //   setSelectedItems,
    //   index,
    // });

    let arr = selectedItems.slice().sort();
    if (arr.includes(index)) {
      const newArray = arr.filter((elementIndex) => elementIndex < index);
      setSelectedItems(newArray);
    } else {
      if (arr.some((ele) => ele < index)) {
        const firstElement = arr[0];
        for (let i = firstElement + 1; i < index; i++) {
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

  useEffect(() => {
    console.log({ selectedItems });
  }, [selectedItems]);

  useEffect(() => {
    if (defaultSelect && list.length) {
      setSelectedItems(defaultSelect);
    }
    if (defaultSelectAll && list.length) {
      handleSelectAll();
    }
  }, [list.length]);
  return {
    selectedItems,
    setSelectedItems,
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
    handleSelectAll,
    handleToggleItem,
    list,
    compareKey,
    nameKey,
  };
}
