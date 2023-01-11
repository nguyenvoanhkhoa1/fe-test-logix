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
      className={`mt-[15px] border-[0.5px] hover:border-2 border-solid border-subheader w-full h-[42px] p-[10px] rounded-[5px] input-text focus:outline-indigo-700 ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
