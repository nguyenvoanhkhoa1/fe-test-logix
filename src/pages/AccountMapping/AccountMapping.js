import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  BorderLine,
  CustomDateTimePicker,
  Input,
  RewardCard,
  Select,
} from "../../components";
import {
  COLOR_PALETTE,
  REWARD_CARDS,
  TARGETED_ACCOUNTS_OPTIONS,
} from "../../configs/constants";
import routeUrls from "../../configs/route";

const AccountMapping = () => {
  let navigate = useNavigate();
  const [numberOfAccounts, SetNumberOfAccount] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const handleChangeNumberOfAccounts = (event) => {
    SetNumberOfAccount(parseInt(event.target.value));
  };
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
              href={REWARD_CARDS.accountMapping.href}
              title={REWARD_CARDS.accountMapping.title}
              reward={REWARD_CARDS.accountMapping.reward}
              color={REWARD_CARDS.accountMapping.color}
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
              <h2>Submit your Targeted accounts</h2>
              <BorderLine
                className="mt-5 mx-auto md:mx-0"
                color={COLOR_PALETTE.borderLine}
              />
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
        <hr className="mt-20" />
      </section>
      <section className="section-container mt-12 mb-36 text-center md:text-left">
        <div className=" max-w-xl">
          <div>
            <h4>Targeted accounts</h4>
            <Select
              placeholder="How many targeted accounts are you submitting?"
              options={TARGETED_ACCOUNTS_OPTIONS}
              value={numberOfAccounts}
              onChange={handleChangeNumberOfAccounts}
            />
            {numberOfAccounts &&
              Array(numberOfAccounts)
                .fill(null)
                .map((_, index) => (
                  <>
                    <Input
                      placeholder={`Account Name ${
                        numberOfAccounts !== 1 ? index + 1 : ""
                      }`}
                      type="text"
                    />
                    <Input
                      placeholder={`Account URL ${
                        numberOfAccounts !== 1 ? index + 1 : ""
                      }`}
                      type="text"
                    />
                  </>
                ))}
          </div>
          <div className="mt-10">
            <h4>Dataminr Sales Contact</h4>
            <Select
              className="mt-5"
              placeholder="Select Contact"
              options={[
                { value: "C1", label: "Contact 1" },
                { value: "C2", label: "Contact 2" },
              ]}
            />
            <CustomDateTimePicker
              placeholder="Date of Demo"
              value={dateTime}
              onChange={(e) => setDateTime(e)}
            />
          </div>
          <button
            className="mt-14 h-[60px] w-full md:w-[170px] bg-main flex justify-center items-center button-text text-white button-hover color-line"
            onClick={() => navigate(`/${routeUrls.homePage.path}`)}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default AccountMapping;
