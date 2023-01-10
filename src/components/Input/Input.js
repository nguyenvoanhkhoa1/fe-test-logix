import React from "react";

const Input = ({
  className,
  placeholder,
  type = "text",
  value,
  onChange,
  ...rest
}) => {
  return (
    <input
      className={`mt-[15px] border-[0.5px] border-solid border-subheader w-full h-[42px] p-[10px] rounded-[5px] input-text focus:outline-none ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
