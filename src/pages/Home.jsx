import logo from "../assets/images/piscokpng.png";
import sosis from "../assets/images/sosis.png";
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
              <li><a href="#">Home</a></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="wrapper">
        <div className="bungkus">
          <section id="home">
            <img src={logo} alt="logo" className="piscok" />
            <div className="kolom">
              <p className="deskripsi">Hi, Welcome to Sigma Store!</p>
              <h2>Find the product that you want</h2>
              <p>Order the products you want easily here</p>
              <p>
                <Link to="/menu" className="tbl-pink">
                  View our menu
                </Link>
              </p>
            </div>
          </section>
        </div>

        <svg
          className="wave1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000b76"
            fillOpacity="1"
            d="M0,160L60,176C120,192,240,224,360,202.7C480,181,600,107,720,90.7C840,75,960,117,1080,128C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,128L40,128C80,128,160,128,240,154.7C320,181,400,235,480,229.3C560,224,640,160,720,144C800,128,880,160,960,192C1040,224,1120,256,1200,234.7C1280,213,1360,139,1400,101.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        {/* about us Section */}
        <section id="courses">
          <div>
            <h2>About Us</h2>
            <p>
              Welcome to Sigma Store, a place where you can fulfill your needs
              for a variety of excellent products such as food and beverages.
              From felicious snacks and refreshing drinks to exclusive items, we
              provide the best products that support bussiness fund programs
              (danus).
            </p>
            <p>
              We believe that every product we offer at Sigma Store well hel you
              in your activities, wheter for events, meetings, or daily needs.
              Therefore, we are committed to quality, affordable prices, and
              friendly customer service.
            </p>
            <p>
              Thank you for trusting us to handle your needs; Sigma Store is
              more than just a store.
            </p>
          </div>
          <img src={sosis} alt="sosis" className="sosis" />
        </section>

        {/* Card List Menu */}
        <h2 className="ourMenu">Best Seller</h2>
        <section id="menu" className="menu-section">
          <div className="card-list">
            <div className="card">
              <img src={sosis} alt="Burger" className="card-image" />
              <div className="card-content">
                <h3>Burger</h3>
                <p>Juicy beef burger with cheese, lettuce, and tomato.</p>
                <p className="card-price">Rp 2.500 / pcs</p>
                <Link to="/menu" className="tbl-pink">
                  Order now
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={sosis} alt="Burger" className="card-image" />
              <div className="card-content">
                <h3>Burger</h3>
                <p>Juicy beef burger with cheese, lettuce, and tomato.</p>
                <p className="card-price">Rp 2.500 / pcs</p>
                <Link to="/menu" className="tbl-pink">
                  Order now
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={sosis} alt="Pizza" className="card-image" />
              <div className="card-content">
                <h3>Pizza</h3>
                <p>Delicious cheese pizza with a variety of toppings.</p>
                <p className="card-price">Rp 2.500 / pcs</p>
                <Link to="/menu" className="tbl-pink">
                  Order now
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={sosis} alt="Sushi" className="card-image" />
              <div className="card-content">
                <h3>Sushi</h3>
                <p>Fresh sushi rolls with tuna, salmon, and avocado.</p>
                <p className="card-price">Rp 2.500 / pcs</p>
                <Link to="/menu" className="tbl-pink">
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <svg
        className="wavefoot"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#272363"
          fillOpacity="1"
          d="M0,160L1440,256L1440,0L0,0Z"
        ></path>
      </svg>
      <div id="copyright">
        <div className="wrapper">
          &copy; 2024. <b>Project UTS by Kelompok Sigma</b> All Rights Reserved.
        </div>
      </div>
      <div className="logfoot">
        <img src={sigma} alt="logo" className="logofoot" />
      </div>
    </>
  );
}

export default Home;