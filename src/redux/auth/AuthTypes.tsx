export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const AUTHENTICATED_SUCCESS = "AUTHENTICATED_SUCCESS";
export const AUTHENTICATED_FAILED = "AUTHENTICATED_FAILED";
export const LOG_OUT = "LOG_OUT";
export const LOADING = "LOADING";

export interface LOGIN_SUCCESS {
  type: typeof LOGIN_SUCCESS;
  payload: String;
}

export interface LOGIN_FAILED {
  type: typeof LOGIN_FAILED;
  payload: String;
}

export interface LOADING {
  type: typeof LOADING;
}

export interface AUTHENTICATED_SUCCESS {
  type: typeof AUTHENTICATED_SUCCESS;
}

export interface AUTHENTICATED_FAILED {
  type: typeof AUTHENTICATED_FAILED;
}

export type AuthTypes =
  | LOGIN_SUCCESS
  | LOGIN_FAILED
  | LOADING
  | AUTHENTICATED_FAILED
  | AUTHENTICATED_SUCCESS;
