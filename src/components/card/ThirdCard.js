import React from "react";
import "./Card.css";
import { BsArrowRight } from "react-icons/bs";

const ThirdCard = ({ title, link, due, created, name }) => {
  return (
    <div className="cardWidth3">
      <div className="cardLine"></div>
      <div className="cardTitle">
        <div className="titleTag">{title}</div>
        <div className="linkTag">
          {link} <BsArrowRight />
        </div>
      </div>

      <div className="dueTag">
        <h4>
          Follow up with <span className="linkTag">{name}</span>
        </h4>
        <br />
        <div className="dueGap">
          {due} {created}
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;
