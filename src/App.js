import React from "react";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Location from "./pages/Location";

//react Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rooms from "./components/Rooms"
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
