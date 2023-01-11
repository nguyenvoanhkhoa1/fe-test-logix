import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  BorderLine,
  CustomerInformation,
  Input,
  RewardCard,
  SalesOrder,
  Select,
} from "../../components";
import { COLOR_PALETTE, REWARD_CARDS } from "../../configs/constants";
import routeUrls from "../../configs/route";

const CloseADeal = () => {
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
              href={REWARD_CARDS.closeADeal.href}
              title={REWARD_CARDS.closeADeal.title}
              reward={REWARD_CARDS.closeADeal.reward}
              color={REWARD_CARDS.closeADeal.color}
            />
            <div className="mt-2 text-subheader text-sm">
              <b>Note:</b>
              <p className=" font-light">
                Payout amount for both nominated and approved AE & SE on the
                Logo Account.
              </p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col">
            <div>
              <div>
                <h2>CLOSE A DATAMINR DEAL.</h2>
                <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
              </div>
              <h5 className=" mt-[30px]">
                Earn $1,000 for a deal size between $50,000-$100,000
                <br />
                Earn $2,500 for a deal size over $100,000
              </h5>
            </div>
            <div className="mt-11 body-small">
              <h4>WHICH ACCOUNTS ARE ELIGIBLE?</h4>
              <p className="mt-5">
                Dataminr IaaS Booking: The end user has not purchased a Dataminr
                IaaS offering from Dataminr within 36 months.
              </p>
              <p className="mt-[10px]">
                Product New Dataminr Account: The end user has not purchased ANY
                Dataminr product in the previous 36 months.
              </p>
              <p className="mt-[10px]">
                *Eligibility for Dataminr and product deals is separate. SPIFs
                stack only if end user is eligible for both
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container mt-12 mb-36">
        <SalesOrder />
        <CustomerInformation className="mt-9" />
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

export default CloseADeal;
