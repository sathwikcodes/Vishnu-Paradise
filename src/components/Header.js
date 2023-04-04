/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";


//logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";
//headless ui menu
import { Menu } from "@headlessui/react";
//icons
const Header = () => {

  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full tranisition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <a href="/">
          {header ? (
            <h2 className="text-black" >VISHNU PARADISE</h2>
          ) : (
            <h2 className="text-white" >VISHNU PARADISE</h2>
          )}
        </a>
        {/* nav */}
        <nav
          className={`${header ? "text-primary" : "text-white"} 
        flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a href="/rooms" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="/room/4" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="/room/5" className="hover:text-accent transition">
            Meeting Hall
          </a>
          <a href="/location" className="hover:text-accent transition">
            Location
          </a>
          <a href="#" className="hover:text-accent transition">
          {<Menu as="div" >
      {/* btn */}
    <Menu.Button
        className={"w-full flex items-center justify-between hover:text-accent text-base pb-10px "}
      >
        CONTACT
      </Menu.Button>
      {/* items */}
      <Menu.Items
        className="bg-white absolute w-full flex flex-col p-20px ">
        <ul className="text-black px-3 pr-0">
          <li>Email</li>
          <li>Mobile-Number</li>
        </ul>
          
      </Menu.Items>
    </Menu>}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
