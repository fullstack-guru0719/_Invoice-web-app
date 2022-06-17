import { loginActions } from "../actions";

const initialState = {
  success: false,
  error: [],
};

const login = function (state = initialState, action) {
  switch (action.type) {
    case loginActions.LOGIN_SUCCESS: {
      return {
        ...initialState,
        success: true,
      };
    }
    case loginActions.LOGIN_ERROR: {
      const error_string = action.payload
        ? action.payload.map((error) =>
            Object.entries(error).map(([key, value]) => key + " : " + value)
          )
        : [];
      return {
        success: false,
        error: error_string,
      };
    }
    default: {
      return state;
    }
  }
};

export default login;
