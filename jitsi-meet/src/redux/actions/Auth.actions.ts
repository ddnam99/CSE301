import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ADD_ALERT,
} from "../../helpers/ActionTypes";

export const actLoginSuccess = (user: any, token: string) => {
  return (dispatch: any) => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("token", JSON.stringify(token));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const actLogout = () => {
  return (dispatch: any) => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("token");
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
