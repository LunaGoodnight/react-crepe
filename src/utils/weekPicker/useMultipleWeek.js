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
    handleToggleItemCallback({
      selectedItems,
      setSelectedItems,
      index,
    });
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
