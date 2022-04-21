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
    id: 3,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 4,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 5,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 6,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 7,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 8,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 9,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 10,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 11,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 12,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 13,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 14,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 15,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 16,
    kategoria: "Ushqime",
    leket: "9999 Leke te reja",
  },
  {
    id: 17,
    kategoria: "Taksa",
    leket: "9999 Leke te reja",
  },
  {
    id: 18,
    kategoria: "Makina",
    leket: "9999 Leke te reja",
  },
  {
    id: 19,
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

    case ActionTypes.DELETE_CATEGORY:
      state.splice(payload, 1);
      return [...state];
    default:
      return state;
  }
};
