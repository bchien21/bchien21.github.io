import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    useEffect(() => {
    console.log("✅ Layout mounted");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;