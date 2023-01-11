import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  BorderLine,
  CustomerInformation,
  Input,
  RewardCard,
} from "../../components";
import { COLOR_PALETTE, REWARD_CARDS } from "../../configs/constants";
import routeUrls from "../../configs/route";

const DealRegistration = () => {
  let navigate = useNavigate();
  return (
    <>
      <Banner imgUrl="images/banners/common.png">
        <div className="text-white">
          <h1 className="max-w-[331px]">Dataminr</h1>
          <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
        </div>
      </Banner>
      <section className="section-container mt-14 pb-20 border-b-[1px] border-solid border-[#E3E2E2]">
        <div className="grid grid-cols-12 gap-8">
          <div className=" col-span-4">
            <RewardCard
              href={REWARD_CARDS.dealRegistration.href}
              title={REWARD_CARDS.dealRegistration.title}
              reward={REWARD_CARDS.dealRegistration.reward}
              color={REWARD_CARDS.dealRegistration.color}
            />
            <div className="mt-2 text-subheader text-sm">
              <b>Note:</b>
              <p className=" font-light">
                Payout amount for both nominated and approved AE & SE on the
                Logo Account.
              </p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-[30px]">
            <div>
              <h2>REGISTER A DEAL WITH THE DATMINR TEAM</h2>
              <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
            </div>
            <div className="body-small">
              <p className="mt-[10px]">
                Deal registration is an agreement between Dataminr and our
                Channel Partners (“Partner”). When a deal is confirmed by both
                parties, it is a recognition that we will go to the customer
                with a united front and either win or lose together.
              </p>
              <p className="mt-[10px]">
                As part of our commitment to you, when you register a deal and
                agree to lead with Dataminr, we offer the highest discounts
                available on qualifying transactions. Beyond a discount, we are
                also committed to other marketing and sales support to make sure
                that we are successful together.
              </p>
              <p className="mt-[10px]">
                We require that you register the Deal directly on our Partner
                Portal here. And review the T&C’s for Deal Registration.
              </p>
              <p className="mt-[10px]">
                Dataminr will approve or reject submitted deal registrations
                within three (3) business days. Upon approval, the corresponding
                sales deal shall be assigned a unique deal registration number.
                An email containing the deal registration number will be sent to
                the partner sales rep to confirm acceptance of the deal
                registration. There is only one Partner per Deal.
              </p>
            </div>
            <div className="">
              <div>
                <h4>STEP 1:</h4>
                <p className="mt-[10px] body-small">
                  Confirm you have a valid Deal Registration number that has not
                  expired. Note: You would have received an email from Dataminr
                  to confirm and it will be in the format of DR XXXXXX XXXXXX.
                </p>
              </div>
              <div className="mt-5">
                <h4>STEP 2:</h4>
                <p className="mt-[10px] body-small">
                  Submit the DR Code and if the criteria are met you will
                  receive your reward within the next 5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container mt-12 mb-36">
        <div className=" mt-16">
          <h4>DEAL REGISTRATION NUMBER</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <Input placeholder="DR-XXXXXX-XXXXXX" type="text" />
          </div>
        </div>
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

export default DealRegistration;
