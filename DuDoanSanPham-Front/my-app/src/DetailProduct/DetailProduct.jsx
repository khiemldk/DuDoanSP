import React, { useEffect, useState } from 'react';
import "./style.scss";
import { useParams, useHistory } from 'react-router-dom'
function DetailProduct({ item }) {
  const { id } = useParams();
  const history = useHistory();
  const [detailData, setdetailData] = useState([])
  const [filter, setFilter] = useState([])
  const [rateValue, setRateValue] = useState("0");
  const [tmp, setTmp] = useState(0);
  const changeRateValue = (e) => {
    setRateValue(e.target.value)
  }


  const submitData = (e) => {
    async function submitDataRate() {
      try {
        let requestURl = `http://localhost:8080/user/product/insert`;
        console.log(rateValue, typeof rateValue)
        if (tmp !== 0) {
          requestURl = `http://localhost:8080/user/product/update`;

        }
        const response = await fetch(requestURl,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              rate: rateValue,
              user_id: localStorage.getItem("id"),
              product_id: id,
              id: localStorage.getItem("user_product_id")
            }),
          }
        );
        const responseJson = await response.json();
        const data = responseJson;

      } catch (error) {
        console.error(error.message)
      }

    }
    submitDataRate();

  }

  useEffect(() => {
    async function fetchUserProduct() {
      try {
        const requestURl = `http://localhost:8080/findUserProduct`;
        const response = await fetch(requestURl,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_id: localStorage.getItem("id"),
              product_id: id
            }),
          }
        );
        const responseJson = await response.json();
        const data = responseJson;
        if (data.length > 0) {
          localStorage.setItem("user_product_id", data[0].id)
          setRateValue(data[0].rate)
          setTmp(data[0].rate)
        } else {
          setRateValue(0)
          setTmp(0)
        }
      } catch (error) {
        console.error(error.message)
      }

    }
    if (localStorage.getItem("id")) {
      fetchUserProduct();
    }
  }, [id, localStorage.getItem("id")])

  useEffect(() => {
    async function fetDetail() {
      try {
        const requestURl = `http://localhost:8080/product/${id}`;
        const response = await fetch(requestURl);
        const responseJson = await response.json();
        const data = responseJson;
        setdetailData(data)
        // console.log(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetDetail();
  }, [id]);

  useEffect(() => {
    async function fetFilter() {
      try {
        const requestURl = `http://localhost:8080/product/filter/${id}`;
        const response = await fetch(requestURl);
        const responseJson = await response.json();
        const data = responseJson;
        setFilter(data)
        // console.log(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetFilter();
  }, [id])
  return (
    <div className="detail">
      <div className="grid__row">
        {
          detailData.map((item, index) => (
            <div className="detail__content" key={index} >
              <div className="detail__content--img" style={{ backgroundImage: `url(/static/img/${item.image})` }}>
              </div>
              <div className="detail__content--body">
                <div className="detail__content--name">
                  <h2>{item.name}</h2>
                </div>
                <div className="detail__content--price">
                  <p>{item.price} vnđ</p>
                  {/* <p>{item.rate} Rating</p> */}
                  <p>{item.number_access} Lượt truy cập</p>
                </div>
                <div className="detail__content--des">
                  <p>{item.des}</p>
                </div>
              </div>
              <div className="d-flex">
                <p style={{}}>Đánh giá</p>
                <input type="text" style={{ marginLeft: '4px', height: '40px' }} value={rateValue} onChange={changeRateValue} />
                <button type="button" style={{ marginLeft: '4px', height: '40px' }} onClick={submitData}> Submit</button>
              </div>
            </div>
          ))
        }
        {
          filter.map((item, index) => (
            index < 6 && index > 0 &&
            <div className="grid__col-2-4" key={index} >

              <div className="product-item">
                <div className="product-item-img" style={{ backgroundImage: `url(/static/img/${item.image})` }} onClick={() => { history.push(`/product/${item.id}`); }}>
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
        <div>

        </div>
      </div>
    </div >
  );
}

export default DetailProduct;