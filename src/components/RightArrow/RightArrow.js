import React from "react";

const RightArrow = ({ className, color, ...rest }) => {
  return (
    <svg
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M14.373 0L13.4273 0.924422L17.4397 4.84636H0V6.15376H17.4396L13.4273 10.0756L14.373 11L20 5.5L14.373 0Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrow;
