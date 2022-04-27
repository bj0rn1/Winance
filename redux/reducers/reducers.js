import { ActionTypes } from "../actionTypes";

const initialState = [
  {
    id: 0,
    kategoria: "Taksa",
    leket: 10000,
    color: "#0033ad",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: 3000,
    color: "#00ffbd",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: 8000,
    color: "#F7931A",
  },
];

const initialAlertState = false;

export const tableReducer = (state = initialState, { type, payload }) => {
  console.log("payload: ", payload);
  switch (type) {
    case ActionTypes.ADD_CATEGORY:
      return [...state, payload];

    case ActionTypes.DELETE_CATEGORY:
      console.log(payload);
      state.splice(payload.celsi, 1);
      return [...state];
    default:
      return state;
  }
};

export const alertReducer = (state = initialAlertState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_ALERT:
      state = payload;
      return state;
    default:
      return state;
  }
};
