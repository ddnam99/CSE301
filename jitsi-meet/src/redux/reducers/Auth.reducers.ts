import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../helpers/ActionTypes";

export type AuthState = {
  isAuth?: boolean;
  user?: any;
  token?: string;
};

const authInitialState = {
  isAuth: localStorage.isAuth ? JSON.parse(localStorage.isAuth) : false,
  user: localStorage.user ? JSON.parse(localStorage.user) : {},
  token: localStorage.token ? JSON.parse(localStorage.token) : "",
};

const authReducer = (state: AuthState = authInitialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { token, user } = action.payload;
      return { ...state, isAuth: true, user, token };
    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false, user: null, token: null };
    default:
      return state;
  }
};

export default authReducer;
