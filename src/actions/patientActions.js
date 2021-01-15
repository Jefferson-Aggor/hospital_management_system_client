import {
  GET_PATIENTS,
  IS_LOADING,
  SEARCH_PATIENT,
  SELECT_PATIENT,
  ASSIGN_DOCTOR,
  DIAGNOSE_PATIENT,
  GET_ERRORS,
  SET_LAB_RESULTS,
  REGSITRATION_PAYMENT,
  LAB_PAYMENT,
  DRUGS_PAYMENT,
} from "./types";
import { utilities } from "../utils";
import axios from "axios";

const { baseUrl } = utilities;

export const getPatients = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const patients = await axios.get(`${baseUrl}/members/`);

    dispatch({
      type: GET_PATIENTS,
      payload: patients.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PATIENTS,
      payload: {},
    });
  }
};
export const searchPatients = (userParams) => async (dispatch) => {
  try {
    dispatch({ type: IS_LOADING });
    let results;
    if (userParams.lastname == undefined) {
      results = await axios.get(
        `${baseUrl}/members/?firstname=${userParams.firstname}`
      );
    } else {
      results = await axios.get(
        `${baseUrl}/members/?firstname=${userParams.firstname}&lastname=${userParams.lastname}`
      );
    }

    dispatch({
      type: SEARCH_PATIENT,
      payload: results.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const assignDoctor = (userData) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const patient = await axios.put(
    `${baseUrl}/user/assign_doctor/${userData._id}`,
    { firstname: userData.doctorFirstname, lastname: userData.doctorLastname }
  );

  dispatch({
    type: ASSIGN_DOCTOR,
    payload: patient.data,
  });
};

export const diagnosePatient = (userData, id) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const patient = await axios.put(
      `${baseUrl}/user/${id}/consultation/`,
      userData
    );

    dispatch({
      type: DIAGNOSE_PATIENT,
      payload: patient.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: "Could not diagnose patient. Try again",
    });
  }
};

export const labTestUpdate = (userData, id) => async (dispatch) => {
  try {
    const patient = await axios.put(`${baseUrl}/user/${id}/lab/`, userData);

    console.log(patient.data);
    dispatch({
      type: SET_LAB_RESULTS,
      payload: patient.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: "Error updating lab results",
    });
  }
};

export const registrationPayment = (userData, id) => async (dispatch) => {
  const patient = await axios.put(`${baseUrl}/payment/${id}`, userData);
  try {
    dispatch({
      type: REGSITRATION_PAYMENT,
      payload: patient.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: patient.data,
    });
  }
};

export const labPayment = (userData, id) => async (dispatch) => {
  const patient = await axios.put(`${baseUrl}/payment/lab/${id}`, userData);
  console.log(patient, userData);
  try {
    dispatch({
      type: LAB_PAYMENT,
      payload: patient.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: patient.data,
    });
  }
};

export const drugsPayment = (userData, id) => async (dispatch) => {
  const patient = await axios.put(`${baseUrl}/payment/drugs/${id}`, userData);
  console.log(patient, userData);

  try {
    dispatch({
      type: DRUGS_PAYMENT,
      payload: patient.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: patient.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: IS_LOADING,
  };
};
