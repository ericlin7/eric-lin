import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  strokeColor?: string;
  className?: string;
}

function RightArrow(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill={props.color}
      stroke={props.strokeColor}
      strokeWidth="1.5"
      className={props.className}
    >
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke={props.strokeColor}
        strokeWidth="1.5"
      />
      <polyline
        points="15 6 21 12 15 18"
        fill="none"
        stroke={props.strokeColor}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default RightArrow;
