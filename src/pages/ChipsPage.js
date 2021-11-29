import React, { useState } from "react";
import styled from "styled-components";

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

const optionsList = [
  { value: "cute" },
  { value: "apple" },
  { value: "banana" },
  { value: "kiwi" },
  { value: "purple" },
  { value: "green" },
];
export const ChipsPage = () => {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState("");
  const handleKeyEvent = (e) => {
    // debugger;
    if (e.code === "Enter") {
      if (e.code === "Enter" && e.target.value.trim()) {
        console.log(e.code);
        setArr((prev) => prev.concat(e.target.value));
        setInput("");
      }
    }
  };
  const handleOptionsEvent = (e, value) => {
    console.log({ value });
    console.log({ e });
    debugger;
    if (e.code === "Enter") {
      debugger;
      // if (e.code === "Enter" && e.target.value.trim()) {
      //   console.log(e.code);
      //   setArr((prev) => prev.concat());
      //   setInput("");
      // }
    }
  };
  return (
    <Container>
      {arr.map((x) => (
        <SmallChips key={x}>{x}</SmallChips>
      ))}
      <input
        list="cute"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyEvent(e)}
        // onKeyDown={(e) => setArr((prev) => prev.concat(e.target.value))}
      />
      <datalist id="cute">
        {optionsList.map((x, i) => {
          const { value } = x;
          return (
            <option
              key={i}
              onKeyDown={(e) => handleOptionsEvent(e, value)}
              value={value}
            >
              {value}
            </option>
          );
        })}
      </datalist>
    </Container>
  );
};
