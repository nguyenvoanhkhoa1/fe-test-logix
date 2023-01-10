import React from "react";
import { Link } from "react-router-dom";
import routeUrls from "../../../../configs/route";

const Header = () => {
  return (
    <header className="fixed bg-main w-full z-40">
      <div className="section-container h-[70px] flex items-center justify-between">
        <Link to={routeUrls.welcome.path}>
          <img
            className="h-[20px] w-auto"
            src="images/dataminr-logo.png"
            alt=""
          />
        </Link>
        <nav className="body-link flex gap-5 text-white">
          <Link to={routeUrls.register.path}>{routeUrls.register.title}</Link>
          <Link to={routeUrls.contact.path}>{routeUrls.contact.title}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
