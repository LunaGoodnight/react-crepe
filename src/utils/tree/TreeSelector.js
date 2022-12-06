import React from "react";

import styled from "styled-components";
import {
  CheckAllLabel,
  CheckBox,
  SelectWrapper,
  TopText,
  Triangle,
  DropDown,
} from "./styleConfig";
import { ChildMenu } from "./ChildMenu";

export const TopTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid darkgray;
  align-items: center;
  font-size: 0.8rem;
  background: white;
  overflow: hidden;
  height: 1.9rem;
`;

const WrapTriangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;

const Placeholder = styled.span`
  color: lightgray;
`;

export const TreeSelector = ({
  isDropdownOpen = true,
  setIsDropdownOpen,
  wrapper,
  checkAllSelected,
  toggleSelectAll,
  list = [],
  selectedItems,
  hasAllSub,
  handleSelectSub,
  hasSub,
  selectChildMenu,
  placeholder,
}) => {
  return (
    <SelectWrapper ref={wrapper}>
      <TopTextBlock onClick={() => setIsDropdownOpen((prev) => !prev)}>
        <TopText>
          {selectedItems.length ? (
            selectedItems.reduce((a, c) => a.concat(c.Name), []).join()
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
        </TopText>
        <WrapTriangle>
          <Triangle isDropdownOpen={isDropdownOpen} />
        </WrapTriangle>
      </TopTextBlock>
      {isDropdownOpen && (
        <DropDown>
          <CheckAllLabel>
            <CheckBox
              type="checkbox"
              checked={!!checkAllSelected()}
              onChange={toggleSelectAll}
            />
            <span>All</span>
          </CheckAllLabel>
          {list.map((item, index) => {
            return (
              <ChildMenu
                hasSub={hasSub}
                hasAllSub={hasAllSub}
                handleSelectSub={handleSelectSub}
                key={index}
                item={item}
                selectedItems={selectedItems}
                selectChildMenu={selectChildMenu}
              />
            );
          })}
        </DropDown>
      )}
    </SelectWrapper>
  );
};



export default {};
