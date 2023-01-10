import React from "react";
import { useNavigate } from "react-router-dom";
import routeUrls from "../../../../configs/route";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="bg-main">
      <div className="section-container h-[150px] flex items-center justify-between footer-text text-white">
        <div>
          <div>
            © 2022 - Dataminr and/or its affiliates. All rights reserved.
          </div>
          <div className="mt-2">Dataminr | Powered by Karrot</div>
        </div>
        <div className="">
          <div>
            <span
              className="cursor-pointer"
              onClick={() => navigate(`/${routeUrls.privacyPolicy.path}`)}
            >
              Privacy Policy
            </span>{" "}
            |{" "}
            <span
              className="cursor-pointer"
              onClick={() => navigate(`/${routeUrls.termsAndConditions.path}`)}
            >
              Terms & Conditions
            </span>
          </div>
          <img
            className="mt-3 h-[20px] w-auto float-right"
            src="images/dataminr-logo.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
