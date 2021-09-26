import { useRef } from "react";

export const PracticeRef = () => {
  const myRef = useRef();
  return <div ref={myRef}>for ref</div>;
};
