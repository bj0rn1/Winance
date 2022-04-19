import { ActionTypes } from "../actionTypes";

export const addRow = (row) => {
  return { type: ActionTypes.ADD_CATEGORY, payload: row };
};
