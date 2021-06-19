import React, { useEffect, useState } from 'react';
import './style.scss';

function Login({ handleLogin, handleRegister }) {

  const [valueUn, setValueUn] = useState("");
  const [valuePs, setValuePs] = useState("");

  const handleClickLoginReturn = () => {
    setValuePs("");
    setValueUn("");
    handleLogin(true);
  }

  const handleClickLogin = () => {
    async function fetchLogin() {
      try {
        const requestURl = `http://localhost:8080/login`;
        const response = await fetch(requestURl,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_name: valueUn,
              password: valuePs
            }),
          }
        );
        const responseJson = await response.json();
        const data = responseJson;
        if (data.message) {
          localStorage.setItem("id", data.id);
          setValuePs("");
          setValueUn("");
        }
        handleLogin(data.message)
      } catch (error) {
        console.error(error.message)
      }

    }
    fetchLogin();
  }

  const handleUserName = (e) => {
    setValueUn(e.target.value);

  }
  const handlePass = (e) => {
    setValuePs(e.target.value);

  }
  return (
    <div className="auth-form auth-login">
      <div className="auth-form-container">
        <div className="auth-form__header">
          <h3 className="auth-form__heading">Đăng Nhập</h3>
          <span className="auth-form__switch-btn" onClick={() => handleRegister()}>Đăng Ký</span>
        </div>
        <div className="auth-form__form">
          <div className="auth-form__form--group">
            <input required type="text" className="auth-form__input" placeholder="Nhập Username" value={valueUn} onChange={handleUserName} />
          </div>
          <div className="auth-form__form--group">
            <input required type="password" className="auth-form__input" placeholder="Nhập mật khẩu" value={valuePs} onChange={handlePass} />
          </div>
        </div>
        <div className="auth-form__policy">
          <div className="auth-form__policy--support">
            <p className="auth-form__policy-forget-password">
              Quên Mật Khẩu
              </p>
            <p className="auth-form__policy-help">
              Cần Trợ Giúp
              </p>
          </div>
        </div>
        <div className="auth-form__btn">
          <button className="btn btn-return" onClick={handleClickLoginReturn}>TRỞ LẠI</button>
          <button className="btn btn-register" onClick={handleClickLogin}>ĐĂNG NHẬP</button>
        </div>
      </div>
      <div className="auth-form__socials">
        <a href="" className="btn btn-with-icon btn-with-icon-facebook">
          <i className="fab fa-facebook-square fab-auth-icon" />
          <span>Đăng nhập với Facebook</span>
        </a>
        <a href="" className="btn btn-with-icon btn-with-icon-google">
          <i className="fab fa-google fab-auth-icon" />
          <span>Đăng nhập với Google</span>
        </a>
      </div>
    </div>
  );
}

export default Login;