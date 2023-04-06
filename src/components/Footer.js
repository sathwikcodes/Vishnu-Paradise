import React from "react";
//logo
import LogoGold from "../assets/img/hotel-logo-gold.png"

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        {/* logo */}
        <a href="/">
        <img className=" w-[100px]" src={LogoGold} alt="" ></img>
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
