import React from "react";
import {TreeSelector} from "../utils/tree/TreeSelector";
import {useSweetTree} from "../hooks/useSweetTree";
import {subsidiaryList} from "./config/subsidiaryList";

export const ShowTree = () => {
  const treeSelect = useSweetTree({ list: subsidiaryList})
  return <div>

    <TreeSelector setIsDropdownOpen={} selectedItems={} />
  </div>;
};
