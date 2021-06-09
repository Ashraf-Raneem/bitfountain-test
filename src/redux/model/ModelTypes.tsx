export const GET_MODELS = "GET_MODELS";
export const GET_MODEL = "GET_MODEL";
export const GET_DEVICE_TYPE = "GET_DEVICE_TYPE";
export const DEVICE_ADD_SUCCESS = "DEVICE_ADD_SUCCESS";
export const DEVICE_ADD_FAIL = "DEVICE_ADD_FAIL";
export const LOADING = "LOADING";

export interface GET_MODEL {
  type: typeof GET_MODEL;
  payload: {};
}

export interface GET_MODELS {
  type: typeof GET_MODELS;
  payload: String[];
}

export interface LOADING {
  type: typeof LOADING;
}

export interface GET_DEVICE_TYPE {
  type: typeof GET_DEVICE_TYPE;
  payload: {};
}

export interface DEVICE_ADD_FAIL {
  type: typeof DEVICE_ADD_FAIL;
}

export interface DEVICE_ADD_SUCCESS {
  type: typeof DEVICE_ADD_SUCCESS;
}

export type ModelTypes =
  | GET_MODEL
  | GET_MODELS
  | LOADING
  | GET_DEVICE_TYPE
  | DEVICE_ADD_FAIL
  | DEVICE_ADD_SUCCESS;
