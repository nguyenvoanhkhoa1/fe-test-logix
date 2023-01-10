import React from "react";

const Footer = () => {
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
          <div>Privacy Policy | Terms & Conditions</div>
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
