// eslint-disable-next-line no-unused-vars
import React from "react";
import sigma from "../assets/images/Logoutspweb-06.png";

import "../styles/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* navbar */}
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={sigma} alt="logo" className="logoPng" />
            </a>
            <h2 className="sigmaStore">SIGMA STORE</h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <h2>Ini contact</h2>
      </div>
    </>
  );
}

export default Home;