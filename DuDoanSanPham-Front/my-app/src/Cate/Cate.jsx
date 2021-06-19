import React from 'react';
import './style.scss';

function Cate(props) {
  return (
    <nav className="category">
      <h3 className="category-header">
        <span className="category-header--text">Danh Mục</span>
      </h3>
      <ul className="category-list">
        <li className="category-item category-item--link-active">
          <a href="" className="category-item--link">Tất Cả Sản Phẩm</a>
        </li>
        <li className="category-item">
          <a href="" className="category-item--link">Son Balacia</a>
        </li>
        <li className="category-item">
          <a href="" className="category-item--link">Son Đỏ Đươi</a>
        </li>
        <li className="category-item">
          <a href="" className="category-item--link">Whooo</a>
        </li>
        <li className="category-item">
          <a href="" className="category-item--link">Ohui Dưỡng Trắng</a>
        </li>
        <li className="category-item">
          <a href="" className="category-item--link">Dưỡng Môi</a>
        </li>
      </ul>
    </nav>
  );
}

export default Cate;