/* eslint-disable no-undef */
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Menu } from "@headlessui/react";
import { BsCalendar } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

//components
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
// import CheckOut from "../components/CheckOut";
// import CheckIn from "../components/CheckIn";
// import Details from "../components/Details";
// import NumberDetails from "../components/Number";

//datepicker

import DatePicker from "react-datepicker";
//datepicker-css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
//scroll top component
import ScrollToTop from "../components/ScrollToTop";

//context
import { RoomContext } from "../context/RoomContext";
//icons
import { FaCheck } from "react-icons/fa";

const Meetinghall = () => {
  const [startDate, setStartDate] = useState(false);
  const [EndDate, setEndDate] = useState(false);

  const [username, SetUsername] = useState();
  const [mobile, Setmobile] = useState();

  const userCollectionRef = collection(db, "CustomerData");

  const handleSubmit = () => {
    var today = new Date();
    addDoc(userCollectionRef, {
      name: username,
      mobile: mobile,
      bookingtime: today.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      roomname: "Meeting Hall",
      checkIndate: startDate.toJSON().slice(0, 10).replace(/-/g, "/"),
      checkOutdate: EndDate.toJSON().slice(0, 10).replace(/-/g, "/"),
    })
      .then(() => {
        if (!alert("Successfully Booked!"))
          document.location = "http://localhost:3000/";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

//   const { rooms } = useContext(RoomContext);
//   const { id } = useParams();

//   console.log(id);
//   //get room
//   const room = rooms.find((room) => {
//     return room.id === Number(id);
//   });
  //destructure room

//   const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-room bg-cover h-[560px] relative flex justify-center items-center ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center ">
          Meeting Hall Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24 gap-10">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">Meeting Hall</h2>
            <p className="mb-8">This is for Meeting hall</p>
            <img className="mb-8" src='' alt="" />
            {/* facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {/* {facilities.map((item, index) => {
                  //destructure item
                  const { name, icon } = item; */}

                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key='1'
                    >
                      <div className="text-3xl text-accent">xsx</div>
                      <div className="text-base">dwdw</div>
                    </div>
                  );
                {/* })} */}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-full lg:w-[40%] ">
            {/* reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div className="h-[60px]">
                  <div className="relative flex items-center justify-end h-full">
                    {/* icon */}
                    <div className="absolute z-10 pr-8">
                      <div>
                        <BsCalendar className="text-accent text-base" />
                      </div>
                    </div>
                    <DatePicker
                      className="w-full h-full"
                      selected={startDate}
                      placeholderText="Check In"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>

                <div className="h-[60px]">
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
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>

                {/* name */}
                <div className="h-[60px]">
                  <Menu as="div" className="w-full h-full bg-white relative">
                    {/* btn */}
                    <Menu.Button
                      className={
                        "w-full h-full flex items-center justify-between px-8"
                      }
                    >
                      <div className=" w-full h-full bg-white relative flex items-center">
                        <form>
                          <label>
                            <input
                              className="w-full h-full"
                              type="text"
                              name="name"
                              placeholder="Enter your Name"
                              onChange={(event) => {
                                SetUsername(event.target.value);
                              }}
                            />
                          </label>
                        </form>
                      </div>
                      <BsChevronDown className="text-base text-accent-hover" />
                    </Menu.Button>
                  </Menu>
                </div>

                {/* number */}
                <div className="h-[60px]">
                  <Menu as="div" className="w-full h-full bg-white relative">
                    {/* btn */}
                    <Menu.Button
                      className={
                        "w-full h-full flex items-center justify-between px-8"
                      }
                    >
                      <div className=" w-full h-full bg-white relative flex items-center">
                        <form>
                          <label>
                            <input
                              className="w-full h-full"
                              type="text"
                              name="name"
                              placeholder="Mobile Number"
                              onChange={(event) => {
                                Setmobile(event.target.value);
                              }}
                            />
                          </label>
                        </form>
                      </div>

                      <BsChevronDown className="text-base text-accent-hover" />
                    </Menu.Button>
                  </Menu>
                </div>
              </div>
              <button
                className="btn btn-lg btn-primary w-full"
                onClick={handleSubmit}
              >
                Book now for $500
              </button>
            </div>

            {/* Rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetinghall;
