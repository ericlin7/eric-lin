import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  strokeColor?: string;
  className?: string;
}

function CalendarIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill={props.color}
      stroke={props.strokeColor}
      className={props.className}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        ry="2"
        fill={props.color}
        stroke={props.strokeColor}
        strokeWidth="1"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke={props.strokeColor}
        strokeWidth="1.5"
      />
      <line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        stroke={props.strokeColor}
        strokeWidth="1.5"
      />
      <line
        x1="3"
        y1="10"
        x2="21"
        y2="10"
        stroke={props.strokeColor}
        strokeWidth="1.5"
      />
      <circle cx="7.5" cy="14" r="0.5" fill={props.strokeColor} />
      <circle cx="12" cy="17.5" r="0.5" fill={props.strokeColor} />
      <circle cx="16.5" cy="14" r="0.5" fill={props.strokeColor} />
      <circle cx="7.5" cy="17.5" r="0.5" fill={props.strokeColor} />
      <circle cx="12" cy="14" r="0.5" fill={props.strokeColor} />
      <circle cx="16.5" cy="14" r="0.5" fill={props.strokeColor} />
    </svg>
  );
}

export default CalendarIcon;
