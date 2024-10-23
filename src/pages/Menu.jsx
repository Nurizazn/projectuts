// pages/menu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pizzaImage from "../assets/images/sosis.png"; // Ganti dengan jalur gambar yang benar
import burgerImage from "../assets/images/sosis.png"; // Ganti dengan jalur gambar yang benar
import sushiImage from "../assets/images/sosis.png"; // Ganti dengan jalur gambar yang benar

function Menu() {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [burgerCount, setBurgerCount] = useState(0);
  const [sushiCount, setSushiCount] = useState(0);

  const handleIncrement = (item) => {
    if (item === "pizza") {
      setPizzaCount(pizzaCount + 1);
    } else if (item === "burger") {
      setBurgerCount(burgerCount + 1);
    } else if (item === "sushi") {
      setSushiCount(sushiCount + 1);
    }
  };

  const handleDecrement = (item) => {
    if (item === "pizza" && pizzaCount > 0) {
      setPizzaCount(pizzaCount - 1);
    } else if (item === "burger" && burgerCount > 0) {
      setBurgerCount(burgerCount - 1);
    } else if (item === "sushi" && sushiCount > 0) {
      setSushiCount(sushiCount - 1);
    }
  };

  const totalItems = pizzaCount + burgerCount + sushiCount;

  const handleCheckout = () => {
    const orderDetails = {
      pizza: pizzaCount,
      burger: burgerCount,
      sushi: sushiCount,
    };
    return orderDetails;
  };

  return (
    <div className="wrapper">
      <h1>Our Menu</h1>
      <p>Here you can find our delicious products!</p>
      <div className="menu-container">
        <div className="menu-card">
          <img src={pizzaImage} alt="Pizza" className="menu-image" />
          <div className="menu-details">
            <h2>Pizza</h2>
            <p>Delicious cheese pizza with fresh toppings.</p>
            <p className="price">$12.99</p>
            <div className="quantity-control">
              <button onClick={() => handleDecrement("pizza")}>-</button>
              <span>{pizzaCount}</span>
              <button onClick={() => handleIncrement("pizza")}>+</button>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img src={burgerImage} alt="Burger" className="menu-image" />
          <div className="menu-details">
            <h2>Burger</h2>
            <p>Juicy beef burger with lettuce and tomato.</p>
            <p className="price">$9.99</p>
            <div className="quantity-control">
              <button onClick={() => handleDecrement("burger")}>-</button>
              <span>{burgerCount}</span>
              <button onClick={() => handleIncrement("burger")}>+</button>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img src={sushiImage} alt="Sushi" className="menu-image" />
          <div className="menu-details">
            <h2>Sushi</h2>
            <p>Fresh sushi rolls made with premium ingredients.</p>
            <p className="price">$15.99</p>
            <div className="quantity-control">
              <button onClick={() => handleDecrement("sushi")}>-</button>
              <span>{sushiCount}</span>
              <button onClick={() => handleIncrement("sushi")}>+</button>
            </div>
          </div>
        </div>
      </div>
      {/* Tombol Checkout di pojok kiri bawah */}
      {totalItems > 0 && (
        <div className="checkout-container">
          <Link to={{
            pathname: "/order",
            state: {
              order: {
                pizza: pizzaCount,
                burger: burgerCount,
                sushi: sushiCount,
              },
            },
          }} className="checkout-button">Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
