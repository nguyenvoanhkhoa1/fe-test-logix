import React from "react";

const BorderLine = ({ className, color, ...rest }) => {
  return (
    <div
      className={`${className} w-[94px] h-[6px] bg-${color}`}
      style={color?.includes("#") ? { backgroundColor: color } : {}}
    />
  );
};

export default BorderLine;
