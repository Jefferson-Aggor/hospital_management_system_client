import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decoded from "jwt-decode";
import {
  GET_ERRORS,
  LOGIN_WORKER,
  REGISTER_PATIENT,
  IS_LOADING,
} from "./types";

export const registerPatient = (userData) => async (dispatch) => {
  try {
    const userToken = await AsyncStorage.getItem("token");

    if (!userToken) {
      dispatch(
        dispatchErrors(`${decoded.role} is not authorized. Please login`)
      );
    } else {
      const decoded = jwt_decoded(userToken);

      if (decoded.role === "admin" || decoded.role === "receptionist") {
        const data = await axios.post(
          "https://hms-project.herokuapp.com/api/register/",
          userData
        );

        dispatch({
          type: REGISTER_PATIENT,
          payload: data.data,
        });
      } else {
        dispatch(dispatchErrors("Failed to register patient"));
      }
    }
  } catch (err) {
    dispatch(dispatchErrors(`Error from server`));
  }
};

export const loginWorker = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://hms-project.herokuapp.com/api/workers/login",
      userData
    );

    const { token, status } = res.data;

    if (status === "success") {
      await AsyncStorage.setItem("token", token);

      const decoded = jwt_decoded(token);
      dispatch(setCurrentUser(decoded));
    }
  } catch (err) {
    dispatch(dispatchErrors("Failed to login"));
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: LOGIN_WORKER,
    payload: decoded,
  };
};

export const dispatchErrors = (msg) => {
  return {
    type: GET_ERRORS,
    payload: { msg },
  };
};
