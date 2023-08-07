import React from "react";
import "./Card.css";
import { BsArrowRight } from "react-icons/bs";

const SecondCard = ({ title, link, date, name, text, status }) => {
  return (
    <div className="cardWidth2">
      <div className="cardLine"></div>
      <div className="cardTitle">
        <div className="titleTag">{title}</div>
        <div className="linkTag">
          {link} <BsArrowRight />
        </div>
      </div>

      <div className="spacing">
        <div className="dateTag">
          <hr className="rule" />
          <div className="text">{date}</div>
        </div>
        <div className="cardDetails">
          <div className="text">{text}</div>
          <div className="linkTag">{name}</div>

          <span className="statusTag">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
