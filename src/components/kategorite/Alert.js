import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch } from "react-redux";
import { deleteRow } from "../../../redux/actions/productActions";
import { showAlert } from "../../../redux/actions/productActions";

const Alert = (celsi) => {
  const dispatch = useDispatch();
  const handleDelete = (key) => {
    dispatch(deleteRow(key));
    dispatch(showAlert(false));
  };

  confirmAlert({
    title: "Konfirmoni",
    message: `A jeni të sigurt që do të fshini kategorinë ? `,
    buttons: [
      {
        label: "Po",
        onClick: () => {
          handleDelete(celsi);
        },
      },
      {
        label: "Jo",
        onClick: () => {
          dispatch(showAlert(false));
        },
      },
    ],
  });

  return <div className="container"></div>;
};

export default Alert;
