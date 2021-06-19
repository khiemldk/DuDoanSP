import React, { useState, useEffect } from 'react';

import DetailProduct from '../DetailProduct/DetailProduct';
import './style.scss'; import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
} from "react-router-dom";

function Product({ id }) {
  // const { id } = useParams();
  const history = useHistory();
  const [filter, setFilter] = useState([])
  const [productData, setProductData] = useState([])
  useEffect(() => {
    async function fetUser() {
      try {
        const requestURl = `http://localhost:8080/product`;
        const response = await fetch(requestURl);
        const responseJson = await response.json();
        const data = responseJson;
        setProductData(data)
        // console.log(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetUser();
  }, [])

  useEffect(() => {
    if (localStorage.getItem("id")) {
      async function fetFilter() {
        try {
          const requestURl = `http://localhost:8080/userPr/filter/${localStorage.getItem("id")}`;
          const response = await fetch(requestURl);
          const responseJson = await response.json();
          const data = responseJson;
          setFilter(data)

        } catch (error) {
          console.error(error.message)
        }
      }
      fetFilter();

    } else {
      setFilter([])
    }
  }, [localStorage.getItem("id")])
  console.log(filter.length, "length");
  return (
    <div className="product-container" >
      <div className="grid__row">
        <h1>Gợi ý</h1>
        {
          filter.map((item, index) => (
            index < 11 && index >= 0 &&
            <div className="grid__col-2-4" key={index} >

              <div className="product-item">
                <div className="product-item-img" style={{ backgroundImage: `url(/static/img/${item.image})` }} onClick={() => { history.push(`/product/${item.id}`); console.log("aaa") }}>
                </div>
                <div className="product-item-infor">
                  <h4 className="product-item-header">{item.name}</h4>
                  <div className="product-item-price">
                    <span className="product-old-price">{item.price}đ</span>
                    <span className="product-new-price">{item.price * (100 - 20) / 100}đ</span>
                  </div>
                  <div className="product-item-rating">
                    <div className="product-item-heart">
                      <i className="far fa-heart" />
                    </div>
                    <div className="product-item-rate-star">
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="product-item-rate-sell">
                      <span>{item.sold} đã bán</span>
                    </div>
                  </div>
                  <div className="product-item-origin">
                    <span className="product-item-company">{item.code}</span>
                    <span className="product-item-country">{item.number_access}</span>
                  </div>
                </div>
                <div className="product-item-like-love">
                  <span><i className="fas fa-check" />Yêu thích</span>
                </div>
                <div className="product-item-discount">
                  <span className="product-item-discount-number">20</span>
                  <span className="product-item-discount-label">Giảm</span>
                </div>
              </div>

            </div>

          ))
        }
        <h1>Product</h1>
        {
          productData.map((item, index) => (
            <div className="grid__col-2-4" key={index} onClick={() => history.push(`/product/${item.id}`)} >
              <div className="product-item">
                <div className="product-item-img" style={{ backgroundImage: `url(/static/img/${item.image})` }}>
                </div>
                <div className="product-item-infor">
                  <h4 className="product-item-header">{item.name}</h4>
                  <div className="product-item-price">
                    <span className="product-old-price">{item.price}đ</span>
                    <span className="product-new-price">{item.price * (100 - 20) / 100}đ</span>
                  </div>
                  <div className="product-item-rating">
                    <div className="product-item-heart">
                      <i className="far fa-heart" />
                    </div>
                    <div className="product-item-rate-star">
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="product-item-rate-star-yellow fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="product-item-rate-sell">
                      <span>{item.sold} đã bán</span>
                    </div>
                  </div>
                  <div className="product-item-origin">
                    <span className="product-item-company">{item.code}</span>
                    <span className="product-item-country">{item.number_access}</span>
                  </div>
                </div>
                <div className="product-item-like-love">
                  <span><i className="fas fa-check" />Yêu thích</span>
                </div>
                <div className="product-item-discount">
                  <span className="product-item-discount-number">20</span>
                  <span className="product-item-discount-label">Giảm</span>
                </div>
              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Product;