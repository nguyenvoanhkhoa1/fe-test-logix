import React, { useState } from "react";
import { useOutsideClick } from "../../hooks";

const Select = ({
  options,
  value,
  onChange,
  className,
  name,
  id,
  placeholder,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const handleClickOutside = () => {
    setOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  const handleChange = (selected) => {
    setSelectedItem(selected);
    setOpen(false);
    if (typeof onChange === "function") {
      onChange(selected);
    }
  };
  return (
    <div className="relative">
      <svg
        className={`absolute bottom-[11px] right-[11px] pointer-events-none ${
          open ? "origin-center rotate-180" : ""
        } transition-all duration-300`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="#1C242A" />
      </svg>
      <button
        className={`mt-[15px] border-[0.5px] border-solid border-subheader w-full h-[42px] p-[10px] rounded-[5px] overflow-hidden ${
          open ? "border-indigo-700 border-2" : ""
        } input-text text-left box-border ${className}`}
        name={name}
        id={id}
        onClick={() => setOpen(true)}
        {...rest}
      >
        {selectedItem?.label ?? placeholder}
      </button>
      <ul
        ref={ref}
        className={`z-10 ${
          open ? " opacity-100" : "opacity-0 pointer-events-none"
        } absolute w-full bg-white rounded-[5px] py-5 shadow-[0px_0px_5px_black] transition-all duration-300`}
      >
        {!options?.length && <li className="p-2">No Data</li>}
        {options?.map((item, index) => (
          <li
            className={` transition-all duration-300 ${
              selectedItem?.value === item?.value ? "bg-[#C4C4C41A]" : ""
            } px-10 py-2 hover:bg-[#C4C4C41A] cursor-pointer`}
            id={item?.value}
            onClick={() => handleChange(item)}
          >
            {item?.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
