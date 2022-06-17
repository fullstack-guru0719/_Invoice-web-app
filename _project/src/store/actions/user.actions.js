import history from "../../helpers/history";
// import { setDefaultSettings, setInitialSettings } from 'app/store/actions/fuse';
import _ from "lodash";
// import store from '../index';
import { messageActions } from "../actions";
// import firebase from 'firebase/app';
// import auth0Service from 'app/services/auth0Service';
import jwtService from "../../services/jwtService";
import firebaseService from "../../services/firebaseService";

const SET_USER_DATA = "[USER] SET DATA";
const REMOVE_USER_DATA = "[USER] REMOVE DATA";
const USER_LOGGED_OUT = "[USER] LOGGED OUT";
const ADD_CLIENT = "[USER] ADD_CLIENT";
const ADD_PRODUCT = "[USER] ADD_PRODUCT";

export default {
  SET_USER_DATA,
  REMOVE_USER_DATA,
  USER_LOGGED_OUT,
  ADD_CLIENT,
  ADD_PRODUCT,

  setUserData,
  setUserDataFirebase,
  logoutUser,
  removeUserData,
  addClient,
  addProduct,
};

/**
 * Set user data from Auth0 token data
 */
// function setUserDataAuth0(tokenData) {
//     const user = {
//         role: 'admin',
//         from: 'auth0',
//         data: {
//             displayName: tokenData.username,
//             photoURL: tokenData.picture,
//             email: tokenData.email,
//             settings: (tokenData.user_metadata && tokenData.user_metadata.settings) ? tokenData.user_metadata.settings : {},
//             shortcuts: (tokenData.user_metadata && tokenData.user_metadata.shortcuts) ? tokenData.user_metadata.shortcuts : []
//         }
//     };

//     return setUserData(user);
// }

/**
 * Set user data from Firebase data
 */
function setUserDataFirebase(user, authUser) {
  if (
    user &&
    user.data &&
    user.data.settings &&
    user.data.settings.theme &&
    user.data.settings.layout &&
    user.data.settings.layout.style
  ) {
    // Set user data but do not update
    return setUserData(user);
  } else {
    // Create missing user settings
    return createUserSettingsFirebase(authUser);
  }
}

/**
 * Create User Settings with Firebase data
 */
function createUserSettingsFirebase(authUser) {
  return (dispatch, getState) => {
    const guestUser = getState().auth.user;
    const fuseDefaultSettings = getState().fuse.settings.defaults;
    const currentUser = firebase.auth().currentUser;

    /**
     * Merge with current Settings
     */
    const user = _.merge({}, guestUser, {
      uid: authUser.uid,
      from: "firebase",
      role: "admin",
      data: {
        displayName: authUser.displayName,
        email: authUser.email,
        settings: { ...fuseDefaultSettings },
      },
    });
    currentUser.updateProfile(user.data);

    updateUserData(user);
    return dispatch(setUserData(user));
  };
}

/**
 * Set User Data
 */
function setUserData(user) {
  return (dispatch) => {
    /*
        Set User Data
         */
    dispatch({
      type: SET_USER_DATA,
      payload: user,
    });
  };
}

/**
 * Update User Settings
 */
// function updateUserSettings(settings) {
//     return (dispatch, getState) => {
//         const oldUser = getState().auth.user;
//         const user = _.merge({}, oldUser, { data: { settings } });

//         updateUserData(user);

//         return dispatch(setUserData(user));
//     }
// }

/**
 * Update User Shortcuts
 */
// function updateUserShortcuts(shortcuts) {
//     return (dispatch, getState) => {
//         const user = getState().auth.user;
//         const newUser = {
//             ...user,
//             data: {
//                 ...user.data,
//                 shortcuts
//             }
//         };

//         updateUserData(newUser);

//         return dispatch(setUserData(newUser));
//     }
// }

/**
 * Remove User Data
 */
function removeUserData() {
  return {
    type: REMOVE_USER_DATA,
  };
}

/**
 * Logout
 */
function logoutUser() {
  return (dispatch, getState) => {
    const user = getState().user;

    if (user.role === "guest") {
      return null;
    }

    history.push({
      pathname: "/login",
      state: { redirectUrl: "/app" },
    });

    switch (user.from) {
      case "firebase": {
        firebaseService.signOut();
        break;
      }
      // case 'auth0':
      //     {
      //         auth0Service.logout();
      //         break;
      //     }
      default: {
        jwtService.logout();
      }
    }

    // dispatch(setInitialSettings());

    dispatch({
      type: USER_LOGGED_OUT,
    });
  };
}

function addClient(data) {
  return { type: ADD_CLIENT, payload: data };
}
function addProduct(data) {
  return { type: ADD_PRODUCT, payload: data };
}
/**
 * Update User Data
 */
function updateUserData(user) {
  if (user.role === "guest") {
    return;
  }

  switch (user.from) {
    case "firebase": {
      firebaseService
        .updateUserData(user)
        .then(() => {
          store.dispatch(
            messageActions.showMessage({
              message: "User data saved to firebase",
            })
          );
        })
        .catch((error) => {
          store.dispatch(
            messageActions.showMessage({ message: error.message })
          );
        });
      break;
    }
    case "auth0": {
      auth0Service
        .updateUserData({
          settings: user.data.settings,
          shortcuts: user.data.shortcuts,
        })
        .then(() => {
          store.dispatch(
            messageActions.showMessage({ message: "User data saved to auth0" })
          );
        })
        .catch((error) => {
          store.dispatch(
            messageActions.showMessage({ message: error.message })
          );
        });
      break;
    }
    default: {
      jwtService
        .updateUserData(user)
        .then(() => {
          store.dispatch(
            messageActions.showMessage({ message: "User data saved with api" })
          );
        })
        .catch((error) => {
          store.dispatch(
            messageActions.showMessage({ message: error.message })
          );
        });
      break;
    }
  }
}
