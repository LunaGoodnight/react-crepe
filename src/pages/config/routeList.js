import { PracticeRef } from "../PracticeRef";
import { AddElement } from "../AddElement";
import { ChipsPage } from "../ChipsPage";
import { ComeAgain } from "../ComeAgain";
import { ShowTree } from "../ShowTree";
import {ShowSelect} from "../ShowSelect";
import {LoadingEffect} from "../LoadingEffect";

export const routeList = [
  {
    title: "Practice",
    childList: [
      {
        title: "Practice Ref",
        path: "/practice-ref",
        page: PracticeRef,
      },
    ],
  },
  {
    title: "Simple Component",
    childList: [
      {
        title: "Come Again",
        path: "/ComeAgain",
        page: ComeAgain,
      },
      { title: "Add Element", path: "/add-element", page: AddElement },
      { title: "Chips", path: "/chips", page: ChipsPage },
      { title: "Tree Select", path: "/tree", page: ShowTree },
      { title: "Sweet Select", path: "/select", page: ShowSelect },
      { title: "Loading", path: "/select", page: LoadingEffect },
      { title: "pool", path: "/" },
    ],
  },
];
