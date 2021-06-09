import {
  GET_MODEL,
  GET_MODELS,
  LOADING,
  DEVICE_ADD_SUCCESS,
  DEVICE_ADD_FAIL,
  GET_DEVICE_TYPE,
  ModelTypes,
} from "./ModelTypes";

const INITIAL_STATE = {
  deviceType: null,
  model: null,
  models: null,
  loading: false,
};

export default function (state = INITIAL_STATE, action: ModelTypes) {
  switch (action.type) {
    case GET_MODELS:
      return {
        ...state,
        models: action.payload,
        loading: false,
      };
    case DEVICE_ADD_FAIL:
    case DEVICE_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_MODEL:
      return {
        ...state,
        model: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DEVICE_TYPE:
      return {
        ...state,
        loading: false,
        deviceType: action.payload,
      };
    default:
      return state;
  }
}
