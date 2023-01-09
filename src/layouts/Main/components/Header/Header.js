import React from "react";
import { Link } from "react-router-dom";
import routeUrls from "../../../../configs/route";

const Header = () => {
  return (
    <nav>
      <Link to={routeUrls.welcome.path}>{routeUrls.welcome.title}</Link>
      <Link to={routeUrls.enrolNow.path}>{routeUrls.enrolNow.title}</Link>
    </nav>
  );
};

export default Header;
