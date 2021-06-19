import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useParams, useHistory } from 'react-router-dom'
const Header = ({ handleLogin, showLogin, handleRegister, handleCheck }) => {

  const [isLogin, setIsLogin] = useState(null);


  useEffect(() => {
    if (!localStorage.getItem("id")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [showLogin])

  const onHandleRegister = (e) => {
    e.preventDefault();
    handleRegister();
  }

  const onHandleLogin = (e) => {
    e.preventDefault();
    handleLogin();

  }

  const onHandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("id");
    setIsLogin(true);
    handleCheck();
  }
  return (
    <header className="header">
      <div className="grid">
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item--display-qr header__nav-item--separate"><a href="">Vào cửa hàng
                  trên ứng dụng MyOhui</a>
              <div className="header__qr">
                <img src="/static/img/83-1574737287-myphamohui-lgvina.png" alt="QR Code" className="header__qr-img" />
                <div className="header__qr--apps">
                  <a href="" className="header__qr--link">
                    <img src="/static/img/googleplay.png" alt="Google Play" className="header__qr--downloads" />
                  </a>
                  <a href="" className="header__qr--link">
                    <img src="/static/img/apple.png" alt="Google Play" className="header__qr--downloads" />
                  </a>
                </div>
              </div>
            </li>
            <li className="header__nav-item header__nav-item--separate"><a href=""><i className="fas fa-phone-alt" />0912879856</a></li>
            <li className="header__nav-item"><a href=""><i className="fas fa-envelope" />khiemld28@gmail.com</a></li>
          </ul>
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href=""><i className="far fa-bell fas--font" />Tin Tức</a>
              <div className="header__notify">
                <div className="header__notify-header">
                  <h3>Tin Tức Mới Nhất</h3>
                </div>
                <ul className="header__notify-list">
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="/static/img/khachhangthanthiet.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">Chương trình khách hàng thân thiết </span>
                        <span className="header__notify-item--content">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối
                            với chúng tôi, chương trình Khách Hàng Thân Thiết đã được ra đời.</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="/static/img/83-1595936336-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">Tặng ngay combo 5 gói mặt nạ thải độc Su:m37</span>
                        <span className="header__notify-item--content">Khuyến mại siêu hot:</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="/static/img/83-1590399520-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">Day Shield Perfect Sun - Cho nàng thơ tự tin "tỏa
                            nắng"</span>
                        <span className="header__notify-item--content" />
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1589960426-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">CHĂM SÓC KHÔNG QUÊN CHỐNG NẮNG</span>
                        <span className="header__notify-item--content">Kem Chống nắng Whoo Gongjinhyang Soo.</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1589966184-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">DA DẦU CÓ CẦN DƯỠNG ẨM?</span>
                        <span className="header__notify-item--content">Whoo Gongjinhyang Soo</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1589963137-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">KHỞI ĐẦU CỦA LÀN DA KHỎE ĐẸP</span>
                        <span className="header__notify-item--content">Ohui Prime Advancer</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1589349012-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">MINI GAME - CHƠI NGAY RINH QUÀ LIỀN TAY</span>
                        <span className="header__notify-item--content">Mini game </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1589289429-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">CHƯƠNG TRÌNH KHUYẾN MÃI CHÀO THÁNG 5</span>
                        <span className="header__notify-item--content">KHuyến mại chào hè !</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1586327583-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">Điều khoản Shop</span>
                        <span className="header__notify-item--content">Điều khoản sử dụng</span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src="https://img.abaha.vn/photos/resized/200x120/83-1586321253-myphamohui-lgvina.png" alt="" className="header__notify-item--img" />
                      <div className="header__notify-item--infor">
                        <span className="header__notify-item--header">Tuyển dụng</span>
                        <span className="header__notify-item--content">CƠ HỘI TUYỆT VỜI ĐƯỢC LÀM VIỆC CÙNG NHÃN HÀNG MỸ PHẨM
                            OHUI</span>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="header__notify-footer">
                  <a href="">
                    <p>Xem Tất Cả</p>
                  </a>
                </div>
              </div>
            </li>
            <li className="header__nav-item"><a href=""><i className="far fa-question-circle fas--font" />Liên Hệ</a></li>
            {isLogin &&
              <li className="header__nav-item header__nav-item--separate header__nav-item--logged" onClick={onHandleRegister}><a href="">Đăng Ký</a></li>}
            {isLogin &&
              <li className="header__nav-item header__nav-item--logged" onClick={onHandleLogin}><a href="">Đăng Nhập</a></li>
            }
            {!isLogin &&
              <li className="header__nav-item header__nav-item--logged" onClick={onHandleLogout}><a href="">Đăng Xuất</a></li>
            }
          </ul>
        </div>
      </div>
      <div className="grid__full-width grid__full_bgr">
        <div className="header_content grid">
          <div className="header__logo">
            <a href="/"><img src="/static/img/83-1574737287-myphamohui-lgvina.png" alt="" /></a>
          </div>
          <div className="header__search">
            <div className="header__search-search">
              <input type="text" className="header__search--input" placeholder="Tìm Kiêm" />
              <div className="header__search-history">
                <div className="header__search-history--header">
                  Lịch sử tìm kiêm
                  </div>
                <ul className="header__search-history--content">
                  <li className="header__search-history--item">
                    Xe O To
                    </li>
                  <li className="header__search-history--item">
                    Sieu Nhan
                    </li>
                </ul>
              </div>
            </div>
            <div className="header__search-switch">
              <span className="header__search--switch-shop">Cửa Hàng<i className="fas fa-chevron-down" /></span>
              <ul className="header_search-option">
                <li className="header_search-item-option">
                  <span className="header_search-item-lable header_search-item-lable--active">Cửa hàng<i className="fas fa-check" /></span>
                </li>
                <li className="header_search-item-option">
                  <span className="header_search-item-lable">Shop<i className="fas fa-check" /></span>
                </li>
              </ul>
            </div>
            <div className="header__search-icon">
              <i className="header__search--icon fas fa-search" />
            </div>
          </div>
          <div className="header__cart">
            <i className="header__cart--cart fas fa-shopping-cart" />
            <span className="header__cart--number-product">9</span>
            {/* No Product */}
            <div className="header__cart-product">
              <div className="header__cart-no-product">
                <img src="/static/img/cart.png" alt="" className="header__cart-none-product" />
                <p className="header__cart-text-none-product">Chưa có sản phẩm</p>
              </div>
            </div>
            <div className="header__cart-product">
              <div className="header__cart-had-product--header">
                Sản phẩm đã thêm
                </div>
              <div className="header__cart-had-product--content">
                <ul className="header__cart-had-product-list">
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/83-1600498324-myphamohui-lgvina.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Son Whoo Luxury Lip Rouge mia - Dưỡng ẩm môi
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              350.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/83-1597318354-myphamohui-lgvina.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Set kem chống nắng Whoo Seol - Chống nắng - môi đẹp
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              1.121.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/73-1573129886-myohui.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Set tái sinh Su:M37 Losec Su
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              850.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/83-1600498324-myphamohui-lgvina.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Son Whoo Luxury Lip Rouge mi
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              350.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/83-1597318354-myphamohui-lgvina.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Set kem chống nắng Whoo Seol
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              1.121.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/73-1573129886-myohui.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Set tái sinh Su:M37 Losec Su
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              850.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/83-1600498324-myphamohui-lgvina.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Son Whoo Luxury Lip Rouge mi
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              350.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/83-1597318354-myphamohui-lgvina.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Set kem chống nắng Whoo Seol
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              1.121.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-had-product-item">
                    <div className="header__cart-had-product-infor">
                      <img src="https://img.abaha.vn/photos/resized/320x/73-1573129886-myohui.png" alt="" className="header__cart-had-product-img" />
                      <div className="header__cart-had-product-all-content">
                        <div className="header__cart-had-product-detail">
                          <span className="header__cart-had-product-name">
                            Set tái sinh Su:M37 Losec Su
                            </span>
                          <div className="header__cart-had-product-detail-infor">
                            <span className="header__cart-had-product-price">
                              850.000đ
                              </span>
                            <span className="header__cart-had-product-mutiply">
                              x
                              </span>
                            <span className="header__cart-had-product-number">
                              1
                              </span>
                          </div>
                        </div>
                        <div className="header__cart-had-product-action">
                          <button className="header__cart-had-product-rmv">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header__cart-had-product--footer">
                <div className="header__cart-had-product--footer-cart">
                  <span className="header__cart-had-product--footer-text">
                    Tổng tiền
                    </span>
                  <span className="header__cart-had-product--footer-price">
                    2.325.000đ
                    </span>
                </div>
                <div className="header__cart-had-product--footer-cart">
                  <span className="header__cart-had-product--footer-text">
                    Ví tích điểm
                    </span>
                  <span className="header__cart-had-product--footer-price">
                    +2.325 điểm
                    </span>
                </div>
                <div className="header__cart-had-product--footer-btn">
                  <button className="btn btn-had-product-footer">Xem giỏ hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;