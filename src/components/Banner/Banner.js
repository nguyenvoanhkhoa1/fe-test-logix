import React from "react";

const Banner = ({
  fullScreenMobile = false,
  halfScreenMobile = false,
  imgUrl,
  children,
  ...rest
}) => {
  return (
    <div className="relative">
      <img
        className={`${fullScreenMobile ? "h-screen" : ""} ${
          halfScreenMobile ? "h-[50vh]" : ""
        } w-auto lg:w-full lg:h-auto object-cover object-center`}
        src={imgUrl}
        alt=""
      />
      <div className="absolute inset-0 box-border w-full h-full flex section-container items-center">
        {children}
      </div>
    </div>
  );
};

export default Banner;
