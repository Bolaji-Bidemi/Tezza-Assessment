import React from "react";
import "./Card.css";

const Card = ({ title, name, text }) => {
  return (
    <div className="cardWidth">
      <div className="cardLine"></div>
      <div className="cardTitle">
        <div className="titleTag">{title}</div>
      </div>
      <div className="spacing">
        <div className="text">
          {text} <span className="linkTag">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
