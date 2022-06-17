import LoginPage from "../initialpage/loginpage";
import RegistrationPage from "../initialpage/RegistrationPage";
import DefaultLayout from "../initialpage/Sidebar/DefaultLayout";

import authRoles from "../helpers/authRoles";

const Routes = [
  {
    path: "/login",
    component: LoginPage,
    auth: authRoles.onlyGuest,
  },
  {
    path: "/register",
    component: RegistrationPage,
    auth: authRoles.onlyGuest,
  },
  {
    path: "/app",
    component: DefaultLayout,
    auth: authRoles.user,
  },
];

export default Routes;
