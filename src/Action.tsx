import { ReactNode } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";

export const MotionData = [
  {
    id: 0,
    actionName: "Motion",
    color: "blue",
  },
  {
    id: 1,
    actionName: "Looks",
    color: "red",
  },
  {
    id: 2,
    actionName: "Sound",
    color: "pink",
  },
  {
    id: 3,
    actionName: "Event",
    color: "yellow",
  },
  {
    id: 4,
    actionName: "Control",
    color: "blue",
  },
  {
    id: 5,
    actionName: "Operator",
    color: "green",
  },
];

export type MotionDataType = {
  key: number;
  actionName: string;
  color: string;
};

export type EventDataType = {
  id: number;
  firstText: string;
  secondText: string | null;
  length: string;
  x: string;
  isIcon: boolean;
  icons: ReactNode | null;
  type: string;
  stroke: string;
  fill: string;
  handleOnDrag?: (e: React.DragEvent<HTMLDivElement>, blokType: string) => void;
  blockConst: string;
};

export type MidPartType = {
  handleOnDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handelDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  widgets: any;
};

export const EventType = [
  {
    id: 0,
    firstText: "move",
    secondText: "steps",
    length: "-2H150.36111a4",
    x: "16.120370864868164",
    isIcon: false,
    icons: null,
    type: "block1",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "MoveSteps",
  },
  {
    id: 1,
    firstText: "rotate",
    secondText: "degrees",
    length: "-2H177.36111a4",
    x: "24.120370864868164",
    isIcon: true,
    icons: <BsArrowClockwise />,
    type: "block1",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "rotatatedegreesanti",
  },
  {
    id: 2,
    firstText: "rotate",
    secondText: "degrees",
    length: "-2H177.36111a4",
    x: "24.120370864868164",
    isIcon: true,
    icons: <BsArrowCounterclockwise />,
    type: "block1",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "rotatedegreeclock",
  },
  {
    id: 3,
    firstText: "go to ",
    secondText: "random ",
    length: "-2H177.36111a4",
    x: "1.120370864868164",
    isIcon: false,
    icons: null,
    type: "block2",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "gotorandom",
  },
  {
    id: 4,
    firstText: "go to x : ",
    secondText: "y:",
    length: "-2H177.36111a4",
    x: "12.120370864868164",
    isIcon: false,
    icons: null,
    type: "block3",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "gotoxandy",
  },
  {
    id: 5,
    firstText: "change x by : ",
    secondText: null,
    length: "-2H177.36111a4",
    x: "12.120370864868164",
    isIcon: false,
    icons: null,
    type: "block4",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "changexby",
  },
  {
    id: 6,
    firstText: "set x to : ",
    secondText: null,
    length: "-2H177.36111a4",
    x: "12.120370864868164",
    isIcon: false,
    icons: null,
    type: "block4",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "setxto",
  },
  {
    id: 7,
    firstText: "change y by : ",
    secondText: null,
    length: "-2H177.36111a4",
    x: "12.120370864868164",
    isIcon: false,
    icons: null,
    type: "block4",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "changeyby",
  },
  {
    id: 8,
    firstText: "set y to : ",
    secondText: null,
    length: "-2H177.36111a4",
    x: "12.120370864868164",
    isIcon: false,
    icons: null,
    type: "block4",
    stroke: "#3373CC",
    fill: "#4C97FF",
    blockConst: "setyto",
  },
];

// export const LooksType = [
//   {
//     id: 0,
//     firstText: "say",
//     secondText: null,
//     length: "-2H143.36111a4",
//     x: "12.120370864868164",
//     isIcon: false,
//     icons: null,
//     type: "block4",
//     stroke: "#874CCC",
//     fill: "#874CCC",
//     blockConst: "say",
//   },
//   {
//     id: 1,
//     firstText: "think !!",
//     secondText: null,
//     length: "-2H143.36111a4",
//     x: "12.120370864868164",
//     isIcon: false,
//     icons: null,
//     type: "block4",
//     stroke: "#874CCC",
//     fill: "#874CCC",
//     blockConst: "think",
//   },
//   {
//     id: 2,
//     firstText: "change size ",
//     secondText: null,
//     length: "-2H163.36111a4",
//     x: "19.120370864868164",
//     isIcon: false,
//     icons: null,
//     type: "block4",
//     stroke: "#874CCC",
//     fill: "#874CCC",
//     blockConst: "changeSize"
//   },
//   {
//     id: 3,
//     firstText: "inc size ",
//     secondText: "%",
//     length: "-2H143.36111a4",
//     x: "10.120370864868164",
//     isIcon: false,
//     icons: null,
//     type: "block1",
//     stroke: "#874CCC",
//     fill: "#874CCC",
//     blockConst: "incsize",
//   },
//   {
//     id: 4,
//     firstText: "show",
//     secondText: null,
//     length: "-2H55.36111a4",
//     x: "1.120370864868164",
//     isIcon: false,
//     icons: null,
//     type: "block2",
//     stroke: "#874CCC",
//     fill: "#874CCC",
//     blockConst: "show",
//   },
//   {
//     id: 4,
//     firstText: "hide",
//     secondText: null,
//     length: "-2H55.36111a4",
//     x: "1.120370864868164",
//     isIcon: false,
//     icons: null,
//     type: "block2",
//     stroke: "#874CCC",
//     fill: "#874CCC",
//     blockConst: "hide",
//   },
// ];
