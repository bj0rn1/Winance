import React, { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./App2.css";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  const handleClickLeft = () => {
    if (page - 1 != 0) {
      setPage(page - 1);
      console.log(page);
    }
  };
  const handleClickRight = () => {
    if (page in range) {
      setPage(page + 1);
      console.log(page);
    }
  };
  return (
    <div className="tableFooter">
      {" "}
      <button className="button left" onClick={() => handleClickLeft()}>
        <ArrowBackIosNewIcon style={{ color: "white" }} />
      </button>
      {range.map((el, index) => (
        <button
          key={index}
          className={`'button' ${
            page === el ? "activeButton" : "inactiveButton"
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}{" "}
      <button className="button right" onClick={() => handleClickRight()}>
        <ArrowBackIosNewIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default TableFooter;
