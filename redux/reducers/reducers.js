import { ActionTypes } from "../actionTypes";

const initialState = [
  { id: 0, kategoria: "Te mbetura", leket: 0, color: "white" },
];

const initialAlertState = false;

const initialHomeState = {
  teArdhurat: 0,
  limiti: 0,
};

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

export const homeReducer = (state = initialHomeState, { type, payload }) => {
  switch (type) {
    case ActionTypes.INPUT_DATA:
      (state.teArdhurat = payload.teArdhurat), (state.limiti = payload.limiti);
      return state;
    default:
      return state;
  }
};
