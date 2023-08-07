import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import SideBar from "../sideBar/SideBar";
import "./Layout.css";

const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="outlet2">
      {open && (
        <div className="outlet1">
          <SideBar open={open} setOpen={setOpen} />
        </div>
      )}
      <div className="outlet">
        <Nav open={open} setOpen={setOpen} />
        <div className="outlet3">
          {" "}
          <Outlet />{" "}
        </div>
      </div>
    </div>
  );
};

export default Layout;
