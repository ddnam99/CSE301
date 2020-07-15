import React from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthState } from "../../redux/reducers/Auth.reducers";
import { RootState } from "../../redux/store";

import Interceptors from "../../helpers/Interceptors";
import Input from "../input";

import { useDispatch, useSelector } from "react-redux";
import { actLoginSuccess } from "../../redux/actions/Auth.actions";

import "../../assets/style/login-screen.scss";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isAuth } = useSelector<RootState, AuthState>(
    (state) => state.authReducer
  );

  if (isAuth) return <Redirect to="/" />;

  const dispatch = useDispatch();
  const onLoginSuccess = (user: any, token: string) =>
    dispatch(actLoginSuccess(user, token));

  const handleLogin = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const res = await Interceptors.post("/api/users/login", data);

      if (res.data?.message === "success")
        onLoginSuccess(res.data.user, res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-5">
      <div className="login-screen d-flex">
        <div className="content d-flex flex-column w-25 align-items-center">
          <div className="text-register">
            <span>Chưa có tài khoản?</span>&nbsp;
            <Link to="/register">Đăng ký ngay</Link>
          </div>
          <div className="m-lg-3 text-title">
            <h1>Đăng nhập</h1>
          </div>
          <div className="form-login d-flex flex-column">
            <Input
              className="first-input"
              value={email}
              onChange={setEmail}
              placeholder={"Email"}
            />
            <Input
              className="last-input"
              type={"password"}
              value={password}
              onChange={setPassword}
              placeholder={"Mật khẩu"}
            />
            <button className="btn btn-outline-secondary" onClick={handleLogin}>
              Truy cập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
