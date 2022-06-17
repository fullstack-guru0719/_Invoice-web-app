import firebase from "firebase/app";
import firebaseService from "../../services/firebaseService";
import jwtService from "../../services/jwtService";
import { userActions } from "../actions";
import { messageActions } from "../actions";

const LOGIN_ERROR = "LOGIN_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export default {
  LOGIN_ERROR,
  LOGIN_SUCCESS,

  submitLogin,
  submitLoginWithFireBase,
};

function submitLogin({ email, password }) {
  return (dispatch) =>
    jwtService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(userActions.setUserData(user));

        return dispatch({
          type: LOGIN_SUCCESS,
        });
      })
      .catch((error) => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
}

function submitLoginWithFireBase(authprovider) {
  let provider;
  switch (authprovider) {
    case "google":
      provider = new firebase.auth.GoogleAuthProvider();
      break;

    case "facebook":
      provider = new firebase.auth.FacebookAuthProvider();
      break;

    case "microsoft":
      provider = new firebase.auth.OAuthProvider("microsoft.com");
      break;

    case "apple":
      provider = new firebase.auth.OAuthProvider("apple.com");
      break;
    default:
      return;
  }
  return (dispatch) =>
    firebaseService.auth &&
    firebaseService.auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("firebase success", res);
        dispatch(
          userActions.setUserData({
            uid: res.uid,
            from: "firebase",
            role: "admin",
            data: res.user,
          })
        );
        return dispatch({
          type: LOGIN_SUCCESS,
        });
      })
      .catch((error) => {
        console.log("firebase error", error);
        const usernameErrorCodes = [
          "auth/email-already-in-use",
          "auth/invalid-email",
          "auth/operation-not-allowed",
          "auth/user-not-found",
          "auth/user-disabled",
        ];
        const passwordErrorCodes = [
          "auth/weak-password",
          "auth/wrong-password",
        ];

        const response = {
          username: usernameErrorCodes.includes(error.code)
            ? error.message
            : null,
          password: passwordErrorCodes.includes(error.code)
            ? error.message
            : null,
        };

        if (error.code === "auth/invalid-api-key") {
          dispatch(messageActions.showMessage({ message: error.message }));
        }

        return dispatch({
          type: LOGIN_ERROR,
          payload: response,
        });
      });
}
