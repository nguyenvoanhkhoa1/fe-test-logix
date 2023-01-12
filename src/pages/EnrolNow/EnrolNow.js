import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  BorderLine,
  Input,
  QuestionMark,
  RightArrow,
  Select,
} from "../../components";
import { COLOR_PALETTE, COUNTRY_SELECT_OPTIONS } from "../../configs/constants";
import routeUrls from "../../configs/route";

const EnrolNow = () => {
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);
  return (
    <>
      <Banner imgUrl="images/banners/common.png" halfScreenMobile>
        <div className="text-white">
          <h1 className="max-w-[200px] md:max-w-[250px] lg:max-w-[331px]">
            Do MORE Get MORE
          </h1>
          <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
        </div>
      </Banner>
      <section className="section-container my-20 grid grid-cols-6 lg:grid-cols-12 gap-10">
        <div className="col-span-6 text-subheader text-center lg:text-left">
          <div>
            <h1 className="md:text-[55px]">Step 1:</h1>
            <BorderLine
              className="mt-5 mx-auto lg:mx-0"
              color={COLOR_PALETTE.main}
            />
          </div>
          <h4 className="mt-4 lg:text-[35px]">SIGN UP & GET US$25!</h4>
          <div className="mt-[30px] sm:px-5">
            <div className="text-xs font-bold">Notes & Eligibility:</div>
            <p className="text-xs font-light">
              Sign-up Registration Period is from February 10th, 2022 through
              March 31, 2022. (Expires March 31, 2022)
            </p>
          </div>
          <hr className="mt-10" />
        </div>
        <div className="col-span-6 text-subheader text-center lg:text-left">
          <div>
            <div>
              <h3>CREATE A NEW ACCOUNT.</h3>
              <BorderLine
                className="mt-5 mx-auto lg:mx-0"
                color={COLOR_PALETTE.smallCard}
              />
            </div>
            <p className="mt-8 text-xs leading-6 italic font-light">
              To help the government fight the funding of terrorism and money
              laundering activities, federal law requires all financial
              institutions to obtain, verify, and record information that
              identifies each person who opens an account. What this means for
              you: When you open an account, we will ask for your name, address,
              date of birth, and other information that will allow us to
              identify you. We may also ask to see your driver’s license or
              other identifying documents.
            </p>
          </div>
          <div className="mt-10">
            <div>
              <h4 className=" font-normal">ACCOUNT DETAILS</h4>
              <div className="lg:flex gap-[30px]">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Work Email" />
              <Input placeholder="Mobile Phone" />
              <Select
                placeholder="Select Country"
                options={COUNTRY_SELECT_OPTIONS}
                value={country}
                onChange={setCountry}
              />
            </div>
            <div className="mt-5">
              <h4 className=" font-normal">EMPLOYER DETAILS</h4>
              <Input placeholder="Employer Name" />
              <Select
                placeholder="Select Role"
                options={[
                  { value: "R1", label: "Role 1" },
                  { value: "R2", label: "Role 2" },
                ]}
              />
              <Input placeholder="Title" />
              <Input placeholder="Work Phone" />
              <Input placeholder="Business Address" />
              <Input placeholder="Business Address #2" />
              <Input placeholder="Business City" />
              <Select
                placeholder="Business State/Province"
                options={[
                  { value: "S1", label: "State 1" },
                  { value: "S2", label: "State 2" },
                ]}
              />
              <Input placeholder="Business Zip Code / Postal Code" />
            </div>
            <div className="mt-5">
              <h4 className=" font-normal">PERSONAL DETAILS</h4>
              <Input placeholder="Personal Address" />
              <Input placeholder="Personal Address #2" />
              <Input placeholder="Personal City" />
              <Select
                placeholder="Personal State/Province"
                options={[
                  { value: "S1", label: "State 1" },
                  { value: "S2", label: "State 2" },
                ]}
              />
              <Input placeholder="Personal Zip" />
              <div className="flex gap-[14px]">
                <Input placeholder="Date Of Birth" />
                <QuestionMark
                  className="mt-[15px]"
                  title="Your Date of Birth is required to participate in the Sell More Earn More program. This will be used as a security measure on your virtual SPIF card. If you do not provide your Date of Birth, you will not be able to participate in the program. Please see our Privacy Policy if you have any questions about the safety of your data."
                />
              </div>
            </div>
            <div className="mt-5">
              <h4 className=" font-normal">SITE ACCESS AND AGREEMENTS</h4>
              <Input placeholder="Password" type="password" />
              <Input placeholder="Confirm password" type="password" />
              <div className="mt-5 font-light text-sm text-subheader text-left">
                <div className="flex items-start">
                  <input
                    id="st-check"
                    className="w-5 h-5 shrink-0"
                    type="checkbox"
                  ></input>
                  <label for="st-check" className="ml-3">
                    I agree to opt-in for program communications
                  </label>
                  <QuestionMark
                    className="ml-4"
                    title="I agree to opt-in for program communications"
                  />
                </div>
                <div className="mt-4 flex items-start">
                  <input
                    id="nd-check"
                    className="w-5 h-5 shrink-0"
                    type="checkbox"
                  ></input>
                  <label for="nd-check" className="ml-3">
                    I Opt-In to this joint rewards program and I have read and
                    agree to the{" "}
                    <span
                      className="text-[#3A66D8] underline cursor-pointer"
                      onClick={() =>
                        navigate(`/${routeUrls.termsAndConditions.path}`)
                      }
                    >
                      Terms & Conditions
                    </span>
                  </label>
                  <QuestionMark
                    className="ml-4"
                    title="I Opt-In to this joint rewards program and I have read and agree to the Terms & Conditions"
                  />
                </div>
                <div className="mt-4 flex items-start">
                  <input
                    id="rd-check"
                    className="w-5 h-5 shrink-0"
                    type="checkbox"
                  ></input>
                  <label for="rd-check" className="ml-3">
                    I acknowledge I have read the{" "}
                    <span
                      className="text-[#3A66D8] underline cursor-pointer"
                      onClick={() =>
                        navigate(`/${routeUrls.privacyPolicy.path}`)
                      }
                    >
                      Dataminr Privacy Policy
                    </span>
                  </label>
                  <QuestionMark
                    className="ml-4"
                    title="I acknowledge I have read the Dataminr Privacy Policy "
                  />
                </div>
              </div>
            </div>
            <button
              className="mt-9 h-[60px] w-full bg-main flex justify-center items-center button-text text-white button-hover color-line"
              onClick={() => navigate(`/${routeUrls.welcome.path}`)}
            >
              Register
            </button>
            <button
              className="mt-8 w-full button-text text-button hover:text-border_line flex justify-center items-center gap-1 group transition-all duration-300"
              onClick={() => navigate(`/${routeUrls.login.path}`)}
            >
              Back to Login
              <RightArrow className="fill-button group-hover:fill-border_line transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrolNow;
