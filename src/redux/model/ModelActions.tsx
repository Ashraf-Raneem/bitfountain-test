import axios from "axios";
import { url } from "../Utils";
import {
  DEVICE_ADD_FAIL,
  DEVICE_ADD_SUCCESS,
  GET_DEVICE_TYPE,
  GET_MODEL,
  GET_MODELS,
  LOADING,
} from "./ModelTypes";
import { toast } from "react-toastify";

const config = {
  headers: {
    Authorization: localStorage.getItem("accessToken"),
  },
};

export const getModels = () => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  axios
    .get(url + "/overview/modeltype", config)
    .then((res) => {
      dispatch({
        type: GET_MODELS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getModel = (brandId: any, name: any) => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  axios
    .get(url + `/overview/modeldata/${brandId}/${name}`, config)
    .then((res) => {
      dispatch({
        type: GET_MODEL,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDeviceType = () => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  axios
    .get(url + "/devicetype?limit=40&page=1", config)
    .then((res) => {
      dispatch({ type: GET_DEVICE_TYPE, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_DEVICE_TYPE,
        payload: {},
      });
    });
};

export const postDevice = (formData: any) => (dispatch: any) => {
  dispatch({
    type: LOADING,
  });
  axios
    .post(url + "/devicemodel", formData, config)
    .then((res) => {
      dispatch({
        type: DEVICE_ADD_SUCCESS,
      });
      toast.info("The device has been added");
    })
    .catch((err) =>
      dispatch({
        type: DEVICE_ADD_FAIL,
      })
    );
};
