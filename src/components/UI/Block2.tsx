import { EventDataType } from "../../Action";

function Block2({
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
            transform="translate(55.12036895751953,8)"
          ></g>
          <text
            className="blocklyText"
            y="2"
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0"
            x="19.560184478759766"
            transform="translate(8, 24)"
            stroke="#FFFFFF"
            fill="#FFFFFF"
          >
            {firstText}
          </text>

          <text
            className="text-md "
            y="2"
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0"
            x={`${x}`}
            transform="translate(80.12036895751953, 24)"
            stroke="#FFFFFF"
            fill="#FFFFFF"
          >
            {secondText}
          </text>
        </g>
      </svg>

      {icons != null && (
        <span className="absolute  text-white top-4 left-[134px] ">
          {icons}
        </span>
      )}
    </div>
  );
}

export default Block2;
