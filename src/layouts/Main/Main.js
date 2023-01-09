import React from "react";
import PropTypes from "prop-types";
import { useAppStore } from "../../stores";
import { Footer, Header } from "./components";

const Main = (props) => {
  const { children } = props;
  const [appStore, updateAppStore] = useAppStore();

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 xl:px-0 lg:max-w-5xl">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
