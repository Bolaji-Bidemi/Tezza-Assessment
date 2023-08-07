import React from "react";
import "./Login.css";
import FormDetail from "../../components/formAsset/Form";
import gradient from "../../assets/gradient.PNG";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="showcase">
        <div className="gradient">
          <img src={gradient} alt="banner" height="150%" />
        </div>
        <div className="containPosition">
          <div className="contain">
            <FormDetail title="Login" subtitle="Login in to your account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
