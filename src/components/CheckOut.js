import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";

//datepicker

import DatePicker from "react-datepicker";
//datepicker-css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
//icons


const CheckOut = () => {
  const [EndDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={EndDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
