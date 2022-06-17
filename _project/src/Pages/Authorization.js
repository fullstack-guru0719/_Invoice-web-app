import React, { useEffect, useState, useCallback } from "react";
import { matchRoutes } from "react-router-config";
import { withRouter, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./Routes";

const Authorization = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const { pathname } = location;

  const [accessGranted, setGranted] = useState(true);

  useEffect(() => {
    const matched = matchRoutes(routes, pathname)[0];
    setGranted(
      matched && matched.route.auth && matched.route.auth.length > 0
        ? matched.route.auth.includes(user.role)
        : true
    );
  }, [user, pathname]);

  useEffect(() => {
    if (!accessGranted) {
      redirectRoute();
    }
  }, [user, location, accessGranted, pathname]);

  const redirectRoute = useCallback(() => {
    const { pathname, state } = location;
    /*
        User is guest
        Redirect to Login Page
        */
    if (user.role === "guest") {
      history.push({
        pathname: "/login",
        state: { redirectUrl: pathname },
      });
    } else {
    /*
        User is member
        User must be on unAuthorized page or just logged in
        Redirect to dashboard or redirectUrl
        */
      const redirectUrl =
        state && state.redirectUrl
          ? state.redirectUrl
          : "/app/accounts/invoices";
      history.push({
        pathname: redirectUrl,
      });
    }
  }, [user, location, history]);

  return accessGranted ? <React.Fragment>{children}</React.Fragment> : null;
};

export default withRouter(Authorization);
