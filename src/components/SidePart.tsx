import CatIcon from "./UI/DragUI/CatIcon";

type Props = {};

function SidePart({}: Props) {
  return (
    <div className="flex-1 p-4 h-full overflow-auto border border-slate-400 rounded-lg ">
      <CatIcon />
    </div>
  );
}

export default SidePart;
