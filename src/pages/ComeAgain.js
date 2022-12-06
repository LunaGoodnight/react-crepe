import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 30%;
  height: 10vh;
`;

export const ComeAgain = () => {
  useEffect(() => {
    if (!sessionStorage.hasCome) {
      // Store data
      sessionStorage.setItem("hasCome", "true");

      setTimeout(() => {
        window.location.replace("https://react-crepe.pinkjelly.org/");
      }, 5000);
    }
  }, []);
  return (
    <Wrapper>
      {sessionStorage.hasCome ? <RightUi /> : "Come Again If you can."}
    </Wrapper>
  );
};

const RightUi = () => {
  return (
    <div>
      <h2>Hi</h2>
      <img src="https://i.imgur.com/6uK8qnZ.jpg" alt="cat" />
    </div>
  );
};
export default {};
