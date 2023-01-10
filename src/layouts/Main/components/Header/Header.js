import React from "react";
import { Link } from "react-router-dom";
import routeUrls from "../../../../configs/route";
import { useAppStore } from "../../../../stores";

const Header = () => {
  const [appStore, updateAppStore] = useAppStore();
  const handleLogout = () => {
    updateAppStore((draft) => {
      draft.isAuthenticated = false;
    });
  };
  return (
    <header className="fixed bg-main w-full z-40">
      <div className="section-container h-[70px] flex items-center justify-between">
        <Link to="/">
          <img
            className="h-[20px] w-auto"
            src="images/dataminr-logo.png"
            alt=""
          />
        </Link>
        <nav className="body-link flex gap-5 text-white">
          {!appStore.isAuthenticated ? (
            <>
              <Link to={routeUrls.register.path}>
                {routeUrls.register.title}
              </Link>
              <Link to={routeUrls.contact.path}>{routeUrls.contact.title}</Link>
            </>
          ) : (
            <>
              <Link to={routeUrls.account.path}>{routeUrls.account.title}</Link>
              <Link onClick={handleLogout}>Logout</Link>
              <Link to={routeUrls.contact.path}>{routeUrls.contact.title}</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
