import React from 'react';
import { CheckBox, ChildMenuItemStyle, DottedLine } from './styleConfig';

export const ChildMenuItem = ({ name, handleSelectSub, parent, hasSub, subsidiary }) => {
  return (
    <ChildMenuItemStyle>
      <DottedLine />
      <CheckBox
        type="checkbox"
        checked={!!hasSub({ name, parent })}
        onChange={() => handleSelectSub(subsidiary, parent)}
      />
      <span>{name}</span>
    </ChildMenuItemStyle>
  );
};

export default {};
