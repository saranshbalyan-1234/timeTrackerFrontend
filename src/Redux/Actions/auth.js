// import axios from "axios";
// import {
//   SIGNIN_REQUEST,
//   //   SIGNIN_SUCCESS,
//   //   SIGNIN_FAILURE,
//   //   REGISTER_REQUEST,
//   //   REGISTER_SUCCESS,
//   //   REGISTER_FAILURE,
//   //   CLEAR_AUTH_ERROR,
//   //   TOKEN_EXPIRED_FAILURE,
//   //   TOKEN_EXPIRED_SUCCESS,
//   //   TOKEN_EXPIRED_REQUEST,
//   //   FETCH_ACCOUNT_SUCCESS,
//   //   FETCH_ACCOUNT_FAILURE,
//   //   LOGOUT_USER,
//   //   STOP_EDITING_TESTCASE_SIGNIN,
// } from "./action-types";
// // import {} from "antd";
// import { clearDefaultProject } from "./project";

// export function signIn(payload) {
//   return async (dispatch) => {
//     try {
//       await localStorage.clear();
//       clearDefaultProject(dispatch);
//       dispatch({ type: SIGNIN_REQUEST });
//       const { data } = await axios.post(`/authenticate`, payload);
//       await localStorage.setItem("id_token", data?.id_token);
//       await localStorage.setItem("tenant_id", data?.tenant_id);
//       await localStorage.setItem("first_login", true);
//       dispatch(fetchAccountDetails());
//       dispatch({
//         type: STOP_EDITING_TESTCASE_SIGNIN,
//         payload: { editAble: false, isLocked: false },
//       });
//       dispatch({ type: SIGNIN_SUCCESS, payload: data });
//     } catch (error) {
//       const errorMessage = error.message.split(" ");

//       notification.error({
//         description: "",
//         message: error?.response?.data?.message || "Signin Failed",
//         placement: "topRight",
//         style: errorStyle,
//       });
//       dispatch({ type: SIGNIN_FAILURE, payload: error });
//       return { code: errorMessage[errorMessage.length - 1] };
//     }
//   };
// }

// export function register(payload) {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: REGISTER_REQUEST });
//       const { data } = await axios.post(`/customers/register`, payload);
//       dispatch({ type: REGISTER_SUCCESS, payload: data });
//       return Promise.resolve(data);
//     } catch (error) {
//       //console.log(`error`, error?.response);
//       dispatch({
//         type: REGISTER_FAILURE,
//         payload: error?.response?.data?.message || "Network error",
//       });
//       return Promise.reject(error.response);
//     }
//   };
// }

// export const checkTokenExpired = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: TOKEN_EXPIRED_REQUEST });
//       const token = localStorage.getItem("id_token");
//       const response = await axios.post(`/authenticate/isValidToken`, {
//         token,
//       });
//       if (response.data) {
//         dispatch(fetchAccountDetails());
//       }
//       dispatch({ type: TOKEN_EXPIRED_SUCCESS, payload: response.data });
//       return response;
//     } catch (error) {
//       dispatch({ type: TOKEN_EXPIRED_FAILURE });
//     }
//   };
// };
