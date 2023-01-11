import React from "react";
import { useNavigate } from "react-router-dom";
import { Banner, BorderLine, Input, RewardCard } from "../../components";
import { COLOR_PALETTE, REWARD_CARDS } from "../../configs/constants";
import routeUrls from "../../configs/route";

const SalesEnablement = () => {
  let navigate = useNavigate();
  return (
    <>
      <Banner imgUrl="images/banners/common.png" halfScreenMobile>
        <div className="text-white">
          <h1>Dataminr</h1>
          <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
        </div>
      </Banner>
      <section className="section-container mt-14 pb-20 border-b-[1px] border-solid border-[#E3E2E2]">
        <div className="grid grid-cols-12 gap-8">
          <div className=" col-span-4">
            <RewardCard
              href={REWARD_CARDS.salesEnablement.href}
              title={REWARD_CARDS.salesEnablement.title}
              reward={REWARD_CARDS.salesEnablement.reward}
              color={REWARD_CARDS.salesEnablement.color}
            />
            <div className="mt-2 text-subheader text-sm">
              <b>Note:</b>
              <p className=" font-light">
                Payout amount for both nominated and approved AE & SE on the
                Logo Account.
              </p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-[30px] ">
            <div>
              <h2>ACHIEVE YOUR FULL SELLING POTENTIAL</h2>
              <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
            </div>
            <p className="body-small">
              We offer sales certifications to help you identify sales
              opportunities and build your sales pipeline, engage your customers
              in the right conversations to uncover their business needs, and
              begin to qualify and validate these opportunities for Dataminr
              solutions.
            </p>
            <div>
              <div>
                <h4>STEP 1:</h4>
                <p className="mt-[10px] body-small">
                  Choose from the below options the course you wish to take and
                  complete.
                </p>
              </div>
              <div className="mt-5">
                <h4>STEP 2:</h4>
                <p className="mt-[10px] body-small">
                  Claim your SPIF below with your completion code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container mt-12 mb-36">
        <h4>Completion Code</h4>
        <Input className="max-w-xl" placeholder="Enter Code" type="text" />
        <button
          className="mt-10 h-[60px] w-[170px] bg-main flex justify-center items-center button-text text-white"
          onClick={() => navigate(`/${routeUrls.homePage.path}`)}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export default SalesEnablement;
