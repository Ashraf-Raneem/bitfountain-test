import {
  LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAILED,
} from "./AuthTypes";
import axios from "axios";
import { url } from "../Utils";
import { toast } from "react-toastify";

export const loginFunction = (formData: any) => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  axios
    .post(url + `/login`, formData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      localStorage.setItem("accessToken", res.data.access_token);
      toast.success("Login successful");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.data,
      });
      toast.error("Unable to login with credentials");
    });
};

export const getSession = (history: any) => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  if (localStorage.getItem("accessToken")) {
    dispatch({
      type: AUTHENTICATED_SUCCESS,
      payload: true,
    });
    history.push("/home");
  } else {
    dispatch({
      type: AUTHENTICATED_FAILED,
      payload: false,
    });
    history.push("/");
  }
};

export const logout = (location: any) => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  localStorage.removeItem("accessToken");
  location.reload();
};
