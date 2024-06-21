import Control from "./components/Control";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import { MotionData } from "./Action";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="bg-grey-100">
          <Details />
          <div className=" flex">
            <div className="w-[4%]h-max-screen ">
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
            <div className="w-[16%] bg-green-300 h-screen "> hii</div>
            <div className="w-[40%] bg-yellow-300 h-screen rounded-r-lg">
              {" "}
              hii
            </div>
            <div className="w-[40%] bg-blue-300 h-screen  rounded-lg m-1">
              {" "}
              hii
            </div>
          </div>
          <div className=" p-10">
            <svg
              width="200"
              height="100"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                data-id="motion_movesteps"
                className="blocklyDraggable"
                data-shapes="stack"
                data-category="motion"
                transform="translate(12,64)"
              >
                <path
                  className="blocklyPath blocklyBlockBackground"
                  stroke="#3373CC"
                  fill="#4C97FF"
                  fillOpacity="1"
                  d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 145.36111068725586 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"
                />
                <g
                  data-id=",lkysxNSSFn:uV#]sWVU"
                  data-argument-type="text number"
                  data-shapes="argument round"
                  transform="translate(55.12036895751953,8)"
                >
                  <path
                    className="blocklyPath blocklyBlockBackground"
                    stroke="#3373CC"
                    fill="#FFFFFF"
                    fillOpacity="1"
                    d="m 0,0 m 16,0 H 24 a 16 16 0 0 1 0 32 H 16 a 16 16 0 0 1 0 -32 z"
                  />
                  <g
                    className="blocklyEditableText"
                    transform="translate(8, 0)"
                    style={{ cursor: "text" }}
                  >
                    <text
                      className="blocklyText"
                      x="12"
                      y="18"
                      dominantBaseline="middle"
                      dy="0"
                      textAnchor="middle"
                    >
                      10
                    </text>
                  </g>
                </g>
                <text
                  className="blocklyText"
                  y="2"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  dy="0"
                  x="19.560184478759766"
                  transform="translate(8, 24)"
                >
                  move
                </text>
                <path
                  className="blocklyPath"
                  style={{ visibility: "hidden" }}
                  d=""
                  fill="#3373CC"
                />
                <text
                  className="blocklyText"
                  y="2"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  dy="0"
                  x="19.120370864868164"
                  transform="translate(103.12036895751953, 24)"
                >
                  steps
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
