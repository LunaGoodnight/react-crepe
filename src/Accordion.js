import styled from "styled-components";
import { AccordionItem } from "./AccordionItem";

const AccordionWrapper = styled.div`
  font-size: 1.3rem;
  text-align: left;
`;
// https://www.w3schools.com/howto/howto_js_accordion.asp

export const Accordion = ({ list }) => {
  return (
    <AccordionWrapper>
      {list.map(({ childList, title }, index) => (
        <AccordionItem key={index} childList={childList} title={title} />
      ))}
    </AccordionWrapper>
  );
};
