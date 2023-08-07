import React from "react";
import { VscBellDot } from "react-icons/vsc";
import logo from "../../assets/tezza.jpeg";
import "./Nav.css";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Nav = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <FiMenu onClick={() => setOpen(!open)} className="menu" />
      <div className="navContent">
        <div className="bell">
          <VscBellDot />
        </div>

        <h4>Kelvin</h4>
        <img
          src={logo}
          className="pic"
          alt="logo"
          onClick={() => navigate("/client/profile")}
        />
      </div>
    </nav>
  );
};

export default Nav;
