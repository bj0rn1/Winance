const initialState = [
  {
    id: 0,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 0,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 0,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 0,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 0,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 0,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 1,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 2,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
];
import { ActionTypes } from "../actionTypes";

export const tableReducer = (state = initialState, { type, payload }) => {
  console.log("payload: ", payload);
  switch (type) {
    case ActionTypes.ADD_CATEGORY:
      return [...state, payload];
    default:
      return state;
  }
};
