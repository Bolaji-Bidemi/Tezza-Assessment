import React from "react";
import loginPic from "../../assets/tezza.jpeg";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <form>
      <div className="first">
        <div className="formTag">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <img src={loginPic} alt="pic" className="loginPic" />
      </div>

      <label>Email</label>
      <input type="text" className="input" />

      <label>Password</label>
      <input type="password" className="input" />
      <div className="submitInput">
        <input
          type="submit"
          className="submit"
          value="Login"
          onClick={() => navigate("/")}
        />
      </div>
    </form>
  );
};

export default Form;
