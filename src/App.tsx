import Control from "./components/Control";
import Details from "./components/Details";
import NavBar from "./components/NavBar";

function App() {
  const MotionData = [
    {
      id: 0,
      actionName: "Motion",
      color: "blue",
    },
    {
      id: 1,
      actionName: "Looks",
      color: "purlple",
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

  return (
    <>
      <div>
        <NavBar />
        <div className="bg-green-100">
          <Details />
          <div className=" flex">
            <div className="w-[4%]h-max-screen ">
              {MotionData.map((data) => {
                return <Control key={data.id} />;
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
        </div>
      </div>
    </>
  );
}

export default App;
