import {
  GET_ERRORS,
  GET_PATIENTS,
  IS_LOADING,
  SEARCH_PATIENT,
  ASSIGN_DOCTOR,
  DIAGNOSE_PATIENT,
  SET_LAB_RESULTS,
  REGSITRATION_PAYMENT,
} from "../actions/types";
const initialState = {
  patient: null,
  patients: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
        isLoading: false,
      };
    case SEARCH_PATIENT:
      return {
        ...state,
        patient: action.payload,
        isLoading: false,
      };
    case ASSIGN_DOCTOR:
      return {
        ...state,
        patients: action.payload,
        isLoading: false,
      };
    case DIAGNOSE_PATIENT:
      return {
        ...state,
        patient: action.payload,
        isLoading: false,
      };
    case SET_LAB_RESULTS:
      return {
        ...state,
        patient: action.payload,
        isLoading: false,
      };
    case REGSITRATION_PAYMENT:
      return {
        ...state,
        patient: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
