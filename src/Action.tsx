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
  secondText: string;
  length: string;
  x: string;
  isIcon: boolean;
  icons: ReactNode | null;
  type: string;
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
  },
];
