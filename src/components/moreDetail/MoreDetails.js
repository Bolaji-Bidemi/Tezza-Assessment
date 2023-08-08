import React from "react";
import "./MoreDetails.css";

const MoreDetails = ({ tag, value }) => {
  return (
    <div className="parent">
      <div className="tagDetail">{tag}</div>
      <h4 className="valueDetail">{value}</h4>
    </div>
  );
};

export default MoreDetails;
