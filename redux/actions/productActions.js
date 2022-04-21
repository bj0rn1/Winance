import { ActionTypes } from "../actionTypes";

export const addRow = (row) => {
  return { type: ActionTypes.ADD_CATEGORY, payload: row };
};

export const deleteRow = (key) => {
  return { type: ActionTypes.DELETE_CATEGORY, payload: key };
};
