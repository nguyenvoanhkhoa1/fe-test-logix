import React from "react";
import { Banner, BorderLine } from "../../components";
import { COLOR_PALETTE } from "../../configs/constants";

const ClosedSale = () => {
  return (
    <>
      <Banner imgUrl="images/banners/common.png">
        <div className="text-white">
          <h1 className="max-w-[331px]">Do MORE Get MORE</h1>
          <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
        </div>
      </Banner>
      <section className="section-container"></section>
    </>
  );
};

export default ClosedSale;
