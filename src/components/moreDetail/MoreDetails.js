import React from "react";
import "./MoreDetails.css";

const MoreDetails = ({ tag, value }) => {
  return (
    <div className="parent">
      <div className="tagDetail">{tag}</div>
      <h3 className="valueDetail">{value}</h3>
    </div>
  );
};

export default MoreDetails;
