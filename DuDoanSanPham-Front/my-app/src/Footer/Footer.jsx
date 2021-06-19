import React from 'react';
import './style.scss';

function Footer(props) {
  return (
    <div className="footer footer--common">
      <div className="grid">
        <div className="grid__row ">
          <div className="grid__col-2-4">
            <h5 className="footer__header">Chăm Sóc Khách Hàng</h5>
            <ul className="footer-list">
              <li className="footer-item">Trung Tâm Trợ Giúp</li>
              <li className="footer-item">Hướng Dẫn Mua Hàng</li>
              <li className="footer-item">Chính Sách Vận Chuyển</li>
            </ul>
          </div>
          <div className="grid__col-2-4">
            <h5 className="footer__header">Về Chúng Tôi</h5>
            <ul className="footer-list">
              <li className="footer-item">Giới Thiệu Về Mỹ Phẩm Ohui - LG Vina</li>
              <li className="footer-item">Tuyển Dụng</li>
              <li className="footer-item">Điều Khoản Chính Sách</li>
            </ul>
          </div>
          <div className="grid__col-2-4">
            <h5 className="footer__header" />
          </div>
          <div className="grid__col-2-4">
            <h5 className="footer__header">Theo Dõi Chung Tôi Trên</h5>
            <ul className="footer-list">
              <li className="footer-item"><i className="fab fa-facebook" />Facebook</li>
              <li className="footer-item"><i className="fab fa-instagram-square" />Instagram</li>
              <li className="footer-item"><i className="fab fa-youtube" />Youtube</li>
            </ul>
          </div>
          <div className="grid__col-2-4">
            <h5 className="footer__header">Vào Cửa Hàng Trên Ứng Dụng</h5>
            <div className="footer__app">
              <div className="footer__qr">
                <img src="https://img.tickid.vn/photos/qrcode_base64/aHR0cDovL2h5cGVydXJsLmNvL215b2h1aQ" alt="" className="footer__qr-img" />
              </div>
              <div className="footer__app--app">
                <a href="" className="footer__app-link">
                  <img src="/static/img/apple.png" alt="" className="footer__qr-app" />
                </a>
                <a href="" className="footer__app-link">
                  <img src="/static/img/googleplay.png" alt="" className="footer__qr-gg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__contact">
        <div className="grid">
          <div className="footer__contact-policy">
            <a href="" className="footer__contact-policy-link">
              Chính sách bảo mật
              </a>
            <a href="" className="footer__contact-policy-link">
              Quy chế hoạt động
              </a>
            <a href="" className="footer__contact-policy-link">
              Chính sách trả hàng và hoàn tiền
              </a>
          </div>
          <div className="footer__contact-infor">
            <p>Công ty mỹ phẩm Ohui- LGvina</p>
            <p>Chi nhánh: 63 Lê Văn Lương, Trung Hòa, Cầu Giấy, Hà Nội</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;