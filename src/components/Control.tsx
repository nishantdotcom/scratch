import { FaCircle } from "react-icons/fa";
import { MotionDataType } from "../Action";
function Control({ key, actionName, color }: MotionDataType) {
  return (
    <div
      className=" p-2   hover:bg-gray-200 cursor-pointer hover:text-blue-400 h-100%"
      key={key}
    >
      <div className={`flex justify-center  `}>
        <FaCircle size={24} color={color} className="border-2 rounded-full" />
      </div>
      <div className="text-sm m-1 flex justify-center  ">{actionName}</div>
    </div>
  );
}

export default Control;
