import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routeUrls from "../../../../configs/route";
import { useAppStore } from "../../../../stores";
import styles from "./style.module.css";

const Header = () => {
  const [appStore, updateAppStore] = useAppStore();
  const routeLocation = useLocation();
  const [onTop, setOnTop] = useState(true);
  const [openToggleMenu, setOpenToggleMenu] = useState(false);

  const handleLogout = () => {
    setOpenToggleMenu(false);
    updateAppStore((draft) => {
      draft.isAuthenticated = false;
    });
  };

  const handleScroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (openToggleMenu) setOpenToggleMenu(false);
  }, [routeLocation.pathname]);

  return (
    <header
      className={`${
        onTop ? " bg-transparent hover:bg-main" : "bg-main"
      } fixed w-full z-30 shadow-2xl transition-all duration-500 ease-in-out`}
    >
      <div
        className={`${
          onTop ? "h-[70px]" : "h-14"
        } section-container flex items-center justify-between transition-all duration-500 relative`}
      >
        <Link to="/">
          <img
            className="h-[20px] w-auto"
            src="images/dataminr-logo.png"
            alt=""
          />
        </Link>
        <nav
          className={`${
            openToggleMenu
              ? "top-0 opacity-100"
              : "-top-[100vh] lg:top-0 opacity-0 lg:opacity-100"
          } fixed left-0 w-screen h-screen lg:w-auto lg:h-full lg:relative p-12 lg:p-0 flex-col items-center body-link flex lg:flex-row text-white bg-[#000000e6] lg:bg-transparent transition-all duration-500`}
        >
          {!appStore.isAuthenticated ? (
            <>
              <Link className={styles.link} to={routeUrls.register.path}>
                {routeUrls.register.title}
              </Link>
              <Link className={styles.link} to={routeUrls.contact.path}>
                {routeUrls.contact.title}
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.link} to={routeUrls.account.path}>
                {routeUrls.account.title}
              </Link>
              <Link className={styles.link} onClick={handleLogout}>
                Logout
              </Link>
              <Link className={styles.link} to={routeUrls.contact.path}>
                {routeUrls.contact.title}
              </Link>
            </>
          )}
        </nav>
        <div className="absolute top-2 right-2 z-40 w-10 h-10 flex lg:hidden items-center justify-center">
          <button
            onClick={() => setOpenToggleMenu(!openToggleMenu)}
            class={clsx(
              styles.menuToggle,
              openToggleMenu ? styles.isActive : null
            )}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
