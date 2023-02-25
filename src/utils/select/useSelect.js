import { useCallback, useEffect, useRef, useState } from 'react';
import { useClickOutside} from "../../hooks/useClickOutside";

export const useSelect = ({
  isGetNameByKey = false,
  nameKey = '',
  list,
  defaultItem = null,
  defaultDropDownOpen = false,
  placeholder = '',
  defaultSelectFirst = false,
  inputLike = false,
  alwaysShowDeleteButton = true,
})  => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const [isDropdownOpen, setIsDropdownOpen] = useState(defaultDropDownOpen);

  const inputRef = useRef(null);
  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);

  const handleClearValue = (e) => {
    e.stopPropagation();
    setSearchInput('');
    setSelectedItem(null);
  };
  const handleClickItem = (e, item) => {
    setIsDropdownOpen(false);
    setSearchInput('');
    setSelectedItem(item);
    e.stopPropagation();
  };

  useEffect(() => {
    if (defaultSelectFirst && list.length) {
      setSelectedItem(list[0]);
    }
  }, [list.length, defaultSelectFirst]);
  useEffect(() => {
    return () => {
      setIsDropdownOpen(defaultDropDownOpen);
    };
  }, [defaultDropDownOpen]);

  return {
    selectedItem,
    setSelectedItem,
    searchInput,
    setSearchInput,
    handleClearValue,
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
    list,
    inputRef,
    placeholder,
    inputLike,
    alwaysShowDeleteButton,
    nameKey,
    isGetNameByKey,
    handleClickItem,
  };
}

export default {};
