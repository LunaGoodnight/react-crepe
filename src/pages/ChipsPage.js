import styled from "styled-components";
import React, { useState } from "react";
import { chipsOptionList } from "./config/chipsOptionList";

const Container = styled.div`
  flex-wrap: wrap;
  border-bottom: 1px solid aqua;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  color: aqua;
  padding: 1rem;
  gap: 1rem;
`;

const SmallChips = styled.div`
  background: #e3e3e3;
  color: #555555;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 50px;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  span {
    font-size: 0.9rem;
    cursor: pointer;
    color: gray;
  }
`;
const InputBox = styled.input`
  padding: 0.5rem 0.6rem;
  border: none;
  background: #ededed;
  &:focus {
    outline: none;
  }
  &::-webkit-calendar-picker-indicator {
    display: none !important;
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
    if (e.code === "Enter" && e.target.value.trim()) {
      setArr((prev) => prev.concat(e.target.value.trim()));
      setInput("");
    }
  };
  const handleRemoveChips = (i) => {
    setArr((prev) => prev.filter((item, index) => index !== i));
  };
  return (
    <Container>
      {arr.map((x, i) => (
        <SmallChips key={i}>
          <div>{x}</div>
          <span className="material-icons" onClick={() => handleRemoveChips(i)}>
            cancel
          </span>
        </SmallChips>
      ))}
      <InputBox
        placeholder="input value here"
        list="cute"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyEvent(e)}
      />
      <datalist id="cute">
        {chipsOptionList.map((x, i) => {
          const { value } = x;
          if (arr.includes(value)) {
            return null;
          }
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
