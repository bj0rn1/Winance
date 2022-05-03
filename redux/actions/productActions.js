import { ActionTypes } from "../actionTypes";

export const addRow = (row) => {
  return { type: ActionTypes.ADD_CATEGORY, payload: row };
};

export const deleteRow = (key) => {
  return { type: ActionTypes.DELETE_CATEGORY, payload: key };
};

export const showAlert = (bool) => {
  return { type: ActionTypes.SHOW_ALERT, payload: bool };
};

export const addUserData = (user) => {
  return { type: ActionTypes.INPUT_DATA, payload: user };
};
