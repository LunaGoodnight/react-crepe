import React from "react";
import styled from "styled-components";

export const SelectWrapper = styled.div`
  cursor: pointer;
  position: relative;
  color: #000;
  width: 100%;

  > * {
    box-sizing: border-box;
  }
`;
export const StatusInput = styled.div`
  transition: all 0.3s ease 0s;
  display: block;
  padding-left: 0.7rem;

  height: 2.4rem;
  line-height: 2.4rem;
  width: 100%;
  outline: none;
  border-bottom: 1px solid gray;
  background: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-color: ${(props) => (props.isDropdownOpen ? "#4c6375" : "#bdbdbd")};
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background: dodgerblue;
    color: #fff;
  }
`;

export const CheckBox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0;
  margin-right: 0.8rem;
`;
export const DropDownList = styled.div`
  border: 1px solid gray;
  padding-bottom: 0.5rem;
  position: absolute;
  width: 100%;
  background: #fff;
  z-index: 2;
  top: 3.5rem;
  max-height: 30rem;
  border-radius: var(--borderRadius);
  overflow-y: scroll;
  //overflow-x: hidden;

  ::-webkit-scrollbar-thumb {
    background-color: rgb(111, 111, 111);
    border-radius: var(--borderRadius);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #8f8f8f;
    border-radius: var(--borderRadius);
  }
`;

export const MultipleWeekSelect = ({
  isDropdownOpen,
  setIsDropdownOpen,
  wrapper,
  list = [],
  selectedItems,
  handleSelectAll,
  handleToggleItem,

  nameKey = "",
}) => {
  return (
    <SelectWrapper
      ref={wrapper}
      onClick={() => setIsDropdownOpen((prevState) => !prevState)}
    >
      <StatusInput isDropdownOpen={isDropdownOpen}>
        {selectedItems?.length === list?.length
          ? "All"
          : selectedItems.map((x) => x[nameKey]).join(",")}
      </StatusInput>
      {isDropdownOpen && (
        <DropDownList onClick={(e) => e.stopPropagation()}>
          <Label>
            <CheckBox
              type="checkbox"
              checked={selectedItems?.length === list?.length}
              onChange={handleSelectAll}
            />
            <span>All</span>
          </Label>

          {list &&
            list.map((item, index) => {
              return (
                <Label key={index}>
                  <CheckBox
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleToggleItem(index)}
                  />
                  <span>{item[nameKey]}</span>
                </Label>
              );
            })}
        </DropDownList>
      )}
    </SelectWrapper>
  );
};
