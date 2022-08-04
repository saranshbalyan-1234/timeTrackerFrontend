import { SIGNIN_REQUEST } from "../Actions/action-types";

const initState = {
  error: null,
  authenticating: false,
  authenticated: false,
  tokenAuthenticating: true,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        authenticating: true,
        signinError: false,
        registerError: false,
      };

    default:
      return state;
  }
};

export default authReducer;
