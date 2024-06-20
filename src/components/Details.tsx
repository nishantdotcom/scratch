import { FaRegFileCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
type Props = {};

function Details({}: Props) {
  return (
    <div className="  pt-4 flex justify-start ">
      <div className="border cursor-pointer  bg-slate-400 font-bold text-white flex gap-x-2 p-2 rounded-t-xl">
        Code
        <div>
          <FaRegFileCode size={22} />
        </div>
      </div>
      <div className="border cursor-pointer  bg-slate-400 font-bold text-white flex gap-x-2 p-2 rounded-t-xl">
        Costumes
        <div>
          <FaPaintBrush size={22} />
        </div>
      </div>
      <div className="border cursor-pointer  bg-slate-400 font-bold text-white flex gap-x-2 p-2 rounded-t-xl">
        Sound
        <div>
          <AiFillSound size={22} />
        </div>
      </div>
    </div>
  );
}

export default Details;
