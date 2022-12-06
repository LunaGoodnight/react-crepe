import styled from 'styled-components';

export const DropDown = styled.div`
  max-height: 12rem;
  position: absolute;
  top: 2.2rem;
  width: 100%;
  overflow-y: scroll;
  z-index: 2;
  background: #fff;
  border: 1px solid gray;
  transition: ease 0.1s;
  border-radius: 3px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  // 滑动的那条
  ::-webkit-scrollbar-thumb {
    background-color: #6f6f6f;
    border-radius: 10px;
  }
  // 底層
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: 0.8rem;
  color: #000;
`;
export const CheckAllLabel = styled.label`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid darkgray;
`;

export const ChildMenuName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid darkgray;
`;
export const DottedLine = styled.div`
  width: 0.7rem;
  height: 0.5rem;
  border-left: 2px dotted darkgrey;
  border-bottom: 2px dotted darkgrey;
  margin-left: 0.6rem;
  margin-right: 0.7rem;
`;
export const ChildMenuItemStyle = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0 0.5rem 2.1rem;
  border-bottom: 1px solid darkgray;
`;
export const CheckBox = styled.input`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 0;
  margin-right: 0.5rem;
`;
export const CollapseIcon = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  border: 1px solid gray;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1rem;
  }
`;

export const TopText = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 0.5rem;
`;

export const Triangle = styled.div`
  transform: ${(props) => (props.isDropdownOpen ? 'rotate(180deg)' : 'none')};
  transition: all 0.2s;
  width: 0;
  height: 0;
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  border-top: 0.3rem solid #1c3d5f;
`;
