import { userActions } from "../actions";

const initialState = {
  role: "guest",
  firstName: "guest",
  lastName: "user",
  phone: "",
  photoURL: "",
  email: "",
  userType: [],
  clients: [],
  products: [],
  adress: "",
};

const user = function (state = initialState, action) {
  switch (action.type) {
    case userActions.SET_USER_DATA:
      return {
        ...initialState,
        ...action.payload,
      };
    case userActions.REMOVE_USER_DATA:
      return {
        ...initialState,
      };
    case userActions.USER_LOGGED_OUT:
      return initialState;
    case userActions.ADD_CLIENT:
      return {
        ...state,
        clients: state.clients.concat(action.payload),
      };

    case userActions.ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    default: {
      return state;
    }
  }
};

export default user;
