import { FaCircle } from "react-icons/fa";

function Control() {
  return (
    <div>
      <div className=" m-2">
        <div className=" flex justify-center">
          <FaCircle size={24} />
        </div>
        <div className="text-sm pt-1">Motion</div>
      </div>
    </div>
  );
}

export default Control;
