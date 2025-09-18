import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import Navbar from "../Navbar/navbar";
import App from "../App";



export default function Home({ products, setCartList }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = () => {
    const str = localStorage.getItem("user") ?? "{}";
    const res = JSON.parse(str);
    setUser(res);
  };

  useEffect(() => {
    navigate("/home");
    getUser();
  }, []);

  return (
    <div className="home-page">
      <Navbar/>

      <header className="home-header">
        <h2 className="subtitle">Explore our amazing products</h2>
      </header>

      <div className="products-view">
        {products.map((product, index) => (
          <div key={index} className="product-box">
            <img src={product.image} alt="" width={"60px"} height={"60px"}/>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">₹{product.price}</p>

            <div className="product-actions">
              <button
                className="btn add-btn"
                onClick={() => {
                  setCartList((prev) => [...prev, product]);
                  navigate("/carts");
                }}
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
