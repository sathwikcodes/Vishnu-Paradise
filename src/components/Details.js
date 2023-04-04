import React, {useState } from "react";
import { BsChevronDown } from "react-icons/bs";

//headless ui menu
import { Menu } from "@headlessui/react";
//icons
// import { BsChevronDown } from 'react-icons/bs';

const Details = () => {
  const [username, SetUsername] = useState();

  //   const {Kids , setKids} = useContext(RoomContext);
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button
        className={"w-full h-full flex items-center justify-between px-8"}
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
  );
};

export default Details;
