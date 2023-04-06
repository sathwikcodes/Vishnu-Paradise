// rooms images
import Room1Img from "./assets/img/rooms/1.jpg";
import Room1ImgLg from "./assets/img/rooms/1-lg.jpg";
import Room2Img from "./assets/img/rooms/2.jpg";
import Room2ImgLg from "./assets/img/rooms/2-lg.jpg";
import Room3Img from "./assets/img/rooms/3.jpg";
import Room3ImgLg from "./assets/img/rooms/3-lg.jpg";
import Room4Img from "./assets/img/rooms/4.jpg";
import Room4ImgLg from "./assets/img/rooms/4-lg.jpg";
import Room5Img from "./assets/img/rooms/5.jpg";
import Room5ImgLg from "./assets/img/rooms/5-lg.jpg";
import Room1 from "./assets/img/rooms/8.jpg";
import deluxe2 from "./assets/img/rooms/10.jpg";

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaHotdog,
  FaCocktail,
} from "react-icons/fa";
import {
  BiCloset
} from "react-icons/bi";

import {
  TbSofa
} from "react-icons/tb";

import {
  MdOutlineBathroom,
  MdOutlineCoffeeMaker
} from "react-icons/md";

import {
  BiBed
} from "react-icons/bi";


import {
  Tb3DCubeSphere
} from "react-icons/tb";

import {
  SlScreenDesktop
} from 'react-icons/sl';

export const roomData = [
  {
    id: 1,
    name: 'Standard Room',
    description:
      'This Standard king room features a tile/marble floor, air conditioning and patio.',
      pricePerPerson : [
        {name : "Single Person" , price : 1456 },
        {name : "Double Person" , price : 1792 },
        {name : "Extra Person/Bed" , price : 560 }
      ],
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
      { name: 'AC', icon: <Tb3DCubeSphere/>  },
      { name: 'Television', icon: <SlScreenDesktop />  },
      { name: 'Closet', icon: <BiCloset />  }


    ],
    slideImages: [
      {url : Room1Img,
        caption : 'slide-1'
      },
      {url : Room1ImgLg,
        caption : 'slide-2'
      },
      {url : Room1,
        caption : 'slide-3'
      },
    ],
    size: "15m²",
    maxPerson: 3,
    price: 1456,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Deluxe Room",
    description:
      "This Deluxe room has air conditioning, patio and seating area. You will get a Complementary Breakfast and a Coffee Kit from our side.",
      pricePerPerson : [
        {name : "Single Person" , price : 1680 },
        {name : "Double Person" , price : 2016 },
        {name : "Extra Person/Bed" , price : 560 }
      ],
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "Drinks", icon: <FaCocktail /> },
      { name: 'AC', icon: <Tb3DCubeSphere/>  },
      { name: 'Television', icon: <SlScreenDesktop />  },
      { name: 'Private Washroom', icon: <MdOutlineBathroom />  },
      { name: 'Coffee machine', icon: <MdOutlineCoffeeMaker />  },
      { name: 'King beds', icon: <BiBed />  }
    ],
    slideImages: [
      {url : Room2Img,
        caption : 'slide-1'
      },
      {url : Room2ImgLg,
        caption : 'slide-2'
      },
      {url : deluxe2,
        caption : 'slide-3'
      },
    ],
    size: "17m²",
    maxPerson: 3,
    price: 1680,
    image: deluxe2,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Executive Room",
    description:
      "This Executive room features a patio, air conditioning and flat-screen Tv. You will get 2 water Bottles, Complementary Breakfast and Coffee kit from our side.",
    pricePerPerson : [
      {name : "Single Person" , price : 2240 },
      {name : "Double Person" , price : 2576 },
      {name : "Extra Person/Bed/Pet" , price : 560 }
    ],
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: 'Television', icon: <SlScreenDesktop />  },
      { name: 'Private Washroom', icon: <MdOutlineBathroom />  },
      { name: 'Coffee machine', icon: <MdOutlineCoffeeMaker />  },
      { name: "Drinks", icon: <FaCocktail /> },
      { name: "Sofa", icon: <TbSofa /> },
      { name: 'King beds', icon: <MdOutlineCoffeeMaker />  }
    ],
    slideImages: [
      {url : Room3Img,
        caption : 'slide-1'
      },
      {url : Room3ImgLg,
        caption : 'slide-2'
      },
    ],
    size: "20",
    maxPerson:4,
    price: 2240,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Restaurant",
    description:
      "Book our restaurant that has a capacity of 50 members for your needs Now.",
      pricePerPerson : [
        {name : "For 1 Hour" , price : 1500 },
      ],
      
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Washrooms", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    slideImages: [
      {url : Room4Img,
        caption : 'slide-1'
      },
      {url : Room4ImgLg,
        caption : 'slide-2'
      },
    ],
    size: "40",
    maxPerson: 50,
    price: 1500,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },

  {
    id: 5,
    name: "Meeting Hall",
    pricePerPerson : [
      {name : "For 1 Hour" , price : 1000 },
    ],
    description:
      "Meeting Hall that can contain 20 persons with no disturbance throughout your meeting time.",

    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    slideImages: [
      {url : Room5Img,
        caption : 'slide-1'
      },
    ],
    size: "25",
    maxPerson: 20,
    price: 1000,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: "Bulk Rooms",
    description:
      "Introducing Bulk rooms, You can book upto 30 rooms based on your need. Maximum of 4 persons allowed in a single room",
      pricePerPerson : [
        {name : "Starting from" , price : 2500 },
      ],
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
      { name: 'AC', icon: <Tb3DCubeSphere/>  },
      { name: 'Television', icon: <SlScreenDesktop />  },
      { name: 'Closet', icon: <BiCloset />  }
    ],
    slideImages: [
      {url : Room1Img,
        caption : 'slide-1'
      },
      {url : Room2Img,
        caption : 'slide-2'
      },
      {url : Room3Img,
        caption : 'slide-3'
      },
    ],
    size: "17m²",
    maxPerson: 4,
    price: 2500,
    image: Room3Img,
    imageLg: Room3Img,
  },
];
