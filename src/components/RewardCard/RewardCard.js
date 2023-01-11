import React from "react";
import { Link } from "react-router-dom";

const RewardCard = ({ className, href, title, reward, color, ...rest }) => {
  return (
    <Link
      className=" max-w-full relative cursor-pointer hover:shadow-2xl transition-all"
      to={href}
    >
      <div
        className={`w-full pb-[100%]`}
        style={{
          background: color,
        }}
      />
      <div className="absolute inset-0 box-border w-full h-full flex flex-col justify-center items-center text-white">
        <span className=" text-[40px] font-bold">{reward}</span>
        <span className="mt-[10px] text-2xl font-semibold">{title}</span>
      </div>
    </Link>
  );
};

export default RewardCard;
