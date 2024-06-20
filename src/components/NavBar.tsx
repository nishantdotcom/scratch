import { FaFileAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
type Props = {};

function NavBar({}: Props) {
  return (
    <div className=" bg-purple-500 text-white font-medium    flex justify-between">
      <div className="flex justify-around ">
        <div className=" p-4 cursor-pointer hover:bg-purple-400 transition duration-150 ">
          Icon
        </div>
        <div className=" p-4 flex  gap-x-2  cursor-pointer hover:bg-purple-400 transition duration-150  ">
          File
          <div>
            <FaFileAlt size={22} />
          </div>
        </div>
        <div className=" p-4  flex  gap-x-2 cursor-pointer hover:bg-purple-400 transition duration-150 ">
          Setting
          <div>
            <FaGear size={22} />
          </div>
        </div>
        <div className=" p-4 flex gap-x-2 cursor-pointer hover:bg-purple-400 transition duration-150 ">
          Edit
          <div>
            <GrEdit size={22} />
          </div>
        </div>
      </div>
      <div className="flex justify-around  ">
        <div className=" p-4 cursor-pointer hover:bg-purple-400 transition duration-150 ">
          Login
        </div>
        <div className=" p-4 cursor-pointer hover:bg-purple-400 transition duration-150 ">
          Join Scatch
        </div>
      </div>
    </div>
  );
}

export default NavBar;
