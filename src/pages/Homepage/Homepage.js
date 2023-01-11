import React from "react";
import { Banner, BorderLine, RewardCard } from "../../components";
import { COLOR_PALETTE, REWARD_CARDS } from "../../configs/constants";
import routeUrls from "../../configs/route";

const Homepage = () => {
  return (
    <>
      <Banner imgUrl="images/banners/homepage.png" halfScreenMobile>
        <div className="text-white">
          <h1 className=" max-w-[200px] md:max-w-[250px] lg:max-w-[331px]">
            Do MORE Get MORE
          </h1>
          <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
        </div>
      </Banner>
      <section className="section-container mt-14 mb-60">
        <div className="flex flex-col items-center">
          <div className="max-w-5xl text-center text-subheader">
            <h3>EARN REWARDS WHEN YOU PARTNER WITH DATAMINR</h3>
            <BorderLine
              className="mt-5 mx-auto"
              color={COLOR_PALETTE.borderLine}
            />
          </div>
          <span className="mt-7 font-light text-[22px]">
            Click below to find out more.
          </span>
        </div>
        <div className="mt-9 grid grid-cols-12 gap-[30px]">
          {Object.keys(REWARD_CARDS).map((item, index) => (
            <div className=" col-span-4">
              <RewardCard
                href={REWARD_CARDS[item].href}
                title={REWARD_CARDS[item].title}
                reward={REWARD_CARDS[item].reward}
                color={REWARD_CARDS[item].color}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
