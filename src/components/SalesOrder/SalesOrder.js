import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";

const SalesOrder = ({ className, ...rest }) => {
  const [seInvolved, setSeInvolved] = useState(false);
  return (
    <div className={className}>
      <h4>Sales Order</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <Input placeholder="Enter Sales Order Number" type="text" />
        <div className=" col-span-1">
          <Select placeholder="Deal Size" type="text" />
          <div className="mt-[15px] flex items-center">
            <input
              id="seInvolved"
              className="w-5 h-5 shrink-0"
              type="checkbox"
              onChange={() => setSeInvolved(!seInvolved)}
              checked={seInvolved}
            ></input>
            <label for="seInvolved" className="ml-3">
              Was a SE involved?
            </label>
          </div>
          {seInvolved && (
            <Input
              placeholder="Please enter the email address of the SE"
              type="text"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesOrder;
