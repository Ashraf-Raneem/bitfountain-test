import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOADING,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAILED,
} from "./AuthTypes";

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AUTHENTICATED_SUCCESS:
    case AUTHENTICATED_FAILED:
      return {
        ...state,
        isAuthenticated: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
