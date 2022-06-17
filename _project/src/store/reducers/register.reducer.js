import { registerActions } from "../actions";

const initialState = {
  success: false,
  error: [],
};

const register = function (state = initialState, action) {
  switch (action.type) {
    case registerActions.REGISTER_SUCCESS: {
      return {
        ...initialState,
        success: true,
      };
    }
    case registerActions.REGISTER_ERROR: {
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

export default register;
