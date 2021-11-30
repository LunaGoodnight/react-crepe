import React, { useState } from "react";
import styled from "styled-components";
import { chipsOptionList } from "./config/chipsOptionList";

const Container = styled.div`
  border-bottom: 1px solid aqua;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #7347ad;
  color: aqua;
  padding: 1rem;
  gap: 1rem;
`;

const SmallChips = styled.div`
  background: #e3e3e3;
  color: #555555;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 50px;
`;
const InputBox = styled.input`
  &:focus {
    outline: none;
  }
`;
const DataOptions = styled.option`
  padding: 1rem 0;
  background: pink;
`;

export const ChipsPage = () => {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState("");
  const handleKeyEvent = (e) => {
    // debugger;
    if (e.code === "Enter") {
      if (e.code === "Enter" && e.target.value.trim()) {
        setArr((prev) => prev.concat(e.target.value));
        setInput("");
      }
    }
  };
  return (
    <Container>
      {arr.map((x, i) => (
        <SmallChips key={i}>{x}</SmallChips>
      ))}
      <InputBox
        list="cute"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyEvent(e)}
      />
      <datalist id="cute">
        {chipsOptionList.map((x, i) => {
          const { value } = x;
          return (
            <DataOptions key={i} value={value}>
              {value}
            </DataOptions>
          );
        })}
      </datalist>
    </Container>
  );
};
