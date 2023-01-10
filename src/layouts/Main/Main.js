import React from "react";
import PropTypes from "prop-types";
import { useAppStore } from "../../stores";
import { Footer, Header } from "./components";

const Main = (props) => {
  const { children } = props;
  const [appStore, updateAppStore] = useAppStore();

  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
