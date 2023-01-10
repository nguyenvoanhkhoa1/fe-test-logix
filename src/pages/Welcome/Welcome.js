import { Banner } from "../../components";
import React from "react";

const Welcome = () => {
  return (
    <>
      <Banner imgUrl="images/banners/welcome.png">
        <div className="flex flex-col text-white max-w-[509px]">
          <div>
            <h1 className="max-w-[331px]">Do MORE Get MORE</h1>
            <div className="mt-5 w-[94px] h-[6px] bg-border_line"></div>
          </div>
          <div className="mt-10 subtitle-text">
            <p>
              DO MORE. GET MORE is the Dataminr partner incentive program that
              rewards Partner Sales Representatives for selling across the
              Dataminr portfolio and delivering solutions to our customers that
              matter.
            </p>
            <p className="mt-10">
              Enroll today to learn more about DO MORE. GET MORE rewards.
            </p>
          </div>
          <div className="mt-[50px] flex gap-1">
            <button className="w-[200px] h-[60px] flex justify-center items-center gap-1 border-2 border-solid border-border_line button-text text-white">
              Enroll Now
              <img src="icons/right-arrow.svg" alt="" />
            </button>
            <button className="w-[180px] h-[60px] flex justify-center items-center gap-1 border-2 border-solid border-border_line button-text text-white">
              Login
              <img src="icons/right-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default Welcome;
