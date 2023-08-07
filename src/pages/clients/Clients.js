import React from "react";
import "./Clients.css";
import Header from "../../components/header/Header";
import "../workPlace/WorkPlace.css";
import { tableHead, tableBody } from "../../data";
import { useMediaQuery } from "react-responsive";

const Clients = () => {
  const isMobile = useMediaQuery({ maxWidth: 1200 });
  return (
    <section>
      <div className="title">
        <Header title="Clients" subtitle="Here's the client list" />
      </div>

      <div className="tableContainer">
        {isMobile ? (
          <div className="inputData">
            <input
              type="text"
              placeholder="Search by name, email..."
              className="inputView"
            />{" "}
            <input type="submit" value="Add" className="inputTab" />
          </div>
        ) : (
          <div className="inputData">
            <input
              type="text"
              placeholder="Search by name, email..."
              className="inputView"
            />{" "}
            <input type="submit" value="Add new client" className="inputTab" />
          </div>
        )}

        <table>
          <thead>
            <tr>
              {tableHead.map((item, index) => (
                <th class="active" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((item, index) => (
              <tr className="bodyDetails" key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Clients;
