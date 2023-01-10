import React from "react";
import { Banner, BorderLine, RewardCard } from "../../components";
import { COLOR_PALETTE } from "../../configs/constants";

const Homepage = () => {
  return (
    <>
      <Banner imgUrl="images/banners/homepage.png">
        <div className="text-white">
          <h1 className="max-w-[331px]">Do MORE Get MORE</h1>
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
          <div className=" col-span-4">
            <RewardCard
              title="Sales Enablement"
              reward="$25"
              color={COLOR_PALETTE.logo}
            />
          </div>
          <div className=" col-span-4">
            <RewardCard title="Account Mapping" reward="$100" color="#895737" />
          </div>
          <div className=" col-span-4">
            <RewardCard
              title="APPOINTMENT SETTING"
              reward="$250"
              color="#01A982"
            />
          </div>
          <div className=" col-span-4">
            <RewardCard title="Complete a Demo" reward="$250" color="#4A4E69" />
          </div>
          <div className=" col-span-4">
            <RewardCard title="Register a Deal" reward="$500" color="#00739D" />
          </div>
          <div className=" col-span-4">
            <RewardCard
              title="Close a Deal"
              reward="Up to $2000"
              color="#EE9B00"
            />
          </div>
          <div className=" col-span-4">
            <RewardCard
              title="obtain a new logo"
              reward="Up to $5000"
              color={COLOR_PALETTE.main}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
