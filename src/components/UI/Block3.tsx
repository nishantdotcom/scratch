import { EventDataType } from "../../Action";

function Block3({
  id,
  firstText,
  secondText,
  length,
  x,
  icons,
  stroke,
  fill,
  handleOnDrag,
  blockConst,
}: EventDataType) {
  return (
    <div
      className="relative"
      draggable
      key={id}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
        handleOnDrag?.(e, blockConst);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 62"
        width="153"
        height="60"
      >
        <g>
          <path
            stroke={`${stroke}`}
            fill={`${fill}`}
            fillOpacity="1"
            d={`M0,4A4,4 0 0,1 4,0H12c2,0 3,1 4,2l4,4c1,1 2,2 4,2h12c2,0 3,-1 4,-2l4,-4c1,-1 2,-2 4,${length},4 0 0,1 4,4v40a4,4 0 0,1 -4,4H48c-2,0 -3,1 -4,2l-4,4c-1,1 -2,2 -4,2h-12c-2,0 -3,-1 -4,-2l-4,-4c-1,-1 -2,-2 -4,-2H4a4,4 0 0,1 -4,-4z`}
          />
          <g
            data-id=",lkysxNSSFn:uV#]sWVU"
            data-argument-type="text number"
            data-shapes="argument round"
            transform="translate(68.12036895751953,8)"
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
              ></text>
            </g>
          </g>
          <text
            className="blocklyText"
            y="2"
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0"
            x="29.560184478759766"
            transform="translate(8, 24)"
            stroke="#FFFFFF"
            fill="#FFFFFF"
          >
            {firstText}
          </text>
          <path
            className="blocklyPath"
            style={{ visibility: "hidden" }}
            d=""
            fill="#3373CC"
          />
          <text
            className="text-md "
            y="2"
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0"
            x={`${x}`}
            transform="translate(110.12036895751953, 24)"
            stroke="#FFFFFF"
            fill="#FFFFFF"
          >
            {secondText}
          </text>
          <g
            data-id=",lkysxNSSFn:uV#]sWVU"
            data-argument-type="text number"
            data-shapes="argument round"
            transform="translate(130.12036895751953,8)"
          >
            <path
              className=""
              stroke="#3373CC"
              fill="#FFFFFF"
              fillOpacity="1"
              d="m 0,0 m 16,0 H 24 a 16 16 0 0 1 0 32 H 16 a 16 16 0 0 1 0 -32 z"
            />
          </g>
        </g>
      </svg>
      <input className=" absolute top-2.5 left-[59px] w-8 rounded-xl text-sm p-[3px]" />
      <input className="  absolute top-2.5 left-28 w-8 rounded-xl text-sm p-[3px]" />
      {icons != null && (
        <span className="absolute  text-white top-4 left-[134px] ">
          {icons}
        </span>
      )}
    </div>
  );
}

export default Block3;
