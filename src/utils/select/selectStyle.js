import styled from 'styled-components';

export const SelectWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  font-size: 0.8rem;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NoOptions = styled.div`
  color: gray;

  padding: 0.5rem;
  line-height: 1;
`;
export const ListItem = styled.div`
  padding: 0.6rem 0.5rem 0.6rem 0.8rem;
  line-height: 1;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: dodgerblue;
    color: #fff;
  }
`;



export const TopInput = styled.input`
  transition: all 0.3s;
  display: block;
  padding: 0.62rem 0 0.62rem 0.8rem;
  width: 100%;
  outline: none;
  border: ${(props) => (props.inputLike ? 'none' : '0.1rem solid #9d9d9d')};
  border-bottom: ${(props) =>
    props.inputLike ? '0.1rem solid #9e9e9e' : '0.1rem solid #9d9d9d'};
  &:focus {
    border-color: #26a69a;
    box-shadow: ${(props) =>
    props.inputLike ? '0 0.1rem #26a69a' : '0.1rem 0.1rem #26a69a'};
    background: #efefef;
  }
  &::placeholder {
    color: lightgray;
  }
`;

export const DropDown = styled.div`
  top: 3rem;
  height: 12rem;
  position: absolute;
  z-index: 2;
  border: 0.1rem solid darkgray;
  width: 100%;
  overflow-y: scroll;
  background: #fff;
  border-radius: 0 0 0.3rem 0.3rem;
  color: #000;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 1.6rem;
  font-family: monospace;
  cursor: pointer;
  display: flex;
  height: 100%;
  bottom: 0;
  line-height: 1;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  z-index: 1;
  background: none;
  border: none;
  svg {
    font-size: 0.8rem;
  }
`;

export const WrapTriangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
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

export const ShowText = styled.div`
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 75%;
  color: #000;
  // below for text overflow ...

  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 0;
  font-size: 1rem;
  pointer-events: none;
`;
