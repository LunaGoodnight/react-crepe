import { useState } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
`;
const AddButton = styled.button`
  padding: 1rem;
  border: 0;
  outline: none;
  border-radius: 5px;
  background: cornflowerblue;
  color: #fff;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 1rem;
  border: 0;
  outline: none;
  border-radius: 5px;
  background: darkcyan;
  color: #fff;
  cursor: pointer;
`;
export const InputElement = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <span>Miou</span>
      <InputStyle
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <DeleteButton>x</DeleteButton>
    </div>
  );
};

export const AddElement = () => {
  const [elementList, setElementList] = useState([""]);

  const handleAddElement = () => {
    setElementList((prev) => prev.concat([""]));
  };
  return (
    <div>
      <div>
        {elementList.map((x, index) => (
          <InputElement key={index} />
        ))}
      </div>
      <AddButton type="button" onClick={handleAddElement}>
        Add Element
      </AddButton>
    </div>
  );
};
