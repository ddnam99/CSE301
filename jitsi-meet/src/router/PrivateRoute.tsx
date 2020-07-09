import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { AuthState } from "../redux/reducers/Auth.reducers";

type RouteProps = {
  component: any;
  exact?: boolean;
  path?: string;
  isAuth?: boolean;
};

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuth } = useSelector<RootState, AuthState>(
    (state) => state.authReducer
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
