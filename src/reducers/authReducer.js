import { IS_LOADING, LOGIN_WORKER, REGISTER_PATIENT } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_WORKER:
      if (action.payload !== null || action.payload !== "") {
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      }
    case REGISTER_PATIENT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
