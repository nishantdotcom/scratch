import Control from "./components/Control";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import { MotionData } from "./Action";
import Block from "./components/UI/Block";
import { EventType } from "./Action";
import Block2 from "./components/UI/Block2";
import Block3 from "./components/UI/Block3";

function App() {
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
            <div className="w-[18%] h-[540px] border pl-4 pt-2 ">
              <div className="flex justify-center font-semibold text-slate-800 m-2">
                Motions
              </div>

              {EventType.map((data) => {
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
                  />
                ) : (
                  <Block3
                    id={data.id}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    length={data.length}
                    x={data.x}
                    isIcon={data.isIcon}
                    icons={data.icons}
                    type={data.type}
                  />
                );
              })}
            </div>
            <div className="w-[36%] bg-yellow-300 h-[540px] rounded-r-lg">
              {" "}
              hii
            </div>
            <div className="w-[40%] bg-blue-300 h-[540px]  rounded-lg m-1">
              {" "}
              hii
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
