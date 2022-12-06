import { PracticeRef } from "../PracticeRef";
import { AddElement } from "../AddElement";
import { ChipsPage } from "../ChipsPage";
import { ComeAgain } from "../ComeAgain";

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
    title: "Simple Function",
    childList: [
      {
        title: "Come Again",
        path: "/ComeAgain",
        page: ComeAgain,
      },
      { title: "Add Element", path: "/add-element", page: AddElement },
      { title: "Chips", path: "/chips", page: ChipsPage },
      { title: "sea", path: "/" },
      { title: "pool", path: "/" },
    ],
  },
];
