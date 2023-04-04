import React, {useState } from "react";
import { BsChevronDown } from "react-icons/bs";

//headless ui menu
import { Menu } from "@headlessui/react";


const NumberDetails = () => {
  const [mobile, Setmobile] = useState();

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
  );
};

export default NumberDetails;
