import React from "react";
import DonutChart from "./DonutChart";
import "../kategorite/App2.css";
import Sidebar from "../Sidebar";

const TeArdhurat = () => {
  return (
    <>
      <Sidebar />
      <div className="chartContainer">
        Te ardhurat
        <div className="piePosition">
          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default TeArdhurat;
