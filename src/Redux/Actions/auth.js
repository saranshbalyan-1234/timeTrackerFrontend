import axios from "axios";
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT,
} from "./action-types";
import { getError } from "../../Utils/error";
import { message } from "antd";

export const signIn = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGNIN_REQUEST });
      const { data } = await axios.post(`/auth/login`, payload);
      message.success("Logged In Successfully");
      dispatch({ type: SIGNIN_SUCCESS, payload: data });
      return data;
    } catch (err) {
      getError(err);
      dispatch({ type: SIGNIN_FAILURE });
    }
  };
};

export const register = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`/auth/register`, payload);
      message.success(
        "Registered successfuly, Please check email to verify account."
      );
      return true;
    } catch (err) {
      getError(err);
      return false;
    }
  };
};

export const resetPassword = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`/auth/reset-password/send-mail`, payload);
      message.info("Please check email to reset your password.");
      return true;
    } catch (err) {
      console.log("error", err);
      getError(err);
      return false;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
