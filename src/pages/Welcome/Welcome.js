import { Banner, BorderLine, RightArrow } from "../../components";
import React from "react";
import { useNavigate } from "react-router-dom";
import routeUrls from "../../configs/route";
import { COLOR_PALETTE } from "../../configs/constants";

const Welcome = () => {
  let navigate = useNavigate();
  return (
    <>
      <Banner imgUrl="images/banners/welcome.png" fullScreenMobile>
        <div className="flex flex-col text-white max-w-[509px]">
          <div>
            <h1 className=" max-w-[200px] md:max-w-[250px] lg:max-w-[331px]">
              Do MORE Get MORE
            </h1>
            <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
          </div>
          <div className="mt-5 sm:mt-10 subtitle-text">
            <p>
              DO MORE. GET MORE is the Dataminr partner incentive program that
              rewards Partner Sales Representatives for selling across the
              Dataminr portfolio and delivering solutions to our customers that
              matter.
            </p>
            <p className="mt-5 sm:mt-10">
              Enroll today to learn more about DO MORE. GET MORE rewards.
            </p>
          </div>
          <div className="mt-5 sm:mt-[50px] flex flex-col sm:flex-row gap-4 sm:gap-1">
            <button
              className="w-[200px] h-[60px] flex justify-center items-center gap-1 border-2 border-solid border-border_line button-text text-white button-hover color-line"
              onClick={() => navigate(`/${routeUrls.enrolNow.path}`)}
            >
              Enroll Now
              <RightArrow color="white" />
            </button>
            <button
              className="w-[200px] sm:w-[180px] h-[60px] flex justify-center items-center gap-1 border-2 border-solid border-border_line button-text text-white button-hover color-line"
              onClick={() => navigate(`/${routeUrls.login.path}`)}
            >
              Login
              <RightArrow color="white" />
            </button>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default Welcome;
