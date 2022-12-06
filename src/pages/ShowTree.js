import React from "react";
import { TreeSelector } from "../utils/tree/TreeSelector";
import { useSweetTree } from "../hooks/useSweetTree";
import { subsidiaryList } from "./config/subsidiaryList";
import styled from "styled-components";

const WrapMenu = styled.div`
  width: 12rem;
`;

export const ShowTree = () => {
  const treeSelect = useSweetTree({ list: subsidiaryList });
  return (
    <WrapMenu>
      <TreeSelector {...treeSelect} />
    </WrapMenu>
  );
};
