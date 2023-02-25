import React from "react";
import styled from "styled-components";
import {useSelect} from "../utils/select/useSelect";
import {Select} from "../utils/select/Select";

const WrapMenu = styled.div`
  width: 16rem;
`;

const sampleList = [
  {name: 'cuteLuna', value: 'q1123123'}
]

export const ShowSelect = () => {
  const select = useSelect({isGetNameByKey:true, list:sampleList, nameKey: 'name'})
  return (
    <WrapMenu>
      <Select {...select} />
    </WrapMenu>
  );
};
