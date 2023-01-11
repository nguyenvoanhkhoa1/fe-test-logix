import React from "react";

const Banner = ({ imgUrl, children, ...rest }) => {
  return (
    <div className="relative">
      <img
        className="w-auto lg:w-full h-screen lg:h-auto object-cover object-center"
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
