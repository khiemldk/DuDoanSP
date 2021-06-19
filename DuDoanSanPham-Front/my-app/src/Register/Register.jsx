import React, { useEffect, useState } from 'react';
import './style.scss';

function Register({ handleRegister, handleLogin }) {
  const [valueName, setValueName] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [valueUser, setValueUser] = useState("");
  const [showNoti, setShowNoti] = useState(false);


  const handleChangeName = (e) => {
    setValueName(e.target.value)
  }
  const handleChangePassword = (e) => {
    setValuePass(e.target.value);
  }
  const handleChangeUserName = (e) => {
    setValueUser(e.target.value)
    async function checkUser() {
      try {
        const requestURl = `http://localhost:8080/user/check`;
        const response = await fetch(requestURl,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_name: e.target.value,
            }),
          }
        );
        const responseJson = await response.json();
        const data = responseJson;
        if (!data.message) {
          setShowNoti(true);
        } else {
          setShowNoti(false);
        }
      } catch (error) {
        console.error(error.message)
      }

    }
    checkUser();
  }

  const handleRegister1 = (user) => {
    async function register() {
      try {
        const requestURl = `http://localhost:8080/user/save`;
        const response = await fetch(requestURl,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_name: valueUser,
              name: valueName,
              password: valuePass,
              active_flag: 1
            }),
          }
        );
        const responseJson = await response.json();
        const data = responseJson;
        if (data.message) {
          alert("Đăng ký thành công");
          setValueUser('');
          setValueName('');
          setValuePass('');

        } else {
          alert("Đăng ký không thành công, Tên đăng nhập đã được sử dụng");
        }
      } catch (error) {
        console.error(error.message)
      }

    }
    register();
  }

  const handleBack = () => {
    handleRegister(true);
  }

  return (
    <div className="auth-form auth-register">
      <div className="auth-form-container">
        <div className="auth-form__header">
          <h3 className="auth-form__heading">Đăng Ký</h3>
          <span className="auth-form__switch-btn" onClick={() => handleLogin()}> Đăng nhập</span>
        </div>
        <div className="auth-form__form">
          <div className="auth-form__form--group">
            <input required type="text" className="auth-form__input" placeholder="Nhập họ và tên"
              value={valueName}
              onChange={handleChangeName}
            />
          </div>
          <div className="auth-form__form--group">
            <input
              required type="text"
              className="auth-form__input"
              placeholder="Nhập tên đăng nhập"
              value={valueUser}
              onChange={handleChangeUserName}
            />
            {showNoti &&
              <p>Tài khoản đã có người sử dụng</p>
            }
          </div>
          <div className="auth-form__form--group">
            <input required type="password" className="auth-form__input" placeholder="Nhập mật khẩu"
              value={valuePass}
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div className="auth-form__policy">
          <p className="auth-form__policy-text">Bằng việc đăng ký, bạn đã đồng ý về
              <a href className="auth-form__policy-link-text">Điều khoảng dịch vụ</a> &amp;
              <a href className="auth-form__policy-link-text">Chính sách bảo mật</a>
          </p>
        </div>
        <div className="auth-form__btn">
          <button className="btn btn-return" onClick={handleBack}>TRỞ LẠI</button>
          <button className="btn btn-register" onClick={handleRegister1}>ĐĂNG KÝ</button>
        </div>
      </div>
      <div className="auth-form__socials">
        <a href className="btn btn-with-icon btn-with-icon-facebook">
          <i className="fab fa-facebook-square fab-auth-icon" />
          <span>Kết nối với Facebook</span>
        </a>
        <a href className="btn btn-with-icon btn-with-icon-google">
          <i className="fab fa-google fab-auth-icon" />
          <span>Kết nối với Google</span>
        </a>
      </div>
    </div>
  );
}

export default Register;