import { EventDataType, EventType } from "../Action";
import { MidPartType } from "../Action";
import Block from "./UI/Block";
import Block2 from "./UI/Block2";
import Block3 from "./UI/Block3";
import Block4 from "./UI/Block4";

function MidPart({ handleOnDrop, handelDragOver, widgets }: MidPartType) {
  console.log(widgets);
  const BlockData: any = [];

  widgets.map((data: any) => {
    const y = EventType.filter((x) => {
      return x.blockConst == data;
    });

    if (y != undefined) {
      BlockData.push(y[0]);
    }
  });

  return (
    <div
      className="flex-1 p-4 h-full overflow-auto border border-slate-400 rounded-lg m-2"
      onDrop={handleOnDrop}
      onDragOver={handelDragOver}
      key={100}
    >
      {BlockData.map((data: EventDataType) => {
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
            blockConst={data.blockConst}
          />
        );
      })}
    </div>
  );
}

export default MidPart;
