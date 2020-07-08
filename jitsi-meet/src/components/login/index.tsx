import React from "react";
import Input from "../input";
import { Link, Redirect } from "react-router-dom";
import { client, setToken } from "../../api/client";

import "../../assets/style/login-screen.scss";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  const login = () => {
    const body = {
      username: email,
      password: password,
    };

    client.post("localhost:3000/login", body).then((response: any) => {
      if (response.status === 200 && response.body) {
        //setToken()
        setLoginSuccess(true);
      }
    });
  };

  if (loginSuccess) return <Redirect to="/" />;

  return (
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
          <button className="btn btn-outline-secondary" onClick={login}>
            Truy cập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
