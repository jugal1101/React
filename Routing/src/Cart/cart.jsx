import React, { useEffect, useState } from "react";
import "./cart.css";

export default function Carts({ cartList, setCartList }) {
  const [total, setTotal] = useState(0);

  const totalPrice = () => {
    let sum = 0;
    cartList.forEach((cart) => {
      sum = sum + cart.price;
    });
    setTotal(sum);
  };

  useEffect(() => {
    totalPrice();
  }, [cartList]);

  const removeProductFromCart = (index) => {
    const arr = [...cartList];
    arr.splice(index, 1);
    setCartList(arr);

  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">
        🛒 Cart Page <span className="cart-total">| Total: ₹{total}</span>
      </h2>

      {cartList.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <div className="cart-container">
          {cartList.map((cart, index) => (
            <div key={index} className="cart-item">
              <div className="cart-info">
                <img src={cart.image} alt="" width={"90px"} height={"60px"} />
                <h3 className="cart-name">{cart.title}</h3>
                <p className="cart-price">₹{cart.price}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeProductFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
