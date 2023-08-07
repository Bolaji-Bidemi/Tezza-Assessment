import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ icon, tag, url, setOpen }) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  return (
    <div className="sideContent">
      {isSmallScreen ? (
        <div
          className="sideItem"
          onClick={() => {
            navigate(url);
            setOpen(false);
          }}
        >
          {icon} {tag}
        </div>
      ) : (
        <div
          className="sideItem"
          onClick={() => {
            navigate(url);
            setOpen(true);
          }}
        >
          {icon} {tag}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
