import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch } from "react-redux";
import { deleteRow } from "../../../redux/actions/productActions";

const Alert = (val, key) => {
  const dispatch = useDispatch();
  const handleDelete = (key) => {
    console.log(key);
    dispatch(deleteRow(key));
  };

  confirmAlert({
    title: "Konfirmimi",
    message: `A je i sigurt qe do te fshish kategorine '${val}'? `,
    buttons: [
      {
        label: "Po",
        onClick: () => {
          handleDelete(key);
        },
      },
      {
        label: "Jo",
        onClick: () => {},
      },
    ],
  });
  return <div className="container"></div>;
};

export default Alert;
