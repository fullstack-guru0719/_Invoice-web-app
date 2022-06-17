import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions, messageActions } from "../store/actions";
import jwtService from "../services/jwtService";
import firebaseService from "../services/firebaseService";

const Auth = (props) => {
  useEffect(() => {
    jwtCheck();
    firebaseCheck();
  }, []);

  const jwtCheck = () => {
    jwtService.on("onAutoLogin", () => {
      props.showMessage({ message: "Logging in with JWT" });

      /**
       * Sign in and retrieve user data from Api
       */
      jwtService
        .signInWithToken()
        .then((user) => {
          props.setUserData(user);
          props.showMessage({ message: "Logged in with JWT" });
        })
        .catch((error) => {
          props.showMessage({ message: error });
        });
    });

    jwtService.on("onAutoLogout", (message) => {
      if (message) {
        props.showMessage({ message });
      }
      props.logout();
    });

    jwtService.init();
  };

  const firebaseCheck = () => {
    firebaseService.init();

    firebaseService.onAuthStateChanged((authUser) => {
      if (authUser) {
        props.showMessage({ message: "Logging in with Firebase" });

        /**
         * Retrieve user data from Firebase
         */
        firebaseService.getUserData(authUser.uid).then((user) => {
          props.setUserDataFirebase(user, authUser);

          props.showMessage({ message: "Logged in with Firebase" });
        });
      }
    });
  };
  return <React.Fragment>{props.children}</React.Fragment>;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: userActions.logoutUser,
      setUserData: userActions.setUserData,
      // setUserDataAuth0: userActions.setUserDataAuth0,
      setUserDataFirebase: userActions.setUserDataFirebase,
      showMessage: messageActions.showMessage,
      hideMessage: messageActions.hideMessage,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Auth);
