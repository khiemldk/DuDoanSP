import React from 'react';
import './style.scss';
function SortFilter(props) {
  return (
    <div className="sort__filter">
      <div className="sort__filter-search">
        <span className="sort__filter-text">Sắp Xếp Theo</span>
        <button className="btn sort__filter-btn sort__filter-btn-active">Phổ Biến</button>
        <button className="btn sort__filter-btn">Mới Nhất</button>
        <button className="btn sort__filter-btn">Bán Chạy</button>
        <div className="sort__filter--price select-input">
          <span>Giá</span>
          <i className="fas fa-chevron-down" />
          <ul className="sort__filter-select-input">
            <li className="sort__filter-select-input-item">
              <a href="" className="sort__filter-select-input-link">Giá : Thấp đến Cao</a>
            </li>
            <li className="sort__filter-select-input-item">
              <a href="" className="sort__filter-select-input-link">Giá : Cao đến Thấp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sort__filter--page">
        <span className="sort__filter--page-num">
          1
            <span className="sort__filter--page-sum">
            /14
            </span>
        </span>
        <div className="sort__filter--page-btn">
          <button className="sort__filter--page-btn-index btn btn-disable"><i className="fas fa-chevron-left" /></button>
          <button className="sort__filter--page-btn-index btn"><i className="fas fa-chevron-right" /></button>
        </div>
      </div>
    </div>
  );
}

export default SortFilter;