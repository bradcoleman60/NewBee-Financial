import { useReducer } from "react";
import {
SAVE_COMPANY,
REMOVE_COMPANY,
UPDATE_METRICS,
COMPARE_METRICS,
COMPARE_ARTICLES

} from "./actions";
const dashboardState = {
  savedCompanies: [],
  metrics: [],
  articles: []
};
export const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_COMPANY:
      return {
        ...state,
        savedCompanies: [...state.savedCompanies, action.company],
      };
    case REMOVE_COMPANY:
      return {
        ...state,
        savedCompanies: state.savedCompanies.filter((comp) => comp._id !== action.company._id),
      };
        case UPDATE_METRICS:
          return {
            ...state,
            metrics: [...action.metrics],
          };
        case COMPARE_METRICS:
          return {
            ...state,
            metrics: [...action.metrics],
          };
          case COMPARE_ARTICLES:
            return {
              ...state,
              articles: [...action.articles],
            };
       default:
      return state;
  }
};

export function useCompanyReducer(initialState = dashboardState) {
  return useReducer(reducer, initialState)
}
