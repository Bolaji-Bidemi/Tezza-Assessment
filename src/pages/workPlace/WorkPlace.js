import React from "react";
import Header from "../../components/header/Header";
import "./WorkPlace.css";
import Card from "../../components/card/FirstCard";
import { cardData1, cardData2, cardData3 } from "../../data";
import SecondCard from "../../components/card/SecondCard";
import ThirdCard from "../../components/card/ThirdCard";

const WorkPlace = () => {
  return (
    <section>
      <div className="title">
        <Header title="Workspace" subtitle="Welcome, xxx" />
      </div>

      <h5 className="overview">Overview</h5>

      <div className="flexContainer">
        <div className="gridItem">
          {cardData1.map((item, index) => (
            <Card
              title={item.title}
              name={item.name}
              text={item.text}
              key={index}
            />
          ))}
        </div>
        <div className="gridItem">
          {cardData2.map((item, index) => (
            <SecondCard
              title={item.title}
              name={item.name}
              text={item.text}
              link={item.link}
              date={item.date}
              status={item.status}
              key={index}
            />
          ))}
        </div>
        <div className="gridItem">
          {cardData3.map((item, index) => (
            <ThirdCard
              title={item.title}
              name={item.name}
              link={item.link}
              due={item.due}
              created={item.created}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPlace;
