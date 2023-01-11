import React from "react";
import { COUNTRY_SELECT_OPTIONS } from "../../configs/constants";
import Input from "../Input";
import Select from "../Select";

const CustomerInformation = ({ className, ...rest }) => {
  return (
    <div className={className}>
      <h4>Customer information</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <Input placeholder="Company Name" type="text" />
        <Select
          options={COUNTRY_SELECT_OPTIONS}
          placeholder="Country"
          type="text"
        />
        <Input placeholder="Address " type="text" />
        <Input placeholder="Address #2" type="text" />
        <Input placeholder="City" type="text" />
        <Input placeholder="State/Province" type="text" />
        <Input placeholder="Contact First Name" type="text" />
        <Input placeholder="Contact Last Name" type="text" />
        <Input placeholder="Contact Job Title" type="text" />
        <Input placeholder="Contact Email Address" type="text" />
        <Input placeholder="Contact Phone" type="text" />
        <Input placeholder="Zip Code/Postal Code" type="text" />
      </div>
    </div>
  );
};

export default CustomerInformation;
