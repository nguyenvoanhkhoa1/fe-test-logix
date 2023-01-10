import React from "react";

const style = {
  "-webkit-appearance": "none",
  "-moz-appearance": "none",
  "text-overflow": "",
};

const Select = ({ className, name, id, placeholder, options, ...rest }) => {
  return (
    <div className="relative">
      <svg
        className="absolute bottom-[11px] right-[11px] pointer-events-none"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="#1C242A" />
      </svg>
      <select
        className={`mt-[15px] border-[0.5px] border-solid border-subheader w-full h-[42px] p-[10px] rounded-[5px] input-text focus:outline-none ${className}`}
        style={style}
        name={name}
        id={id}
        {...rest}
      >
        {!options.length && (
          <p className="py-2 pl-3 pr-9 text-gray-400">Không có dữ liệu</p>
        )}
        <option className="hidden" value="" disabled selected>
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option value={item?.value}>{item?.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
