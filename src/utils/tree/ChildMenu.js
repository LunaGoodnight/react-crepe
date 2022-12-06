import styled from "styled-components";
import React, { useState } from "react";
import { CheckBox, ChildMenuName, CollapseIcon } from "./styleConfig";
import { ChildMenuItem } from "./ChildMenuItem";

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ChildMenu = ({
  item,
  hasAllSub,
  hasSub,
  handleSelectSub,
  selectChildMenu,
}) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <ChildWrapper>
      <ChildMenuName>
        <CollapseIcon onClick={() => setIsCollapse((prevState) => !prevState)}>
          {isCollapse ? "-" : "+"}
        </CollapseIcon>
        <Label>
          <CheckBox
            type="checkbox"
            checked={hasAllSub(item)}
            onChange={() => selectChildMenu(item)}
          />
          <span>{item.Name}</span>
        </Label>
      </ChildMenuName>
      {isCollapse &&
        item.Subsidiaries &&
        item.Subsidiaries.map((subsidiary, index) => (
          <ChildMenuItem
            key={index}
            subsidiary={subsidiary}
            name={subsidiary.OperatorId}
            parent={item.Name}
            hasSub={hasSub}
            handleSelectSub={handleSelectSub}
          />
        ))}
    </ChildWrapper>
  );
};

export default {};
