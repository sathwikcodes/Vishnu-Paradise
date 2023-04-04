import React, { createContext, useEffect, useState } from "react";

//data

import { roomData } from "../data";

//create context

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [Kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(Kids[0]));
  }, [adults, Kids]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    //filter rooms based on total persons
    const newrooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newrooms);
      setLoading(false);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, Kids, setKids, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
