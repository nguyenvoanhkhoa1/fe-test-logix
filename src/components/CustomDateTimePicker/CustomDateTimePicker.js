import { Box } from "@mui/system";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";

const CustomDateTimePicker = ({ className, placeholder, value, onChange }) => {
  const [dateTime, setDateTime] = useState(value);
  const handleChange = (event) => {
    setDateTime(event);
    if (typeof onChange === "function") {
      onChange(event);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Custom input"
        value={dateTime}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        inputFormat="MMM D, YYYY h:mm A"
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              "&>.MuiInputAdornment-root": {
                position: "absolute",
                bottom: "20px",
                right: "20px",
              },
            }}
          >
            <input
              className={`mt-[15px] border-[0.5px] hover:border-2 border-solid border-subheader w-full h-[42px] p-[10px] rounded-[5px] input-text focus:outline-indigo-700 ${className}`}
              ref={inputRef}
              {...inputProps}
              placeholder={placeholder}
              readOnly
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
