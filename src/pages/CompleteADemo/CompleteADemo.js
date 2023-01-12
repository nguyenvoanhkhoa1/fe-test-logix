import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  BorderLine,
  CustomDateTimePicker,
  CustomerInformation,
  Input,
  RewardCard,
} from "../../components";
import { COLOR_PALETTE, REWARD_CARDS } from "../../configs/constants";
import routeUrls from "../../configs/route";

const CompleteADemo = () => {
  let navigate = useNavigate();
  return (
    <>
      <Banner imgUrl="images/banners/common.png" halfScreenMobile>
        <div className="text-white">
          <h1>Dataminr</h1>
          <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
        </div>
      </Banner>
      <section className="section-container mt-14">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <RewardCard
              href={REWARD_CARDS.completeADemo.href}
              title={REWARD_CARDS.completeADemo.title}
              reward={REWARD_CARDS.completeADemo.reward}
              color={REWARD_CARDS.completeADemo.color}
            />
            <div className="mt-2 text-subheader text-sm">
              <b>Note:</b>
              <p className=" font-light">
                Payout amount for both nominated and approved AE & SE on the
                Logo Account.
              </p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-[30px] text-center md:text-left">
            <div>
              <h2>Complete a Demo with the Dataminr Team</h2>
              <BorderLine
                className="mt-5 mx-auto md:mx-0"
                color={COLOR_PALETTE.borderLine}
              />
            </div>
            <div className=" mt-11">
              <div>
                <h4>STEP 1:</h4>
                <p className="mt-[10px] body-small">
                  Confirm with Account the meeting was held.
                </p>
              </div>
              <div className="mt-[30px]">
                <h4>STEP 2:</h4>
                <p className="mt-[10px] body-small">
                  Confirm the Dataminr Rep Contact Names as attendees.
                </p>
              </div>
              <div className="mt-[30px]">
                <h4>STEP 3:</h4>
                <p className="mt-[10px] body-small">
                  Confirm the Account you met with and date of meeting.
                </p>
              </div>
              <div className="mt-[30px]">
                <h4>STEP 4:</h4>
                <p className="mt-[10px] body-small">
                  Confirm the details and submit the claim.
                </p>
              </div>
              <div className="mt-[30px]">
                <h4>STEP 5:</h4>
                <p className="mt-[10px] body-small">
                  Once submitted, the Dataminr Alliance Team will confirm that
                  the meeting took place.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-20" />
      </section>
      <section className="section-container mt-12 mb-36 text-center md:text-left">
        <CustomerInformation />
        <div className=" mt-16">
          <h4>Dataminr REPRESENTATIVE AT MEETING</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Last Name" type="text" />
            <Input placeholder="Email" type="text" />
            <CustomDateTimePicker placeholder="Date of Demo" value={null} />
          </div>
        </div>
        <button
          className="mt-10 h-[60px] w-full md:w-[170px] bg-main flex justify-center items-center button-text text-white button-hover color-line"
          onClick={() => navigate(`/${routeUrls.homePage.path}`)}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export default CompleteADemo;
