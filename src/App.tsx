import Control from "./components/Control";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import { MotionData } from "./Action";
import Block from "./components/UI/Block";
import { EventType } from "./Action";
import Block2 from "./components/UI/Block2";
import Block3 from "./components/UI/Block3";
import Block4 from "./components/UI/Block4";
import { LooksType } from "./Action";
import MidPart from "./components/MidPart";
import { useState } from "react";
import SidePart from "./components/SidePart";
function App() {
  const [widgets, setWidgets] = useState<any>([]);
  const handleOnDrag = (e: React.DragEvent<HTMLDivElement>, x: string) => {
    //  console.log(x);
    if (x != "") {
      e.dataTransfer.setData("widgetType", x);
    }
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const widgetTypeVal = e.dataTransfer.getData("widgetType");
    if (widgetTypeVal != "") {
      setWidgets([...widgets, widgetTypeVal]);
    }
  };
  const handelDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <NavBar />
        <div className="bg-grey-100">
          <Details />
          <div className=" flex">
            <div className="w-[6%]   h-[540px] ">
              {MotionData.map((data) => {
                return (
                  <Control
                    key={data.id}
                    actionName={data.actionName}
                    color={data.color}
                  />
                );
              })}
            </div>
            <div className="w-[18%] h-[540px] border pl-4 pt-2  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
              <div className="flex justify-center font-semibold text-slate-800 m-2">
                Motion
              </div>

              {EventType.map((data) => {
                // return data.type == "block1" ? (
                //   <Block
                //     id={data.id}
                //     firstText={data.firstText}
                //     secondText={data.secondText}
                //     length={data.length}
                //     x={data.x}
                //     isIcon={data.isIcon}
                //     icons={data.icons}
                //     type={data.type}
                //     stroke={data.stroke}
                //     fill={data.fill}
                //     handleOnDrag={handleOnDrag}
                //     blockConst={data.blockConst}
                //   />
                // ) : (
                //   <></>
                // );

                return data.type == "block1" ? (
                  <Block
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                ) : data.type == "block2" ? (
                  <Block2
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                ) : data.type == "block3" ? (
                  <Block3
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                ) : (
                  <Block4
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                );
              })}

              <div className="flex justify-center font-semibold text-slate-800 m-2">
                Looks
              </div>
              {LooksType.map((data) => {
                return data.type == "block4" ? (
                  <Block4
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                ) : data.type == "block1" ? (
                  <Block
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                ) : data.type == "block2" ? (
                  <Block2
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                    stroke={data.stroke}
                    fill={data.fill}
                    handleOnDrag={handleOnDrag}
                    blockConst={data.blockConst}
                  />
                ) : (
                  <>hi</>
                );
              })}
              <div className="flex justify-center font-semibold text-slate-800 m-2">
                Sound
              </div>
              <div className="flex justify-center font-semibold text-slate-800 m-2">
                Event
              </div>
              <div className="flex justify-center font-semibold text-slate-800 m-2">
                Control
              </div>
            </div>
            <div className="w-[36%] h-[540px] rounded-r-lg">
              <MidPart
                handleOnDrop={handleOnDrop}
                handelDragOver={handelDragOver}
                widgets={widgets}
              />
            </div>
            <div className="w-[40%]  h-[540px]  rounded-lg m-1">
              <SidePart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
