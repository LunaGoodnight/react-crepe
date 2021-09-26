import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ParentButton = styled.button`
  font-size: 1.3rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
  border: 0;
  background: #34435f;
  padding: 1rem;
  color: #fff;
  transition: 0.4s;
  &:hover {
    background: #4f6287;
  }
`;

const ChildItem = styled.div`
  cursor: pointer;
  background: #262a31;
  padding: 1rem;
  transition: 0.4s;
  color: #fff;
  &:hover {
    background: #343b46;
  }
`;

const Panel = styled.div`
  //height: ${(props) => (props.collapse ? "auto" : 0)};
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

export const AccordionItem = ({ title, childList }) => {
  const [collapse, setCollapse] = useState(false);
  const panelRef = useRef(null);
  useEffect(() => {
    if (!collapse) {
      panelRef.current.style.maxHeight = null;
    } else {
      panelRef.current.style.maxHeight = panelRef.current.scrollHeight + "px";
    }
  }, [collapse]);
  return (
    <>
      <ParentButton type="button" onClick={() => setCollapse((prev) => !prev)}>
        {title}
      </ParentButton>
      <Panel collapse={collapse} ref={panelRef}>
        {childList.map(({ title, path }, index) => (
          <Link key={index} to={path}>
            <ChildItem>{title}</ChildItem>
          </Link>
        ))}
      </Panel>
    </>
  );
};
