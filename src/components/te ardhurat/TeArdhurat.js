import React from "react";
import DonutChart from "./DonutChart";
import "../kategorite/App2.css";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";

const TeArdhurat = () => {
  let userData = useSelector((state) => state.userData);
  const { teArdhurat, limiti } = userData;
  return (
    <>
      <Sidebar />
      <h1
        className="Container"
        style={{
          left: "40%",
          top: "7%",
          width: "30%",
          height: "10%",
          borderRadius: "30px",
          paddingTop: "1.6%",
        }}
      >
        Te ardhurat tuaja: {teArdhurat} leke te reja
      </h1>
      <div className="chartContainer">
        Shpenzimet tuaja
        <div className="piePosition">
          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default TeArdhurat;
